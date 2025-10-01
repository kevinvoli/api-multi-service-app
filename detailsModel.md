# Analyse du modèle de données

Ce document détaille les entités de la base de données et les relations qui existent entre elles.

## Entités principales

### `register_user`

Cette table contient les informations sur les utilisateurs de l'application.

**Colonnes :**

- `iUserId` (Primaire)
- `iCompanyId`
- `vName`
- `vLastName`
- `vEmail`
- `vPassword`
- `vPhone`
- ... (et de nombreuses autres colonnes)

**Relations :**

- **Un à plusieurs** avec `trips` : Un utilisateur peut avoir plusieurs voyages. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `user_wallet` : Un utilisateur peut avoir plusieurs transactions dans son portefeuille. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `bidding_post`: Un utilisateur peut avoir plusieurs offres. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `__intentions`: Un utilisateur peut avoir plusieurs intentions. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `__intentions_criteres`: Un utilisateur peut avoir plusieurs critères d'intention. (Explicite via `@OneToMany`)

### `register_driver`

Cette table contient les informations sur les conducteurs.

**Colonnes :**

- `iDriverId` (Primaire)
- `iCompanyId`
- `vName`
- `vLastName`
- `vEmail`
- `vPassword`
- `vPhone`
- ... (et de nombreuses autres colonnes)

**Relations :**

- **Plusieurs à un** avec `company` : Un conducteur appartient à une entreprise. (Explicite via `@ManyToOne`)
- **Un à plusieurs** avec `trips` : Un conducteur peut avoir plusieurs voyages. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `bidding_post`: Un conducteur peut avoir plusieurs offres. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `payment_requests`: Un conducteur peut avoir plusieurs demandes de paiement. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `withdraw_requests`: Un conducteur peut avoir plusieurs demandes de retrait. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `payment_requests`: Un conducteur peut avoir plusieurs demandes de paiement. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `withdraw_requests`: Un conducteur peut avoir plusieurs demandes de retrait. (Explicite via `@OneToMany`)

### `payment_requests`

Cette table contient les demandes de paiement des conducteurs.

**Colonnes :**
- `iPaymentRequestsId` (Primaire)
- `iDriverId`
- `fAmount`

**Relations :**
- **Plusieurs à un** avec `register_driver`: Une demande de paiement est associée à un conducteur. (Explicite via `@ManyToOne`)

### `withdraw_requests`

Cette table contient les demandes de retrait des conducteurs.

**Colonnes :**
- `iWithdrawRequestsId` (Primaire)
- `iDriverId`
- `fAmount`

**Relations :**
- **Plusieurs à un** avec `register_driver`: Une demande de retrait est associée à un conducteur. (Explicite via `@ManyToOne`)

### `trips`

Cette table contient les informations sur les voyages.

**Colonnes :**

- `iTripId` (Primaire)
- `iUserId`
- `iDriverId`
- `iCompanyId`
- `tStartLat`
- `tStartLong`
- `tEndLat`
- `tEndLong`
- `tSaddress`
- `tDaddress`
- `iFare`
- `iActive`
- ... (et de nombreuses autres colonnes)

**Relations :**

- **Plusieurs à un** avec `register_user` : Un voyage est associé à un utilisateur. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `register_driver` : Un voyage est associé à un conducteur. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `company` : Un voyage est associé à une entreprise. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `orders` : Un voyage est associé à une commande. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `driver_vehicle` : Un voyage est associé à un véhicule de conducteur. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `service_categories` : Un voyage est associé à une catégorie de service. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `organization` : Un voyage est associé à une organisation. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `hotel` : Un voyage est associé à un hôtel. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `vehicle_type` : Un voyage est associé à un type de véhicule. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `rental_package` : Un voyage est associé à un forfait de location. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `cancel_reason` : Un voyage est associé à une raison d'annulation. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `user_profile` : Un voyage est associé à un profil utilisateur. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `trip_reason` : Un voyage est associé à un motif de voyage. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `user_address` : Un voyage est associé à une adresse utilisateur. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `user_payment_info` : Un voyage est associé à une information de paiement. (Explicite via `@ManyToOne`)

### `bidding_post`

Cette table contient les informations sur les offres (bidding).

**Colonnes :**
- `iBiddingPostId` (Primaire)
- `iUserId`
- `iDriverId`
- `fBiddingAmount`
- `iAddressId`
- `iCancelReasonId`
- `iPaymentInfoId`
- ... (et de nombreuses autres colonnes)

**Relations :**
- **Plusieurs à un** avec `register_user`: Une offre est associée à un utilisateur. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `register_driver`: Une offre est associée à un conducteur. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `user_address`: Une offre est associée à une adresse. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `cancel_reason`: Une offre est associée à une raison d'annulation. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `user_payment_info`: Une offre est associée à des informations de paiement. (Explicite via `@ManyToOne`)

### `cancel_reason`

Cette table contient les raisons d'annulation.

**Colonnes :**
- `iCancelReasonId` (Primaire)
- `vTitle_EN`
- `eFor`
- `eType`

**Relations :**
- **Un à plusieurs** avec `cab_booking`: Une raison peut être associée à plusieurs réservations. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `trips`: Une raison peut être associée à plusieurs voyages. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `bidding_post`: Une raison peut être associée à plusieurs offres. (Explicite via `@OneToMany`)

### `user_payment_info`

Cette table contient les informations de paiement des utilisateurs.

**Colonnes :**

- `iPaymentInfoId` (Primaire)
- `iMemberId`
- `eUserType`
- `tCardToken`
- ... (et de nombreuses autres colonnes)

**Relations :**

- **Un à plusieurs** avec `cab_request_now` : Une information de paiement peut être associée à plusieurs demandes de taxi. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `trips` : Une information de paiement peut être associée à plusieurs voyages. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `bidding_post`: Une information de paiement peut être associée à plusieurs offres. (Explicite via `@OneToMany`)

### `user_address`

Cette table contient les adresses des utilisateurs et des conducteurs.

**Colonnes :**

- `iUserAddressId` (Primaire)
- `iUserId`
- `eUserType`
- `vServiceAddress`
- ... (et de nombreuses autres colonnes)

**Relations :**

- **Un à plusieurs** avec `trips` : Une adresse peut être associée à plusieurs voyages. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `bidding_post`: Une adresse peut être associée à plusieurs offres. (Explicite via `@OneToMany`)

### `trip_reason`

Cette table contient les informations sur les motifs de voyage.

**Colonnes :**

- `iTripReasonId` (Primaire)
- `iUserProfileMasterId`
- `vReasonTitle`
- `eStatus`

**Relations :**

- **Un à plusieurs** avec `cab_booking` : Un motif de voyage peut être associé à plusieurs réservations de taxi. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `cab_request_now` : Un motif de voyage peut être associé à plusieurs demandes de taxi. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `trips` : Un motif de voyage peut être associé à plusieurs voyages. (Explicite via `@OneToMany`)

### `user_profile`

Cette table contient les informations sur les profils des utilisateurs.

**Colonnes :**

- `iUserProfileId` (Primaire)
- `iUserId`
- `iUserProfileMasterId`
- `iOrganizationId`
- `vProfileEmail`
- `eStatus`
- ... (et de nombreuses autres colonnes)

**Relations :**

- **Un à plusieurs** avec `cab_request_now` : Un profil utilisateur peut avoir plusieurs demandes de taxi. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `trips` : Un profil utilisateur peut avoir plusieurs voyages. (Explicite via `@OneToMany`)

### `user_wallet`

Cette table contient les informations sur le portefeuille des utilisateurs.

**Colonnes :**

- `iUserWalletId` (Primaire)
- `iUserId`
- `eUserType`
- `iBalance`
- `eType`
- `eFor`
- `tDescription`
- ... (et de nombreuses autres colonnes)

**Relations :**

- **Plusieurs à un** avec `register_user` : Une transaction de portefeuille est associée à un utilisateur. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `orders` : Une transaction de portefeuille peut être associée à une commande. (Explicite via `@ManyToOne`)

### `company`

Cette table contient les informations sur les entreprises.

**Colonnes :**

- `iCompanyId` (Primaire)
- `vCompany`
- `vEmail`
- `vPassword`
- `vPhone`
- ... (et de nombreuses autres colonnes)

**Relations :**

- **Un à plusieurs** avec `register_driver` : Une entreprise peut avoir plusieurs conducteurs. (Explicite via `@OneToMany`)
- **Plusieurs à un** avec `service_categories` : Une entreprise est associée à une catégorie de service. (Explicite via `@ManyToOne`)
- **Un à plusieurs** avec `__intentions`: Une entreprise peut être associée à plusieurs intentions (en tant que magasin). (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `menu_items`: Une entreprise peut avoir plusieurs articles de menu (en tant que magasin). (Explicite via `@OneToMany`)

### `food_menu`

Cette table contient les menus des restaurants/magasins.

**Colonnes :**
- `iFoodMenuId` (Primaire)
- `iCompanyId`
- `vMenu_EN`

**Relations :**
- **Un à plusieurs** avec `menu_items`: Un menu peut contenir plusieurs articles. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `__intentions`: Un menu peut être associé à plusieurs intentions. (Explicite via `@OneToMany`)

### `menu_items`

Cette table contient les articles d'un menu.

**Colonnes :**
- `iMenuItemId` (Primaire)
- `store` (iCompanyId)
- `iFoodMenuId`
- `vItemType_EN`

**Relations :**
- **Plusieurs à un** avec `company` (en tant que magasin): Un article est associé à un magasin. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `food_menu`: Un article appartient à un menu. (Explicite via `@ManyToOne`)
- **Un à plusieurs** avec `menuitem_options`: Un article de menu peut avoir plusieurs options. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `menuitem_options_category`: Un article de menu peut avoir plusieurs catégories d'options. (Explicite via `@OneToMany`)

### `menuitem_options`

Cette table contient les options pour un article de menu.

**Colonnes :**
- `iOptionId` (Primaire)
- `iMenuItemId`
- `vOptionName`
- `fPrice`

**Relations :**
- **Plusieurs à un** avec `menu_items`: Une option est associée à un article de menu. (Explicite via `@ManyToOne`)

### `menuitem_options_category`

Cette table contient les catégories d'options pour un article de menu.

**Colonnes :**
- `iOptionsCategoryId` (Primaire)
- `iMenuItemId`
- `tCategoryName`

**Relations :**
- **Plusieurs à un** avec `menu_items`: Une catégorie d'options est associée à un article de menu. (Explicite via `@ManyToOne`)

### `service_categories`

Cette table contient les catégories de services principaux.

**Colonnes :**
- `iServiceId` (Primaire)
- `vService`
- `eType`

**Relations :**
- **Un à plusieurs** avec `orders`: Une catégorie de service peut avoir plusieurs commandes. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `company`: Une catégorie de service peut avoir plusieurs entreprises. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `trips`: Une catégorie de service peut avoir plusieurs voyages. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `__intentions`: Une catégorie de service peut avoir plusieurs intentions. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `banners`: Une catégorie de service peut avoir plusieurs bannières. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `store_wise_banners`: Une catégorie de service peut avoir plusieurs bannières de magasin. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `__object_categories`: Une catégorie de service peut avoir plusieurs catégories d'objets. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `__object_objectifs`: Une catégorie de service peut avoir plusieurs objectifs d'objets. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `__object_prospections`: Une catégorie de service peut avoir plusieurs prospections d'objets. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `__object_realisations`: Une catégorie de service peut avoir plusieurs réalisations d'objets. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `master_service_menu`: Une catégorie de service peut avoir plusieurs menus. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `content_cubex_details`: Une catégorie de service peut avoir plusieurs détails de contenu Cubex. (Explicite via `@OneToMany`)

### `master_service_menu`

Cette table contient les menus des services principaux.

**Colonnes :**
- `iServiceMenuId` (Primaire)
- `vTitle`
- `iParentId`
- `iServiceId`

**Relations :**
- **Plusieurs à un** avec `master_service_menu` (self-referencing): Un menu peut avoir un menu parent. (Explicite via `@ManyToOne`)
- **Un à plusieurs** avec `master_service_menu` (self-referencing): Un menu peut avoir plusieurs menus enfants. (Explicite via `@OneToMany`)
- **Plusieurs à un** avec `service_categories`: Un menu est associé à une catégorie de service. (Explicite via `@ManyToOne`)

### `orders`

Cette table contient les informations sur les commandes.

**Colonnes :**

- `iOrderId` (Primaire)
- `iServiceId`
- `iUserId`
- `iDriverId`
- `iCompanyId`
- `fNetTotal`
- ... (et de nombreuses autres colonnes)

**Relations :**

- **Un à plusieurs** avec `service_categories` : Une commande est associée à une catégorie de service. (Explicite via `@ManyToOne`)
- **Un à plusieurs** avec `order_status` : Une commande est associée à un statut de commande. (Explicite via `@ManyToOne`)
- **Un à plusieurs** avec `register_user` : Une commande est associée à un utilisateur. (Explicite via `@ManyToOne`)
- **Un à plusieurs** avec `register_driver` : Une commande est associée à un conducteur. (Explicite via `@ManyToOne`)
- **Un à plusieurs** avec `company` : Une commande est associée à une entreprise. (Explicite via `@ManyToOne`)

### `driver_vehicle`

Cette table contient les informations sur les véhicules des conducteurs.

**Colonnes :**

- `iDriverVehicleId` (Primaire)
- `iDriverId`
- `iCompanyId`
- `iMakeId`
- `iModelId`
- `vLicencePlate`
- ... (et de nombreuses autres colonnes)

**Relations :**

- **Un à plusieurs** avec `register_driver` : Un véhicule est associé à un conducteur. (Explicite via `@ManyToOne`)
- **Relation implicite** avec `vehicle_type` via `vCarType`.
- **Relation implicite** avec `rental_package` via `vRentalCarType`.
- **Un à plusieurs** avec `company` : Un véhicule est associé à une entreprise. (Explicite via `@ManyToOne`)
- **Un à plusieurs** avec `make` : Un véhicule est associé à une marque. (Explicite via `@ManyToOne`)
- **Un à plusieurs** avec `model` : Un véhicule est associé à un modèle. (Explicite via `@ManyToOne`)

### `country`

Cette table contient les pays.

**Colonnes :**
- `iCountryId` (Primaire)
- `vCountry`
- `vCountryCode`

**Relations :**
- **Un à plusieurs** avec `state`: Un pays peut avoir plusieurs états/régions. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `city`: Un pays peut avoir plusieurs villes. (Explicite via `@OneToMany`)

### `state`

Cette table contient les états ou régions d'un pays.

**Colonnes :**
- `iStateId` (Primaire)
- `vState`
- `iCountryId`

**Relations :**
- **Plusieurs à un** avec `country`: Un état appartient à un pays. (Explicite via `@ManyToOne`)
- **Un à plusieurs** avec `city`: Un état peut avoir plusieurs villes. (Explicite via `@OneToMany`)

### `city`

Cette table contient les villes.

**Colonnes :**
- `iCityId` (Primaire)
- `vCity`
- `iCountryId`
- `iStateId`

**Relations :**
- **Plusieurs à un** avec `country`: Une ville appartient à un pays. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `state`: Une ville appartient à un état/région. (Explicite via `@ManyToOne`)

### `advertise_banners`

Cette table contient les bannières publicitaires pour la page principale.

**Colonnes :**
- `iAdvertBannerId` (Primaire)
- `vBannerTitle`
- `vBannerImage`

**Relations :**
- **Un à plusieurs** avec `banner_impression`: Une bannière publicitaire peut avoir plusieurs impressions. (Explicite via `@OneToMany`)

### `banner_impression`

Cette table enregistre les impressions des bannières publicitaires.

**Colonnes :**
- `iBannerImpLog` (Primaire)
- `iAdvertBannerId`
- `iUserId`

**Relations :**
- **Plusieurs à un** avec `advertise_banners`: Une impression est liée à une bannière publicitaire. (Explicite via `@ManyToOne`)

### `hotel_banners`

Cette table contient les bannières spécifiques aux hôtels.

**Colonnes :**
- `iHotelBannerId` (Primaire)
- `iHotelId`
- `vTitle`

**Relations :**
- **Plusieurs à un** avec `hotel`: Une bannière est associée à un hôtel. (Explicite via `@ManyToOne`)

### `store_wise_banners`

Cette table contient les bannières spécifiques aux magasins.

**Colonnes :**
- `iBannerId` (Primaire)
- `iServiceId`
- `iCompanyId`

**Relations :**
- **Plusieurs à un** avec `service_categories`: Une bannière est associée à un service. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `company` (en tant que magasin): Une bannière est associée à un magasin. (Explicite via `@ManyToOne`)

### `banners`

Cette table contient les bannières publicitaires.

**Colonnes :**
- `iBannerId` (Primaire)
- `iServiceId`
- `iVehicleCategoryId`
- `vTitle`

**Relations :**
- **Plusieurs à un** avec `service_categories`: Une bannière est associée à un service. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `vehicle_category`: Une bannière est associée à une catégorie de véhicule. (Explicite via `@ManyToOne`)

### `__intentions`

Cette table stocke les intentions des utilisateurs pour les services.

**Colonnes :**
- `id` (Primaire)
- `vehicule_type_id`
- `type`
- `userID`
- `service_id`
- `store_id`
- `item_id`
- ... (et de nombreuses autres colonnes)

**Relations :**
- **Plusieurs à un** avec `vehicle_type`: Une intention est associée à un type de véhicule. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `register_user`: Une intention est associée à un utilisateur. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `service_categories`: Une intention est associée à une catégorie de service. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `company` (en tant que magasin): Une intention est associée à un magasin. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `food_menu` (en tant qu'article): Une intention est associée à un article de menu. (Explicite via `@ManyToOne`)
- **Un à plusieurs** avec `__intentions_criteres`: Une intention peut avoir plusieurs critères. (Explicite via `@OneToMany`)

### `__intentions_criteres`

Cette table stocke les critères spécifiques pour une intention.

**Colonnes :**
- `id` (Primaire)
- `user_id`
- `intention_id`
- `prix_min`
- `prix_max`
- ... (et de nombreuses autres colonnes)

**Relations :**
- **Plusieurs à un** avec `register_user`: Un critère est associé à un utilisateur. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `__intentions`: Un critère est associé à une intention. (Explicite via `@ManyToOne`)

### `__object_categories`

Cette table stocke les catégories d'objectifs, de prospections et de réalisations.

**Colonnes :**
- `id` (Primaire)
- `id_service`
- `libelle_fr`

**Relations :**
- **Plusieurs à un** avec `service_categories`: Une catégorie est associée à un service. (Explicite via `@ManyToOne`)
- **Un à plusieurs** avec `__object_objectifs`: Une catégorie peut avoir plusieurs objectifs. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `__object_prospections`: Une catégorie peut avoir plusieurs prospections. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `__object_realisations`: Une catégorie peut avoir plusieurs réalisations. (Explicite via `@OneToMany`)

### `__object_objectifs`

Cette table stocke les objectifs quantitatifs pour une catégorie et un service.

**Colonnes :**
- `id` (Primaire)
- `id_service`
- `id_categorie`
- `quantite`
- `date`

**Relations :**
- **Plusieurs à un** avec `service_categories`: Un objectif est associé à un service. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `__object_categories`: Un objectif est associé à une catégorie. (Explicite via `@ManyToOne`)

### `__object_prospections`

Cette table stocke les prospections quantitatives pour une catégorie et un service.

**Colonnes :**
- `id` (Primaire)
- `id_service`
- `id_categorie`
- `quantite`
- `date`

**Relations :**
- **Plusieurs à un** avec `service_categories`: Une prospection est associée à un service. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `__object_categories`: Une prospection est associée à une catégorie. (Explicite via `@ManyToOne`)

### `__object_realisations`

Cette table stocke les réalisations quantitatives pour une catégorie et un service.

**Colonnes :**
- `id` (Primaire)
- `id_service`
- `id_categorie`
- `quantite`
- `date`

**Relations :**
- **Plusieurs à un** avec `service_categories`: Une réalisation est associée à un service. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `__object_categories`: Une réalisation est associée à une catégorie. (Explicite via `@ManyToOne`)

### `faqs`

Cette table contient les questions fréquemment posées.

**Colonnes :**
- `iFaqId` (Primaire)
- `iFaqcategoryId`
- `vTitle_EN`
- `tAnswer_EN`

**Relations :**
- **Plusieurs à un** avec `faq_categories`: Une FAQ est associée à une catégorie de FAQ. (Explicite via `@ManyToOne`)

### `faq_categories`

Cette table contient les catégories pour les FAQ.

**Colonnes :**
- `iFaqcategoryId` (Primaire)
- `vTitle`
- `eCategoryType`

**Relations :**
- **Un à plusieurs** avec `faqs`: Une catégorie peut avoir plusieurs FAQs. (Explicite via `@OneToMany`)

### `helps`

Cette table contient les rubriques d'aide.

**Colonnes :**
- `iHelpsId` (Primaire)
- `iHelpscategoryId`
- `vTitle`
- `tDescription`

**Relations :**
- **Plusieurs à un** avec `helps_categories`: Une rubrique d'aide est associée à une catégorie d'aide. (Explicite via `@ManyToOne`)

### `helps_categories`

Cette table contient les catégories pour les rubriques d'aide.

**Colonnes :**
- `iHelpscategoryId` (Primaire)
- `vTitle`
- `eTopic`

**Relations :**
- **Un à plusieurs** avec `helps`: Une catégorie peut avoir plusieurs rubriques d'aide. (Explicite via `@OneToMany`)

### `help_detail`

Cette table contient les détails de l'aide.

**Colonnes :**
- `iHelpDetailId` (Primaire)
- `iHelpDetailCategoryId`
- `vTitle_EN`
- `tAnswer_EN`

**Relations :**
- **Plusieurs à un** avec `help_detail_categories`: Un détail d'aide est associé à une catégorie de détails d'aide. (Explicite via `@ManyToOne`)

### `help_detail_categories`

Cette table contient les catégories pour les détails de l'aide.

**Colonnes :**
- `iHelpDetailCategoryId` (Primaire)
- `vTitle`
- `eSystem`

**Relations :**
- **Un à plusieurs** avec `help_detail`: Une catégorie peut avoir plusieurs détails d'aide. (Explicite via `@OneToMany`)

### `app_screen_master`

Cette table contient les écrans de l'application, avec une structure hiérarchique.

**Colonnes :**
- `lPageId` (Primaire)
- `vScreenName`
- `iParentId`

**Relations :**
- **Plusieurs à un** avec `app_screen_master` (self-referencing): Un écran peut avoir un écran parent. (Explicite via `@ManyToOne`)
- **Un à plusieurs** avec `app_screen_master` (self-referencing): Un écran peut avoir plusieurs écrans enfants. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `language_label`: Un écran peut avoir plusieurs libellés de langue. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `language_label_other`: Un écran peut avoir plusieurs autres libellés de langue. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `language_label_1`: Un écran peut avoir plusieurs libellés de langue (table 1). (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `language_label_2`: Un écran peut avoir plusieurs libellés de langue (table 2). (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `language_label_5`: Un écran peut avoir plusieurs libellés de langue (table 5). (Explicite via `@OneToMany`)

### `language_master`

Cette table contient les langues disponibles dans l'application.

**Colonnes :**
- `iLanguageMasId` (Primaire)
- `vCode`
- `vTitle`

**Relations :**
- **Un à plusieurs** avec `language_label`: Une langue peut avoir plusieurs libellés. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `language_label_other`: Une langue peut avoir plusieurs autres libellés. (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `language_label_1`: Une langue peut avoir plusieurs libellés (table 1). (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `language_label_2`: Une langue peut avoir plusieurs libellés (table 2). (Explicite via `@OneToMany`)
- **Un à plusieurs** avec `language_label_5`: Une langue peut avoir plusieurs libellés (table 5). (Explicite via `@OneToMany`)

### `language_label`

Cette table contient les libellés de langue pour les différentes parties de l'application.

**Colonnes :**
- `LanguageLabelId` (Primaire)
- `lPage_id`
- `vCode`
- `vLabel`

**Relations :**
- **Plusieurs à un** avec `app_screen_master`: Un libellé est associé à un écran d'application. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `language_master`: Un libellé est associé à une langue. (Explicite via `@ManyToOne`)

### `language_label_other`

Cette table contient d'autres libellés de langue pour l'application.

**Colonnes :**
- `LanguageLabelId` (Primaire)
- `lPage_id`
- `vCode`
- `vLabel`

**Relations :**
- **Plusieurs à un** avec `app_screen_master`: Un libellé est associé à un écran d'application. (Explicite via `@ManyToOne`)
- **Plusieurs à un** avec `language_master`: Un libellé est associé à une langue. (Explicite via `@ManyToOne`)

### `content_cubex_details`

Cette table contient les détails du contenu pour la section "Cubex".

**Colonnes :**
- `id` (Primaire)
- `eFor`
- `iVehicleCategoryId`

**Relations :**
- **Plusieurs à un** avec `vehicle_category`: Un détail de contenu est associé à une catégorie de véhicule. (Explicite via `@ManyToOne`)

## Autres entités

Il existe un grand nombre d'autres entités dans le projet. La plupart d'entre elles semblent suivre le même modèle de relations implicites, où les clés étrangères sont définies comme des colonnes standard avec des commentaires indiquant la table liée.

Pour une analyse exhaustive, il serait nécessaire d'examiner chaque fichier d'entité et de documenter ses colonnes et ses relations implicites. Cependant, l'analyse ci-dessus des entités principales donne un bon aperçu de l'architecture de la base de données.
