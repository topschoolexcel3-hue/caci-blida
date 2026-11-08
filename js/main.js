/* ============================================================
   CCI Mitidja-Blida – Main JavaScript & Multi-Language (FR / AR / EN)
   ============================================================ */

'use strict';

const TRANSLATIONS = {
  fr: {
    "meta.home_title": "CCI Mitidja-Blida – Chambre de Commerce et d'Industrie",
    "meta.adhesion_title": "Adhésion – CCI Mitidja-Blida",
    "meta.missions_title": "Missions, 5 Engagements & Formations – CCI Mitidja-Blida",
    "meta.pres_title": "Présentation – CCI Mitidja-Blida",
    "meta.cert_title": "Certificat d'Origine, Fabrication & Légalisation – CCI Mitidja-Blida",
    "meta.news_title": "Actualités & Événements – CCI Mitidja-Blida",
    "meta.contact_title": "Contact – CCI Mitidja-Blida",

    "topbar.phone": "Tél/Fax : 020 49 18 28 | Mob : 0661 61 32 05",
    "brand.short": "CCI MITIDJA - BLIDA",
    "brand.sub": "Chambre de Commerce et d'Industrie Mitidja-Blida",

    "nav.home": "Accueil",
    "nav.chamber": "La Chambre",
    "nav.presentation": "Présentation",
    "nav.missions": "Notre Mission & Nos 5 Engagements",
    "nav.difference": "Notre Différence & Ambition",
    "nav.services": "Services & Formations",
    "nav.cert_origin": "Certificat d'Origine & Fabrication",
    "nav.legalisation": "Légalisation & Documents Commerciaux",
    "nav.formations": "Formations Professionnelles",
    "nav.b2b": "Business Connect & Rencontres B2B",
    "nav.adhesion": "Adhésion",
    "nav.news": "Actualités",
    "nav.contact": "Contact",

    "hero.s1.badge": "CCI Mitidja-Blida – Le réseau des entreprises qui créent l'avenir",
    "hero.s1.title": "Connecter. Développer.<br /><strong>Représenter.</strong>",
    "hero.s1.subtitle": "Une Chambre qui crée de la valeur pour ses entreprises. La CCI Mitidja-Blida accompagne les entreprises de la région à chaque étape de leur développement.",
    "hero.s1.cta1": "Adhérer à la Chambre",
    "hero.s1.cta2": "Nos 5 Engagements",

    "hero.s2.badge": "Nos 5 Engagements Clés",
    "hero.s2.title": "Business Connect &<br /><strong>Rencontres Acheteurs–Fournisseurs</strong>",
    "hero.s2.subtitle": "Nous connectons les entreprises qui ont des besoins avec celles qui ont les solutions : rencontres B2B, Business Challenges, visites d'entreprises et Conseil des Entreprises de Blida.",
    "hero.s2.cta1": "Découvrir Nos Engagements",
    "hero.s2.cta2": "Nous Contacter",

    "hero.s3.badge": "Adhésion & Formations Professionnelles",
    "hero.s3.title": "Adhérez dès aujourd'hui &<br /><strong>Développez votre activité</strong>",
    "hero.s3.subtitle": "Ensemble pour une économie forte : profitez de nos formations pratiques, de la délivrance des certificats d'origine et de fabrication, et d'un réseau économique actif.",
    "hero.s3.cta1": "Dossier & Tarifs d'Adhésion",
    "hero.s3.cta2": "Services & Documents",

    "stats.engagements": "Engagements Clés B2B",
    "stats.formations": "Pôles de Formations Pro",
    "stats.physique": "Adhésion Personne Physique / An",
    "stats.morale": "Adhésion Personne Morale / An",

    "mission.title": "NOTRE MISSION",
    "mission.lead": "La CCI Mitidja-Blida accompagne les entreprises de la région à chaque étape de leur développement en :",
    "mission.p1": "Créant des opportunités d'affaires",
    "mission.p2": "Facilitant les échanges entre opérateurs économiques",
    "mission.p3": "Accompagnant les projets de développement",
    "mission.p4": "Représentant les intérêts des entreprises auprès des institutions",

    "ambition.title": "NOTRE AMBITION",
    "ambition.text": "Faire de la CCI Mitidja-Blida le premier réseau économique de confiance de la région, où chaque adhérent trouve des opportunités, des partenaires et un accompagnement concret pour se développer durablement.",

    "eng.tag": "Une Chambre qui crée de la valeur",
    "eng.title": "Nos 5 Engagements & Notre Différence",
    "eng.desc": "Des actions concrètes pour connecter les opérateurs économiques, favoriser les contrats locaux et porter la voix des entreprises de la Mitidja-Blida.",
    "eng.e1.title": "1. BUSINESS CONNECT",
    "eng.e1.text": "Nous connectons les entreprises qui ont des besoins avec celles qui ont les solutions (fournisseurs, clients, sous-traitants, partenaires industriels, prestataires de services).",
    "eng.e2.title": "2. LES RENCONTRES ACHETEURS – FOURNISSEURS",
    "eng.e2.text": "Rencontres B2B entre grandes entreprises, PME, startups et industriels. Objectif : favoriser les contrats locaux.",
    "eng.e3.title": "3. LES BUSINESS CHALLENGES",
    "eng.e3.text": "Les entreprises présentent un défi concret. Les adhérents apportent leurs idées et solutions. La Chambre assure le suivi des mises en relation.",
    "eng.e4.title": "4. LES VISITES D'ENTREPRISES",
    "eng.e4.text": "Découvrir les réussites locales. Partager les bonnes pratiques. Créer des collaborations industrielles et commerciales.",
    "eng.e5.title": "5. LE CONSEIL DES ENTREPRISES DE BLIDA",
    "eng.e5.text": "La Chambre recueille les préoccupations des entreprises, les analyse et les porte auprès des autorités compétentes. Notre rôle est aussi d'être la voix des entreprises.",
    "eng.diff.title": "NOTRE DIFFÉRENCE",
    "eng.diff.lead": "Nous ne mesurons pas notre réussite par le nombre d'événements organisés. Nous la mesurons par :",
    "eng.diff.p1": "Le nombre de mises en relation réalisées",
    "eng.diff.p2": "Les partenariats créés entre adhérents",
    "eng.diff.p3": "Les opportunités d'affaires générées dans leur développement",

    "services.tag": "Nos Prestations & Avantages",
    "services.title": "Services de la CCI Mitidja-Blida",
    "services.desc": "Sous la tutelle de la CACI, la CCI Mitidja-Blida met à votre disposition l'ensemble des prestations officielles, administratives et économiques.",
    "services.c1.title": "Certificat d'Origine & de Fabrication",
    "services.c1.text": "Délivrance de certificats d'origine et de certificats de fabrication pour vos opérations commerciales et d'exportation.",
    "services.c2.title": "Légalisation & Invitations Pro",
    "services.c2.text": "Légalisation des documents commerciaux et des invitations professionnelles pour vos partenaires nationaux et internationaux.",
    "services.c3.title": "Formations Professionnelles",
    "services.c3.text": "Formations dans divers domaines animées par des experts qualifiés pour développer les compétences et accompagner la croissance de votre entreprise.",
    "services.c4.title": "Foires & Salons Nationaux et Internationaux",
    "services.c4.text": "Participation aux foires et salons nationaux et internationaux, rencontres B2B ciblées et promotion via les plateformes de la Chambre.",
    "services.c5.title": "Conseil, Orientation & Veille Légale",
    "services.c5.text": "Information, orientation, conseil et veille sur les évolutions légales et réglementaires au profit des opérateurs économiques.",
    "services.c6.title": "Représentation & Offres Partenaires",
    "services.c6.text": "Représentation et défense des intérêts des commerçants auprès des instances et commissions, avec offres et réductions chez nos partenaires.",

    "common.read_more": "En savoir plus",

    "form.tag": "Développement des Compétences",
    "form.title": "Les Formations Professionnelles",
    "form.desc": "Développez les compétences, renforcez la performance et accompagnez la croissance de votre entreprise.",
    "form.f1": "Intelligence artificielle et transformation digitale",
    "form.f2": "Gestion et management des entreprises",
    "form.f3": "Comptabilité et fiscalité",
    "form.f4": "Marketing digital et communication",
    "form.f5": "Ressources humaines",
    "form.f6": "Hygiène, sécurité et normes HACCP",
    "form.f7": "Commerce, négociation et techniques de vente",
    "form.f8": "Import et export",
    "form.f9": "Business English",
    "form.f10": "Excel Avancé – Du 15 au 17 Novembre 2026 (BCRD – Université Blida 1)",
    "form.excel.date": "Du 15 – 16 – 17 Novembre 2026",
    "form.excel.loc": "BCRD – Université Blida 1",
    "form.excel.title": "Formation : Excel Avancé – دورة تكوينية حول Excel Avancé",
    "form.excel.sub": "Maîtrisez les outils avancés d'Excel pour aller plus loin dans votre productivité !",
    "form.excel.obj_title": "Objectifs de la formation",
    "form.excel.obj1": "Maîtriser les fonctions avancées",
    "form.excel.obj2": "Exploiter les tableaux croisés dynamiques",
    "form.excel.obj3": "Réaliser des analyses et des tableaux de bord",
    "form.excel.obj4": "Automatiser vos tâches avec les macros",
    "form.excel.pub_title": "Public ciblé",
    "form.excel.pub1": "Cadres et responsables de services",
    "form.excel.pub2": "Professionnels de la gestion et de l'analyse",
    "form.excel.pub3": "Toute personne souhaitant approfondir ses compétences sur Excel",
    "form.excel.slogan": "Investissez dans vos compétences, boostez votre performance !",
    "form.excel.cta": "Inscrivez-vous dès maintenant !",
    "form.excel.view_btn": "Accéder à la page Formation",
    "form.excel.access_btn": "Accéder à la formation",
    "form.excel.cancel_btn": "Annuler",
    "form.reg.title": "Formulaire d'Inscription à la Formation",
    "form.reg.phone_label": "Téléphone *",
    "form.reg.select_label": "Formation choisie *",
    "form.reg.msg_label": "Message / Nombre de participants (facultatif)",
    "form.reg.msg_ph": "Précisez le nombre de participants ou vos besoins spécifiques...",
    "form.reg.submit": "Confirmer mon Inscription à la Formation",
    "form.reg.success": "✅ Votre demande d'inscription à la formation a été enregistrée avec succès. La CCI Mitidja-Blida vous contactera dans les plus brefs délais.",
    "form.register_badge": "S'inscrire",
    "form.pillars_title": "Nos Garanties Pédagogiques",
    "form.p1": "Des experts qualifiés",
    "form.p2": "Des formations pratiques et adaptées",
    "form.p3": "Un accompagnement personnalisé",
    "form.cta_text": "Vous souhaitez inscrire vos collaborateurs ou organiser une formation sur mesure pour votre entreprise ?",
    "form.cta_btn": "Demander le Programme de Formation",

    "adh_home.tag": "Adhésion à la CCI Mitidja-Blida",
    "adh_home.title": "Pourquoi Adhérer ?",
    "adh_home.desc": "Adhérez dès aujourd'hui et développez votre activité commerciale – Ensemble pour une économie forte. Votre adhésion vous donne accès à :",
    "adh_home.w1": "Des opportunités d'affaires",
    "adh_home.w2": "Un réseau économique actif",
    "adh_home.w3": "Des partenaires qualifiés",
    "adh_home.w4": "Des rencontres B2B ciblées",
    "adh_home.w5": "Une meilleure visibilité & publicité",
    "adh_home.w6": "Un accompagnement institutionnel",
    "adh_home.w7": "Une représentation auprès des pouvoirs publics, instances et commissions",
    "adh_home.btn_dossier": "Voir le Dossier d'Adhésion Complet",
    "adh_home.btn_contact": "Contactez-Nous",
    "adh_home.t1.title": "Personne Physique",
    "adh_home.t2.title": "Personne Morale",
    "adh_home.currency": "DZD",
    "adh_home.period": "Cotisation Annuelle",
    "adh_home.join_btn": "Adhérer",

    "brochures.tag": "Documentation Officielle",
    "brochures.title": "Nos Brochures & Supports d'Information",
    "brochures.desc": "Consultez et téléchargez nos dépliants officiels en français et en arabe ainsi que le guide d'adhésion de la CCI Mitidja-Blida.",
    "brochures.b1.title": "Dépliant Officiel (FR)",
    "brochures.b1.sub": "Missions, 5 Engagements & Formations",
    "brochures.b2.title": "المطوية الرسمية (AR)",
    "brochures.b2.sub": "مهمتنا، التزاماتنا الخمسة والتكوينات",
    "brochures.b3.title": "Guide d'Adhésion (FR / AR)",
    "brochures.b3.sub": "Cotisation, Avantages & Dossier",
    "brochures.b4.title": "Carte de Contact Officielle",
    "brochures.b4.sub": "Coordonnées & QR Code CCI",

    "qlinks.tag": "Accès Direct",
    "qlinks.title": "Services & Accès Rapide",
    "qlinks.l1": "Formulaire d'Adhésion 2026",
    "qlinks.l2": "Certificat d'Origine & Légalisation",
    "qlinks.l3": "Formations Professionnelles",
    "qlinks.l4": "Business Connect & Rencontres B2B",

    "contact.find_us": "Contactez-Nous",
    "contact.address_label": "Adresse du Siège",
    "contact.address_val": "35, Cité Mouloud Sidi Abdelkader, Blida, Algérie",
    "contact.mobile_label": "Mobile",
    "contact.phone_label": "Téléphone / Fax",
    "contact.email_label": "Emails Officiels",
    "contact.web_label": "Site Web",
    "contact.form_title": "Nous Écrire",
    "contact.f_name": "Nom & Prénom *",
    "contact.f_name_ph": "Votre nom complet",
    "contact.f_email": "Email *",
    "contact.f_email_ph": "votre@email.com",
    "contact.f_phone": "Téléphone",
    "contact.f_company": "Entreprise / Organisation",
    "contact.f_company_ph": "Nom de votre entreprise",
    "contact.f_subject": "Sujet *",
    "contact.f_subj_choose": "-- Choisir un sujet --",
    "contact.f_subj_adh": "Adhésion à la CCI Mitidja-Blida",
    "contact.f_subj_cert": "Certificat d'Origine / Fabrication",
    "contact.f_subj_leg": "Légalisation de Documents & Invitations",
    "contact.f_subj_form": "Formations Professionnelles",
    "contact.f_subj_b2b": "Business Connect & Rencontres B2B",
    "contact.f_subj_other": "Autre demande",
    "contact.f_msg": "Message (facultatif)",
    "contact.f_msg_ph": "Votre message...",
    "contact.f_submit": "Envoyer le Message",
    "contact.err_empty": "Veuillez remplir tous les champs obligatoires.",
    "contact.err_email": "Veuillez saisir une adresse email valide.",
    "contact.sending": "Envoi en cours...",
    "contact.success": "✅ Votre message a été envoyé avec succès. La CCI Mitidja-Blida vous répondra dans les plus brefs délais.",

    "footer.desc": "Au cœur du développement économique de la Mitidja. Une Chambre qui crée de la valeur pour ses entreprises, sous la tutelle de la Chambre Algérienne de Commerce et d'Industrie (CACI).",
    "footer.copy": "© 2026 Chambre de Commerce et d'Industrie Mitidja-Blida (CCI Mitidja-Blida). Tous droits réservés.",

    "adh_page.hero_title": "Adhésion à la CCI Mitidja-Blida",
    "adh_page.hero_sub": "Adhérez dès aujourd'hui et développez votre activité commerciale – Ensemble pour une économie forte",
    "adh_page.fee_tag": "Cotisation Annuelle",
    "adh_page.fee_title": "Tarifs d'Adhésion Annuelle",
    "adh_page.per_year": "Par an",
    "adh_page.t1_f1": "Commerçants & opérateurs individuels",
    "adh_page.t1_f2": "Artisans & professionnels",
    "adh_page.t1_f3": "Prestataires de services indépendants",
    "adh_page.t1_f4": "Accès à tous les services et avantages de la CCI",
    "adh_page.t2_f1": "Sociétés & Entreprises (SARL, SPA, EURL, SNC…)",
    "adh_page.t2_f2": "Industriels, PME, PMI & Startups",
    "adh_page.t2_f3": "Importateurs, exportateurs & groupements",
    "adh_page.t2_f4": "Toutes les prestations, B2B & avantages partenaires",
    "adh_page.ben_tag": "Avantages de l'Adhésion",
    "adh_page.ben_title": "Les 9 Avantages Exclusifs de nos Adhérents",
    "adh_page.b1": "Participation aux foires et salons nationaux et internationaux",
    "adh_page.b2": "Formations dans divers domaines",
    "adh_page.b3": "Délivrance de certificat d'origine et certificat de fabrication",
    "adh_page.b4": "Légalisation des documents commerciaux et des invitations professionnelles",
    "adh_page.b5": "Représentation et défense des intérêts des commerçants auprès des instances et commissions",
    "adh_page.b6": "Information, orientation et conseil",
    "adh_page.b7": "Profitez d'offres et de réductions chez nos partenaires",
    "adh_page.b8": "Publicité et promotion via les plateformes de la Chambre",
    "adh_page.b9": "Veille sur les évolutions légales et réglementaires",
    "adh_page.why_intro": "L'adhésion à la Chambre n'est pas seulement un engagement, c'est un véritable investissement dans l'avenir de votre entreprise. Votre adhésion vous donne accès à :",
    "adh_page.dos_tag": "Pièces à Fournir",
    "adh_page.dos_title": "Dossier d'Adhésion",
    "adh_page.d1": "Une copie du registre de commerce (à jour)",
    "adh_page.d2": "Une copie de la carte nationale d'identité ou du passeport",
    "adh_page.d3": "Une copie de la carte fiscale",
    "adh_page.d4": "Deux photos d'identité récentes",
    "adh_page.d5": "Reçu de paiement ou avis de virement de la cotisation (selon le cas)",
    "adh_page.info_box": "Pour déposer votre dossier d'adhésion ou obtenir des renseignements complémentaires, présentez-vous au siège de la CCI Mitidja-Blida : 35, Cité Mouloud Sidi Abdelkader, Blida. Tél/Fax : 020 49 18 28 | Mob : 0661 61 32 05 | Email : ccimitidja.20@gmail.com",
    "adh_page.poster_title": "Affiche Officielle d'Adhésion",
    "adh_page.form_tag": "Document Officiel 2026",
    "adh_page.form_title": "Formulaire d'Adhésion – إستمارة الإنخراط",
    "adh_page.form_desc": "Téléchargez, remplissez et signez le formulaire officiel d'adhésion à la Chambre de Commerce et d'Industrie Mitidja-Blida (CCI Mitidja-Blida). Ce formulaire est disponible en format PDF prêt à imprimer, en format Word (.docx) modifiable et sur Google Docs.",
    "adh_page.form_item1": "1. Identification de l'entreprise (RC, NIF, AI, coordonnées)",
    "adh_page.form_item2": "2. Activité principale, produits fabriqués, capacité & exportation",
    "adh_page.form_item3": "3. Effectifs, chiffre d'affaires, signature du gérant & cachet",
    "adh_page.form_btn_pdf": "Télécharger le Formulaire (PDF)",
    "adh_page.form_btn_word": "Télécharger en Word (.docx)",
    "adh_page.form_btn_gdocs": "Ouvrir sur Google Docs",
    "adh_page.form_preview_caption": "Cliquez sur l'aperçu pour ouvrir le PDF plein écran",
    "adh_page.form_sidebar_title": "Formulaire d'Adhésion",
    "adh_page.d0": "Formulaire d'adhésion dûment rempli et signé (إستمارة الإنخراط)",

    "missions_page.hero_title": "Notre Mission, Nos 5 Engagements & Formations",
    "missions_page.diff_full": "Nous ne mesurons pas notre réussite par le nombre d'événements organisés. Nous la mesurons par : le nombre de mises en relation réalisées, les partenariats créés entre adhérents, et les opportunités d'affaires générées dans leur développement.",

    "pres_page.hero_title": "Présentation de la CCI Mitidja-Blida",
    "pres_page.who_title": "Qui Sommes-Nous ?",
    "pres_page.who_p1": "La Chambre de Commerce et d’Industrie Mitidja-Blida (CCI Mitidja-Blida) est une chambre de wilaya relevant de la Chambre Algérienne de Commerce et d’Industrie (CACI), conformément aux dispositions du décret exécutif n° 22-83 du 26 février 2022 portant réorganisation de la Chambre Algérienne de Commerce et d’Industrie. Elle s’inscrit dans le cadre institutionnel de la CACI, placée sous la tutelle du ministère chargé du commerce.",
    "pres_page.who_p2": "Au cœur du développement économique de la Mitidja, la CCI Mitidja-Blida constitue un acteur de proximité et un partenaire stratégique des opérateurs économiques de la wilaya de Blida.",
    "pres_page.who_p3": "Une Chambre qui crée de la valeur pour ses adhérents, elle contribue à la promotion, à l'accompagnement et au développement des entreprises, tout en représentant leurs intérêts auprès des autorités publiques locales.",
    "pres_page.who_p4": "Elle s’adresse à l’ensemble des acteurs économiques : commerçants, industriels, PME/PMI, startups et prestataires de services, et œuvre activement en faveur du développement économique territorial, de l’investissement, de l’innovation et de la création de richesse.",
    "pres_page.zone_title": "Notre Zone de Compétence & Réseau CACI",
    "pres_page.zone_p1": "La CCI Mitidja-Blida couvre l'ensemble du territoire économique de la région de la Mitidja et de la wilaya de Blida. Elle est membre du réseau national des Chambres de Commerce et d'Industrie algériennes coordonné par la CACI (Chambre Algérienne de Commerce et d'Industrie).",

    "cert_page.hero_title": "Certificat d'Origine, Fabrication & Légalisation",
    "cert_page.s1_title": "Délivrance de Certificat d'Origine et Certificat de Fabrication",
    "cert_page.s1_p1": "La Chambre de Commerce et d'Industrie Mitidja-Blida (CCI Mitidja-Blida) délivre le Certificat d'Origine et le Certificat de Fabrication attestant que les marchandises ont été produites, fabriquées ou ont subi une transformation substantielle en Algérie.",
    "cert_page.s1_p2": "Ces documents officiels sont indispensables pour les opérations d'exportation et les transactions commerciales nationales et internationales, conformément aux règlements de la Chambre Algérienne de Commerce et d'Industrie (CACI).",
    "cert_page.info": "L'adhésion à la CCI Mitidja-Blida vous permet de bénéficier de l'accompagnement direct de nos services pour la délivrance de vos certificats d'origine, certificats de fabrication et la légalisation de vos documents commerciaux.",
    "cert_page.docs_title": "Documents Requis (Certificat d'Origine)",
    "cert_page.doc1": "Demande de certificat d'origine dûment remplie et signée",
    "cert_page.doc2": "Facture commerciale définitive (original + copies)",
    "cert_page.doc3": "Déclaration d'origine du producteur ou de l'exportateur",
    "cert_page.doc4": "Copie du Registre de Commerce (à jour) et de la Carte Fiscale",
    "cert_page.doc5": "Liste de colisage (packing list) détaillant la marchandise",
    "cert_page.leg_title": "Légalisation des Documents Commerciaux & Invitations Professionnelles",
    "cert_page.leg_p1": "La CCI Mitidja-Blida assure également la légalisation et l'authentification des documents commerciaux (factures, contrats, attestations commerciales) ainsi que la légalisation des invitations professionnelles pour vos partenaires étrangers.",
    "cert_page.contact_title": "Contact du Service",

    "news_page.hero_title": "Actualités, Programmes & Événements",
    "news_page.n1.title": "Lancement du Programme Business Connect & Rencontres B2B",
    "news_page.n1.text": "La CCI Mitidja-Blida connecte les entreprises qui ont des besoins avec celles qui ont les solutions : grandes entreprises, PME, startups et industriels pour favoriser les contrats locaux.",
    "news_page.n2.title": "Cycles de Formations Professionnelles : IA, Management, Fiscalité & HACCP",
    "news_page.n2.text": "Développez vos compétences avec nos experts qualifiés : Intelligence artificielle, Gestion d'entreprise, Comptabilité, Marketing digital, RH, HACCP et Techniques de vente.",
    "news_page.n3.title": "Campagne d'Adhésion Annuelle à la CCI Mitidja-Blida",
    "news_page.n3.text": "Adhérez dès aujourd'hui (1 000 DZD personne physique / 3 000 DZD personne morale) et bénéficiez de nos 9 avantages exclusifs et de l'accompagnement institutionnel de la Chambre."
  },

  ar: {
    "meta.home_title": "غرفة التجارة والصناعة متيجة البليدة – CCI Mitidja-Blida",
    "meta.adhesion_title": "الانخراط – غرفة التجارة والصناعة متيجة البليدة",
    "meta.missions_title": "مهمتنا، التزاماتنا الخمسة والتكوينات – غرفة التجارة والصناعة متيجة البليدة",
    "meta.pres_title": "تقديم الغرفة – غرفة التجارة والصناعة متيجة البليدة",
    "meta.cert_title": "شهادة المنشأ وشهادة التصنيع والمصادقة – غرفة التجارة والصناعة متيجة البليدة",
    "meta.news_title": "المستجدات والتظاهرات – غرفة التجارة والصناعة متيجة البليدة",
    "meta.contact_title": "تواصلوا معنا – غرفة التجارة والصناعة متيجة البليدة",

    "topbar.phone": "الهاتف/الفاكس : 020 49 18 28 | النقال : 0661 61 32 05",
    "brand.short": "CCI MITIDJA - BLIDA",
    "brand.sub": "الغرفة الولائية للتجارة والصناعة متيجة البليدة",

    "nav.home": "الرئيسية",
    "nav.chamber": "الغرفة",
    "nav.presentation": "تقديم الغرفة",
    "nav.missions": "مهمتنا وأهم 5 التزاماتنا",
    "nav.difference": "طموحنا وتميزنا",
    "nav.services": "الخدمات والتكوينات",
    "nav.cert_origin": "شهادة المنشأ وشهادة التصنيع",
    "nav.legalisation": "المصادقة على الوثائق والدعوات المهنية",
    "nav.formations": "التكوينات المهنية",
    "nav.b2b": "تواصل الأعمال ولقاءات B2B",
    "nav.adhesion": "الانخراط",
    "nav.news": "المستجدات",
    "nav.contact": "تواصلوا معنا",

    "hero.s1.badge": "غرفة التجارة والصناعة متيجة البليدة – شبكة المؤسسات التي تصنع المستقبل",
    "hero.s1.title": "تواصلوا. طوروا.<br /><strong>نموا.</strong>",
    "hero.s1.subtitle": "غرفة التجارة والصناعة متيجة البليدة شريككم في نجاح مؤسساتكم. ترافق الغرفة المؤسسات في كل مرحلة من مراحل تطورها لخلق فرص الأعمال وتمثيل مصالحها.",
    "hero.s1.cta1": "انخرط اليوم في الغرفة",
    "hero.s1.cta2": "أهم 5 التزاماتنا",

    "hero.s2.badge": "أهم 5 التزاماتنا",
    "hero.s2.title": "تواصل الأعمال و<br /><strong>لقاءات المتعاملين الاقتصاديين (B2B)</strong>",
    "hero.s2.subtitle": "نربط بين المؤسسات التي تلبي احتياجاتها مع حلول مناسبة: لقاءات B2B، تحديات الأعمال، زيارات المؤسسات ومجلس أعمال متيجة البليدة.",
    "hero.s2.cta1": "اكتشف التزاماتنا",
    "hero.s2.cta2": "تواصلوا معنا",

    "hero.s3.badge": "الانخراط والتكوينات المهنية",
    "hero.s3.title": "إنخرط اليوم وطور نشاطك التجاري<br /><strong>معا من أجل اقتصاد قوي</strong>",
    "hero.s3.subtitle": "طوروا مهاراتكم، عززوا أدائكم، وواكبوا نمو مؤسساتكم عبر دوراتنا التكوينية ومرافقتنا في استخراج شهادات المنشأ والتصنيع.",
    "hero.s3.cta1": "ملف ورسوم الانخراط",
    "hero.s3.cta2": "الخدمات والوثائق",

    "stats.engagements": "التزامات أساسية للمؤسسات",
    "stats.formations": "تخصصات تكوينية مهنية",
    "stats.physique": "رسوم انخراط الشخص الطبيعي / سنويا",
    "stats.morale": "رسوم انخراط الشخص المعنوي / سنويا",

    "mission.title": "مهمتنا",
    "mission.lead": "ترافق الغرفة الولائية للتجارة والصناعة متيجة البليدة المؤسسات في كل مرحلة من مراحل تطورها من خلال :",
    "mission.p1": "خلق فرص الأعمال",
    "mission.p2": "تسهيل التبادلات بين المتعاملين الاقتصاديين",
    "mission.p3": "مرافقة مشاريع التنمية",
    "mission.p4": "تمثيل مصالح المؤسسات لدى الهيئات واللجان",

    "ambition.title": "طموحنا",
    "ambition.text": "تعزيز دور الغرفة الولائية للتجارة والصناعة متيجة البليدة كشبكة اقتصادية فعالة، في إطار الثقة، من أجل مرافقة المتعاملين الاقتصاديين وشركاء في التنمية المستدامة لنشاطكم.",

    "eng.tag": "شريككم في نجاح مؤسساتكم",
    "eng.title": "أهم 5 التزاماتنا وتميزنا",
    "eng.desc": "إجراءات ملموسة لربط المتعاملين الاقتصاديين، تفضيل العقود المحلية وإيصال صوت المؤسسات لدى السلطات.",
    "eng.e1.title": "1. تواصل الأعمال (BUSINESS CONNECT)",
    "eng.e1.text": "نربط بين المؤسسات التي تلبي احتياجاتها مع حلول مناسبة (موردون، زبائن، شركات ناشئة، شركاء في قطاعات صناعية وتجارية وخدمات).",
    "eng.e2.title": "2. لقاءات المتعاملين الاقتصاديين",
    "eng.e2.text": "لقاءات B2B بين المؤسسات الكبرى والصغرى والمتوسطة والناشئة والصناعية. الهدف: تفضيل العقود المحلية.",
    "eng.e3.title": "3. تحديات الأعمال (BUSINESS CHALLENGES)",
    "eng.e3.text": "تقدم المؤسسات تحدٍ اقتصادي حقيقي. المشاركون: أصحاب الأفكار، المبتكرون، والمؤسسات. تؤمّن الغرفة مرافقة ومتابعة دقيقة لحاملي المشاريع.",
    "eng.e4.title": "4. زيارات المؤسسات",
    "eng.e4.text": "اكتشفوا المؤسسات المحلية. شاركوا في الممارسات الجيدة. أبرموا شراكات صناعية وتجارية.",
    "eng.e5.title": "5. مجلس أعمال متيجة البليدة",
    "eng.e5.text": "تجمع الغرفة انشغالات المتعاملين الاقتصاديين في المؤسسات، وتحللها وتنقلها إلى الهيئات المعنية. صوت المؤسسات لدى السلطات.",
    "eng.diff.title": "لماذا الانخراط معنا؟ (تميزنا)",
    "eng.diff.lead": "لم يعد الانخراط في الغرفة مجرد التزام، بل هو استثمار في مستقبل مؤسستكم. نقيس نجاحنا بـ :",
    "eng.diff.p1": "عدد أكبر من الفرص وعمليات الربط في علاقات الأعمال",
    "eng.diff.p2": "شراكات بينية مبرمة بين المتعاملين الاقتصاديين المنخرطين",
    "eng.diff.p3": "الاستفادة من التسهيلات والخدمات الموجهة وفرص الأعمال المستحدثة",

    "services.tag": "خدماتنا ومزايا الغرفة",
    "services.title": "خدمات غرفة التجارة والصناعة متيجة البليدة",
    "services.desc": "تحت وصاية الغرفة الجزائرية للتجارة والصناعة (CACI)، تضع الغرفة تحت تصرفكم كافة الخدمات الإدارية والاقتصادية والتكوينية.",
    "services.c1.title": "شهادة المنشأ وشهادة التصنيع",
    "services.c1.text": "استخراج شهادة المنشأ وشهادة التصنيع لمرافقة عملياتكم التجارية وعمليات التصدير.",
    "services.c2.title": "المصادقة على الوثائق والدعوات المهنية",
    "services.c2.text": "المصادقة على الوثائق التجارية والدعوات المهنية لفائدة شركائكم والمتعاملين الاقتصاديين.",
    "services.c3.title": "دورات تكوينية في مختلف المجالات",
    "services.c3.text": "تكوينات تطبيقية ومكيفة يشرف عليها خبراء مؤهلون لتطوير مهاراتكم وتعزيز أداء مؤسساتكم.",
    "services.c4.title": "المشاركة في المعارض والأسواق الوطنية والدولية",
    "services.c4.text": "مرافقة المتعاملين للمشاركة في المعارض والأسواق الوطنية والدولية والإشهار والترويج عبر منصات الغرفة.",
    "services.c5.title": "الإعلام والتوجيه واليقظة القانونية",
    "services.c5.text": "الإعلام والتوجيه والاستشارة والاطلاع الدائم على المستجدات القانونية والتنظيمية.",
    "services.c6.title": "التمثيل وعروض الشركاء",
    "services.c6.text": "التمثيل والدفاع عن مصالح التجار لدى الهيئات واللجان، مع الاستفادة من عروض وتخفيضات لدى الشركاء.",

    "common.read_more": "المزيد من التفاصيل",

    "form.tag": "تطوير المهارات",
    "form.title": "التكوينات المهنية",
    "form.desc": "طوروا مهاراتكم، عززوا أدائكم، وواكبوا نمو مؤسساتكم.",
    "form.f1": "الذكاء الاصطناعي والتحول الرقمي",
    "form.f2": "التسيير والإدارة المؤسساتية",
    "form.f3": "المحاسبة والجباية",
    "form.f4": "التسويق الرقمي والاتصال",
    "form.f5": "الموارد البشرية",
    "form.f6": "النظافة والسلامة والمعايير (HACCP)",
    "form.f7": "التجارة، التفاوض وتقنيات البيع",
    "form.f8": "التجارة الدولية: الاستيراد والتصدير",
    "form.f9": "اللغة الإنجليزية للأعمال (Business English)",
    "form.f10": "دورة تكوينية حول Excel Avancé – 15، 16 و17 نوفمبر 2026 (جامعة البليدة 1 - BCRD)",
    "form.excel.date": "أيام 15 – 16 – 17 نوفمبر 2026",
    "form.excel.loc": "BCRD – جامعة البليدة 1",
    "form.excel.title": "دورة تكوينية حول Excel Avancé",
    "form.excel.sub": "تحكموا في الأدوات المتقدمة لبرنامج Excel للرفع من إنتاجيتكم ومردوديتكم المهنية!",
    "form.excel.obj_title": "أهداف الدورة التكوينية",
    "form.excel.obj1": "إتقان الدوال والوظائف المتقدمة",
    "form.excel.obj2": "استغلال الجداول المحورية الديناميكية (Tableaux croisés dynamiques)",
    "form.excel.obj3": "إنجاز التحليلات ولوحات القيادة (Tableaux de bord)",
    "form.excel.obj4": "أتمتة المهام باستخدام وحدات الماكرو (Macros)",
    "form.excel.pub_title": "الفئة المستهدفة",
    "form.excel.pub1": "الإطارات ومسؤولو المصالح والأقسام",
    "form.excel.pub2": "مهنيو التسيير والإدارة والتحليل المالي والإحصائي",
    "form.excel.pub3": "كل من يرغب في تعميق مهاراته في برنامج Excel",
    "form.excel.slogan": "استثمروا في مهاراتكم، وعززوا أداءكم المهني!",
    "form.excel.cta": "سجلوا الآن !",
    "form.excel.view_btn": "الانتقال إلى صفحة التكوينات",
    "form.excel.access_btn": "الانتقال إلى التكوين",
    "form.excel.cancel_btn": "إلغاء",
    "form.reg.title": "استمارة التسجيل في الدورة التكوينية",
    "form.reg.phone_label": "رقم الهاتف *",
    "form.reg.select_label": "الدورة التكوينية المختارة *",
    "form.reg.msg_label": "رسالة / عدد المشاركين (اختياري)",
    "form.reg.msg_ph": "حدد عدد المشاركين أو احتياجاتكم الخاصة...",
    "form.reg.submit": "تأكيد التسجيل في الدورة التكوينية",
    "form.reg.success": "✅ تم تسجيل طلب مشاركتكم في الدورة التكوينية بنجاح. ستتصل بكم غرفة التجارة والصناعة متيجة البليدة في أقرب الآجال.",
    "form.register_badge": "التسجيل",
    "form.pillars_title": "ضماناتنا البيداغوجية",
    "form.p1": "خبراء مؤهلون",
    "form.p2": "تكوينات تطبيقية ومكيفة",
    "form.p3": "مرافقة مخصصة للمؤسسات",
    "form.cta_text": "هل ترغبون في تسجيل فرقكم أو تنظيم دورة تكوينية مخصصة لمؤسستكم؟",
    "form.cta_btn": "طلب برنامج التكوينات",

    "adh_home.tag": "الانخراط في الغرفة الولائية للتجارة والصناعة متيجة – البليدة",
    "adh_home.title": "لماذا الانخراط معنا؟",
    "adh_home.desc": "إنخرط اليوم وطور نشاطك التجاري – معا من أجل اقتصاد قوي. يمنحكم انخراطكم إمكانية الوصول إلى :",
    "adh_home.w1": "فرص أعمال حقيقية ومتنوعة",
    "adh_home.w2": "شبكة اقتصادية نشطة وفعالة",
    "adh_home.w3": "شركاء مؤهلين في مختلف القطاعات",
    "adh_home.w4": "لقاءات ثنائية (B2B) هادفة",
    "adh_home.w5": "رؤية أفضل وإشهار عبر منصات الغرفة",
    "adh_home.w6": "مرافقة مؤسساتية مخصصة",
    "adh_home.w7": "التمثيل والدفاع عن مصالح التجار والمؤسسات لدى السلطات والهيئات واللجان",
    "adh_home.btn_dossier": "اطلع على ملف الانخراط الكامل",
    "adh_home.btn_contact": "تواصلوا معنا",
    "adh_home.t1.title": "الشخص الطبيعي",
    "adh_home.t2.title": "الشخص المعنوي",
    "adh_home.currency": "دج",
    "adh_home.period": "رسوم الانخراط السنوي",
    "adh_home.join_btn": "انخرط الآن",

    "brochures.tag": "الوثائق والمطويات الرسمية",
    "brochures.title": "مطوياتنا ودليل الانخراط الرسمي",
    "brochures.desc": "تصفحوا وحملوا المطويات الرسمية باللغتين العربية والفرنسية بالإضافة إلى دليل الانخراط في غرفة التجارة والصناعة متيجة البليدة.",
    "brochures.b1.title": "المطوية الرسمية (بالفرنسية)",
    "brochures.b1.sub": "المهام، الالتزامات الخمسة والتكوينات",
    "brochures.b2.title": "المطوية الرسمية (بالعربية)",
    "brochures.b2.sub": "مهمتنا، التزاماتنا الخمسة والتكوينات",
    "brochures.b3.title": "إعلان ودليل الانخراط (عربي / فرنسي)",
    "brochures.b3.sub": "رسوم الانخراط، المزايا وملف الانخراط",
    "brochures.b4.title": "بطاقة الاتصال الرسمية",
    "brochures.b4.sub": "بيانات الاتصال ورمز الاستجابة السريعة QR",

    "qlinks.tag": "وصول سريع",
    "qlinks.title": "الخدمات والوصول السريع",
    "qlinks.l1": "إستمارة الإنخراط 2026",
    "qlinks.l2": "شهادة المنشأ والمصادقة",
    "qlinks.l3": "التكوينات المهنية",
    "qlinks.l4": "تواصل الأعمال ولقاءات B2B",

    "contact.find_us": "تواصلوا معنا",
    "contact.address_label": "عنوان المقر",
    "contact.address_val": "35، حي مولود سيدي عبد القادر، البليدة، الجزائر",
    "contact.mobile_label": "الهاتف النقال",
    "contact.phone_label": "الهاتف / الفاكس",
    "contact.email_label": "البريد الإلكتروني الرسمي",
    "contact.web_label": "الموقع الإلكتروني",
    "contact.form_title": "راسلونا",
    "contact.f_name": "الاسم واللقب *",
    "contact.f_name_ph": "اسمكم الكامل",
    "contact.f_email": "البريد الإلكتروني *",
    "contact.f_email_ph": "votre@email.com",
    "contact.f_phone": "رقم الهاتف",
    "contact.f_company": "المؤسسة / الشركة",
    "contact.f_company_ph": "اسم مؤسستكم",
    "contact.f_subject": "الموضوع *",
    "contact.f_subj_choose": "-- اختر الموضوع --",
    "contact.f_subj_adh": "الانخراط في غرفة التجارة والصناعة متيجة البليدة",
    "contact.f_subj_cert": "شهادة المنشأ / شهادة التصنيع",
    "contact.f_subj_leg": "المصادقة على الوثائق التجارية والدعوات المهنية",
    "contact.f_subj_form": "التكوينات المهنية",
    "contact.f_subj_b2b": "تواصل الأعمال ولقاءات B2B",
    "contact.f_subj_other": "استفسار آخر",
    "contact.f_msg": "الرسالة (اختياري)",
    "contact.f_msg_ph": "اكتب رسالتك هنا...",
    "contact.f_submit": "إرسال الرسالة",
    "contact.err_empty": "يرجى ملء جميع الحقول الإجبارية.",
    "contact.err_email": "يرجى إدخال بريد إلكتروني صحيح.",
    "contact.sending": "جاري الإرسال...",
    "contact.success": "✅ تم إرسال رسالتكم بنجاح. ستقوم غرفة التجارة والصناعة متيجة البليدة بالرد عليكم في أقرب الآجال.",

    "footer.desc": "معًا من أجل تنمية اقتصادية مستدامة. غرفة التجارة والصناعة متيجة البليدة شريككم في نجاح مؤسساتكم، تحت وصاية الغرفة الجزائرية للتجارة والصناعة (CACI).",
    "footer.copy": "© 2026 الغرفة الولائية للتجارة والصناعة متيجة البليدة (CCI Mitidja-Blida). جميع الحقوق محفوظة.",

    "adh_page.hero_title": "الانخراط في الغرفة الولائية للتجارة والصناعة متيجة – البليدة",
    "adh_page.hero_sub": "إنخرط اليوم وطور نشاطك التجاري – معا من أجل اقتصاد قوي",
    "adh_page.fee_tag": "رسوم الانخراط السنوي",
    "adh_page.fee_title": "تسعيرة الانخراط السنوي",
    "adh_page.per_year": "سنويًا",
    "adh_page.t1_f1": "التجار والمتعاملون الأفراد",
    "adh_page.t1_f2": "الحرفيون والمهنيون",
    "adh_page.t1_f3": "مقدمو الخدمات المستقلون",
    "adh_page.t1_f4": "الاستفادة من كافة خدمات ومزايا الغرفة",
    "adh_page.t2_f1": "الشركات والمؤسسات (SARL, SPA, EURL, SNC…)",
    "adh_page.t2_f2": "المؤسسات الصناعية، المؤسسات الصغيرة والمتوسطة والناشئة",
    "adh_page.t2_f3": "المستوردون، المصدرون والمجمعات الاقتصادية",
    "adh_page.t2_f4": "كافة الخدمات، لقاءات B2B وعروض الشركاء",
    "adh_page.ben_tag": "مزايا الانخراط",
    "adh_page.ben_title": "المزايا التسع الحصرية للمنخرطين في الغرفة",
    "adh_page.b1": "المشاركة في المعارض والأسواق الوطنية والدولية",
    "adh_page.b2": "دورات تكوينية في مختلف المجالات",
    "adh_page.b3": "استخراج شهادة المنشأ وشهادة التصنيع",
    "adh_page.b4": "المصادقة على الوثائق التجارية والدعوات المهنية",
    "adh_page.b5": "التمثيل والدفاع عن مصالح التجار لدى الهيئات واللجان",
    "adh_page.b6": "الإعلام والتوجيه والاستشارة",
    "adh_page.b7": "الاستفادة من عروض وتخفيضات لدى الشركاء",
    "adh_page.b8": "الإشهار والترويج عبر منصات الغرفة",
    "adh_page.b9": "الاطلاع على المستجدات القانونية والتنظيمية",
    "adh_page.why_intro": "لم يعد الانخراط في الغرفة مجرد التزام، بل هو استثمار في مستقبل مؤسستكم. يمنحكم انخراطكم إمكانية الوصول إلى :",
    "adh_page.dos_tag": "الوثائق المطلوبة",
    "adh_page.dos_title": "ملف الانخراط",
    "adh_page.d1": "نسخة من السجل التجاري (ساري المفعول)",
    "adh_page.d2": "نسخة من البطاقة الوطنية للتعريف أو جواز السفر",
    "adh_page.d3": "نسخة من البطاقة الجبائية",
    "adh_page.d4": "صورتان شمسيتان حديثتان",
    "adh_page.d5": "وصل دفع أو إشعار بالتحويل البنكي (حسب الحالة)",
    "adh_page.info_box": "لإيداع ملف الانخراط أو للحصول على معلومات إضافية، يرجى التقرب من مقر غرفة التجارة والصناعة متيجة البليدة الكائن بـ : حي مولود سيدي عبد القادر رقم 35 - البليدة. الهاتف/الفاكس : 020 49 18 28 | النقال : 0661 61 32 05 | البريد الإلكتروني : ccimitidja.20@gmail.com",
    "adh_page.poster_title": "إعلان الانخراط الرسمي",
    "adh_page.form_tag": "وثيقة رسمية 2026",
    "adh_page.form_title": "إستمارة الإنخراط – Formulaire d'Adhésion",
    "adh_page.form_desc": "قم بتحميل وملء وإمضاء استمارة الانخراط الرسمية في الغرفة الولائية للتجارة والصناعة متيجة – البليدة (CCI Mitidja-Blida). الاستمارة متوفرة بصيغة PDF جاهزة للطباعة، وبصيغة Word (.docx) قابلة للتعديل، وعبر Google Docs.",
    "adh_page.form_item1": "1. معلومات الهوية والتعريف بالمؤسسة (السجل التجاري، NIF، AI، الهاتف والعنوان)",
    "adh_page.form_item2": "2. النشاط الرئيسي، المنتجات المصنعة، قدرة الإنتاج والتصدير",
    "adh_page.form_item3": "3. عدد العمال، رقم الأعمال، إمضاء المسير وختم الشركة",
    "adh_page.form_btn_pdf": "تحميل استمارة الانخراط (PDF)",
    "adh_page.form_btn_word": "تحميل بصيغة Word (.docx)",
    "adh_page.form_btn_gdocs": "فتح عبر Google Docs",
    "adh_page.form_preview_caption": "انقر على المعاينة لفتح ملف PDF بحجم كامل",
    "adh_page.form_sidebar_title": "إستمارة الإنخراط",
    "adh_page.d0": "استمارة الانخراط مملوءة وممضاة ومختومة",

    "missions_page.hero_title": "مهمتنا، أهم 5 التزاماتنا والتكوينات المهنية",
    "missions_page.diff_full": "نحن لا نقيس نجاحنا بعدد التظاهرات المنظمة، بل نقيسه بـ: عدد علاقات الأعمال المنجزة، الشراكات البينية المبرمة بين المتعاملين الاقتصاديين المنخرطين، وفرص الأعمال المستحدثة لتطوير نشاطهم.",

    "pres_page.hero_title": "تقديم غرفة التجارة والصناعة متيجة البليدة",
    "pres_page.who_title": "من نحن؟",
    "pres_page.who_p1": "الغرفة الولائية للتجارة والصناعة متيجة-البليدة (CCI Mitidja-Blida) هي غرفة ولائية تابعة للغرفة الجزائرية للتجارة والصناعة (CACI)، طبقا لأحكام المرسوم التنفيذي رقم 22-83 المؤرخ في 26 فيفري 2022 المتضمن إعادة تنظيم الغرفة الجزائرية للتجارة والصناعة. وتندرج ضمن الإطار المؤسساتي للغرفة الجزائرية للتجارة والصناعة الموضوعة تحت وصاية الوزارة المكلفة بالتجارة.",
    "pres_page.who_p2": "في قلب التنمية الاقتصادية لمنطقة متيجة، تشكل غرفة التجارة والصناعة متيجة-البليدة فاعلا جواريا وشريكا استراتيجيا للمتعاملين الاقتصاديين لولاية البليدة.",
    "pres_page.who_p3": "باعتبارها غرفة تخلق القيمة لمنخرطيها، تساهم في ترقية ومرافقة وتطوير المؤسسات، مع تمثيل مصالحها لدى السلطات العمومية المحلية.",
    "pres_page.who_p4": "وتتوجه إلى كافة الفاعلين الاقتصاديين من تجار، صناعيين، مؤسسات صغيرة ومتوسطة، شركات ناشئة ومقدمي خدمات، وتعمل بفعالية لصالح التنمية الاقتصادية الإقليمية، الاستثمار، الابتكار وخلق الثروة.",
    "pres_page.zone_title": "الاختصاص الإقليمي وشبكة الغرفة الجزائرية (CACI)",
    "pres_page.zone_p1": "تغطي غرفة التجارة والصناعة متيجة البليدة النسيج الاقتصادي لمنطقة متيجة وولاية البليدة، وهي عضو فاعل في الشبكة الوطنية لغرف التجارة والصناعة الجزائرية تحت إشراف الغرفة الجزائرية للتجارة والصناعة (CACI).",

    "cert_page.hero_title": "شهادة المنشأ، شهادة التصنيع والمصادقة على الوثائق",
    "cert_page.s1_title": "استخراج شهادة المنشأ وشهادة التصنيع",
    "cert_page.s1_p1": "تتكفل الغرفة الولائية للتجارة والصناعة متيجة البليدة بإصدار شهادة المنشأ وشهادة التصنيع اللتين تثبتان أن البضائع والمنتجات قد تم إنتاجها أو تصنيعها في الجزائر.",
    "cert_page.s1_p2": "تعتبر هذه الوثائق الرسمية ضرورية لعمليات التصدير والمعاملات التجارية الوطنية والدولية وفقًا لتنظيمات الغرفة الجزائرية للتجارة والصناعة (CACI).",
    "cert_page.info": "يتيح لكم الانخراط في غرفة التجارة والصناعة متيجة البليدة الاستفادة من المرافقة المباشرة لاستخراج شهادة المنشأ وشهادة التصنيع والمصادقة على الوثائق التجارية والدعوات المهنية.",
    "cert_page.docs_title": "الوثائق المطلوبة",
    "cert_page.doc1": "استمارة طلب شهادة المنشأ مملوءة وممضاة",
    "cert_page.doc2": "الفاتورة التجارية النهائية (الأصلية + نسخ)",
    "cert_page.doc3": "تصريح بالمنشأ من المنتج أو المصدر",
    "cert_page.doc4": "نسخة من السجل التجاري (ساري المفعول) والبطاقة الجبائية",
    "cert_page.doc5": "قائمة التعبئة (Packing list) تبين تفاصيل البضاعة",
    "cert_page.leg_title": "المصادقة على الوثائق التجارية والدعوات المهنية",
    "cert_page.leg_p1": "تضمن غرفة التجارة والصناعة متيجة البليدة المصادقة على الوثائق التجارية (الفواتير، العقود، الشهادات التجارية) بالإضافة إلى المصادقة على الدعوات المهنية لفائدة الشركاء والمتعاملين الأجانب.",
    "cert_page.contact_title": "الاتصال بالمصلحة",

    "news_page.hero_title": "المستجدات، البرامج والتظاهرات الاقتصادية",
    "news_page.n1.title": "إطلاق برنامج تواصل الأعمال (Business Connect) ولقاءات المتعاملين الاقتصاديين B2B",
    "news_page.n1.text": "تربط غرفة التجارة والصناعة متيجة البليدة بين المؤسسات التي تلبي احتياجاتها مع حلول مناسبة: المؤسسات الكبرى والصغرى والمتوسطة والناشئة والصناعية لتفضيل العقود المحلية.",
    "news_page.n2.title": "دورات تكوينية مهنية: الذكاء الاصطناعي، التسيير، المحاسبة، التسويق الرقمي و HACCP",
    "news_page.n2.text": "طوروا مهاراتكم وعززوا أداء مؤسساتكم مع خبرائنا المؤهلين في الذكاء الاصطناعي، الإدارة، الجباية، التسويق الرقمي، الموارد البشرية، معايير HACCP وتقنيات البيع.",
    "news_page.n3.title": "حملة الانخراط السنوي في الغرفة الولائية للتجارة والصناعة متيجة – البليدة",
    "news_page.n3.text": "انخرط اليوم (1000 دج للشخص الطبيعي / 3000 دج للشخص المعنوي) واستفد من مزايا الانخراط التسع والمرافقة المؤسساتية للغرفة."
  },

  en: {
    "meta.home_title": "CCI Mitidja-Blida – Chamber of Commerce and Industry",
    "meta.adhesion_title": "Membership – CCI Mitidja-Blida",
    "meta.missions_title": "Mission, 5 Commitments & Training – CCI Mitidja-Blida",
    "meta.pres_title": "About Us – CCI Mitidja-Blida",
    "meta.cert_title": "Certificate of Origin, Manufacture & Legalization – CCI Mitidja-Blida",
    "meta.news_title": "News & Events – CCI Mitidja-Blida",
    "meta.contact_title": "Contact Us – CCI Mitidja-Blida",

    "topbar.phone": "Tel/Fax: 020 49 18 28 | Mob: 0661 61 32 05",
    "brand.short": "CCI MITIDJA - BLIDA",
    "brand.sub": "Chamber of Commerce and Industry of Mitidja-Blida",

    "nav.home": "Home",
    "nav.chamber": "The Chamber",
    "nav.presentation": "About Us",
    "nav.missions": "Our Mission & 5 Commitments",
    "nav.difference": "Our Difference & Ambition",
    "nav.services": "Services & Training",
    "nav.cert_origin": "Certificate of Origin & Manufacture",
    "nav.legalisation": "Document Legalization & Invitations",
    "nav.formations": "Professional Training",
    "nav.b2b": "Business Connect & B2B Meetings",
    "nav.adhesion": "Membership",
    "nav.news": "News & Events",
    "nav.contact": "Contact",

    "hero.s1.badge": "CCI Mitidja-Blida – The network of businesses shaping the future",
    "hero.s1.title": "Connect. Develop.<br /><strong>Represent.</strong>",
    "hero.s1.subtitle": "A Chamber that creates value for its businesses. CCI Mitidja-Blida supports companies across the region at every stage of their development.",
    "hero.s1.cta1": "Join the Chamber",
    "hero.s1.cta2": "Our 5 Commitments",

    "hero.s2.badge": "Our 5 Key Commitments",
    "hero.s2.title": "Business Connect &<br /><strong>Buyer–Supplier B2B Meetings</strong>",
    "hero.s2.subtitle": "We connect companies that have needs with those that have solutions: B2B meetings, Business Challenges, company visits, and the Blida Business Council.",
    "hero.s2.cta1": "Explore Our Commitments",
    "hero.s2.cta2": "Contact Us",

    "hero.s3.badge": "Membership & Professional Training",
    "hero.s3.title": "Join Today &<br /><strong>Grow Your Business Activity</strong>",
    "hero.s3.subtitle": "Together for a strong economy: benefit from tailored training programs, Certificates of Origin and Manufacture, and an active economic network.",
    "hero.s3.cta1": "Membership File & Fees",
    "hero.s3.cta2": "Services & Documents",

    "stats.engagements": "Key B2B Commitments",
    "stats.formations": "Professional Training Tracks",
    "stats.physique": "Individual Membership / Year",
    "stats.morale": "Corporate Membership / Year",

    "mission.title": "OUR MISSION",
    "mission.lead": "CCI Mitidja-Blida supports companies in the region at every stage of their growth by:",
    "mission.p1": "Creating business opportunities",
    "mission.p2": "Facilitating exchanges between economic operators",
    "mission.p3": "Supporting development projects",
    "mission.p4": "Representing business interests before institutions",

    "ambition.title": "OUR AMBITION",
    "ambition.text": "To make CCI Mitidja-Blida the leading trusted economic network in the region, where every member finds opportunities, partners, and concrete support for sustainable development.",

    "eng.tag": "A Chamber That Creates Value",
    "eng.title": "Our 5 Commitments & Our Difference",
    "eng.desc": "Concrete actions to connect economic operators, foster local contracts, and be the voice of businesses in Mitidja-Blida.",
    "eng.e1.title": "1. BUSINESS CONNECT",
    "eng.e1.text": "We connect businesses that have needs with those that have solutions (suppliers, clients, subcontractors, industrial partners, service providers).",
    "eng.e2.title": "2. BUYER – SUPPLIER MEETINGS",
    "eng.e2.text": "B2B meetings between large corporations, SMEs, startups, and manufacturers. Objective: promote local contracts.",
    "eng.e3.title": "3. BUSINESS CHALLENGES",
    "eng.e3.text": "Companies present a concrete challenge. Members contribute their ideas and solutions. The Chamber ensures follow-up on matchmaking.",
    "eng.e4.title": "4. COMPANY VISITS",
    "eng.e4.text": "Discover local success stories. Share best practices. Build industrial and commercial collaborations.",
    "eng.e5.title": "5. BLIDA BUSINESS COUNCIL",
    "eng.e5.text": "The Chamber gathers business concerns, analyzes them, and conveys them to the competent authorities. Our role is also to be the voice of businesses.",
    "eng.diff.title": "OUR DIFFERENCE",
    "eng.diff.lead": "We do not measure our success by the number of events organized. We measure it by:",
    "eng.diff.p1": "The number of business connections made",
    "eng.diff.p2": "The partnerships created between members",
    "eng.diff.p3": "The business opportunities generated for their development",

    "services.tag": "Our Services & Benefits",
    "services.title": "CCI Mitidja-Blida Services",
    "services.desc": "Under the supervision of CACI, CCI Mitidja-Blida provides a complete range of official, administrative, and economic services.",
    "services.c1.title": "Certificate of Origin & Manufacture",
    "services.c1.text": "Issuance of Certificates of Origin and Certificates of Manufacture for your commercial and export operations.",
    "services.c2.title": "Legalization & Business Invitations",
    "services.c2.text": "Legalization of commercial documents and professional invitations for your national and international partners.",
    "services.c3.title": "Professional Training",
    "services.c3.text": "Practical training across various fields led by qualified experts to build skills and support your company's growth.",
    "services.c4.title": "National & International Fairs and Exhibitions",
    "services.c4.text": "Participation in national and international trade fairs, targeted B2B meetings, and promotion via the Chamber's platforms.",
    "services.c5.title": "Advisory, Guidance & Legal Watch",
    "services.c5.text": "Information, guidance, consulting, and continuous monitoring of legal and regulatory developments for economic operators.",
    "services.c6.title": "Representation & Partner Discounts",
    "services.c6.text": "Representation and defense of merchants' interests before bodies and committees, plus exclusive offers and discounts with our partners.",

    "common.read_more": "Learn more",

    "form.tag": "Skills Development",
    "form.title": "Professional Training Programs",
    "form.desc": "Develop skills, strengthen performance, and support your company's growth.",
    "form.f1": "Artificial intelligence and digital transformation",
    "form.f2": "Business management and leadership",
    "form.f3": "Accounting and taxation",
    "form.f4": "Digital marketing and communication",
    "form.f5": "Human resources",
    "form.f6": "Hygiene, safety, and HACCP standards",
    "form.f7": "Trade, negotiation, and sales techniques",
    "form.f8": "International trade: Import and Export",
    "form.f9": "Business English",
    "form.f10": "Advanced Excel Training – November 15, 16 & 17, 2026 (BCRD – Blida 1 University)",
    "form.excel.date": "November 15 – 16 – 17, 2026",
    "form.excel.loc": "BCRD – Blida 1 University",
    "form.excel.title": "Training: Advanced Excel (Excel Avancé)",
    "form.excel.sub": "Master advanced Excel tools to take your productivity further!",
    "form.excel.obj_title": "Training Objectives",
    "form.excel.obj1": "Master advanced functions and formulas",
    "form.excel.obj2": "Leverage Pivot Tables effectively",
    "form.excel.obj3": "Build data analyses and interactive dashboards",
    "form.excel.obj4": "Automate tasks using Macros",
    "form.excel.pub_title": "Target Audience",
    "form.excel.pub1": "Executives and department heads",
    "form.excel.pub2": "Management and data analysis professionals",
    "form.excel.pub3": "Anyone looking to deepen their Excel skills",
    "form.excel.slogan": "Invest in your skills, boost your performance!",
    "form.excel.cta": "Register Now!",
    "form.excel.view_btn": "Go to Training Page",
    "form.excel.access_btn": "Access Training",
    "form.excel.cancel_btn": "Cancel",
    "form.reg.title": "Training Registration Form",
    "form.reg.phone_label": "Phone *",
    "form.reg.select_label": "Selected Training *",
    "form.reg.msg_label": "Message / Number of participants (optional)",
    "form.reg.msg_ph": "Specify the number of participants or your specific needs...",
    "form.reg.submit": "Confirm My Training Registration",
    "form.reg.success": "✅ Your training registration has been recorded successfully. CCI Mitidja-Blida will contact you shortly.",
    "form.register_badge": "Register",
    "form.pillars_title": "Our Training Guarantees",
    "form.p1": "Qualified experts",
    "form.p2": "Practical and tailored training",
    "form.p3": "Personalized support",
    "form.cta_text": "Would you like to enroll your team or organize a custom training session for your company?",
    "form.cta_btn": "Request Training Program",

    "adh_home.tag": "CCI Mitidja-Blida Membership",
    "adh_home.title": "Why Join Us?",
    "adh_home.desc": "Join today and grow your commercial activity – Together for a strong economy. Your membership gives you access to:",
    "adh_home.w1": "Business opportunities",
    "adh_home.w2": "An active economic network",
    "adh_home.w3": "Qualified partners",
    "adh_home.w4": "Targeted B2B meetings",
    "adh_home.w5": "Greater visibility & advertising",
    "adh_home.w6": "Institutional support",
    "adh_home.w7": "Representation before public authorities, bodies, and committees",
    "adh_home.btn_dossier": "View Full Membership File",
    "adh_home.btn_contact": "Contact Us",
    "adh_home.t1.title": "Individual (Natural Person)",
    "adh_home.t2.title": "Legal Entity (Company)",
    "adh_home.currency": "DZD",
    "adh_home.period": "Annual Membership Fee",
    "adh_home.join_btn": "Join Now",

    "brochures.tag": "Official Documentation",
    "brochures.title": "Our Brochures & Information Materials",
    "brochures.desc": "View and download our official brochures in French and Arabic as well as the CCI Mitidja-Blida membership guide.",
    "brochures.b1.title": "Official Brochure (FR)",
    "brochures.b1.sub": "Mission, 5 Commitments & Training",
    "brochures.b2.title": "Official Brochure (AR)",
    "brochures.b2.sub": "Mission, 5 Commitments & Training in Arabic",
    "brochures.b3.title": "Membership Guide (FR / AR)",
    "brochures.b3.sub": "Annual Fees, Benefits & Required Documents",
    "brochures.b4.title": "Official Business Card",
    "brochures.b4.sub": "Contact Details & CCI QR Code",

    "qlinks.tag": "Quick Access",
    "qlinks.title": "Services & Quick Access",
    "qlinks.l1": "2026 Membership Form",
    "qlinks.l2": "Certificate of Origin & Legalization",
    "qlinks.l3": "Professional Training",
    "qlinks.l4": "Business Connect & B2B Meetings",

    "contact.find_us": "Contact Us",
    "contact.address_label": "Headquarters Address",
    "contact.address_val": "35, Cité Mouloud Sidi Abdelkader, Blida, Algeria",
    "contact.mobile_label": "Mobile",
    "contact.phone_label": "Phone / Fax",
    "contact.email_label": "Official Emails",
    "contact.web_label": "Website",
    "contact.form_title": "Write to Us",
    "contact.f_name": "Full Name *",
    "contact.f_name_ph": "Your full name",
    "contact.f_email": "Email *",
    "contact.f_email_ph": "your@email.com",
    "contact.f_phone": "Phone",
    "contact.f_company": "Company / Organization",
    "contact.f_company_ph": "Your company name",
    "contact.f_subject": "Subject *",
    "contact.f_subj_choose": "-- Select a subject --",
    "contact.f_subj_adh": "Membership at CCI Mitidja-Blida",
    "contact.f_subj_cert": "Certificate of Origin / Manufacture",
    "contact.f_subj_leg": "Document Legalization & Business Invitations",
    "contact.f_subj_form": "Professional Training",
    "contact.f_subj_b2b": "Business Connect & B2B Meetings",
    "contact.f_subj_other": "Other inquiry",
    "contact.f_msg": "Message (optional)",
    "contact.f_msg_ph": "Your message...",
    "contact.f_submit": "Send Message",
    "contact.err_empty": "Please fill in all required fields.",
    "contact.err_email": "Please enter a valid email address.",
    "contact.sending": "Sending...",
    "contact.success": "✅ Your message has been sent successfully. CCI Mitidja-Blida will get back to you shortly.",

    "footer.desc": "At the heart of the economic development of Mitidja. A Chamber that creates value for its businesses, under the supervision of the Algerian Chamber of Commerce and Industry (CACI).",
    "footer.copy": "© 2026 Chamber of Commerce and Industry of Mitidja-Blida (CCI Mitidja-Blida). All rights reserved.",

    "adh_page.hero_title": "Membership at CCI Mitidja-Blida",
    "adh_page.hero_sub": "Join today and grow your commercial activity – Together for a strong economy",
    "adh_page.fee_tag": "Annual Membership Fee",
    "adh_page.fee_title": "Annual Membership Rates",
    "adh_page.per_year": "Per year",
    "adh_page.t1_f1": "Individual merchants & traders",
    "adh_page.t1_f2": "Craftspeople & professionals",
    "adh_page.t1_f3": "Independent service providers",
    "adh_page.t1_f4": "Access to all CCI services and benefits",
    "adh_page.t2_f1": "Companies & Corporations (SARL, SPA, EURL, SNC…)",
    "adh_page.t2_f2": "Industrialists, SMEs, SMIs & Startups",
    "adh_page.t2_f3": "Importers, exporters & business groups",
    "adh_page.t2_f4": "All services, B2B matchmaking & partner discounts",
    "adh_page.ben_tag": "Membership Benefits",
    "adh_page.ben_title": "The 9 Exclusive Benefits of Our Members",
    "adh_page.b1": "Participation in national and international fairs and exhibitions",
    "adh_page.b2": "Training courses in various fields",
    "adh_page.b3": "Issuance of Certificate of Origin and Certificate of Manufacture",
    "adh_page.b4": "Legalization of commercial documents and business invitations",
    "adh_page.b5": "Representation and defense of merchants' interests before bodies and committees",
    "adh_page.b6": "Information, guidance, and advisory services",
    "adh_page.b7": "Exclusive offers and discounts with our partners",
    "adh_page.b8": "Advertising and promotion via the Chamber's platforms",
    "adh_page.b9": "Monitoring of legal and regulatory developments",
    "adh_page.why_intro": "Joining the Chamber is not merely a formality—it is a strategic investment in your company's future. Your membership gives you access to:",
    "adh_page.dos_tag": "Required Documents",
    "adh_page.dos_title": "Membership Application File",
    "adh_page.d1": "A copy of the Trade Register (up to date)",
    "adh_page.d2": "A copy of the National Identity Card or Passport",
    "adh_page.d3": "A copy of the Tax Card (Carte Fiscale)",
    "adh_page.d4": "Two recent passport-size photos",
    "adh_page.d5": "Payment receipt or bank transfer notice of the membership fee (as applicable)",
    "adh_page.info_box": "To submit your membership application file or request additional information, visit the CCI Mitidja-Blida headquarters: 35, Cité Mouloud Sidi Abdelkader, Blida. Tel/Fax: 020 49 18 28 | Mob: 0661 61 32 05 | Email: ccimitidja.20@gmail.com",
    "adh_page.poster_title": "Official Membership Poster",
    "adh_page.form_tag": "Official Document 2026",
    "adh_page.form_title": "Membership Application Form – إستمارة الإنخراط",
    "adh_page.form_desc": "Download, complete, and sign the official membership application form of the Chamber of Commerce and Industry of Mitidja-Blida (CCI Mitidja-Blida). Available as a print-ready PDF, editable Word (.docx), and on Google Docs.",
    "adh_page.form_item1": "1. Company identification (Trade Register, NIF, AI, contact details)",
    "adh_page.form_item2": "2. Main activity, manufactured products, production capacity & export",
    "adh_page.form_item3": "3. Workforce, annual turnover, manager's signature & company stamp",
    "adh_page.form_btn_pdf": "Download Form (PDF)",
    "adh_page.form_btn_word": "Download Word (.docx)",
    "adh_page.form_btn_gdocs": "Open in Google Docs",
    "adh_page.form_preview_caption": "Click the preview to open the full-screen PDF",
    "adh_page.form_sidebar_title": "Membership Form",
    "adh_page.d0": "Duly completed and signed Membership Application Form (إستمارة الإنخراط)",

    "missions_page.hero_title": "Our Mission, 5 Commitments & Professional Training",
    "missions_page.diff_full": "We do not measure our success by the number of events organized. We measure it by: the number of business connections made, the partnerships created between members, and the business opportunities generated for their development.",

    "pres_page.hero_title": "About CCI Mitidja-Blida",
    "pres_page.who_title": "Who We Are",
    "pres_page.who_p1": "The Chamber of Commerce and Industry of Mitidja-Blida (CCI Mitidja-Blida) is a Wilaya Chamber under the Algerian Chamber of Commerce and Industry (CACI), in accordance with the provisions of Executive Decree No. 22-83 of February 26, 2022 reorganizing the Algerian Chamber of Commerce and Industry. It operates within the institutional framework of CACI, placed under the supervision of the Ministry in charge of Trade.",
    "pres_page.who_p2": "At the heart of the economic development of the Mitidja region, CCI Mitidja-Blida serves as a local actor and strategic partner for the economic operators of the Wilaya of Blida.",
    "pres_page.who_p3": "As a Chamber that creates value for its members, it contributes to promoting, supporting, and developing businesses while representing their interests before local public authorities.",
    "pres_page.who_p4": "It serves all economic actors—merchants, industrialists, SMEs/SMIs, startups, and service providers—and actively works toward territorial economic development, investment, innovation, and wealth creation.",
    "pres_page.zone_title": "Our Jurisdiction & CACI Network",
    "pres_page.zone_p1": "CCI Mitidja-Blida covers the economic territory of the Mitidja region and the Wilaya of Blida. It is a member of the national network of Algerian Chambers of Commerce and Industry coordinated by CACI.",

    "cert_page.hero_title": "Certificate of Origin, Manufacture & Legalization",
    "cert_page.s1_title": "Issuance of Certificate of Origin and Certificate of Manufacture",
    "cert_page.s1_p1": "The Chamber of Commerce and Industry of Mitidja-Blida (CCI Mitidja-Blida) issues the Certificate of Origin and Certificate of Manufacture certifying that goods were produced, manufactured, or underwent substantial transformation in Algeria.",
    "cert_page.s1_p2": "These official documents are essential for export operations and national and international commercial transactions, in accordance with the regulations of the Algerian Chamber of Commerce and Industry (CACI).",
    "cert_page.info": "Membership in CCI Mitidja-Blida entitles you to direct support from our departments for issuing your Certificates of Origin, Certificates of Manufacture, and legalizing your commercial documents.",
    "cert_page.docs_title": "Required Documents (Certificate of Origin)",
    "cert_page.doc1": "Duly completed and signed Certificate of Origin application form",
    "cert_page.doc2": "Final commercial invoice (original + copies)",
    "cert_page.doc3": "Producer's or exporter's declaration of origin",
    "cert_page.doc4": "Copy of up-to-date Trade Register and Tax Card",
    "cert_page.doc5": "Packing list detailing the goods",
    "cert_page.leg_title": "Legalization of Commercial Documents & Business Invitations",
    "cert_page.leg_p1": "CCI Mitidja-Blida also provides legalization and authentication of commercial documents (invoices, contracts, commercial certificates) as well as legalization of professional invitations for your international partners.",
    "cert_page.contact_title": "Department Contact",

    "news_page.hero_title": "News, Programs & Economic Events",
    "news_page.n1.title": "Launch of Business Connect & Buyer–Supplier B2B Meetings",
    "news_page.n1.text": "CCI Mitidja-Blida connects companies that have needs with those that have solutions: large corporations, SMEs, startups, and industrialists to foster local contracts.",
    "news_page.n2.title": "Professional Training Cycles: AI, Management, Taxation & HACCP",
    "news_page.n2.text": "Develop your skills with our qualified experts: Artificial Intelligence, Business Management, Accounting, Digital Marketing, HR, HACCP, and Sales Techniques.",
    "news_page.n3.title": "Annual Membership Campaign at CCI Mitidja-Blida",
    "news_page.n3.text": "Join today (1,000 DZD for individuals / 3,000 DZD for companies) and benefit from our 9 exclusive advantages and institutional support."
  }
};

let currentLang = 'fr';

function applyLanguage(lang) {
  if (!TRANSLATIONS[lang]) lang = 'fr';
  currentLang = lang;
  try {
    localStorage.setItem('cci_lang', lang);
  } catch (_) {}

  const dict = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');

  // Update active state on language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const btnLang = (btn.getAttribute('data-lang') || btn.textContent.trim().toLowerCase());
    btn.classList.toggle('active', btnLang === lang);
  });

  // Translate plain text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // Translate HTML nodes (e.g. hero titles with <br> and <strong>)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Translate input/textarea placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Keep formation links pointing directly to the Formation Registration Form (#inscription-formation)
  document.querySelectorAll('a.formation-item, #missionsFormationsList a.doc-item--link').forEach(a => {
    a.setAttribute('href', '#inscription-formation');
  });
}

/* ---- Initialize Language Switcher ---- */
(function initLang() {
  let saved = 'fr';
  try {
    saved = localStorage.getItem('cci_lang') || 'fr';
  } catch (_) {}

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = (btn.getAttribute('data-lang') || btn.textContent.trim().toLowerCase());
      applyLanguage(lang);
    });
  });

  applyLanguage(saved);
})();

/* ---- Hero Slider ---- */
(function initSlider() {
  const slides  = document.querySelectorAll('.hero__slide');
  const dots    = document.querySelectorAll('.hero__dot');
  const btnPrev = document.getElementById('heroPrev');
  const btnNext = document.getElementById('heroNext');
  if (!slides.length) return;

  let current = 0;
  let timer   = null;

  function goTo(idx) {
    slides[current].classList.remove('hero__slide--active');
    dots[current].classList.remove('hero__dot--active');
    current = (idx + slides.length) % slides.length;
    slides[current].classList.add('hero__slide--active');
    dots[current].classList.add('hero__dot--active');
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAuto() {
    clearInterval(timer);
    timer = setInterval(next, 5500);
  }

  btnNext && btnNext.addEventListener('click', () => { next(); startAuto(); });
  btnPrev && btnPrev.addEventListener('click', () => { prev(); startAuto(); });
  dots.forEach((dot, i) => dot.addEventListener('click', () => { goTo(i); startAuto(); }));

  startAuto();
})();

/* ---- Sticky Header ---- */
(function initStickyHeader() {
  const header = document.getElementById('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 20
      ? '0 4px 20px rgba(0,0,0,.15)'
      : '';
  }, { passive: true });
})();

/* ---- Hamburger / Mobile Nav & Smooth Hash Navigation ---- */
(function initMobileNav() {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  if (!btn || !nav) return;

  function closeMenu() {
    nav.classList.remove('is-open');
    btn.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
  }

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = nav.classList.toggle('is-open');
    btn.classList.toggle('is-open', isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  // Always close mobile menu when clicking any link inside #nav
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !btn.contains(e.target)) {
      closeMenu();
    }
  });
})();

/* ---- Smooth Same-Page Anchor Scrolling (handles Clean URLs without .html) ---- */
(function initSmoothHashLinks() {
  function normalizePath(p) {
    return (p || '/')
      .replace(/\/index\.html$/i, '/')
      .replace(/\.html$/i, '')
      .replace(/\/+$/, '') || '/';
  }

  function scrollToHash(hash, smooth) {
    if (!hash || hash === '#') return false;
    const id = decodeURIComponent(hash.replace(/^#/, ''));
    const target = document.getElementById(id);
    if (!target) return false;
    target.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
    return true;
  }

  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const rawHref = link.getAttribute('href') || '';
    if (rawHref === '#') {
      e.preventDefault();
      return;
    }
    if (!rawHref.includes('#')) return;

    let url;
    try {
      url = new URL(link.href, window.location.href);
    } catch (_) {
      return;
    }
    if (url.origin !== window.location.origin) return;

    const currentPath = normalizePath(window.location.pathname);
    const targetPath  = normalizePath(url.pathname);

    if (currentPath === targetPath && url.hash) {
      if (scrollToHash(url.hash, true)) {
        e.preventDefault();
        try {
          history.replaceState(null, '', url.hash);
        } catch (_) {}
      }
    }
  });

  window.__cciScrollToHash = scrollToHash;

  let userHasInteracted = false;
  ['touchstart', 'mousedown', 'wheel', 'keydown', 'focusin'].forEach(evt => {
    window.addEventListener(evt, () => { userHasInteracted = true; }, { passive: true, once: true });
  });

  function isFormElementFocused() {
    const active = document.activeElement;
    if (!active) return false;
    const tag = active.tagName;
    return tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA';
  }

  let initialHashHandled = false;
  function triggerInitialHashScroll() {
    if (initialHashHandled || userHasInteracted || isFormElementFocused()) return;
    if (window.location.hash && window.location.hash.length > 1) {
      initialHashHandled = true;
      scrollToHash(window.location.hash, false);
    }
  }

  if (window.location.hash && window.location.hash.length > 1) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', triggerInitialHashScroll, { once: true });
    } else {
      triggerInitialHashScroll();
    }
  }
})();

/* ---- Animated Counters (Stats Bar) ---- */
(function initCounters() {
  const items = document.querySelectorAll('.stat-item[data-count]');
  if (!items.length) return;

  function animateCount(el, target) {
    const numEl = el.querySelector('.stat-item__num');
    if (!numEl) return;
    const duration = 1200;
    const step     = 16;
    const steps    = duration / step;
    const inc      = target / steps;
    let current    = 0;

    const tick = setInterval(() => {
      current += inc;
      if (current >= target) {
        current = target;
        clearInterval(tick);
      }
      numEl.textContent = Math.floor(current).toLocaleString('fr-DZ');
    }, step);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target, parseInt(entry.target.dataset.count, 10));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  items.forEach(item => observer.observe(item));
})();

/* ---- Back to Top ---- */
(function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('is-visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ---- Contact Form ---- */
(function initContactForm() {
  const form     = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  if (!form) return;

  // Pre-fill subject and training topic from URL query parameters (?sujet=formation&formation=...)
  try {
    const params = new URLSearchParams(window.location.search);
    const rawSujet = (params.get('sujet') || '').trim().toLowerCase();
    const formationTopic = (params.get('formation') || '').trim();
    const sujetSelect = document.getElementById('sujet');
    const msgArea = document.getElementById('message');

    if (sujetSelect && (rawSujet || formationTopic)) {
      const normalizedSujet = (rawSujet === 'formations' || (!rawSujet && formationTopic)) ? 'formation' : rawSujet;
      const optExists = Array.from(sujetSelect.options).some(o => o.value === normalizedSujet);
      if (optExists) sujetSelect.value = normalizedSujet;
    }

    if (msgArea && formationTopic && !msgArea.value.trim()) {
      if (currentLang === 'ar') {
        msgArea.value = `تحية طيبة، أود الحصول على برنامج وتفاصيل التسجيل في الدورة التكوينية: « ${formationTopic} ».`;
      } else if (currentLang === 'en') {
        msgArea.value = `Hello, I would like to receive the program and registration details for the training course: "${formationTopic}".`;
      } else {
        msgArea.value = `Bonjour, je souhaite obtenir le programme et les modalités d'inscription pour la formation : « ${formationTopic} ».`;
      }
    }

    if (rawSujet || formationTopic) {
      setTimeout(() => {
        const card = form.closest('.contact-form-card') || form;
        const header = document.getElementById('header');
        const offset = (header ? header.offsetHeight : 78) + 20;
        const top = card.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      }, 150);
    }
  } catch (_) {}

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
    const data = new FormData(form);
    const nom  = data.get('nom')?.trim();
    const mail = data.get('email')?.trim();

    if (!nom || !mail) {
      showFeedback(dict['contact.err_empty'], 'error');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
      showFeedback(dict['contact.err_email'], 'error');
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> <span>${dict['contact.sending']}</span>`;

    setTimeout(() => {
      showFeedback(dict['contact.success'], 'success');
      form.reset();
      btn.disabled = false;
      btn.innerHTML = `<i class="fas fa-paper-plane"></i> <span data-i18n="contact.f_submit">${dict['contact.f_submit']}</span>`;
    }, 1200);
  });

  function showFeedback(msg, type) {
    if (!feedback) return;
    feedback.textContent = msg;
    feedback.className   = 'form-feedback ' + type;
    feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
})();

/* ---- Lightbox Modal for Official Brochures ---- */
(function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  const img   = document.getElementById('lightboxImg');
  const close = document.getElementById('lightboxClose');
  const cards = document.querySelectorAll('[data-lightbox]');
  if (!modal || !img || !cards.length) return;

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const src = card.getAttribute('data-lightbox');
      img.src = src;
      modal.classList.add('is-open');
    });
  });

  function closeModal() {
    modal.classList.remove('is-open');
    img.src = '';
  }

  close && close.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });
})();

/* ---- Ensure All Cards & Sections Are Immediately Visible ---- */
(function initReveal() {
  const els = document.querySelectorAll(
    '.service-card, .eng-card, .formation-item, .stat-item, .qlink-card, .brochure-card, .avantage-card, .news-card'
  );
  els.forEach(el => {
    el.style.opacity   = '1';
    el.style.transform = 'none';
  });
})();

/* ---- Pop-up Affiche Formation Excel Avancé (sur l'Accueil index.html) ---- */
(function initFormationPopup() {
  const modal     = document.getElementById('formationPopupModal');
  const closeBtn  = document.getElementById('formationPopupClose');
  const cancelBtn = document.getElementById('formationPopupCancel');
  const accessBtn = document.getElementById('formationPopupAccess');
  if (!modal) return;

  function closePopupAndStayOnHome() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function closePopupAndGoToFormation(e) {
    if (e) e.preventDefault();
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    const regCard = document.getElementById('inscription-formation') || document.getElementById('formations');
    if (regCard) {
      regCard.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }

  // "Annuler" and the "×" cross simply close the pop-up and stay on Accueil (index.html)
  closeBtn && closeBtn.addEventListener('click', closePopupAndStayOnHome);
  cancelBtn && cancelBtn.addEventListener('click', closePopupAndStayOnHome);

  // "Accéder à la formation" closes the pop-up and jumps directly to the Registration Form (#inscription-formation)
  accessBtn && accessBtn.addEventListener('click', closePopupAndGoToFormation);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closePopupAndStayOnHome();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closePopupAndStayOnHome();
    }
  });
})();

/* ---- Formulaire d'Inscription Directe aux Formations ---- */
(function initFormationRegistrationForm() {
  const form     = document.getElementById('formationRegForm');
  const feedback = document.getElementById('regFormFeedback');
  const selectEl = document.getElementById('regFormation');
  if (!form) return;

  // Pre-select formation from query parameter (?formation_key=form.f1, etc.)
  try {
    const params = new URLSearchParams(window.location.search);
    const fKey = (params.get('formation_key') || '').trim();
    if (fKey && selectEl) {
      const opt = selectEl.querySelector(`option[data-i18n="${fKey}"]`);
      if (opt) selectEl.value = opt.value;
    }
  } catch (_) {}

  // Clicking a formation item selects it in the registration form and jumps to it
  document.querySelectorAll('a.formation-item, #missionsFormationsList a.doc-item--link').forEach(a => {
    a.addEventListener('click', (e) => {
      const span = a.querySelector('[data-i18n]');
      if (span && selectEl) {
        e.preventDefault();
        const key = span.getAttribute('data-i18n');
        const matchingOpt = selectEl.querySelector(`option[data-i18n="${key}"]`);
        if (matchingOpt) {
          selectEl.value = matchingOpt.value;
        }
        const card = document.getElementById('inscription-formation');
        if (card) {
          card.scrollIntoView({ behavior: 'auto', block: 'start' });
        }
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
    const data = new FormData(form);
    const nom  = data.get('nom')?.trim();
    const tel  = data.get('tel')?.trim();
    const mail = data.get('email')?.trim();

    if (!nom || !tel || !mail) {
      if (feedback) {
        feedback.textContent = dict['contact.err_empty'];
        feedback.className   = 'form-feedback error';
      }
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
      if (feedback) {
        feedback.textContent = dict['contact.err_email'];
        feedback.className   = 'form-feedback error';
      }
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> <span>${dict['contact.sending']}</span>`;

    setTimeout(() => {
      if (feedback) {
        feedback.textContent = dict['form.reg.success'] || dict['contact.success'];
        feedback.className   = 'form-feedback success';
      }
      form.reset();
      btn.disabled = false;
      btn.innerHTML = `<i class="fas fa-paper-plane"></i> <span data-i18n="form.reg.submit">${dict['form.reg.submit']}</span>`;
    }, 900);
  });
})();


