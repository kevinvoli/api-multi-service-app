import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsService } from './notifications.service';

describe('NotificationsService', () => {
  let service: NotificationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotificationsService],
    }).compile();
    service = module.get<NotificationsService>(NotificationsService);
  });

  // ─── OTP ─────────────────────────────────────────────────────────────────────

  describe('sendOtp / verifyOtp', () => {
    it('sendOtp retourne { sent: false, code } quand Twilio non configure', async () => {
      // Twilio non configure dans les tests (pas de vraies cles)
      const result = await service.sendOtp('+33600000000');
      expect(result.sent).toBe(false);
      expect(result.code).toMatch(/^\d{6}$/);
    });

    it('verifyOtp retourne { valid: true } avec le bon code', async () => {
      const sendResult = await service.sendOtp('+33600000001');
      const code = sendResult.code!;
      const verify = service.verifyOtp('+33600000001', code);
      expect(verify.valid).toBe(true);
    });

    it('verifyOtp retourne { valid: false } avec un mauvais code', async () => {
      await service.sendOtp('+33600000002');
      const verify = service.verifyOtp('+33600000002', '000000');
      expect(verify.valid).toBe(false);
      expect(verify.reason).toBe('Code incorrect');
    });

    it('verifyOtp retourne { valid: false } si OTP inexistant', () => {
      const verify = service.verifyOtp('+33699999999', '123456');
      expect(verify.valid).toBe(false);
      expect(verify.reason).toBe('OTP non trouvé ou expiré');
    });

    it('verifyOtp consomme le code (valide une seule fois)', async () => {
      const sendResult = await service.sendOtp('+33600000003');
      const code = sendResult.code!;
      service.verifyOtp('+33600000003', code); // 1ere verif : valide
      const secondVerify = service.verifyOtp('+33600000003', code); // 2e verif : invalide
      expect(secondVerify.valid).toBe(false);
    });
  });
});
