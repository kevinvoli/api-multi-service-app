-- Migration étape 3 : index des quotas OTP par téléphone (envois sur 15 min, échecs sur 24 h)
-- À exécuter sur la base de données amygo1 (MariaDB 10.4)

CREATE INDEX IF NOT EXISTS `idx_phone_created` ON `otp_codes` (`phone`, `createdAt`);
