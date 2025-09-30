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

## Autres entités

Il existe un grand nombre d'autres entités dans le projet. La plupart d'entre elles semblent suivre le même modèle de relations implicites, où les clés étrangères sont définies comme des colonnes standard avec des commentaires indiquant la table liée.

Pour une analyse exhaustive, il serait nécessaire d'examiner chaque fichier d'entité et de documenter ses colonnes et ses relations implicites. Cependant, l'analyse ci-dessus des entités principales donne un bon aperçu de l'architecture de la base de données.
