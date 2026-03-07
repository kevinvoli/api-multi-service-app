-- Migration Phase 7 : table panier restaurant
-- À exécuter sur la base de données amygo1

CREATE TABLE IF NOT EXISTS `restaurant_cart_items` (
  `id`           INT          NOT NULL AUTO_INCREMENT,
  `iUserId`      INT          NOT NULL,
  `iCompanyId`   INT          NOT NULL,
  `iMenuItemId`  INT          NOT NULL,
  `iFoodMenuId`  INT          NOT NULL,
  `vOptionId`    VARCHAR(200) NOT NULL DEFAULT '',
  `vAddonId`     VARCHAR(200) NOT NULL DEFAULT '',
  `iQty`         INT          NOT NULL DEFAULT 1,
  `tInstruction` TEXT,
  `eFoodType`    VARCHAR(20),
  `createdAt`    DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_user` (`iUserId`),
  INDEX `idx_user_company` (`iUserId`, `iCompanyId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
