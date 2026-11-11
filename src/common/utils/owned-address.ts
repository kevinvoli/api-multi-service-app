import { Repository } from 'typeorm';
import { UserAddress } from '../../users/user-address/entities/user-address.entity';

export function findOwnedRiderAddress(
  repo: Repository<UserAddress>,
  userId: number,
  addressId: number,
): Promise<UserAddress | null> {
  return repo.findOneBy({
    iUserAddressId: addressId,
    iUserId: userId,
    eUserType: 'Rider',
    eStatus: 'Active',
  });
}
