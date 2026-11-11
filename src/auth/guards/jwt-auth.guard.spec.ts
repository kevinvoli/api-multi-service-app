import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Public } from '../decorators/public.decorator';

class OpenController {
  @Public()
  open() {}
  closed() {}
}

@Public()
class OpenByClassController {
  inherited() {}
}

const contextFor = (
  controller: new () => object,
  method: string,
): ExecutionContext =>
  ({
    getHandler: () =>
      (controller.prototype as Record<string, () => void>)[method],
    getClass: () => controller,
  }) as unknown as ExecutionContext;

describe('JwtAuthGuard', () => {
  let guard: JwtAuthGuard;
  let passportCanActivate: jest.SpyInstance;

  beforeEach(() => {
    guard = new JwtAuthGuard(new Reflector());
    passportCanActivate = jest
      .spyOn(Object.getPrototypeOf(JwtAuthGuard.prototype), 'canActivate')
      .mockReturnValue(true);
  });

  afterEach(() => jest.restoreAllMocks());

  it('laisse passer une route @Public sans solliciter passport', () => {
    expect(guard.canActivate(contextFor(OpenController, 'open'))).toBe(true);
    expect(passportCanActivate).not.toHaveBeenCalled();
  });

  it('laisse passer toute route d une classe @Public', () => {
    expect(
      guard.canActivate(contextFor(OpenByClassController, 'inherited')),
    ).toBe(true);
    expect(passportCanActivate).not.toHaveBeenCalled();
  });

  it('délègue à passport pour une route non publique', () => {
    passportCanActivate.mockReturnValue(false);
    const context = contextFor(OpenController, 'closed');

    expect(guard.canActivate(context)).toBe(false);
    expect(passportCanActivate).toHaveBeenCalledWith(context);
  });
});
