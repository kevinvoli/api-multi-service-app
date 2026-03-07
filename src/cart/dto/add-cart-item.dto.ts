export class AddCartItemDto {
  iUserId: number;
  iCompanyId: number;
  iMenuItemId: number;
  iFoodMenuId: number;
  vOptionId?: string;   // IDs séparés par virgule, ex: "12,15"
  vAddonId?: string;    // IDs séparés par virgule, ex: "3,7"
  iQty: number;
  tInstruction?: string;
  eFoodType?: string;
}
