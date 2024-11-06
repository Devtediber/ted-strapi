import type { Schema, Attribute } from '@strapi/strapi';

export interface BannerBannerAdvice extends Schema.Component {
  collectionName: 'components_banner_banner_advices';
  info: {
    displayName: 'Banner Advice';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text;
    link: Attribute.String & Attribute.Required;
    linkLabel: Attribute.String & Attribute.Required;
    advices: Attribute.Component<'card.card-advice', true> & Attribute.Required;
  };
}

export interface BannerBannerEdito extends Schema.Component {
  collectionName: 'components_banner_banner_editos';
  info: {
    displayName: 'Banner Edito';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    link: Attribute.String;
    color: Attribute.Enumeration<['beige', 'blue']> &
      Attribute.DefaultTo<'beige'>;
    textColor: Attribute.Enumeration<['blue', 'white']> &
      Attribute.DefaultTo<'blue'>;
    icon: Attribute.Enumeration<['french-brand']>;
    iconAlt: Attribute.String;
  };
}

export interface BannerBannerHero extends Schema.Component {
  collectionName: 'components_banner_banner_heroes';
  info: {
    displayName: 'Banner Hero';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    buttonLabel: Attribute.String & Attribute.Required;
    imageDesktop: Attribute.String & Attribute.Required;
    imageMobile: Attribute.String;
    videoDesktop: Attribute.String;
    videoMobile: Attribute.String;
  };
}

export interface BannerBannerLegal extends Schema.Component {
  collectionName: 'components_banner_banner_legals';
  info: {
    displayName: 'Banner Legal';
    icon: 'feather';
    description: '';
  };
  attributes: {
    subtitle: Attribute.String;
    content: Attribute.Text;
    paddingBottom: Attribute.Boolean & Attribute.DefaultTo<false>;
    color: Attribute.Enumeration<['white', 'cream']> &
      Attribute.DefaultTo<'white'>;
    title: Attribute.String;
  };
}

export interface BannerBannerMediaText extends Schema.Component {
  collectionName: 'components_banner_banner_media_texts';
  info: {
    displayName: 'Banner Media Text';
    description: '';
  };
  attributes: {
    overline: Attribute.String;
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    linkLabel: Attribute.String & Attribute.Required;
    media: Attribute.String & Attribute.Required;
    mediaSide: Attribute.Enumeration<['left', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'left'>;
    products: Attribute.Component<'catalog.product', true> &
      Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    backgroundColor: Attribute.Enumeration<['beige', 'blue', 'brown']> &
      Attribute.Required &
      Attribute.DefaultTo<'blue'>;
    autoplay: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface BannerBannerNewProduct extends Schema.Component {
  collectionName: 'components_banner_banner_new_products';
  info: {
    displayName: 'Banner New Product';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.String & Attribute.Required;
    text: Attribute.Text;
    link: Attribute.String & Attribute.Required;
    linkLabel: Attribute.String & Attribute.Required;
    chipsTitle: Attribute.String;
  };
}

export interface BannerBannerPro extends Schema.Component {
  collectionName: 'components_banner_banner_pros';
  info: {
    displayName: 'Banner Pro';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text & Attribute.Required;
    image: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    linkLabel: Attribute.String & Attribute.Required;
  };
}

export interface BannerBannerProductGlobalRating extends Schema.Component {
  collectionName: 'components_banner_banner_product_global_ratings';
  info: {
    displayName: 'Banner Product Global Rating';
    icon: 'star';
    description: '';
  };
  attributes: {
    score: Attribute.Decimal & Attribute.Required;
    ratingTitle: Attribute.String & Attribute.Required;
    longText: Attribute.Text & Attribute.Required;
    buttonLabel: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface BannerBannerProductRatingCustomer extends Schema.Component {
  collectionName: 'components_banner_banner_product_rating_customers';
  info: {
    displayName: 'Banner Product Rating Customer';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    longText: Attribute.Text & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    linkLabel: Attribute.String & Attribute.Required;
  };
}

export interface BannerBannerProductReview extends Schema.Component {
  collectionName: 'components_banner_banner_product_reviews';
  info: {
    displayName: 'Banner Product Review';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    ratings: Attribute.Component<'item.rating', true> & Attribute.Required;
  };
}

export interface BannerBannerReassurance extends Schema.Component {
  collectionName: 'components_banner_banner_reassurances';
  info: {
    displayName: 'Banner Reassurance';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    items: Attribute.Component<'item.reassurance', true> & Attribute.Required;
  };
}

export interface BannerBannerReview extends Schema.Component {
  collectionName: 'components_banner_banner_reviews';
  info: {
    displayName: 'Banner Review';
    description: '';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    claim: Attribute.String & Attribute.Required;
    score: Attribute.Decimal & Attribute.Required;
    reviewer: Attribute.String & Attribute.Required;
    buttonLabel: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    backgroundImage: Attribute.String & Attribute.Required;
    items: Attribute.Component<'item.review', true> &
      Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
  };
}

export interface BannerBannerSlider extends Schema.Component {
  collectionName: 'components_banner_banner_sliders';
  info: {
    displayName: 'Banner Slider';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
    items: Attribute.Component<'card.card-square', true> & Attribute.Required;
  };
}

export interface BannerBannerStory extends Schema.Component {
  collectionName: 'components_banner_banner_stories';
  info: {
    displayName: 'Banner Story';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    longText: Attribute.Text & Attribute.Required;
    imageDesktop: Attribute.String & Attribute.Required;
    imageMobile: Attribute.String & Attribute.Required;
    backgroundColorMobile: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface BannerCrossell extends Schema.Component {
  collectionName: 'components_banner_crossells';
  info: {
    displayName: 'crossell';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
    buttonLabel: Attribute.String & Attribute.Required;
  };
}

export interface BaseLink extends Schema.Component {
  collectionName: 'components_base_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface BaseTest extends Schema.Component {
  collectionName: 'components_base_tests';
  info: {
    displayName: 'text';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
  };
}

export interface BlocksRichContent extends Schema.Component {
  collectionName: 'components_blocks_rich_contents';
  info: {
    displayName: 'Rich Content';
  };
  attributes: {
    content: Attribute.RichText & Attribute.Required;
  };
}

export interface CardCardAdvice extends Schema.Component {
  collectionName: 'components_card_card_advices';
  info: {
    displayName: 'Card Advice';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    linkLabel: Attribute.String & Attribute.Required;
    cardColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface CardCardSquare extends Schema.Component {
  collectionName: 'components_card_card_squares';
  info: {
    displayName: 'Card Square';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.String & Attribute.Required;
    imageAlt: Attribute.String;
    link: Attribute.String;
  };
}

export interface CardChestnut extends Schema.Component {
  collectionName: 'components_card_chestnuts';
  info: {
    displayName: 'Chestnut';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    buttonLabel: Attribute.String & Attribute.Required;
    buttonLink: Attribute.String & Attribute.Required;
    position: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 3;
        },
        number
      >;
  };
}

export interface CatalogCategory extends Schema.Component {
  collectionName: 'components_catalog_categories';
  info: {
    displayName: 'Category';
    description: '';
  };
  attributes: {
    categoryCode: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
  };
}

export interface CatalogProduct extends Schema.Component {
  collectionName: 'components_catalog_products';
  info: {
    displayName: 'Product';
  };
  attributes: {
    productCode: Attribute.String & Attribute.Required;
  };
}

export interface CatalogUniverse extends Schema.Component {
  collectionName: 'components_catalog_universes';
  info: {
    displayName: 'Universe';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    image: Attribute.String & Attribute.Required;
    imageAlt: Attribute.String;
    link: Attribute.String & Attribute.Required;
    linkLabel: Attribute.String & Attribute.Required;
  };
}

export interface ChipsChips extends Schema.Component {
  collectionName: 'components_chips_chips';
  info: {
    displayName: 'Chips';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    color: Attribute.Enumeration<['gold', 'green', 'white', 'transparent']> &
      Attribute.DefaultTo<'white'>;
    textColor: Attribute.Enumeration<['blue', 'gold', 'green', 'white']> &
      Attribute.DefaultTo<'blue'>;
  };
}

export interface CommonSeo extends Schema.Component {
  collectionName: 'components_common_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.String;
  };
}

export interface ContentFaq extends Schema.Component {
  collectionName: 'components_product_faqs';
  info: {
    displayName: 'faq';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

export interface ContentHouseItem extends Schema.Component {
  collectionName: 'components_content_house_items';
  info: {
    displayName: 'HouseItem';
  };
  attributes: {
    image: Attribute.String & Attribute.Required;
  };
}

export interface ContentHouse extends Schema.Component {
  collectionName: 'components_content_houses';
  info: {
    displayName: 'house';
    description: '';
  };
  attributes: {
    topLabel: Attribute.String & Attribute.Required;
    bottomLabel: Attribute.String & Attribute.Required;
    HouseItem: Attribute.Component<'content.house-item', true> &
      Attribute.Required;
  };
}

export interface ContentRating extends Schema.Component {
  collectionName: 'components_product_ratings';
  info: {
    displayName: 'Review';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    tagLabel: Attribute.String & Attribute.Required;
  };
}

export interface FooterFooterMenuItem extends Schema.Component {
  collectionName: 'components_footer_footer_menu_items';
  info: {
    displayName: 'footerMenuItem';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    link: Attribute.String;
  };
}

export interface FooterFooterMenuList extends Schema.Component {
  collectionName: 'components_footer_footer_menu_lists';
  info: {
    displayName: 'FooterMenuList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    FooterMenuItems: Attribute.Component<'footer.footer-menu-item', true>;
  };
}

export interface HeaderColorsColumn extends Schema.Component {
  collectionName: 'components_header_colors_columns';
  info: {
    displayName: 'ColorsColumn';
  };
  attributes: {
    Colors: Attribute.Component<'header.menu-color-item', true>;
    title: Attribute.String;
  };
}

export interface HeaderDesign1 extends Schema.Component {
  collectionName: 'components_header_design_1s';
  info: {
    displayName: 'Design 1';
    description: '';
  };
  attributes: {
    cta: Attribute.String;
    seeAllText: Attribute.String;
    seeAllLink: Attribute.String;
    title: Attribute.String;
    Products: Attribute.Component<'header.header-menu-product-item', true>;
    isCtaVisible: Attribute.Boolean;
    ctaLink: Attribute.String;
  };
}

export interface HeaderDesign2 extends Schema.Component {
  collectionName: 'components_header_design_2s';
  info: {
    displayName: 'Design 2';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    seeAllText: Attribute.String;
    seeAllLink: Attribute.String;
    CategoryBanner: Attribute.Component<'header.header-category-banner'>;
    ProductColumn: Attribute.Component<'header.product-column'>;
    SizeColumn: Attribute.Component<'header.sizes-column'>;
    ColorColumn: Attribute.Component<'header.colors-column'>;
  };
}

export interface HeaderDesign3 extends Schema.Component {
  collectionName: 'components_header_design_3s';
  info: {
    displayName: 'Design 3';
  };
  attributes: {
    title: Attribute.String;
    seeAllText: Attribute.String;
    seeAllLink: Attribute.String;
    CategoryBanner: Attribute.Component<'header.header-category-banner'>;
    CategoryBanner2: Attribute.Component<'header.header-category-banner'>;
    ProductColumn: Attribute.Component<'header.product-column'>;
    MaterialColumn: Attribute.Component<'header.sizes-column'>;
  };
}

export interface HeaderDesign4 extends Schema.Component {
  collectionName: 'components_header_design_4s';
  info: {
    displayName: 'Design 4';
  };
  attributes: {
    title: Attribute.String;
    seeAllText: Attribute.String;
    seeAllLink: Attribute.String;
    CategoryBanner: Attribute.Component<'header.header-category-banner'>;
    CategoryBanner2: Attribute.Component<'header.header-category-banner'>;
    ProductColumn: Attribute.Component<'header.product-column'>;
    ProductColumn2: Attribute.Component<'header.product-column'>;
  };
}

export interface HeaderDesign5 extends Schema.Component {
  collectionName: 'components_header_design_5s';
  info: {
    displayName: 'Design 5';
  };
  attributes: {
    title: Attribute.String;
    seeAllText: Attribute.String;
    seeAllLink: Attribute.String;
    CategoryBanner: Attribute.Component<'header.header-category-banner'>;
    ProductColumn: Attribute.Component<'header.product-column'>;
    ProductColumn2: Attribute.Component<'header.product-column'>;
    ProductColumn3: Attribute.Component<'header.product-column'>;
  };
}

export interface HeaderHeaderCategoryBanner extends Schema.Component {
  collectionName: 'components_header_header_category_banners';
  info: {
    displayName: 'headerCategoryBanner';
  };
  attributes: {
    title: Attribute.String;
    imgUrl: Attribute.String;
    ctaText: Attribute.String;
    ctaLink: Attribute.String;
  };
}

export interface HeaderHeaderMenuProductItem extends Schema.Component {
  collectionName: 'components_header_header_menu_product_items';
  info: {
    displayName: 'HeaderMenuProductItem';
    description: '';
  };
  attributes: {
    productCode: Attribute.String;
  };
}

export interface HeaderMenuColorItem extends Schema.Component {
  collectionName: 'components_header_menu_color_items';
  info: {
    displayName: 'MenuColorItem';
  };
  attributes: {
    text: Attribute.String;
    colorCode: Attribute.String;
  };
}

export interface HeaderMenuText extends Schema.Component {
  collectionName: 'components_header_menu_texts';
  info: {
    displayName: 'menuText';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    isTitle: Attribute.Boolean;
    link: Attribute.String;
  };
}

export interface HeaderMobileHeader1 extends Schema.Component {
  collectionName: 'components_header_mobile_header_1s';
  info: {
    displayName: 'mobileHeader 1';
  };
  attributes: {
    cta: Attribute.String;
    seeAllText: Attribute.String;
    seeAllLink: Attribute.String;
    title: Attribute.String;
    Products: Attribute.Component<'header.header-menu-product-item', true>;
    isCtaVisible: Attribute.Boolean;
    ctaLink: Attribute.String;
    CategoryBanner: Attribute.Component<'header.header-category-banner'>;
  };
}

export interface HeaderMobileHeader2 extends Schema.Component {
  collectionName: 'components_header_mobile_header_2s';
  info: {
    displayName: 'mobileHeader 2';
  };
  attributes: {
    cta: Attribute.String;
    seeAllText: Attribute.String;
    seeAllLink: Attribute.String;
    title: Attribute.String;
    mobileProducts: Attribute.Component<'header.mobile-product-column', true>;
    isCtaVisible: Attribute.Boolean;
    ctaLink: Attribute.String;
    MaterialColumn: Attribute.Component<'header.sizes-column'>;
    CategoryBanner: Attribute.Component<'header.header-category-banner'>;
  };
}

export interface HeaderMobileHeader3 extends Schema.Component {
  collectionName: 'components_header_mobile_header_3s';
  info: {
    displayName: 'mobileHeader 3';
  };
  attributes: {
    cta: Attribute.String;
    seeAllText: Attribute.String;
    seeAllLink: Attribute.String;
    title: Attribute.String;
    mobileProducts: Attribute.Component<'header.mobile-product-column', true>;
    isCtaVisible: Attribute.Boolean;
    ctaLink: Attribute.String;
    MaterialColumn: Attribute.Component<'header.sizes-column'>;
    ColorColumn: Attribute.Component<'header.colors-column'>;
    CategoryBanner: Attribute.Component<'header.header-category-banner'>;
  };
}

export interface HeaderMobileProductColumn extends Schema.Component {
  collectionName: 'components_header_mobile_product_columns';
  info: {
    displayName: 'MobileProductColumn';
    description: '';
  };
  attributes: {
    mobileItems: Attribute.Component<'header.header-menu-product-item', true>;
    title: Attribute.String;
    seeAllText: Attribute.String;
    seeAllLink: Attribute.String;
  };
}

export interface HeaderProductColumn extends Schema.Component {
  collectionName: 'components_header_product_columns';
  info: {
    displayName: 'productColumn';
  };
  attributes: {
    menuItems: Attribute.Component<'header.menu-text', true>;
  };
}

export interface HeaderSizesColumn extends Schema.Component {
  collectionName: 'components_header_sizes_columns';
  info: {
    displayName: 'sizesColumn';
  };
  attributes: {
    title: Attribute.String;
    menuItems: Attribute.Component<'header.menu-text', true>;
  };
}

export interface ItemAdviceCategory extends Schema.Component {
  collectionName: 'components_item_advice_categories';
  info: {
    displayName: 'Advice Category';
    description: '';
  };
  attributes: {
    adviceCategory: Attribute.Relation<
      'item.advice-category',
      'oneToOne',
      'api::advice-category.advice-category'
    >;
  };
}

export interface ItemAdvice extends Schema.Component {
  collectionName: 'components_item_advice';
  info: {
    displayName: 'Advice';
  };
  attributes: {
    advice: Attribute.Relation<'item.advice', 'oneToOne', 'api::advice.advice'>;
  };
}

export interface ItemRating extends Schema.Component {
  collectionName: 'components_item_ratings';
  info: {
    displayName: 'Rating';
    icon: 'star';
    description: '';
  };
  attributes: {
    score: Attribute.Integer & Attribute.Required;
    percentage: Attribute.Integer & Attribute.Required;
  };
}

export interface ItemReassurance extends Schema.Component {
  collectionName: 'components_item_reassurances';
  info: {
    displayName: 'Reassurance';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    linkLabel: Attribute.String & Attribute.Required;
    icon: Attribute.Enumeration<
      ['firstIcon', 'secondIcon', 'thirdIcon', 'fourthIcon']
    > &
      Attribute.Required;
    details: Attribute.Component<'base.test', true>;
    modalButtonLabel: Attribute.String & Attribute.Required;
  };
}

export interface ItemReview extends Schema.Component {
  collectionName: 'components_item_reviews';
  info: {
    displayName: 'Review';
    description: '';
  };
  attributes: {
    score: Attribute.Decimal & Attribute.Required;
    icon: Attribute.Enumeration<
      ['tediber', 'google', 'avis-verifies', 'trustpilot']
    > &
      Attribute.Required;
    iconAlt: Attribute.String & Attribute.Required;
    reviewer: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
  };
}

export interface ItemStore extends Schema.Component {
  collectionName: 'components_item_stores';
  info: {
    displayName: 'Store';
    icon: 'store';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    slug: Attribute.String & Attribute.Required;
    cityName: Attribute.String & Attribute.Required;
    latitude: Attribute.Float & Attribute.Required;
    longitude: Attribute.Float & Attribute.Required;
    hours: Attribute.Text & Attribute.Required;
    address: Attribute.String & Attribute.Required;
    postCode: Attribute.String & Attribute.Required;
    phone: Attribute.String & Attribute.Required;
    shortDescription: Attribute.Text & Attribute.Required;
    isOpen: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    logo: Attribute.String & Attribute.Required;
    opens: Attribute.JSON & Attribute.Required;
    image: Attribute.String & Attribute.Required;
  };
}

export interface ListListAdvice extends Schema.Component {
  collectionName: 'components_list_list_advices';
  info: {
    displayName: 'List Advice';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    advices: Attribute.Relation<
      'list.list-advice',
      'oneToMany',
      'api::advice.advice'
    >;
  };
}

export interface ListListCategory extends Schema.Component {
  collectionName: 'components_list_list_categories';
  info: {
    displayName: 'List Category';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text;
    categories: Attribute.Component<'catalog.category', true> &
      Attribute.Required;
  };
}

export interface ListListProduct extends Schema.Component {
  collectionName: 'components_list_list_products';
  info: {
    displayName: 'List Product';
    description: '';
  };
  attributes: {
    overline: Attribute.String;
    title: Attribute.String & Attribute.Required;
    products: Attribute.Component<'catalog.product', true> & Attribute.Required;
  };
}

export interface ListListStore extends Schema.Component {
  collectionName: 'components_list_list_stores';
  info: {
    displayName: 'List Store';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    stores: Attribute.Component<'item.store', true> & Attribute.Required;
  };
}

export interface ListListUniverse extends Schema.Component {
  collectionName: 'components_list_list_universes';
  info: {
    displayName: 'List Universe';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    universes: Attribute.Component<'catalog.universe', true> &
      Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'banner.banner-advice': BannerBannerAdvice;
      'banner.banner-edito': BannerBannerEdito;
      'banner.banner-hero': BannerBannerHero;
      'banner.banner-legal': BannerBannerLegal;
      'banner.banner-media-text': BannerBannerMediaText;
      'banner.banner-new-product': BannerBannerNewProduct;
      'banner.banner-pro': BannerBannerPro;
      'banner.banner-product-global-rating': BannerBannerProductGlobalRating;
      'banner.banner-product-rating-customer': BannerBannerProductRatingCustomer;
      'banner.banner-product-review': BannerBannerProductReview;
      'banner.banner-reassurance': BannerBannerReassurance;
      'banner.banner-review': BannerBannerReview;
      'banner.banner-slider': BannerBannerSlider;
      'banner.banner-story': BannerBannerStory;
      'banner.crossell': BannerCrossell;
      'base.link': BaseLink;
      'base.test': BaseTest;
      'blocks.rich-content': BlocksRichContent;
      'card.card-advice': CardCardAdvice;
      'card.card-square': CardCardSquare;
      'card.chestnut': CardChestnut;
      'catalog.category': CatalogCategory;
      'catalog.product': CatalogProduct;
      'catalog.universe': CatalogUniverse;
      'chips.chips': ChipsChips;
      'common.seo': CommonSeo;
      'content.faq': ContentFaq;
      'content.house-item': ContentHouseItem;
      'content.house': ContentHouse;
      'content.rating': ContentRating;
      'footer.footer-menu-item': FooterFooterMenuItem;
      'footer.footer-menu-list': FooterFooterMenuList;
      'header.colors-column': HeaderColorsColumn;
      'header.design-1': HeaderDesign1;
      'header.design-2': HeaderDesign2;
      'header.design-3': HeaderDesign3;
      'header.design-4': HeaderDesign4;
      'header.design-5': HeaderDesign5;
      'header.header-category-banner': HeaderHeaderCategoryBanner;
      'header.header-menu-product-item': HeaderHeaderMenuProductItem;
      'header.menu-color-item': HeaderMenuColorItem;
      'header.menu-text': HeaderMenuText;
      'header.mobile-header-1': HeaderMobileHeader1;
      'header.mobile-header-2': HeaderMobileHeader2;
      'header.mobile-header-3': HeaderMobileHeader3;
      'header.mobile-product-column': HeaderMobileProductColumn;
      'header.product-column': HeaderProductColumn;
      'header.sizes-column': HeaderSizesColumn;
      'item.advice-category': ItemAdviceCategory;
      'item.advice': ItemAdvice;
      'item.rating': ItemRating;
      'item.reassurance': ItemReassurance;
      'item.review': ItemReview;
      'item.store': ItemStore;
      'list.list-advice': ListListAdvice;
      'list.list-category': ListListCategory;
      'list.list-product': ListListProduct;
      'list.list-store': ListListStore;
      'list.list-universe': ListListUniverse;
    }
  }
}
