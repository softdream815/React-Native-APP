import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, useQuery, useInfiniteQuery, UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, QueryFunctionContext } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Decimal: any;
  Guid: any;
  Long: any;
  Upload: any;
};

export type ContactUsDtoInputType = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  message?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
};

export type DevFormsInputType = {
  formId: Scalars['Int'];
  formName?: InputMaybe<Scalars['String']>;
  formUrl?: InputMaybe<Scalars['String']>;
  imagePath?: InputMaybe<Scalars['String']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  isForm?: InputMaybe<Scalars['Boolean']>;
  mapUserRoleRights?: InputMaybe<Array<InputMaybe<MapUserRoleRightsInputType>>>;
  menuLevel?: InputMaybe<Scalars['Int']>;
  menuType?: InputMaybe<Scalars['Int']>;
  parentForm?: InputMaybe<Scalars['Int']>;
  parentFormNavigation?: InputMaybe<DevFormsInputType>;
  sortOrder?: InputMaybe<Scalars['Decimal']>;
};

export type DevFormsType = {
  __typename?: 'DevFormsType';
  formId: Scalars['Int'];
  formName?: Maybe<Scalars['String']>;
  formUrl?: Maybe<Scalars['String']>;
  imagePath?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  isForm?: Maybe<Scalars['Boolean']>;
  menuLevel?: Maybe<Scalars['Int']>;
  menuType?: Maybe<Scalars['Int']>;
  parentForm?: Maybe<Scalars['Int']>;
  parentFormNavigation?: Maybe<DevFormsType>;
  sortOrder?: Maybe<Scalars['Decimal']>;
};

export type ElmahErrorInputType = {
  allXml?: InputMaybe<Scalars['String']>;
  application?: InputMaybe<Scalars['String']>;
  errorId: Scalars['ID'];
  host?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  sequence: Scalars['Int'];
  source?: InputMaybe<Scalars['String']>;
  statusCode: Scalars['Int'];
  timeUtc: Scalars['DateTime'];
  type?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['String']>;
};

export type ElmahErrorType = {
  __typename?: 'ElmahErrorType';
  allXml?: Maybe<Scalars['String']>;
  application?: Maybe<Scalars['String']>;
  errorId: Scalars['ID'];
  host?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  sequence: Scalars['Int'];
  source?: Maybe<Scalars['String']>;
  statusCode: Scalars['Int'];
  timeUtc: Scalars['DateTime'];
  type?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
};

export type EzyFindMutation = {
  __typename?: 'EzyFindMutation';
  addCustomerEnquiry?: Maybe<Response13>;
  addCustomerEnquiryResponse?: Maybe<MstCustomerEnquiryResponseType>;
  cancleBusinessPackage?: Maybe<Response1>;
  contactUs?: Maybe<Response>;
  createDevForms?: Maybe<DevFormsType>;
  createElmahError?: Maybe<ElmahErrorType>;
  createJob?: Maybe<JobType>;
  createMapCategoryAttributes?: Maybe<MapCategoryAttributesType>;
  createMapCompanyArea?: Maybe<MapCompanyAreaType>;
  createMapCompanyAuditLog?: Maybe<MapCompanyAuditLogType>;
  createMapCompanyCategory?: Maybe<MapCompanyCategoryType>;
  createMapCompanyDocument?: Maybe<MapCompanyDocumentType>;
  createMapCompanyEmail?: Maybe<MapCompanyEmailType>;
  createMapCompanyMagazineAd?: Maybe<MapCompanyMagazineAdType>;
  createMapCompanyPackage?: Maybe<MapCompanyPackageType>;
  createMapCompanyPayment?: Maybe<MapCompanyPaymentType>;
  createMapCompanyProvide?: Maybe<MapCompanyProvideType>;
  createMapCompanySeek?: Maybe<MapCompanySeekType>;
  createMapCompanyTask?: Maybe<MapCompanyTaskType>;
  createMapCompanyUsers?: Maybe<MapCompanyUsersType>;
  createMapCustomerEnquiryUpload?: Maybe<MapCustomerEnquiryUploadType>;
  createMapEflyersUpload?: Maybe<MapEflyersUploadType>;
  createMapItemRequestArea?: Maybe<MapItemRequestAreaType>;
  createMapItemRequestCategory?: Maybe<MapItemRequestCategoryType>;
  createMapItemRequestCategoryAttribute?: Maybe<MapItemRequestCategoryAttributeType>;
  createMapItemRequestUpload?: Maybe<MapItemRequestUploadType>;
  createMapItemResponseUpload?: Maybe<MapItemResponseUploadType>;
  createMapPackageAttributes?: Maybe<MapPackageAttributesType>;
  createMapSettingsRole?: Maybe<MapSettingsRoleType>;
  createMapSpecialUpload?: Maybe<MapSpecialUploadType>;
  createMapUserRoleRights?: Maybe<MapUserRoleRightsType>;
  createMapUsersSettings?: Maybe<MapUsersSettingsType>;
  createMstBeestatus?: Maybe<MstBeestatusType>;
  createMstCategory?: Maybe<MstCategoryType>;
  createMstCategoryAttribute?: Maybe<MstCategoryAttributeType>;
  createMstCategoryAttributeDataType?: Maybe<MstCategoryAttributeDataTypeType>;
  createMstCity?: Maybe<MstCityType>;
  createMstCms?: Maybe<MstCmsType>;
  createMstCompanyDocumentType?: Maybe<MstCompanyDocumentTypeType>;
  createMstCompanyStatus?: Maybe<MstCompanyStatusType>;
  createMstCompanyTaskList?: Maybe<MstCompanyTaskListType>;
  createMstConfiguration?: Maybe<MstConfigurationType>;
  createMstContactForm?: Maybe<MstContactFormType>;
  createMstCountry?: Maybe<MstCountryType>;
  createMstCrmCustomer?: Maybe<MstCrmCustomerType>;
  createMstCrmCustomerComment?: Maybe<MstCrmCustomerCommentType>;
  createMstCrmInventory?: Maybe<MstCrmInventoryType>;
  createMstCrmInventoryType?: Maybe<MstCrmInventoryTypeType>;
  createMstCrmInvoice?: Maybe<MstCrmInvoiceType>;
  createMstCrmInvoiceDetails?: Maybe<MstCrmInvoiceDetailsType>;
  createMstCrmQuote?: Maybe<MstCrmQuoteType>;
  createMstCrmQuoteDetails?: Maybe<MstCrmQuoteDetailsType>;
  createMstCustomerEnquiry?: Maybe<MstCustomerEnquiryType>;
  createMstCustomerEnquiryResponse?: Maybe<MstCustomerEnquiryResponseType>;
  createMstDocumentStatus?: Maybe<MstDocumentStatusType>;
  createMstDomain?: Maybe<MstDomainType>;
  createMstEFlyers?: Maybe<MstEFlyersType>;
  createMstEmailStack?: Maybe<MstEmailStackType>;
  createMstFavourites?: Maybe<MstFavouritesType>;
  createMstFranchisee?: Maybe<MstFranchiseeType>;
  createMstItemRequest?: Maybe<MstItemRequestType>;
  createMstItemResponse?: Maybe<MstItemResponseType>;
  createMstKeywords?: Maybe<MstKeywordsType>;
  createMstMagazineAd?: Maybe<MstMagazineAdType>;
  createMstMagazineAdType?: Maybe<MstMagazineAdTypeType>;
  createMstMagazineSection?: Maybe<MstMagazineSectionType>;
  createMstMailType?: Maybe<MstMailTypeType>;
  createMstNotificationStack?: Maybe<MstNotificationStackType>;
  createMstPackage?: Maybe<MstPackageType>;
  createMstPackageAttribute?: Maybe<MstPackageAttributeType>;
  createMstPaymentMode?: Maybe<MstPaymentModeType>;
  createMstPaymentStatus?: Maybe<MstPaymentStatusType>;
  createMstPaymentType?: Maybe<MstPaymentTypeType>;
  createMstPeriodType?: Maybe<MstPeriodTypeType>;
  createMstProvince?: Maybe<MstProvinceType>;
  createMstQuantityType?: Maybe<MstQuantityTypeType>;
  createMstRating?: Maybe<MstRatingType>;
  createMstSettingType?: Maybe<MstSettingTypeType>;
  createMstSettings?: Maybe<MstSettingsType>;
  createMstSpecials?: Maybe<MstSpecialsType>;
  createMstStatus?: Maybe<MstStatusType>;
  createMstSuburb?: Maybe<MstSuburbType>;
  createMstUser?: Maybe<ResponseMstUsers>;
  createMstUserRole?: Maybe<MstUserRoleType>;
  createMstUserStatus?: Maybe<MstUserStatusType>;
  createMstVersion?: Maybe<MstVersionType>;
  createMstVolumeType?: Maybe<MstVolumeTypeType>;
  createPost?: Maybe<PostType>;
  createPostAttachment?: Maybe<PostAttachmentType>;
  createPostReply?: Maybe<PostReplyType>;
  createPostReplyAttachment?: Maybe<PostReplyAttachmentType>;
  createPrdBid?: Maybe<PrdBidType>;
  createPrdCategory?: Maybe<PrdCategoryType>;
  createPrdHire?: Maybe<PrdHireType>;
  createPrdOrderDetails?: Maybe<PrdOrderDetailsType>;
  createPrdOrderPayment?: Maybe<PrdOrderPaymentType>;
  createPrdOrderStatus?: Maybe<PrdOrderStatusType>;
  createPrdOrderStatusType?: Maybe<PrdOrderStatusTypeType>;
  createPrdOrders?: Maybe<PrdOrdersType>;
  createPrdProducts?: Maybe<ResponsePrdProducts>;
  createPrdShoppingCart?: Maybe<PrdShoppingCartType>;
  createPrdSubCategory?: Maybe<PrdSubCategoryType>;
  createProductDocument?: Maybe<Response11>;
  createProductImage?: Maybe<Response9>;
  createSystemRole?: Maybe<SystemRoleType>;
  createSystemUser?: Maybe<SystemUserType>;
  deleteDevForms?: Maybe<Scalars['Boolean']>;
  deleteElmahError?: Maybe<Scalars['Boolean']>;
  deleteJob?: Maybe<Scalars['Boolean']>;
  deleteMapCategoryAttributes?: Maybe<Scalars['Boolean']>;
  deleteMapCompanyArea?: Maybe<Scalars['Boolean']>;
  deleteMapCompanyAuditLog?: Maybe<Scalars['Boolean']>;
  deleteMapCompanyCategory?: Maybe<Scalars['Boolean']>;
  deleteMapCompanyDocument?: Maybe<Scalars['Boolean']>;
  deleteMapCompanyEmail?: Maybe<Scalars['Boolean']>;
  deleteMapCompanyMagazineAd?: Maybe<Scalars['Boolean']>;
  deleteMapCompanyPackage?: Maybe<Scalars['Boolean']>;
  deleteMapCompanyPayment?: Maybe<Scalars['Boolean']>;
  deleteMapCompanyProvide?: Maybe<Scalars['Boolean']>;
  deleteMapCompanySeek?: Maybe<Scalars['Boolean']>;
  deleteMapCompanyTask?: Maybe<Scalars['Boolean']>;
  deleteMapCompanyUsers?: Maybe<Scalars['Boolean']>;
  deleteMapCustomerEnquiryUpload?: Maybe<Scalars['Boolean']>;
  deleteMapEflyersUpload?: Maybe<Scalars['Boolean']>;
  deleteMapItemRequestArea?: Maybe<Scalars['Boolean']>;
  deleteMapItemRequestCategory?: Maybe<Scalars['Boolean']>;
  deleteMapItemRequestCategoryAttribute?: Maybe<Scalars['Boolean']>;
  deleteMapItemRequestUpload?: Maybe<Scalars['Boolean']>;
  deleteMapItemResponseUpload?: Maybe<Scalars['Boolean']>;
  deleteMapPackageAttributes?: Maybe<Scalars['Boolean']>;
  deleteMapSettingsRole?: Maybe<Scalars['Boolean']>;
  deleteMapSpecialUpload?: Maybe<Scalars['Boolean']>;
  deleteMapUserRoleRights?: Maybe<Scalars['Boolean']>;
  deleteMapUsersSettings?: Maybe<Scalars['Boolean']>;
  deleteMstBeestatus?: Maybe<Scalars['Boolean']>;
  deleteMstCategory?: Maybe<Scalars['Boolean']>;
  deleteMstCategoryAttribute?: Maybe<Scalars['Boolean']>;
  deleteMstCategoryAttributeDataType?: Maybe<Scalars['Boolean']>;
  deleteMstCity?: Maybe<Scalars['Boolean']>;
  deleteMstCms?: Maybe<Scalars['Boolean']>;
  deleteMstCompany?: Maybe<Response8>;
  deleteMstCompanyDocumentType?: Maybe<Scalars['Boolean']>;
  deleteMstCompanyStatus?: Maybe<Scalars['Boolean']>;
  deleteMstCompanyTaskList?: Maybe<Scalars['Boolean']>;
  deleteMstConfiguration?: Maybe<Scalars['Boolean']>;
  deleteMstContactForm?: Maybe<Scalars['Boolean']>;
  deleteMstCountry?: Maybe<Scalars['Boolean']>;
  deleteMstCrmCustomer?: Maybe<Scalars['Boolean']>;
  deleteMstCrmCustomerComment?: Maybe<Scalars['Boolean']>;
  deleteMstCrmInventory?: Maybe<Scalars['Boolean']>;
  deleteMstCrmInventoryType?: Maybe<Scalars['Boolean']>;
  deleteMstCrmInvoice?: Maybe<Scalars['Boolean']>;
  deleteMstCrmInvoiceDetails?: Maybe<Scalars['Boolean']>;
  deleteMstCrmQuote?: Maybe<Scalars['Boolean']>;
  deleteMstCrmQuoteDetails?: Maybe<Scalars['Boolean']>;
  deleteMstCustomerEnquiry?: Maybe<Scalars['Boolean']>;
  deleteMstCustomerEnquiryResponse?: Maybe<Scalars['Boolean']>;
  deleteMstDocumentStatus?: Maybe<Scalars['Boolean']>;
  deleteMstDomain?: Maybe<Scalars['Boolean']>;
  deleteMstEFlyers?: Maybe<Scalars['Boolean']>;
  deleteMstEmailStack?: Maybe<Scalars['Boolean']>;
  deleteMstFavourites?: Maybe<Scalars['Boolean']>;
  deleteMstFranchisee?: Maybe<Scalars['Boolean']>;
  deleteMstItemRequest?: Maybe<Scalars['Boolean']>;
  deleteMstItemResponse?: Maybe<Scalars['Boolean']>;
  deleteMstKeywords?: Maybe<Scalars['Boolean']>;
  deleteMstMagazineAd?: Maybe<Scalars['Boolean']>;
  deleteMstMagazineAdType?: Maybe<Scalars['Boolean']>;
  deleteMstMagazineSection?: Maybe<Scalars['Boolean']>;
  deleteMstMailType?: Maybe<Scalars['Boolean']>;
  deleteMstNotificationStack?: Maybe<Scalars['Boolean']>;
  deleteMstPackage?: Maybe<Scalars['Boolean']>;
  deleteMstPackageAttribute?: Maybe<Scalars['Boolean']>;
  deleteMstPaymentMode?: Maybe<Scalars['Boolean']>;
  deleteMstPaymentStatus?: Maybe<Scalars['Boolean']>;
  deleteMstPaymentType?: Maybe<Scalars['Boolean']>;
  deleteMstPeriodType?: Maybe<Scalars['Boolean']>;
  deleteMstProvince?: Maybe<Scalars['Boolean']>;
  deleteMstQuantityType?: Maybe<Scalars['Boolean']>;
  deleteMstRating?: Maybe<Scalars['Boolean']>;
  deleteMstSettingType?: Maybe<Scalars['Boolean']>;
  deleteMstSettings?: Maybe<Scalars['Boolean']>;
  deleteMstSpecials?: Maybe<Scalars['Boolean']>;
  deleteMstStatus?: Maybe<Scalars['Boolean']>;
  deleteMstSuburb?: Maybe<Scalars['Boolean']>;
  deleteMstUserRole?: Maybe<Scalars['Boolean']>;
  deleteMstUserStatus?: Maybe<Scalars['Boolean']>;
  deleteMstUsers?: Maybe<Response8>;
  deleteMstVersion?: Maybe<Scalars['Boolean']>;
  deleteMstVolumeType?: Maybe<Scalars['Boolean']>;
  deletePost?: Maybe<Scalars['Boolean']>;
  deletePostAttachment?: Maybe<Scalars['Boolean']>;
  deletePostReply?: Maybe<Scalars['Boolean']>;
  deletePostReplyAttachment?: Maybe<Scalars['Boolean']>;
  deletePrdBid?: Maybe<Scalars['Boolean']>;
  deletePrdCategory?: Maybe<Scalars['Boolean']>;
  deletePrdHire?: Maybe<Scalars['Boolean']>;
  deletePrdOrderDetails?: Maybe<Scalars['Boolean']>;
  deletePrdOrderPayment?: Maybe<Scalars['Boolean']>;
  deletePrdOrderStatus?: Maybe<Scalars['Boolean']>;
  deletePrdOrderStatusType?: Maybe<Scalars['Boolean']>;
  deletePrdOrders?: Maybe<Scalars['Boolean']>;
  deletePrdProducts?: Maybe<ResponsePrdProducts>;
  deletePrdShoppingCart?: Maybe<ResponsePrdShoppingCartTotalDto>;
  deletePrdShoppingCartId?: Maybe<Scalars['Boolean']>;
  deletePrdSubCategory?: Maybe<Scalars['Boolean']>;
  deleteProductDocument?: Maybe<ResponseMapProductDocument>;
  deleteProductImage?: Maybe<Response10>;
  deleteSystemRole?: Maybe<Scalars['Boolean']>;
  deleteSystemUser?: Maybe<Scalars['Boolean']>;
  forgetChangePassword?: Maybe<Response12>;
  pauseBusinessPackage?: Maybe<Response1>;
  postMstItemRequest?: Maybe<Response13>;
  postMstItemResponse?: Maybe<MstItemResponseType>;
  postMstRating?: Maybe<Response13>;
  postPost?: Maybe<Response14>;
  postPrdShoppingCart?: Maybe<Response13>;
  postPrdShoppingCartOptimized?: Maybe<ResponsePrdShoppingCartTotalDto>;
  postReply?: Maybe<Response13>;
  postUserActivity?: Maybe<ResponseMapUserActivity>;
  postUserAddress?: Maybe<ResponseMstUserAddress>;
  postVehicle?: Maybe<ResponseMstVehicle>;
  registerBusiness?: Maybe<Response12>;
  registerUser?: Maybe<Response12>;
  unPauseBusinessPackage?: Maybe<Response1>;
  updateDevForms?: Maybe<DevFormsType>;
  updateElmahError?: Maybe<ElmahErrorType>;
  updateJob?: Maybe<JobType>;
  updateMapCategoryAttributes?: Maybe<MapCategoryAttributesType>;
  updateMapCompanyArea?: Maybe<MapCompanyAreaType>;
  updateMapCompanyAuditLog?: Maybe<MapCompanyAuditLogType>;
  updateMapCompanyCategory?: Maybe<MapCompanyCategoryType>;
  updateMapCompanyDocument?: Maybe<MapCompanyDocumentType>;
  updateMapCompanyEmail?: Maybe<MapCompanyEmailType>;
  updateMapCompanyMagazineAd?: Maybe<MapCompanyMagazineAdType>;
  updateMapCompanyPackage?: Maybe<MapCompanyPackageType>;
  updateMapCompanyPayment?: Maybe<MapCompanyPaymentType>;
  updateMapCompanyProvide?: Maybe<MapCompanyProvideType>;
  updateMapCompanySeek?: Maybe<MapCompanySeekType>;
  updateMapCompanyTask?: Maybe<MapCompanyTaskType>;
  updateMapCompanyUsers?: Maybe<MapCompanyUsersType>;
  updateMapCustomerEnquiryUpload?: Maybe<MapCustomerEnquiryUploadType>;
  updateMapEflyersUpload?: Maybe<MapEflyersUploadType>;
  updateMapItemRequestArea?: Maybe<MapItemRequestAreaType>;
  updateMapItemRequestCategory?: Maybe<MapItemRequestCategoryType>;
  updateMapItemRequestCategoryAttribute?: Maybe<MapItemRequestCategoryAttributeType>;
  updateMapItemRequestUpload?: Maybe<MapItemRequestUploadType>;
  updateMapItemResponseUpload?: Maybe<MapItemResponseUploadType>;
  updateMapPackageAttributes?: Maybe<MapPackageAttributesType>;
  updateMapSettingsRole?: Maybe<MapSettingsRoleType>;
  updateMapSpecialUpload?: Maybe<MapSpecialUploadType>;
  updateMapUserRoleRights?: Maybe<MapUserRoleRightsType>;
  updateMapUsersSettings?: Maybe<MapUsersSettingsType>;
  updateMstBeestatus?: Maybe<MstBeestatusType>;
  updateMstCategory?: Maybe<MstCategoryType>;
  updateMstCategoryAttribute?: Maybe<MstCategoryAttributeType>;
  updateMstCategoryAttributeDataType?: Maybe<MstCategoryAttributeDataTypeType>;
  updateMstCity?: Maybe<MstCityType>;
  updateMstCms?: Maybe<MstCmsType>;
  updateMstCompany?: Maybe<ResponseMstCompany>;
  updateMstCompanyDocumentType?: Maybe<MstCompanyDocumentTypeType>;
  updateMstCompanyStatus?: Maybe<MstCompanyStatusType>;
  updateMstCompanyTaskList?: Maybe<MstCompanyTaskListType>;
  updateMstConfiguration?: Maybe<MstConfigurationType>;
  updateMstContactForm?: Maybe<MstContactFormType>;
  updateMstCountry?: Maybe<MstCountryType>;
  updateMstCrmCustomer?: Maybe<MstCrmCustomerType>;
  updateMstCrmCustomerComment?: Maybe<MstCrmCustomerCommentType>;
  updateMstCrmInventory?: Maybe<MstCrmInventoryType>;
  updateMstCrmInventoryType?: Maybe<MstCrmInventoryTypeType>;
  updateMstCrmInvoice?: Maybe<MstCrmInvoiceType>;
  updateMstCrmInvoiceDetails?: Maybe<MstCrmInvoiceDetailsType>;
  updateMstCrmQuote?: Maybe<MstCrmQuoteType>;
  updateMstCrmQuoteDetails?: Maybe<MstCrmQuoteDetailsType>;
  updateMstCustomerEnquiry?: Maybe<MstCustomerEnquiryType>;
  updateMstCustomerEnquiryResponse?: Maybe<MstCustomerEnquiryResponseType>;
  updateMstDocumentStatus?: Maybe<MstDocumentStatusType>;
  updateMstDomain?: Maybe<MstDomainType>;
  updateMstEFlyers?: Maybe<MstEFlyersType>;
  updateMstEmailStack?: Maybe<MstEmailStackType>;
  updateMstFavourites?: Maybe<MstFavouritesType>;
  updateMstFranchisee?: Maybe<MstFranchiseeType>;
  updateMstItemRequest?: Maybe<MstItemRequestType>;
  updateMstItemResponse?: Maybe<MstItemResponseType>;
  updateMstKeywords?: Maybe<MstKeywordsType>;
  updateMstMagazineAd?: Maybe<MstMagazineAdType>;
  updateMstMagazineAdType?: Maybe<MstMagazineAdTypeType>;
  updateMstMagazineSection?: Maybe<MstMagazineSectionType>;
  updateMstMailType?: Maybe<MstMailTypeType>;
  updateMstNotificationStack?: Maybe<MstNotificationStackType>;
  updateMstPackage?: Maybe<MstPackageType>;
  updateMstPackageAttribute?: Maybe<MstPackageAttributeType>;
  updateMstPaymentMode?: Maybe<MstPaymentModeType>;
  updateMstPaymentStatus?: Maybe<MstPaymentStatusType>;
  updateMstPaymentType?: Maybe<MstPaymentTypeType>;
  updateMstPeriodType?: Maybe<MstPeriodTypeType>;
  updateMstProvince?: Maybe<MstProvinceType>;
  updateMstQuantityType?: Maybe<MstQuantityTypeType>;
  updateMstRating?: Maybe<MstRatingType>;
  updateMstSettingType?: Maybe<MstSettingTypeType>;
  updateMstSettings?: Maybe<MstSettingsType>;
  updateMstSpecials?: Maybe<MstSpecialsType>;
  updateMstStatus?: Maybe<MstStatusType>;
  updateMstSuburb?: Maybe<MstSuburbType>;
  updateMstUserLocation?: Maybe<Response3>;
  updateMstUserRole?: Maybe<MstUserRoleType>;
  updateMstUserStatus?: Maybe<MstUserStatusType>;
  updateMstUsers?: Maybe<ResponseMstUsers>;
  updateMstVersion?: Maybe<MstVersionType>;
  updateMstVolumeType?: Maybe<MstVolumeTypeType>;
  updatePost?: Maybe<PostType>;
  updatePostAttachment?: Maybe<PostAttachmentType>;
  updatePostReply?: Maybe<PostReplyType>;
  updatePostReplyAttachment?: Maybe<PostReplyAttachmentType>;
  updatePrdBid?: Maybe<PrdBidType>;
  updatePrdCategory?: Maybe<PrdCategoryType>;
  updatePrdHire?: Maybe<PrdHireType>;
  updatePrdOrderDetails?: Maybe<PrdOrderDetailsType>;
  updatePrdOrderPayment?: Maybe<PrdOrderPaymentType>;
  updatePrdOrderStatus?: Maybe<PrdOrderStatusType>;
  updatePrdOrderStatusType?: Maybe<PrdOrderStatusTypeType>;
  updatePrdOrders?: Maybe<PrdOrdersType>;
  updatePrdProducts?: Maybe<ResponsePrdProducts>;
  updatePrdShoppingCart?: Maybe<PrdShoppingCartType>;
  updatePrdSubCategory?: Maybe<PrdSubCategoryType>;
  updateProductDocument?: Maybe<ResponseMapProductDocument>;
  updateProductImage?: Maybe<Response10>;
  updateSystemRole?: Maybe<SystemRoleType>;
  updateSystemUser?: Maybe<SystemUserType>;
  upgradeBusinessPackage?: Maybe<Response12>;
};


export type EzyFindMutationAddCustomerEnquiryArgs = {
  customerEnquiry: MstCustomerEnquiryInputType;
  files?: InputMaybe<Array<InputMaybe<Scalars['Upload']>>>;
};


export type EzyFindMutationAddCustomerEnquiryResponseArgs = {
  customerEnquiryResponse: MstCustomerEnquiryResponseInputType;
};


export type EzyFindMutationContactUsArgs = {
  contactUs: ContactUsDtoInputType;
};


export type EzyFindMutationCreateDevFormsArgs = {
  devForms: DevFormsInputType;
};


export type EzyFindMutationCreateElmahErrorArgs = {
  elmahError: ElmahErrorInputType;
};


export type EzyFindMutationCreateJobArgs = {
  job: JobInputType;
};


export type EzyFindMutationCreateMapCategoryAttributesArgs = {
  mapCategoryAttributes: MapCategoryAttributesInputType;
};


export type EzyFindMutationCreateMapCompanyAreaArgs = {
  mapCompanyArea: MapCompanyAreaInputType;
};


export type EzyFindMutationCreateMapCompanyAuditLogArgs = {
  mapCompanyAuditLog: MapCompanyAuditLogInputType;
};


export type EzyFindMutationCreateMapCompanyCategoryArgs = {
  mapCompanyCategory: MapCompanyCategoryInputType;
};


export type EzyFindMutationCreateMapCompanyDocumentArgs = {
  mapCompanyDocument: MapCompanyDocumentInputType;
};


export type EzyFindMutationCreateMapCompanyEmailArgs = {
  mapCompanyEmail: MapCompanyEmailInputType;
};


export type EzyFindMutationCreateMapCompanyMagazineAdArgs = {
  mapCompanyMagazineAd: MapCompanyMagazineAdInputType;
};


export type EzyFindMutationCreateMapCompanyPackageArgs = {
  mapCompanyPackage: MapCompanyPackageInputType;
};


export type EzyFindMutationCreateMapCompanyPaymentArgs = {
  mapCompanyPayment: MapCompanyPaymentInputType;
};


export type EzyFindMutationCreateMapCompanyProvideArgs = {
  mapCompanyProvide: MapCompanyProvideInputType;
};


export type EzyFindMutationCreateMapCompanySeekArgs = {
  mapCompanySeek: MapCompanySeekInputType;
};


export type EzyFindMutationCreateMapCompanyTaskArgs = {
  mapCompanyTask: MapCompanyTaskInputType;
};


export type EzyFindMutationCreateMapCompanyUsersArgs = {
  mapCompanyUsers: MapCompanyUsersInputType;
};


export type EzyFindMutationCreateMapCustomerEnquiryUploadArgs = {
  mapCustomerEnquiryUpload: MapCustomerEnquiryUploadInputType;
};


export type EzyFindMutationCreateMapEflyersUploadArgs = {
  mapEflyersUpload: MapEflyersUploadInputType;
};


export type EzyFindMutationCreateMapItemRequestAreaArgs = {
  mapItemRequestArea: MapItemRequestAreaInputType;
};


export type EzyFindMutationCreateMapItemRequestCategoryArgs = {
  mapItemRequestCategory: MapItemRequestCategoryInputType;
};


export type EzyFindMutationCreateMapItemRequestCategoryAttributeArgs = {
  mapItemRequestCategoryAttribute: MapItemRequestCategoryAttributeInputType;
};


export type EzyFindMutationCreateMapItemRequestUploadArgs = {
  mapItemRequestUpload: MapItemRequestUploadInputType;
};


export type EzyFindMutationCreateMapItemResponseUploadArgs = {
  mapItemResponseUpload: MapItemResponseUploadInputType;
};


export type EzyFindMutationCreateMapPackageAttributesArgs = {
  mapPackageAttributes: MapPackageAttributesInputType;
};


export type EzyFindMutationCreateMapSettingsRoleArgs = {
  mapSettingsRole: MapSettingsRoleInputType;
};


export type EzyFindMutationCreateMapSpecialUploadArgs = {
  mapSpecialUpload: MapSpecialUploadInputType;
};


export type EzyFindMutationCreateMapUserRoleRightsArgs = {
  mapUserRoleRights: MapUserRoleRightsInputType;
};


export type EzyFindMutationCreateMapUsersSettingsArgs = {
  mapUsersSettings: MapUsersSettingsInputType;
};


export type EzyFindMutationCreateMstBeestatusArgs = {
  mstBeestatus: MstBeestatusInputType;
};


export type EzyFindMutationCreateMstCategoryArgs = {
  mstCategory: MstCategoryInputType;
};


export type EzyFindMutationCreateMstCategoryAttributeArgs = {
  mstCategoryAttribute: MstCategoryAttributeInputType;
};


export type EzyFindMutationCreateMstCategoryAttributeDataTypeArgs = {
  mstCategoryAttributeDataType: MstCategoryAttributeDataTypeInputType;
};


export type EzyFindMutationCreateMstCityArgs = {
  mstCity: MstCityInputType;
};


export type EzyFindMutationCreateMstCmsArgs = {
  mstCms: MstCmsInputType;
};


export type EzyFindMutationCreateMstCompanyDocumentTypeArgs = {
  mstCompanyDocumentType: MstCompanyDocumentTypeInputType;
};


export type EzyFindMutationCreateMstCompanyStatusArgs = {
  mstCompanyStatus: MstCompanyStatusInputType;
};


export type EzyFindMutationCreateMstCompanyTaskListArgs = {
  mstCompanyTaskList: MstCompanyTaskListInputType;
};


export type EzyFindMutationCreateMstConfigurationArgs = {
  mstConfiguration: MstConfigurationInputType;
};


export type EzyFindMutationCreateMstContactFormArgs = {
  mstContactForm: MstContactFormInputType;
};


export type EzyFindMutationCreateMstCountryArgs = {
  mstCountry: MstCountryInputType;
};


export type EzyFindMutationCreateMstCrmCustomerArgs = {
  mstCrmCustomer: MstCrmCustomerInputType;
};


export type EzyFindMutationCreateMstCrmCustomerCommentArgs = {
  mstCrmCustomerComment: MstCrmCustomerCommentInputType;
};


export type EzyFindMutationCreateMstCrmInventoryArgs = {
  mstCrmInventory: MstCrmInventoryInputType;
};


export type EzyFindMutationCreateMstCrmInventoryTypeArgs = {
  mstCrmInventoryType: MstCrmInventoryTypeInputType;
};


export type EzyFindMutationCreateMstCrmInvoiceArgs = {
  mstCrmInvoice: MstCrmInvoiceInputType;
};


export type EzyFindMutationCreateMstCrmInvoiceDetailsArgs = {
  mstCrmInvoiceDetails: MstCrmInvoiceDetailsInputType;
};


export type EzyFindMutationCreateMstCrmQuoteArgs = {
  mstCrmQuote: MstCrmQuoteInputType;
};


export type EzyFindMutationCreateMstCrmQuoteDetailsArgs = {
  mstCrmQuoteDetails: MstCrmQuoteDetailsInputType;
};


export type EzyFindMutationCreateMstCustomerEnquiryArgs = {
  mstCustomerEnquiry: MstCustomerEnquiryInputType;
};


export type EzyFindMutationCreateMstCustomerEnquiryResponseArgs = {
  mstCustomerEnquiryResponse: MstCustomerEnquiryResponseInputType;
};


export type EzyFindMutationCreateMstDocumentStatusArgs = {
  mstDocumentStatus: MstDocumentStatusInputType;
};


export type EzyFindMutationCreateMstDomainArgs = {
  mstDomain: MstDomainInputType;
};


export type EzyFindMutationCreateMstEFlyersArgs = {
  mstEFlyers: MstEFlyersInputType;
};


export type EzyFindMutationCreateMstEmailStackArgs = {
  mstEmailStack: MstEmailStackInputType;
};


export type EzyFindMutationCreateMstFavouritesArgs = {
  mstFavourites: MstFavouritesInputType;
};


export type EzyFindMutationCreateMstFranchiseeArgs = {
  mstFranchisee: MstFranchiseeInputType;
};


export type EzyFindMutationCreateMstItemRequestArgs = {
  mstItemRequest: MstItemRequestInputType;
};


export type EzyFindMutationCreateMstItemResponseArgs = {
  files?: InputMaybe<Array<InputMaybe<Scalars['Upload']>>>;
  mstItemResponse: MstItemResponseInputType;
};


export type EzyFindMutationCreateMstKeywordsArgs = {
  mstKeywords: MstKeywordsInputType;
};


export type EzyFindMutationCreateMstMagazineAdArgs = {
  mstMagazineAd: MstMagazineAdInputType;
};


export type EzyFindMutationCreateMstMagazineAdTypeArgs = {
  mstMagazineAdType: MstMagazineAdTypeInputType;
};


export type EzyFindMutationCreateMstMagazineSectionArgs = {
  mstMagazineSection: MstMagazineSectionInputType;
};


export type EzyFindMutationCreateMstMailTypeArgs = {
  mstMailType: MstMailTypeInputType;
};


export type EzyFindMutationCreateMstNotificationStackArgs = {
  mstNotificationStack: MstNotificationStackInputType;
};


export type EzyFindMutationCreateMstPackageArgs = {
  mstPackage: MstPackageInputType;
};


export type EzyFindMutationCreateMstPackageAttributeArgs = {
  mstPackageAttribute: MstPackageAttributeInputType;
};


export type EzyFindMutationCreateMstPaymentModeArgs = {
  mstPaymentMode: MstPaymentModeInputType;
};


export type EzyFindMutationCreateMstPaymentStatusArgs = {
  mstPaymentStatus: MstPaymentStatusInputType;
};


export type EzyFindMutationCreateMstPaymentTypeArgs = {
  mstPaymentType: MstPaymentTypeInputType;
};


export type EzyFindMutationCreateMstPeriodTypeArgs = {
  mstPeriodType: MstPeriodTypeInputType;
};


export type EzyFindMutationCreateMstProvinceArgs = {
  mstProvince: MstProvinceInputType;
};


export type EzyFindMutationCreateMstQuantityTypeArgs = {
  mstQuantityType: MstQuantityTypeInputType;
};


export type EzyFindMutationCreateMstRatingArgs = {
  mstRating: MstRatingInputType;
};


export type EzyFindMutationCreateMstSettingTypeArgs = {
  mstSettingType: MstSettingTypeInputType;
};


export type EzyFindMutationCreateMstSettingsArgs = {
  mstSettings: MstSettingsInputType;
};


export type EzyFindMutationCreateMstSpecialsArgs = {
  mstSpecials: MstSpecialsInputType;
};


export type EzyFindMutationCreateMstStatusArgs = {
  mstStatus: MstStatusInputType;
};


export type EzyFindMutationCreateMstSuburbArgs = {
  mstSuburb: MstSuburbInputType;
};


export type EzyFindMutationCreateMstUserArgs = {
  files?: InputMaybe<Array<InputMaybe<Scalars['Upload']>>>;
  mstUsers: MstUsersInputType;
};


export type EzyFindMutationCreateMstUserRoleArgs = {
  mstUserRole: MstUserRoleInputType;
};


export type EzyFindMutationCreateMstUserStatusArgs = {
  mstUserStatus: MstUserStatusInputType;
};


export type EzyFindMutationCreateMstVersionArgs = {
  mstVersion: MstVersionInputType;
};


export type EzyFindMutationCreateMstVolumeTypeArgs = {
  mstVolumeType: MstVolumeTypeInputType;
};


export type EzyFindMutationCreatePostArgs = {
  post: PostInputType;
};


export type EzyFindMutationCreatePostAttachmentArgs = {
  postAttachment: PostAttachmentInputType;
};


export type EzyFindMutationCreatePostReplyArgs = {
  postReply: PostReplyInputType;
};


export type EzyFindMutationCreatePostReplyAttachmentArgs = {
  files?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  postReplyAttachment: PostReplyAttachmentInputType;
};


export type EzyFindMutationCreatePrdBidArgs = {
  prdBid: PrdBidInputType;
};


export type EzyFindMutationCreatePrdCategoryArgs = {
  prdCategory: PrdCategoryInputType;
};


export type EzyFindMutationCreatePrdHireArgs = {
  prdHire: PrdHireInputType;
};


export type EzyFindMutationCreatePrdOrderDetailsArgs = {
  prdOrderDetails: PrdOrderDetailsInputType;
};


export type EzyFindMutationCreatePrdOrderPaymentArgs = {
  prdOrderPayment: PrdOrderPaymentInputType;
};


export type EzyFindMutationCreatePrdOrderStatusArgs = {
  prdOrderStatus: PrdOrderStatusInputType;
};


export type EzyFindMutationCreatePrdOrderStatusTypeArgs = {
  prdOrderStatusType: PrdOrderStatusTypeInputType;
};


export type EzyFindMutationCreatePrdOrdersArgs = {
  prdOrders: PrdOrdersInputType;
};


export type EzyFindMutationCreatePrdProductsArgs = {
  docs?: InputMaybe<Array<InputMaybe<Scalars['Upload']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['Upload']>>>;
  prdProducts: PrdProductsInputType;
};


export type EzyFindMutationCreatePrdShoppingCartArgs = {
  prdShoppingCart: PrdShoppingCartInputType;
};


export type EzyFindMutationCreatePrdSubCategoryArgs = {
  prdSubCategory: PrdSubCategoryInputType;
};


export type EzyFindMutationCreateProductDocumentArgs = {
  docs?: InputMaybe<Array<InputMaybe<Scalars['Upload']>>>;
  mapProductDocument: MapProductDocumentInputType;
};


export type EzyFindMutationCreateProductImageArgs = {
  images?: InputMaybe<Array<InputMaybe<Scalars['Upload']>>>;
  mapProductImages: MapProductImagesInputType;
};


export type EzyFindMutationCreateSystemRoleArgs = {
  systemRole: SystemRoleInputType;
};


export type EzyFindMutationCreateSystemUserArgs = {
  systemUser: SystemUserInputType;
};


export type EzyFindMutationDeleteDevFormsArgs = {
  devFormsId: Scalars['Int'];
};


export type EzyFindMutationDeleteElmahErrorArgs = {
  elmahErrorId: Scalars['Guid'];
};


export type EzyFindMutationDeleteJobArgs = {
  jobId: Scalars['Int'];
};


export type EzyFindMutationDeleteMapCategoryAttributesArgs = {
  mapCategoryAttributesId: Scalars['Int'];
};


export type EzyFindMutationDeleteMapCompanyAreaArgs = {
  mapCompanyAreaId: Scalars['Int'];
};


export type EzyFindMutationDeleteMapCompanyAuditLogArgs = {
  mapCompanyAuditLogId: Scalars['Int'];
};


export type EzyFindMutationDeleteMapCompanyCategoryArgs = {
  mapCompanyCategoryId: Scalars['Int'];
};


export type EzyFindMutationDeleteMapCompanyDocumentArgs = {
  mapCompanyDocumentId: Scalars['Int'];
};


export type EzyFindMutationDeleteMapCompanyEmailArgs = {
  mapCompanyEmailId: Scalars['Int'];
};


export type EzyFindMutationDeleteMapCompanyMagazineAdArgs = {
  mapCompanyMagazineAdId: Scalars['Int'];
};


export type EzyFindMutationDeleteMapCompanyPackageArgs = {
  mapCompanyPackageId: Scalars['Int'];
};


export type EzyFindMutationDeleteMapCompanyPaymentArgs = {
  mapCompanyPaymentId: Scalars['Int'];
};


export type EzyFindMutationDeleteMapCompanyProvideArgs = {
  mapCompanyProvideId: Scalars['Int'];
};


export type EzyFindMutationDeleteMapCompanySeekArgs = {
  mapCompanySeekId: Scalars['Int'];
};


export type EzyFindMutationDeleteMapCompanyTaskArgs = {
  mapCompanyTaskId: Scalars['Int'];
};


export type EzyFindMutationDeleteMapCompanyUsersArgs = {
  mapCompanyUsersId: Scalars['Int'];
};


export type EzyFindMutationDeleteMapCustomerEnquiryUploadArgs = {
  mapCustomerEnquiryUploadId: Scalars['Int'];
};


export type EzyFindMutationDeleteMapEflyersUploadArgs = {
  mapEflyersUploadId: Scalars['Int'];
};


export type EzyFindMutationDeleteMapItemRequestAreaArgs = {
  mapItemRequestAreaId: Scalars['Int'];
};


export type EzyFindMutationDeleteMapItemRequestCategoryArgs = {
  mapItemRequestCategoryId: Scalars['Int'];
};


export type EzyFindMutationDeleteMapItemRequestCategoryAttributeArgs = {
  mapItemRequestCategoryAttributeId: Scalars['Int'];
};


export type EzyFindMutationDeleteMapItemRequestUploadArgs = {
  mapItemRequestUploadId: Scalars['Int'];
};


export type EzyFindMutationDeleteMapItemResponseUploadArgs = {
  mapItemResponseUploadId: Scalars['Int'];
};


export type EzyFindMutationDeleteMapPackageAttributesArgs = {
  mapPackageAttributesId: Scalars['Int'];
};


export type EzyFindMutationDeleteMapSettingsRoleArgs = {
  mapSettingsRoleId: Scalars['Int'];
};


export type EzyFindMutationDeleteMapSpecialUploadArgs = {
  mapSpecialUploadId: Scalars['Int'];
};


export type EzyFindMutationDeleteMapUserRoleRightsArgs = {
  mapUserRoleRightsId: Scalars['Int'];
};


export type EzyFindMutationDeleteMapUsersSettingsArgs = {
  mapUsersSettingsId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstBeestatusArgs = {
  mstBeestatusId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstCategoryArgs = {
  mstCategoryId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstCategoryAttributeArgs = {
  mstCategoryAttributeId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstCategoryAttributeDataTypeArgs = {
  mstCategoryAttributeDataTypeId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstCityArgs = {
  mstCityId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstCmsArgs = {
  mstCmsId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstCompanyArgs = {
  mstCompany: MstCompanyInputType;
};


export type EzyFindMutationDeleteMstCompanyDocumentTypeArgs = {
  mstCompanyDocumentTypeId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstCompanyStatusArgs = {
  mstCompanyStatusId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstCompanyTaskListArgs = {
  mstCompanyTaskListId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstConfigurationArgs = {
  mstConfigurationId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstContactFormArgs = {
  mstContactFormId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstCountryArgs = {
  mstCountryId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstCrmCustomerArgs = {
  mstCrmCustomerId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstCrmCustomerCommentArgs = {
  mstCrmCustomerCommentId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstCrmInventoryArgs = {
  mstCrmInventoryId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstCrmInventoryTypeArgs = {
  mstCrmInventoryTypeId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstCrmInvoiceArgs = {
  mstCrmInvoiceId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstCrmInvoiceDetailsArgs = {
  mstCrmInvoiceDetailsId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstCrmQuoteArgs = {
  mstCrmQuoteId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstCrmQuoteDetailsArgs = {
  mstCrmQuoteDetailsId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstCustomerEnquiryArgs = {
  mstCustomerEnquiryId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstCustomerEnquiryResponseArgs = {
  mstCustomerEnquiryResponseId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstDocumentStatusArgs = {
  mstDocumentStatusId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstDomainArgs = {
  mstDomainId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstEFlyersArgs = {
  mstEFlyersId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstEmailStackArgs = {
  mstEmailStackId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstFavouritesArgs = {
  mstFavouritesId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstFranchiseeArgs = {
  mstFranchiseeId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstItemRequestArgs = {
  mstItemRequestId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstItemResponseArgs = {
  mstItemResponseId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstKeywordsArgs = {
  mstKeywordsId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstMagazineAdArgs = {
  mstMagazineAdId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstMagazineAdTypeArgs = {
  mstMagazineAdTypeId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstMagazineSectionArgs = {
  mstMagazineSectionId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstMailTypeArgs = {
  mstMailTypeId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstNotificationStackArgs = {
  mstNotificationStackId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstPackageArgs = {
  mstPackageId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstPackageAttributeArgs = {
  mstPackageAttributeId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstPaymentModeArgs = {
  mstPaymentModeId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstPaymentStatusArgs = {
  mstPaymentStatusId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstPaymentTypeArgs = {
  mstPaymentTypeId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstPeriodTypeArgs = {
  mstPeriodTypeId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstProvinceArgs = {
  mstProvinceId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstQuantityTypeArgs = {
  mstQuantityTypeId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstRatingArgs = {
  mstRatingId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstSettingTypeArgs = {
  mstSettingTypeId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstSettingsArgs = {
  mstSettingsId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstSpecialsArgs = {
  mstSpecialsId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstStatusArgs = {
  mstStatusId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstSuburbArgs = {
  mstSuburbId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstUserRoleArgs = {
  mstUserRoleId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstUserStatusArgs = {
  mstUserStatusId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstUsersArgs = {
  mstUsers: MstUsersInputType;
};


export type EzyFindMutationDeleteMstVersionArgs = {
  mstVersionId: Scalars['Int'];
};


export type EzyFindMutationDeleteMstVolumeTypeArgs = {
  mstVolumeTypeId: Scalars['Int'];
};


export type EzyFindMutationDeletePostArgs = {
  postId: Scalars['Int'];
};


export type EzyFindMutationDeletePostAttachmentArgs = {
  postAttachmentId: Scalars['Int'];
};


export type EzyFindMutationDeletePostReplyArgs = {
  postReplyId: Scalars['Int'];
};


export type EzyFindMutationDeletePostReplyAttachmentArgs = {
  postReplyAttachmentId: Scalars['Int'];
};


export type EzyFindMutationDeletePrdBidArgs = {
  prdBidId: Scalars['Int'];
};


export type EzyFindMutationDeletePrdCategoryArgs = {
  prdCategoryId: Scalars['Int'];
};


export type EzyFindMutationDeletePrdHireArgs = {
  prdHireId: Scalars['Int'];
};


export type EzyFindMutationDeletePrdOrderDetailsArgs = {
  prdOrderDetailsId: Scalars['Int'];
};


export type EzyFindMutationDeletePrdOrderPaymentArgs = {
  prdOrderPaymentId: Scalars['Int'];
};


export type EzyFindMutationDeletePrdOrderStatusArgs = {
  prdOrderStatusId: Scalars['Int'];
};


export type EzyFindMutationDeletePrdOrderStatusTypeArgs = {
  prdOrderStatusTypeId: Scalars['Int'];
};


export type EzyFindMutationDeletePrdOrdersArgs = {
  prdOrdersId: Scalars['Int'];
};


export type EzyFindMutationDeletePrdProductsArgs = {
  prdProducts: PrdProductsInputType;
};


export type EzyFindMutationDeletePrdShoppingCartArgs = {
  prdShoppingCart: PrdShoppingCartInputType;
};


export type EzyFindMutationDeletePrdShoppingCartIdArgs = {
  prdShoppingCartId: Scalars['Int'];
};


export type EzyFindMutationDeletePrdSubCategoryArgs = {
  prdSubCategoryId: Scalars['Int'];
};


export type EzyFindMutationDeleteProductDocumentArgs = {
  mapProductDocument: MapProductDocumentInputType;
};


export type EzyFindMutationDeleteProductImageArgs = {
  mapProductImages: MapProductImagesInputType;
};


export type EzyFindMutationDeleteSystemRoleArgs = {
  systemRoleId: Scalars['Int'];
};


export type EzyFindMutationDeleteSystemUserArgs = {
  systemUserId: Scalars['Int'];
};


export type EzyFindMutationForgetChangePasswordArgs = {
  forgetPass: ForgetChangePasswordInputType;
};


export type EzyFindMutationPostMstItemRequestArgs = {
  files?: InputMaybe<Array<InputMaybe<Scalars['Upload']>>>;
  mstItemRequest: MstItemRequestInputType;
};


export type EzyFindMutationPostMstItemResponseArgs = {
  files?: InputMaybe<Array<InputMaybe<Scalars['Upload']>>>;
  mstItemResponse: MstItemResponseInputType;
};


export type EzyFindMutationPostMstRatingArgs = {
  mstRating: MstRatingInputType;
};


export type EzyFindMutationPostPostArgs = {
  files?: InputMaybe<Array<InputMaybe<Scalars['Upload']>>>;
  post: PostInputType;
};


export type EzyFindMutationPostPrdShoppingCartArgs = {
  prdShoppingCart: PrdShoppingCartInputType;
};


export type EzyFindMutationPostPrdShoppingCartOptimizedArgs = {
  prdShoppingCart: PrdShoppingCartInputType;
};


export type EzyFindMutationPostReplyArgs = {
  files?: InputMaybe<Array<InputMaybe<Scalars['Upload']>>>;
  post: PostReplyInputType;
};


export type EzyFindMutationPostUserActivityArgs = {
  mapUserActivity: MapUserActivityInputType;
};


export type EzyFindMutationPostUserAddressArgs = {
  mstUserAddress: MstUserAddressInputType;
};


export type EzyFindMutationPostVehicleArgs = {
  mstVehicle: PostVehicleInputType;
};


export type EzyFindMutationRegisterBusinessArgs = {
  userDto: MstUserDtoInputType;
};


export type EzyFindMutationRegisterUserArgs = {
  platform: Scalars['Int'];
  userDto: MstUserDtoInputType;
};


export type EzyFindMutationUpdateDevFormsArgs = {
  devForms: DevFormsInputType;
};


export type EzyFindMutationUpdateElmahErrorArgs = {
  elmahError: ElmahErrorInputType;
};


export type EzyFindMutationUpdateJobArgs = {
  job: JobInputType;
};


export type EzyFindMutationUpdateMapCategoryAttributesArgs = {
  mapCategoryAttributes: MapCategoryAttributesInputType;
};


export type EzyFindMutationUpdateMapCompanyAreaArgs = {
  mapCompanyArea: MapCompanyAreaInputType;
};


export type EzyFindMutationUpdateMapCompanyAuditLogArgs = {
  mapCompanyAuditLog: MapCompanyAuditLogInputType;
};


export type EzyFindMutationUpdateMapCompanyCategoryArgs = {
  mapCompanyCategory: MapCompanyCategoryInputType;
};


export type EzyFindMutationUpdateMapCompanyDocumentArgs = {
  mapCompanyDocument: MapCompanyDocumentInputType;
};


export type EzyFindMutationUpdateMapCompanyEmailArgs = {
  mapCompanyEmail: MapCompanyEmailInputType;
};


export type EzyFindMutationUpdateMapCompanyMagazineAdArgs = {
  mapCompanyMagazineAd: MapCompanyMagazineAdInputType;
};


export type EzyFindMutationUpdateMapCompanyPackageArgs = {
  mapCompanyPackage: MapCompanyPackageInputType;
};


export type EzyFindMutationUpdateMapCompanyPaymentArgs = {
  mapCompanyPayment: MapCompanyPaymentInputType;
};


export type EzyFindMutationUpdateMapCompanyProvideArgs = {
  mapCompanyProvide: MapCompanyProvideInputType;
};


export type EzyFindMutationUpdateMapCompanySeekArgs = {
  mapCompanySeek: MapCompanySeekInputType;
};


export type EzyFindMutationUpdateMapCompanyTaskArgs = {
  mapCompanyTask: MapCompanyTaskInputType;
};


export type EzyFindMutationUpdateMapCompanyUsersArgs = {
  mapCompanyUsers: MapCompanyUsersInputType;
};


export type EzyFindMutationUpdateMapCustomerEnquiryUploadArgs = {
  mapCustomerEnquiryUpload: MapCustomerEnquiryUploadInputType;
};


export type EzyFindMutationUpdateMapEflyersUploadArgs = {
  mapEflyersUpload: MapEflyersUploadInputType;
};


export type EzyFindMutationUpdateMapItemRequestAreaArgs = {
  mapItemRequestArea: MapItemRequestAreaInputType;
};


export type EzyFindMutationUpdateMapItemRequestCategoryArgs = {
  mapItemRequestCategory: MapItemRequestCategoryInputType;
};


export type EzyFindMutationUpdateMapItemRequestCategoryAttributeArgs = {
  mapItemRequestCategoryAttribute: MapItemRequestCategoryAttributeInputType;
};


export type EzyFindMutationUpdateMapItemRequestUploadArgs = {
  mapItemRequestUpload: MapItemRequestUploadInputType;
};


export type EzyFindMutationUpdateMapItemResponseUploadArgs = {
  mapItemResponseUpload: MapItemResponseUploadInputType;
};


export type EzyFindMutationUpdateMapPackageAttributesArgs = {
  mapPackageAttributes: MapPackageAttributesInputType;
};


export type EzyFindMutationUpdateMapSettingsRoleArgs = {
  mapSettingsRole: MapSettingsRoleInputType;
};


export type EzyFindMutationUpdateMapSpecialUploadArgs = {
  mapSpecialUpload: MapSpecialUploadInputType;
};


export type EzyFindMutationUpdateMapUserRoleRightsArgs = {
  mapUserRoleRights: MapUserRoleRightsInputType;
};


export type EzyFindMutationUpdateMapUsersSettingsArgs = {
  mapUsersSettings: MapUsersSettingsInputType;
};


export type EzyFindMutationUpdateMstBeestatusArgs = {
  mstBeestatus: MstBeestatusInputType;
};


export type EzyFindMutationUpdateMstCategoryArgs = {
  mstCategory: MstCategoryInputType;
};


export type EzyFindMutationUpdateMstCategoryAttributeArgs = {
  mstCategoryAttribute: MstCategoryAttributeInputType;
};


export type EzyFindMutationUpdateMstCategoryAttributeDataTypeArgs = {
  mstCategoryAttributeDataType: MstCategoryAttributeDataTypeInputType;
};


export type EzyFindMutationUpdateMstCityArgs = {
  mstCity: MstCityInputType;
};


export type EzyFindMutationUpdateMstCmsArgs = {
  mstCms: MstCmsInputType;
};


export type EzyFindMutationUpdateMstCompanyArgs = {
  image?: InputMaybe<Scalars['Upload']>;
  mstCompany: MstCompanyInputType;
};


export type EzyFindMutationUpdateMstCompanyDocumentTypeArgs = {
  mstCompanyDocumentType: MstCompanyDocumentTypeInputType;
};


export type EzyFindMutationUpdateMstCompanyStatusArgs = {
  mstCompanyStatus: MstCompanyStatusInputType;
};


export type EzyFindMutationUpdateMstCompanyTaskListArgs = {
  mstCompanyTaskList: MstCompanyTaskListInputType;
};


export type EzyFindMutationUpdateMstConfigurationArgs = {
  mstConfiguration: MstConfigurationInputType;
};


export type EzyFindMutationUpdateMstContactFormArgs = {
  mstContactForm: MstContactFormInputType;
};


export type EzyFindMutationUpdateMstCountryArgs = {
  mstCountry: MstCountryInputType;
};


export type EzyFindMutationUpdateMstCrmCustomerArgs = {
  mstCrmCustomer: MstCrmCustomerInputType;
};


export type EzyFindMutationUpdateMstCrmCustomerCommentArgs = {
  mstCrmCustomerComment: MstCrmCustomerCommentInputType;
};


export type EzyFindMutationUpdateMstCrmInventoryArgs = {
  mstCrmInventory: MstCrmInventoryInputType;
};


export type EzyFindMutationUpdateMstCrmInventoryTypeArgs = {
  mstCrmInventoryType: MstCrmInventoryTypeInputType;
};


export type EzyFindMutationUpdateMstCrmInvoiceArgs = {
  mstCrmInvoice: MstCrmInvoiceInputType;
};


export type EzyFindMutationUpdateMstCrmInvoiceDetailsArgs = {
  mstCrmInvoiceDetails: MstCrmInvoiceDetailsInputType;
};


export type EzyFindMutationUpdateMstCrmQuoteArgs = {
  mstCrmQuote: MstCrmQuoteInputType;
};


export type EzyFindMutationUpdateMstCrmQuoteDetailsArgs = {
  mstCrmQuoteDetails: MstCrmQuoteDetailsInputType;
};


export type EzyFindMutationUpdateMstCustomerEnquiryArgs = {
  mstCustomerEnquiry: MstCustomerEnquiryInputType;
};


export type EzyFindMutationUpdateMstCustomerEnquiryResponseArgs = {
  mstCustomerEnquiryResponse: MstCustomerEnquiryResponseInputType;
};


export type EzyFindMutationUpdateMstDocumentStatusArgs = {
  mstDocumentStatus: MstDocumentStatusInputType;
};


export type EzyFindMutationUpdateMstDomainArgs = {
  mstDomain: MstDomainInputType;
};


export type EzyFindMutationUpdateMstEFlyersArgs = {
  mstEFlyers: MstEFlyersInputType;
};


export type EzyFindMutationUpdateMstEmailStackArgs = {
  mstEmailStack: MstEmailStackInputType;
};


export type EzyFindMutationUpdateMstFavouritesArgs = {
  mstFavourites: MstFavouritesInputType;
};


export type EzyFindMutationUpdateMstFranchiseeArgs = {
  mstFranchisee: MstFranchiseeInputType;
};


export type EzyFindMutationUpdateMstItemRequestArgs = {
  mstItemRequest: MstItemRequestInputType;
};


export type EzyFindMutationUpdateMstItemResponseArgs = {
  mstItemResponse: MstItemResponseInputType;
};


export type EzyFindMutationUpdateMstKeywordsArgs = {
  mstKeywords: MstKeywordsInputType;
};


export type EzyFindMutationUpdateMstMagazineAdArgs = {
  mstMagazineAd: MstMagazineAdInputType;
};


export type EzyFindMutationUpdateMstMagazineAdTypeArgs = {
  mstMagazineAdType: MstMagazineAdTypeInputType;
};


export type EzyFindMutationUpdateMstMagazineSectionArgs = {
  mstMagazineSection: MstMagazineSectionInputType;
};


export type EzyFindMutationUpdateMstMailTypeArgs = {
  mstMailType: MstMailTypeInputType;
};


export type EzyFindMutationUpdateMstNotificationStackArgs = {
  mstNotificationStack: MstNotificationStackInputType;
};


export type EzyFindMutationUpdateMstPackageArgs = {
  mstPackage: MstPackageInputType;
};


export type EzyFindMutationUpdateMstPackageAttributeArgs = {
  mstPackageAttribute: MstPackageAttributeInputType;
};


export type EzyFindMutationUpdateMstPaymentModeArgs = {
  mstPaymentMode: MstPaymentModeInputType;
};


export type EzyFindMutationUpdateMstPaymentStatusArgs = {
  mstPaymentStatus: MstPaymentStatusInputType;
};


export type EzyFindMutationUpdateMstPaymentTypeArgs = {
  mstPaymentType: MstPaymentTypeInputType;
};


export type EzyFindMutationUpdateMstPeriodTypeArgs = {
  mstPeriodType: MstPeriodTypeInputType;
};


export type EzyFindMutationUpdateMstProvinceArgs = {
  mstProvince: MstProvinceInputType;
};


export type EzyFindMutationUpdateMstQuantityTypeArgs = {
  mstQuantityType: MstQuantityTypeInputType;
};


export type EzyFindMutationUpdateMstRatingArgs = {
  mstRating: MstRatingInputType;
};


export type EzyFindMutationUpdateMstSettingTypeArgs = {
  mstSettingType: MstSettingTypeInputType;
};


export type EzyFindMutationUpdateMstSettingsArgs = {
  mstSettings: MstSettingsInputType;
};


export type EzyFindMutationUpdateMstSpecialsArgs = {
  mstSpecials: MstSpecialsInputType;
};


export type EzyFindMutationUpdateMstStatusArgs = {
  mstStatus: MstStatusInputType;
};


export type EzyFindMutationUpdateMstSuburbArgs = {
  mstSuburb: MstSuburbInputType;
};


export type EzyFindMutationUpdateMstUserLocationArgs = {
  mstUserInfo: MstUsersInputType;
};


export type EzyFindMutationUpdateMstUserRoleArgs = {
  mstUserRole: MstUserRoleInputType;
};


export type EzyFindMutationUpdateMstUserStatusArgs = {
  mstUserStatus: MstUserStatusInputType;
};


export type EzyFindMutationUpdateMstUsersArgs = {
  files?: InputMaybe<Array<InputMaybe<Scalars['Upload']>>>;
  mstUsers: MstUsersInputType;
};


export type EzyFindMutationUpdateMstVersionArgs = {
  mstVersion: MstVersionInputType;
};


export type EzyFindMutationUpdateMstVolumeTypeArgs = {
  mstVolumeType: MstVolumeTypeInputType;
};


export type EzyFindMutationUpdatePostArgs = {
  post: PostInputType;
};


export type EzyFindMutationUpdatePostAttachmentArgs = {
  postAttachment: PostAttachmentInputType;
};


export type EzyFindMutationUpdatePostReplyArgs = {
  postReply: PostReplyInputType;
};


export type EzyFindMutationUpdatePostReplyAttachmentArgs = {
  postReplyAttachment: PostReplyAttachmentInputType;
};


export type EzyFindMutationUpdatePrdBidArgs = {
  prdBid: PrdBidInputType;
};


export type EzyFindMutationUpdatePrdCategoryArgs = {
  prdCategory: PrdCategoryInputType;
};


export type EzyFindMutationUpdatePrdHireArgs = {
  prdHire: PrdBidInputType;
};


export type EzyFindMutationUpdatePrdOrderDetailsArgs = {
  prdOrderDetails: PrdOrderDetailsInputType;
};


export type EzyFindMutationUpdatePrdOrderPaymentArgs = {
  prdOrderPayment: PrdOrderPaymentInputType;
};


export type EzyFindMutationUpdatePrdOrderStatusArgs = {
  prdOrderStatus: PrdOrderStatusInputType;
};


export type EzyFindMutationUpdatePrdOrderStatusTypeArgs = {
  prdOrderStatusType: PrdOrderStatusTypeInputType;
};


export type EzyFindMutationUpdatePrdOrdersArgs = {
  prdOrders: PrdOrdersInputType;
};


export type EzyFindMutationUpdatePrdProductsArgs = {
  docs?: InputMaybe<Array<InputMaybe<Scalars['Upload']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['Upload']>>>;
  prdProducts: PrdProductsInputType;
};


export type EzyFindMutationUpdatePrdShoppingCartArgs = {
  prdShoppingCart: PrdShoppingCartInputType;
};


export type EzyFindMutationUpdatePrdSubCategoryArgs = {
  prdSubCategory: PrdSubCategoryInputType;
};


export type EzyFindMutationUpdateProductDocumentArgs = {
  doc?: InputMaybe<Scalars['Upload']>;
  mapProductDocument: MapProductDocumentInputType;
};


export type EzyFindMutationUpdateProductImageArgs = {
  image?: InputMaybe<Scalars['Upload']>;
  mapProductImages: MapProductImagesInputType;
};


export type EzyFindMutationUpdateSystemRoleArgs = {
  systemRole: SystemRoleInputType;
};


export type EzyFindMutationUpdateSystemUserArgs = {
  systemUser: SystemUserInputType;
};


export type EzyFindMutationUpgradeBusinessPackageArgs = {
  userDto: MstUserDtoInputType;
};

export type ForgetChangePasswordInputType = {
  confirmPassword?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  gUID?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type JobInputType = {
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  domainId?: InputMaybe<Scalars['Int']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  jobId: Scalars['Int'];
  modifiedBy?: InputMaybe<Scalars['Int']>;
  postedDate?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  titleCategoryId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type JobType = {
  __typename?: 'JobType';
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  domainId?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['DateTime']>;
  jobId: Scalars['Int'];
  modifiedBy?: Maybe<Scalars['Int']>;
  postedDate?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  titleCategoryId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type JwtTokenType = {
  __typename?: 'JwtTokenType';
  validTo?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['String']>;
};

export type MapCategoryAttributesInputType = {
  catAttribute?: InputMaybe<MstCategoryAttributeInputType>;
  catAttributeId?: InputMaybe<Scalars['Int']>;
  category?: InputMaybe<MstCategoryInputType>;
  categoryAttributeId: Scalars['Int'];
  categoryId?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  mapItemRequestCategoryAttribute?: InputMaybe<Array<InputMaybe<MapItemRequestCategoryAttributeInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
};

export type MapCategoryAttributesType = {
  __typename?: 'MapCategoryAttributesType';
  catAttribute?: Maybe<MstCategoryAttributeType>;
  catAttributeId?: Maybe<Scalars['Int']>;
  category?: Maybe<MstCategoryType>;
  categoryAttributeId: Scalars['Int'];
  categoryId?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  mapItemRequestCategoryAttribute?: Maybe<Array<Maybe<MapItemRequestCategoryAttributeType>>>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
};

export type MapCompanyAreaInputType = {
  city?: InputMaybe<MstCityInputType>;
  cityId?: InputMaybe<Scalars['Int']>;
  compPackage?: InputMaybe<MapCompanyPackageInputType>;
  compPackageId?: InputMaybe<Scalars['Int']>;
  companyAreaId: Scalars['Int'];
  country?: InputMaybe<MstCountryInputType>;
  countryId?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  province?: InputMaybe<MstProvinceInputType>;
  provinceId?: InputMaybe<Scalars['Int']>;
  suburb?: InputMaybe<MstSuburbInputType>;
  suburbId?: InputMaybe<Scalars['Int']>;
};

export type MapCompanyAreaType = {
  __typename?: 'MapCompanyAreaType';
  city?: Maybe<MstCityType>;
  cityId?: Maybe<Scalars['Int']>;
  compPackage?: Maybe<MapCompanyPackageType>;
  compPackageId?: Maybe<Scalars['Int']>;
  companyAreaId: Scalars['Int'];
  country?: Maybe<MstCountryType>;
  countryId?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  province?: Maybe<MstProvinceType>;
  provinceId?: Maybe<Scalars['Int']>;
  suburb?: Maybe<MstSuburbType>;
  suburbId?: Maybe<Scalars['Int']>;
};

export type MapCompanyAuditLogInputType = {
  auditDate?: InputMaybe<Scalars['DateTime']>;
  auditLog?: InputMaybe<Scalars['String']>;
  auditLogId: Scalars['Int'];
  company?: InputMaybe<MstCompanyInputType>;
  companyId?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type MapCompanyAuditLogType = {
  __typename?: 'MapCompanyAuditLogType';
  auditDate?: Maybe<Scalars['DateTime']>;
  auditLog?: Maybe<Scalars['String']>;
  auditLogId: Scalars['Int'];
  company?: Maybe<MstCompanyType>;
  companyId?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type MapCompanyCategoryInputType = {
  categoryId?: InputMaybe<Scalars['Int']>;
  compPackage?: InputMaybe<MapCompanyPackageInputType>;
  compPackageId?: InputMaybe<Scalars['Int']>;
  companyCategoryId: Scalars['Int'];
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
};

export type MapCompanyCategoryType = {
  __typename?: 'MapCompanyCategoryType';
  categoryId?: Maybe<Scalars['Int']>;
  compPackage?: Maybe<MapCompanyPackageType>;
  compPackageId?: Maybe<Scalars['Int']>;
  companyCategoryId: Scalars['Int'];
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
};

export type MapCompanyDocumentInputType = {
  aboutDocument?: InputMaybe<Scalars['String']>;
  compDocId: Scalars['Int'];
  company?: InputMaybe<Array<InputMaybe<MstCompanyInputType>>>;
  companyId?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  documentName?: InputMaybe<Scalars['String']>;
  documentPath?: InputMaybe<Scalars['String']>;
  documentStatus?: InputMaybe<Array<InputMaybe<MstDocumentStatusInputType>>>;
  documentStatusId?: InputMaybe<Scalars['Int']>;
  documentType?: InputMaybe<Array<InputMaybe<MstCompanyDocumentTypeInputType>>>;
  documentTypeId?: InputMaybe<Scalars['Int']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  rejectReason?: InputMaybe<Scalars['String']>;
};

export type MapCompanyDocumentType = {
  __typename?: 'MapCompanyDocumentType';
  aboutDocument?: Maybe<Scalars['String']>;
  compDocId: Scalars['Int'];
  company?: Maybe<Array<Maybe<MstCompanyType>>>;
  companyId?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  documentName?: Maybe<Scalars['String']>;
  documentPath?: Maybe<Scalars['String']>;
  documentStatus?: Maybe<Array<Maybe<MstDocumentStatusType>>>;
  documentStatusId?: Maybe<Scalars['Int']>;
  documentType?: Maybe<Array<Maybe<MstCompanyDocumentTypeType>>>;
  documentTypeId?: Maybe<Scalars['Int']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  rejectReason?: Maybe<Scalars['String']>;
};

export type MapCompanyEmailInputType = {
  compMailId: Scalars['Int'];
  compPackage?: InputMaybe<MapCompanyPackageInputType>;
  compPackageId?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
};

export type MapCompanyEmailType = {
  __typename?: 'MapCompanyEmailType';
  compMailId: Scalars['Int'];
  compPackage?: Maybe<MapCompanyPackageType>;
  compPackageId?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
};

export type MapCompanyMagazineAdInputType = {
  compMagId: Scalars['Int'];
  companyId?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  magazineAd?: InputMaybe<Array<InputMaybe<MstMagazineAdInputType>>>;
  magazineAdId?: InputMaybe<Scalars['Int']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  price?: InputMaybe<Scalars['Decimal']>;
  purchaseDate?: InputMaybe<Scalars['DateTime']>;
  qty?: InputMaybe<Scalars['Int']>;
  totalAmount?: InputMaybe<Scalars['Decimal']>;
};

export type MapCompanyMagazineAdType = {
  __typename?: 'MapCompanyMagazineAdType';
  compMagId: Scalars['Int'];
  companyId?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  magazineAd?: Maybe<Array<Maybe<MstMagazineAdType>>>;
  magazineAdId?: Maybe<Scalars['Int']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Decimal']>;
  purchaseDate?: Maybe<Scalars['DateTime']>;
  qty?: Maybe<Scalars['Int']>;
  totalAmount?: Maybe<Scalars['Decimal']>;
};

export type MapCompanyPackageInputType = {
  addCategory?: InputMaybe<Scalars['Boolean']>;
  catalogueAllowedCount?: InputMaybe<Scalars['Int']>;
  catalogueUsedCount?: InputMaybe<Scalars['Int']>;
  categoryAllowedCount?: InputMaybe<Scalars['Int']>;
  categoryNotExist?: InputMaybe<Scalars['Boolean']>;
  categoryUsedCount?: InputMaybe<Scalars['Int']>;
  compPackageId: Scalars['Int'];
  companyId?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  emailAllowedCount?: InputMaybe<Scalars['Int']>;
  emailUsedCount?: InputMaybe<Scalars['Int']>;
  followBusinessAllowedCount?: InputMaybe<Scalars['Int']>;
  followBusinessUsedCount?: InputMaybe<Scalars['Int']>;
  fromDate?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  keywordAllowedCount?: InputMaybe<Scalars['Int']>;
  keywordUsedCount?: InputMaybe<Scalars['Int']>;
  mapCompanyArea?: InputMaybe<Array<InputMaybe<MapCompanyAreaInputType>>>;
  mapCompanyCategory?: InputMaybe<Array<InputMaybe<MapCompanyCategoryInputType>>>;
  mapCompanyEmail?: InputMaybe<Array<InputMaybe<MapCompanyEmailInputType>>>;
  mapCompanyPayment?: InputMaybe<Array<InputMaybe<MapCompanyPaymentInputType>>>;
  mapCompanyProvide?: InputMaybe<Array<InputMaybe<MapCompanyProvideInputType>>>;
  mapCompanySeek?: InputMaybe<Array<InputMaybe<MapCompanySeekInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  package?: InputMaybe<MstPackageInputType>;
  packageId?: InputMaybe<Scalars['Int']>;
  requestAllowedCount?: InputMaybe<Scalars['Int']>;
  requestUsedCount?: InputMaybe<Scalars['Int']>;
  salesLeadAllowedCount?: InputMaybe<Scalars['Int']>;
  salesLeadUsedCount?: InputMaybe<Scalars['Int']>;
  specialAllowedCount?: InputMaybe<Scalars['Int']>;
  specialUsedCount?: InputMaybe<Scalars['Int']>;
  timeDelay: Scalars['Int'];
  toDate?: InputMaybe<Scalars['DateTime']>;
  usersAllowedCount?: InputMaybe<Scalars['Int']>;
  usersUsedCount?: InputMaybe<Scalars['Int']>;
};

export type MapCompanyPackageType = {
  __typename?: 'MapCompanyPackageType';
  addCategory?: Maybe<Scalars['Boolean']>;
  catalogueAllowedCount?: Maybe<Scalars['Int']>;
  catalogueUsedCount?: Maybe<Scalars['Int']>;
  categoryAllowedCount?: Maybe<Scalars['Int']>;
  categoryNotExist?: Maybe<Scalars['Boolean']>;
  categoryUsedCount?: Maybe<Scalars['Int']>;
  compPackageId: Scalars['Int'];
  companyId?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  emailAllowedCount?: Maybe<Scalars['Int']>;
  emailUsedCount?: Maybe<Scalars['Int']>;
  followBusinessAllowedCount?: Maybe<Scalars['Int']>;
  followBusinessUsedCount?: Maybe<Scalars['Int']>;
  fromDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  keywordAllowedCount?: Maybe<Scalars['Int']>;
  keywordUsedCount?: Maybe<Scalars['Int']>;
  mapCompanyArea?: Maybe<Array<Maybe<MapCompanyAreaType>>>;
  mapCompanyCategory?: Maybe<Array<Maybe<MapCompanyCategoryType>>>;
  mapCompanyEmail?: Maybe<Array<Maybe<MapCompanyEmailType>>>;
  mapCompanyPayment?: Maybe<Array<Maybe<MapCompanyPaymentType>>>;
  mapCompanyProvide?: Maybe<Array<Maybe<MapCompanyProvideType>>>;
  mapCompanySeek?: Maybe<Array<Maybe<MapCompanySeekType>>>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  package?: Maybe<MstPackageType>;
  packageId?: Maybe<Scalars['Int']>;
  requestAllowedCount?: Maybe<Scalars['Int']>;
  requestUsedCount?: Maybe<Scalars['Int']>;
  salesLeadAllowedCount?: Maybe<Scalars['Int']>;
  salesLeadUsedCount?: Maybe<Scalars['Int']>;
  specialAllowedCount?: Maybe<Scalars['Int']>;
  specialUsedCount?: Maybe<Scalars['Int']>;
  timeDelay: Scalars['Int'];
  toDate?: Maybe<Scalars['DateTime']>;
  usersAllowedCount?: Maybe<Scalars['Int']>;
  usersUsedCount?: Maybe<Scalars['Int']>;
};

export type MapCompanyPaymentInputType = {
  compPackage?: InputMaybe<MapCompanyPackageInputType>;
  compPackageId?: InputMaybe<Scalars['Int']>;
  compPaymentId: Scalars['Int'];
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  invoiceDate?: InputMaybe<Scalars['DateTime']>;
  invoiceNumber?: InputMaybe<Scalars['String']>;
  invoicePath?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  payFastToken?: InputMaybe<Scalars['String']>;
  paymentDate?: InputMaybe<Scalars['DateTime']>;
  paymentMode?: InputMaybe<MstPaymentModeInputType>;
  paymentModeId?: InputMaybe<Scalars['Int']>;
  paymentStatus?: InputMaybe<MstPaymentStatusInputType>;
  paymentStatusId?: InputMaybe<Scalars['Int']>;
  totalAmount?: InputMaybe<Scalars['Decimal']>;
  totalAmountUsd?: InputMaybe<Scalars['Decimal']>;
  transactionId?: InputMaybe<Scalars['String']>;
};

export type MapCompanyPaymentType = {
  __typename?: 'MapCompanyPaymentType';
  compPackage?: Maybe<MapCompanyPackageType>;
  compPackageId?: Maybe<Scalars['Int']>;
  compPaymentId: Scalars['Int'];
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  invoiceDate?: Maybe<Scalars['DateTime']>;
  invoiceNumber?: Maybe<Scalars['String']>;
  invoicePath?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  payFastToken?: Maybe<Scalars['String']>;
  paymentDate?: Maybe<Scalars['DateTime']>;
  paymentMode?: Maybe<MstPaymentModeType>;
  paymentModeId?: Maybe<Scalars['Int']>;
  paymentStatus?: Maybe<MstPaymentStatusType>;
  paymentStatusId?: Maybe<Scalars['Int']>;
  totalAmount?: Maybe<Scalars['Decimal']>;
  totalAmountUsd?: Maybe<Scalars['Decimal']>;
  transactionId?: Maybe<Scalars['String']>;
};

export type MapCompanyProvideInputType = {
  compPackage?: InputMaybe<MapCompanyPackageInputType>;
  compPackageId?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  keyword?: InputMaybe<MstKeywordsInputType>;
  keywordId: Scalars['Int'];
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  periodType?: InputMaybe<MstPeriodTypeInputType>;
  periodTypeId?: InputMaybe<Scalars['Int']>;
  periodValue?: InputMaybe<Scalars['Int']>;
  provideKeywordId: Scalars['Int'];
  quantityType?: InputMaybe<MstQuantityTypeInputType>;
  quantityTypeId?: InputMaybe<Scalars['Int']>;
  volumeType?: InputMaybe<MstVolumeTypeInputType>;
  volumeTypeId?: InputMaybe<Scalars['Int']>;
};

export type MapCompanyProvideType = {
  __typename?: 'MapCompanyProvideType';
  compPackage?: Maybe<MapCompanyPackageType>;
  compPackageId?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  keyword?: Maybe<MstKeywordsType>;
  keywordId: Scalars['Int'];
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  periodType?: Maybe<MstPeriodTypeType>;
  periodTypeId?: Maybe<Scalars['Int']>;
  periodValue?: Maybe<Scalars['Int']>;
  provideKeywordId: Scalars['Int'];
  quantityType?: Maybe<MstQuantityTypeType>;
  quantityTypeId?: Maybe<Scalars['Int']>;
  volumeType?: Maybe<MstVolumeTypeType>;
  volumeTypeId?: Maybe<Scalars['Int']>;
};

export type MapCompanySeekInputType = {
  compPackage?: InputMaybe<MapCompanyPackageInputType>;
  compPackageId?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  keyword?: InputMaybe<MstKeywordsInputType>;
  keywordId?: InputMaybe<Scalars['Int']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  periodType?: InputMaybe<MstPeriodTypeInputType>;
  periodTypeId?: InputMaybe<Scalars['Int']>;
  periodValue?: InputMaybe<Scalars['Int']>;
  quantityType?: InputMaybe<MstQuantityTypeInputType>;
  quantityTypeId?: InputMaybe<Scalars['Int']>;
  seekKeywordId: Scalars['Int'];
  volumeType?: InputMaybe<MstVolumeTypeInputType>;
  volumeTypeId?: InputMaybe<Scalars['Int']>;
};

export type MapCompanySeekType = {
  __typename?: 'MapCompanySeekType';
  compPackage?: Maybe<MapCompanyPackageType>;
  compPackageId?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  keyword?: Maybe<MstKeywordsType>;
  keywordId?: Maybe<Scalars['Int']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  periodType?: Maybe<MstPeriodTypeType>;
  periodTypeId?: Maybe<Scalars['Int']>;
  periodValue?: Maybe<Scalars['Int']>;
  quantityType?: Maybe<MstQuantityTypeType>;
  quantityTypeId?: Maybe<Scalars['Int']>;
  seekKeywordId: Scalars['Int'];
  volumeType?: Maybe<MstVolumeTypeType>;
  volumeTypeId?: Maybe<Scalars['Int']>;
};

export type MapCompanyTaskInputType = {
  compTaskId: Scalars['Int'];
  company?: InputMaybe<MstCompanyInputType>;
  companyId?: InputMaybe<Scalars['Int']>;
  completed?: InputMaybe<Scalars['Boolean']>;
  completionDate?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  task?: InputMaybe<MstCompanyTaskListInputType>;
  taskId?: InputMaybe<Scalars['Int']>;
};

export type MapCompanyTaskType = {
  __typename?: 'MapCompanyTaskType';
  compTaskId: Scalars['Int'];
  company?: Maybe<MstCompanyType>;
  companyId?: Maybe<Scalars['Int']>;
  completed?: Maybe<Scalars['Boolean']>;
  completionDate?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  task?: Maybe<MstCompanyTaskListType>;
  taskId?: Maybe<Scalars['Int']>;
};

export type MapCompanyUsersInputType = {
  compPackage?: InputMaybe<MapCompanyPackageInputType>;
  compPackageId?: InputMaybe<Scalars['Int']>;
  companyUserId: Scalars['Int'];
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  getRequests?: InputMaybe<Scalars['Boolean']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isMainBusinessUser?: InputMaybe<Scalars['Boolean']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type MapCompanyUsersType = {
  __typename?: 'MapCompanyUsersType';
  compPackage?: Maybe<MapCompanyPackageType>;
  compPackageId?: Maybe<Scalars['Int']>;
  companyUserId: Scalars['Int'];
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  getRequests?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isMainBusinessUser?: Maybe<Scalars['Boolean']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type MapCustomerEnquiryUploadInputType = {
  ceUploadId: Scalars['Int'];
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  customerEnquiry?: InputMaybe<MstCustomerEnquiryInputType>;
  customerEnquiryId?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  thumbNailPath?: InputMaybe<Scalars['String']>;
  uploadPath?: InputMaybe<Scalars['String']>;
};

export type MapCustomerEnquiryUploadType = {
  __typename?: 'MapCustomerEnquiryUploadType';
  ceUploadId: Scalars['Int'];
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  customerEnquiry?: Maybe<MstCustomerEnquiryType>;
  customerEnquiryId?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  thumbNailPath?: Maybe<Scalars['String']>;
  uploadPath?: Maybe<Scalars['String']>;
};

export type MapEflyersUploadInputType = {
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  documentName?: InputMaybe<Scalars['String']>;
  documentType?: InputMaybe<Scalars['Int']>;
  eflyerUploadId: Scalars['Int'];
  efm?: InputMaybe<MstUsersInputType>;
  efmid?: InputMaybe<Scalars['Int']>;
  filePath?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  sortOrder?: InputMaybe<Scalars['Int']>;
  thumbNailImagePath?: InputMaybe<Scalars['String']>;
};

export type MapEflyersUploadType = {
  __typename?: 'MapEflyersUploadType';
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  documentName?: Maybe<Scalars['String']>;
  documentType?: Maybe<Scalars['Int']>;
  eflyerUploadId: Scalars['Int'];
  efm?: Maybe<MstUsersType>;
  efmid?: Maybe<Scalars['Int']>;
  filePath?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  sortOrder?: Maybe<Scalars['Int']>;
  thumbNailImagePath?: Maybe<Scalars['String']>;
};

export type MapItemRequestAreaInputType = {
  cityId?: InputMaybe<Scalars['Int']>;
  countryId?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  irAreaId: Scalars['Int'];
  isActive?: InputMaybe<Scalars['Boolean']>;
  itemRequestId?: InputMaybe<Scalars['Int']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  provinceId?: InputMaybe<Scalars['Int']>;
  suburbId?: InputMaybe<Scalars['Int']>;
};

export type MapItemRequestAreaType = {
  __typename?: 'MapItemRequestAreaType';
  cityId?: Maybe<Scalars['Int']>;
  countryId?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  irAreaId: Scalars['Int'];
  isActive?: Maybe<Scalars['Boolean']>;
  itemRequestId?: Maybe<Scalars['Int']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  provinceId?: Maybe<Scalars['Int']>;
  suburbId?: Maybe<Scalars['Int']>;
};

export type MapItemRequestCategoryAttributeInputType = {
  categoryAttribute?: InputMaybe<Array<InputMaybe<MapCategoryAttributesInputType>>>;
  categoryAttributeId?: InputMaybe<Scalars['Int']>;
  categoryValue?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  irCategoryAttributeId: Scalars['Int'];
  isActive?: InputMaybe<Scalars['Boolean']>;
  itemRequest?: InputMaybe<Array<InputMaybe<MstItemRequestInputType>>>;
  itemRequestId?: InputMaybe<Scalars['Int']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
};

export type MapItemRequestCategoryAttributeType = {
  __typename?: 'MapItemRequestCategoryAttributeType';
  categoryAttribute?: Maybe<Array<Maybe<MapCategoryAttributesType>>>;
  categoryAttributeId?: Maybe<Scalars['Int']>;
  categoryValue?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  irCategoryAttributeId: Scalars['Int'];
  isActive?: Maybe<Scalars['Boolean']>;
  itemRequest?: Maybe<Array<Maybe<MstItemRequestType>>>;
  itemRequestId?: Maybe<Scalars['Int']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
};

export type MapItemRequestCategoryInputType = {
  categoryId?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  irCategoryId: Scalars['Int'];
  isActive?: InputMaybe<Scalars['Boolean']>;
  itemRequestId?: InputMaybe<Scalars['Int']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
};

export type MapItemRequestCategoryType = {
  __typename?: 'MapItemRequestCategoryType';
  categoryId?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  irCategoryId: Scalars['Int'];
  isActive?: Maybe<Scalars['Boolean']>;
  itemRequestId?: Maybe<Scalars['Int']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
};

export type MapItemRequestUploadDtoType = {
  __typename?: 'MapItemRequestUploadDtoType';
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  irUploadId?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  itemRequestId?: Maybe<Scalars['Int']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  thumbNailPath?: Maybe<Scalars['String']>;
  uploadPath?: Maybe<Scalars['String']>;
};

export type MapItemRequestUploadInputType = {
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  irUploadId: Scalars['Int'];
  isActive?: InputMaybe<Scalars['Boolean']>;
  itemRequestId?: InputMaybe<Scalars['Int']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  thumbNailPath?: InputMaybe<Scalars['String']>;
  uploadPath?: InputMaybe<Scalars['String']>;
};

export type MapItemRequestUploadType = {
  __typename?: 'MapItemRequestUploadType';
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  irUploadId: Scalars['Int'];
  isActive?: Maybe<Scalars['Boolean']>;
  itemRequestId?: Maybe<Scalars['Int']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  thumbNailPath?: Maybe<Scalars['String']>;
  uploadPath?: Maybe<Scalars['String']>;
};

export type MapItemResponseUploadInputType = {
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  documentName?: InputMaybe<Scalars['String']>;
  irUploadId?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  itemResponse?: InputMaybe<Array<InputMaybe<MstItemResponseInputType>>>;
  itemResponseId?: InputMaybe<Scalars['Int']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  uploadPath?: InputMaybe<Scalars['String']>;
};

export type MapItemResponseUploadType = {
  __typename?: 'MapItemResponseUploadType';
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  documentName?: Maybe<Scalars['String']>;
  irUploadId: Scalars['Int'];
  isActive?: Maybe<Scalars['Boolean']>;
  itemResponse?: Maybe<Array<Maybe<MstItemResponseType>>>;
  itemResponseId?: Maybe<Scalars['Int']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  uploadPath?: Maybe<Scalars['String']>;
};

export type MapPackageAttributesInputType = {
  amount?: InputMaybe<Scalars['Decimal']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  package?: InputMaybe<MstPackageInputType>;
  packageDetailId: Scalars['Int'];
  packageId?: InputMaybe<Scalars['Int']>;
  pattribute?: InputMaybe<MstPackageAttributeInputType>;
  pattributeId?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['String']>;
};

export type MapPackageAttributesType = {
  __typename?: 'MapPackageAttributesType';
  amount?: Maybe<Scalars['Decimal']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  package?: Maybe<MstPackageType>;
  packageDetailId: Scalars['Int'];
  packageId?: Maybe<Scalars['Int']>;
  pattribute?: Maybe<MstPackageAttributeType>;
  pattributeId?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

export type MapProductDocumentInputType = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  documentId: Scalars['Int'];
  documentName?: InputMaybe<Scalars['String']>;
  documentPath?: InputMaybe<Scalars['String']>;
  productId?: InputMaybe<Scalars['Int']>;
};

export type MapProductDocumentType = {
  __typename?: 'MapProductDocumentType';
  active?: Maybe<Scalars['Boolean']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  documentId: Scalars['Int'];
  documentName?: Maybe<Scalars['String']>;
  documentPath?: Maybe<Scalars['String']>;
  product?: Maybe<PrdProductsType>;
  productId?: Maybe<Scalars['Int']>;
};

export type MapProductImagesInputType = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  imageId: Scalars['Int'];
  imageName?: InputMaybe<Scalars['String']>;
  imagePath?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<PrdProductsInputType>;
  productId?: InputMaybe<Scalars['Int']>;
};

export type MapProductImagesType = {
  __typename?: 'MapProductImagesType';
  active?: Maybe<Scalars['Boolean']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  imageId: Scalars['Int'];
  imageName?: Maybe<Scalars['String']>;
  imagePath?: Maybe<Scalars['String']>;
  product?: Maybe<PrdProductsType>;
  productId?: Maybe<Scalars['Int']>;
  thumbNailPath?: Maybe<Scalars['String']>;
};

export type MapSettingsRoleInputType = {
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  role?: InputMaybe<MstUsersInputType>;
  roleId?: InputMaybe<Scalars['Int']>;
  setting?: InputMaybe<MstUsersInputType>;
  settingId?: InputMaybe<Scalars['Int']>;
  srid: Scalars['Int'];
};

export type MapSettingsRoleType = {
  __typename?: 'MapSettingsRoleType';
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  role?: Maybe<MstUsersType>;
  roleId?: Maybe<Scalars['Int']>;
  setting?: Maybe<MstUsersType>;
  settingId?: Maybe<Scalars['Int']>;
  srid: Scalars['Int'];
};

export type MapSpecialUploadInputType = {
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  label?: InputMaybe<Scalars['String']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  sortOrder?: InputMaybe<Scalars['Int']>;
  special?: InputMaybe<MstSpecialsInputType>;
  specialId?: InputMaybe<Scalars['Int']>;
  specialUploadId: Scalars['Int'];
  thumbNailPath?: InputMaybe<Scalars['String']>;
  uploadPath?: InputMaybe<Scalars['String']>;
};

export type MapSpecialUploadType = {
  __typename?: 'MapSpecialUploadType';
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  sortOrder?: Maybe<Scalars['Int']>;
  special?: Maybe<MstSpecialsType>;
  specialId?: Maybe<Scalars['Int']>;
  specialUploadId: Scalars['Int'];
  thumbNailPath?: Maybe<Scalars['String']>;
  uploadPath?: Maybe<Scalars['String']>;
};

export type MapUserActivityInputType = {
  action?: InputMaybe<Scalars['String']>;
  activityID?: InputMaybe<Scalars['Int']>;
  categoryID?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  domainCategoryID?: InputMaybe<Scalars['Int']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  searchText?: InputMaybe<Scalars['String']>;
  sessionID?: InputMaybe<Scalars['String']>;
  subCategoryID?: InputMaybe<Scalars['Int']>;
  userActivityID?: InputMaybe<Scalars['Int']>;
  userID?: InputMaybe<Scalars['Int']>;
};

export type MapUserActivityType = {
  __typename?: 'MapUserActivityType';
  action?: Maybe<Scalars['String']>;
  activityID?: Maybe<Scalars['Int']>;
  categoryID?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  domainCategoryID?: Maybe<Scalars['Int']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  searchText?: Maybe<Scalars['String']>;
  sessionID?: Maybe<Scalars['String']>;
  subCategoryID?: Maybe<Scalars['Int']>;
  userActivityID?: Maybe<Scalars['Int']>;
  userID?: Maybe<Scalars['Int']>;
};

export type MapUserRoleRightsInputType = {
  addRights?: InputMaybe<Scalars['Boolean']>;
  deleteRights?: InputMaybe<Scalars['Boolean']>;
  form?: InputMaybe<DevFormsInputType>;
  formId?: InputMaybe<Scalars['Int']>;
  modifyRights?: InputMaybe<Scalars['Boolean']>;
  rightsId: Scalars['Int'];
  role?: InputMaybe<MstUserRoleInputType>;
  roleId?: InputMaybe<Scalars['Int']>;
  viewRights?: InputMaybe<Scalars['Boolean']>;
};

export type MapUserRoleRightsType = {
  __typename?: 'MapUserRoleRightsType';
  addRights?: Maybe<Scalars['Boolean']>;
  deleteRights?: Maybe<Scalars['Boolean']>;
  form?: Maybe<DevFormsType>;
  formId?: Maybe<Scalars['Int']>;
  modifyRights?: Maybe<Scalars['Boolean']>;
  rightsId: Scalars['Int'];
  role?: Maybe<MstUserRoleType>;
  roleId?: Maybe<Scalars['Int']>;
  viewRights?: Maybe<Scalars['Boolean']>;
};

export type MapUsersSettingsInputType = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['Boolean']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  sPost?: InputMaybe<Scalars['Boolean']>;
  sUserId?: InputMaybe<Scalars['String']>;
  setting?: InputMaybe<MstSettingsInputType>;
  settingId?: InputMaybe<Scalars['Int']>;
  sms?: InputMaybe<Scalars['Boolean']>;
  userId?: InputMaybe<Scalars['Int']>;
  userSettingId: Scalars['Int'];
};

export type MapUsersSettingsType = {
  __typename?: 'MapUsersSettingsType';
  accessToken?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['Boolean']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  sPost?: Maybe<Scalars['Boolean']>;
  sUserId?: Maybe<Scalars['String']>;
  setting?: Maybe<MstSettingsType>;
  settingId?: Maybe<Scalars['Int']>;
  sms?: Maybe<Scalars['Boolean']>;
  userId?: Maybe<Scalars['Int']>;
  userSettingId: Scalars['Int'];
};

export type MstBeestatusInputType = {
  beestatus?: InputMaybe<MstBeestatusInputType>;
  beestatusId: Scalars['Int'];
  beestatusName?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  mstCompany?: InputMaybe<Array<InputMaybe<MstCompanyInputType>>>;
  procurementRecognition?: InputMaybe<Scalars['Decimal']>;
  scorePoint?: InputMaybe<Scalars['String']>;
};

export type MstBeestatusType = {
  __typename?: 'MstBeestatusType';
  beestatus?: Maybe<MstBeestatusType>;
  beestatusId: Scalars['Int'];
  beestatusName?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  mstCompany?: Maybe<Array<Maybe<MstCompanyType>>>;
  procurementRecognition?: Maybe<Scalars['Decimal']>;
  scorePoint?: Maybe<Scalars['String']>;
};

export type MstBusinessUserDtoType = {
  __typename?: 'MstBusinessUserDtoType';
  bidAmount?: Maybe<Scalars['Decimal']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  orderID?: Maybe<Scalars['Int']>;
  productID?: Maybe<Scalars['Int']>;
  productName?: Maybe<Scalars['String']>;
  purchasedAmount?: Maybe<Scalars['Decimal']>;
  status?: Maybe<Scalars['String']>;
  userID?: Maybe<Scalars['Int']>;
  userProfileImage?: Maybe<Scalars['String']>;
  userProfileThumbNailImage?: Maybe<Scalars['String']>;
  userStatus?: Maybe<Scalars['Int']>;
};

export type MstCategoryAttributeDataTypeInputType = {
  catAttributeDataType?: InputMaybe<Scalars['String']>;
  catAttributeDataTypeId: Scalars['Int'];
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  mstCategoryAttribute?: InputMaybe<Array<InputMaybe<MstCategoryAttributeInputType>>>;
};

export type MstCategoryAttributeDataTypeType = {
  __typename?: 'MstCategoryAttributeDataTypeType';
  catAttributeDataType?: Maybe<Scalars['String']>;
  catAttributeDataTypeId: Scalars['Int'];
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  mstCategoryAttribute?: Maybe<Array<Maybe<MstCategoryAttributeType>>>;
};

export type MstCategoryAttributeInputType = {
  catAttribute?: InputMaybe<Scalars['String']>;
  catAttributeDataType?: InputMaybe<MstCategoryAttributeDataTypeInputType>;
  catAttributeDataTypeId?: InputMaybe<Scalars['Int']>;
  catAttributeId: Scalars['Int'];
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  mapCategoryAttributes?: InputMaybe<Array<InputMaybe<MapCategoryAttributesInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
};

export type MstCategoryAttributeType = {
  __typename?: 'MstCategoryAttributeType';
  catAttribute?: Maybe<Scalars['String']>;
  catAttributeDataType?: Maybe<MstCategoryAttributeDataTypeType>;
  catAttributeDataTypeId?: Maybe<Scalars['Int']>;
  catAttributeId: Scalars['Int'];
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  mapCategoryAttributes?: Maybe<Array<Maybe<MapCategoryAttributesType>>>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
};

export type MstCategoryInputType = {
  categoryIcon?: InputMaybe<Scalars['String']>;
  categoryId: Scalars['Int'];
  categoryName?: InputMaybe<Scalars['String']>;
  categoryThumbNailIcon?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isCategory?: InputMaybe<Scalars['Boolean']>;
  isMainCategory?: InputMaybe<Scalars['Boolean']>;
  isMenuAllowed?: InputMaybe<Scalars['Boolean']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  parentCategoryId?: InputMaybe<Scalars['Int']>;
  timeDelayException?: InputMaybe<Scalars['Boolean']>;
};

export type MstCategoryParameter = {
  categoryIcon?: InputMaybe<Scalars['String']>;
  categoryId?: InputMaybe<Scalars['ID']>;
  categoryName?: InputMaybe<Scalars['String']>;
  categoryThumbNailIcon?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isCategory?: InputMaybe<Scalars['Boolean']>;
  isMainCategory?: InputMaybe<Scalars['Boolean']>;
  isMenuAllowed?: InputMaybe<Scalars['Boolean']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  parentCategoryId?: InputMaybe<Scalars['Int']>;
  timeDelayException?: InputMaybe<Scalars['Boolean']>;
};

export type MstCategoryType = {
  __typename?: 'MstCategoryType';
  categoryIcon?: Maybe<Scalars['String']>;
  categoryId: Scalars['Int'];
  categoryName?: Maybe<Scalars['String']>;
  categoryThumbNailIcon?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isCategory?: Maybe<Scalars['Boolean']>;
  isMainCategory?: Maybe<Scalars['Boolean']>;
  isMenuAllowed?: Maybe<Scalars['Boolean']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  parentCategoryId?: Maybe<Scalars['Int']>;
  timeDelayException?: Maybe<Scalars['Boolean']>;
};

export type MstCityInputType = {
  cityId: Scalars['Int'];
  cityName?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  mapCompanyArea?: InputMaybe<Array<InputMaybe<MapCompanyAreaInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  mstSpecials?: InputMaybe<Array<InputMaybe<MstSpecialsInputType>>>;
  mstSuburb?: InputMaybe<Array<InputMaybe<MstSuburbInputType>>>;
  mstUsers?: InputMaybe<Array<InputMaybe<MstUsersInputType>>>;
  province?: InputMaybe<MstProvinceInputType>;
  provinceId?: InputMaybe<Scalars['Int']>;
};

export type MstCityType = {
  __typename?: 'MstCityType';
  cityId: Scalars['Int'];
  cityName?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  mapCompanyArea?: Maybe<Array<Maybe<MapCompanyAreaType>>>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  mstSpecials?: Maybe<Array<Maybe<MstSpecialsType>>>;
  mstSuburb?: Maybe<Array<Maybe<MstSuburbType>>>;
  mstUsers?: Maybe<Array<Maybe<MstUsersType>>>;
  province?: Maybe<MstProvinceType>;
  provinceId?: Maybe<Scalars['Int']>;
};

export type MstCmsInputType = {
  cmsid: Scalars['Int'];
  cmstext?: InputMaybe<Scalars['String']>;
  cmstitle?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
};

export type MstCmsType = {
  __typename?: 'MstCmsType';
  cmsid: Scalars['Int'];
  cmstext?: Maybe<Scalars['String']>;
  cmstitle?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
};

export type MstCompanyAuditLogType = {
  __typename?: 'MstCompanyAuditLogType';
  auditDate?: Maybe<Scalars['DateTime']>;
  auditLog?: Maybe<Scalars['String']>;
  auditLogId: Scalars['Int'];
  companyId?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  mapUsers?: Maybe<Array<Maybe<MstReportUserDtoType>>>;
  userId?: Maybe<Scalars['Int']>;
};

export type MstCompanyDocumentTypeInputType = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  documentType?: InputMaybe<Scalars['String']>;
  documentTypeId: Scalars['Int'];
  mapCompanyDocument?: InputMaybe<Array<InputMaybe<MapCompanyDocumentInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
};

export type MstCompanyDocumentTypeType = {
  __typename?: 'MstCompanyDocumentTypeType';
  active?: Maybe<Scalars['Boolean']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  documentType?: Maybe<Scalars['String']>;
  documentTypeId: Scalars['Int'];
  mapCompanyDocument?: Maybe<Array<Maybe<MapCompanyDocumentType>>>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
};

export type MstCompanyDtoType = {
  __typename?: 'MstCompanyDtoType';
  bEEScorePoint?: Maybe<Scalars['String']>;
  bEEStatus?: Maybe<Scalars['String']>;
  bEEStatusID?: Maybe<Scalars['Int']>;
  callType?: Maybe<Scalars['Int']>;
  categoryIds?: Maybe<Scalars['String']>;
  cityID?: Maybe<Scalars['Int']>;
  cityId?: Maybe<Scalars['Int']>;
  cityIds?: Maybe<Scalars['String']>;
  cityName?: Maybe<Scalars['String']>;
  clickCount?: Maybe<Scalars['Int']>;
  compCategory?: Maybe<Scalars['String']>;
  compCityID?: Maybe<Scalars['Int']>;
  compCityName?: Maybe<Scalars['String']>;
  compCountryID?: Maybe<Scalars['Int']>;
  compCountryName?: Maybe<Scalars['String']>;
  compDescription?: Maybe<Scalars['String']>;
  compEmailId?: Maybe<Scalars['String']>;
  compHelpDeskNumber?: Maybe<Scalars['String']>;
  compPackageID?: Maybe<Scalars['Int']>;
  compPackageId?: Maybe<Scalars['Int']>;
  compPhone?: Maybe<Scalars['String']>;
  compProvinceID?: Maybe<Scalars['Int']>;
  compProvinceName?: Maybe<Scalars['String']>;
  compStreetAddress?: Maybe<Scalars['String']>;
  compSuburb?: Maybe<Scalars['String']>;
  compSuburbID?: Maybe<Scalars['Int']>;
  compWebSite?: Maybe<Scalars['String']>;
  companyID?: Maybe<Scalars['Int']>;
  companyId?: Maybe<Scalars['Int']>;
  companyName?: Maybe<Scalars['String']>;
  companyPercentage?: Maybe<Scalars['Decimal']>;
  companyStatus?: Maybe<Scalars['String']>;
  companyStatusID?: Maybe<Scalars['Int']>;
  countryID?: Maybe<Scalars['Int']>;
  countryId?: Maybe<Scalars['Int']>;
  countryName?: Maybe<Scalars['String']>;
  directorsCount?: Maybe<Scalars['Int']>;
  documentPath?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
  franchiseId?: Maybe<Scalars['Int']>;
  intCategoryIds?: Maybe<Scalars['String']>;
  intCompPackageID?: Maybe<Scalars['Int']>;
  intCompanyMBUDeviceID?: Maybe<Scalars['String']>;
  intCompanyMBUDeviceType?: Maybe<Scalars['Int']>;
  intCompanyMBUEmail?: Maybe<Scalars['String']>;
  intCompanyMBUID?: Maybe<Scalars['Int']>;
  intCompanyMBUName?: Maybe<Scalars['String']>;
  intFavouriteID?: Maybe<Scalars['Int']>;
  intFranchiseID?: Maybe<Scalars['Int']>;
  intRatingScore?: Maybe<Scalars['Decimal']>;
  joinDate?: Maybe<Scalars['DateTime']>;
  logoPath?: Maybe<Scalars['String']>;
  mainBusinessUserID?: Maybe<Scalars['Int']>;
  mainCategoryID?: Maybe<Scalars['Int']>;
  procurementRecognition?: Maybe<Scalars['String']>;
  provinceID?: Maybe<Scalars['Int']>;
  provinceIds?: Maybe<Scalars['String']>;
  provinceName?: Maybe<Scalars['String']>;
  ratingScore?: Maybe<Scalars['Decimal']>;
  selectedCity?: Maybe<Scalars['Boolean']>;
  selectedProvince?: Maybe<Scalars['Boolean']>;
  selectedSuburb?: Maybe<Scalars['Boolean']>;
  serviceTax?: Maybe<Scalars['String']>;
  statusId?: Maybe<Scalars['String']>;
  suburbID?: Maybe<Scalars['Int']>;
  suburbIds?: Maybe<Scalars['String']>;
  suburbName?: Maybe<Scalars['String']>;
  userID?: Maybe<Scalars['Int']>;
  vATNumber?: Maybe<Scalars['String']>;
  viewCount?: Maybe<Scalars['Int']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type MstCompanyInputType = {
  beestatus?: InputMaybe<MstBeestatusInputType>;
  beestatusId?: InputMaybe<Scalars['Int']>;
  companyId: Scalars['Int'];
  companyName?: InputMaybe<Scalars['String']>;
  companyPercent?: InputMaybe<Scalars['Decimal']>;
  companyStatus?: InputMaybe<MstCompanyStatusInputType>;
  companyStatusId?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  crmInvoiceFooter?: InputMaybe<Scalars['String']>;
  crmInvoiceHeader?: InputMaybe<Scalars['String']>;
  crmQuoteFooter?: InputMaybe<Scalars['String']>;
  crmQuoteHeader?: InputMaybe<Scalars['String']>;
  crmcolorCode?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  directorsCount?: InputMaybe<Scalars['Int']>;
  domainUrl?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  franchiseeId?: InputMaybe<Scalars['Int']>;
  helpDeskNumber?: InputMaybe<Scalars['String']>;
  logoPath?: InputMaybe<Scalars['String']>;
  mainBusinessUserId?: InputMaybe<Scalars['Int']>;
  mapCompanyAuditLog?: InputMaybe<Array<InputMaybe<MapCompanyAuditLogInputType>>>;
  mapCompanyDocument?: InputMaybe<Array<InputMaybe<MapCompanyDocumentInputType>>>;
  mapCompanyTask?: InputMaybe<Array<InputMaybe<MapCompanyTaskInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  mstCrmInventory?: InputMaybe<Array<InputMaybe<MstCrmInventoryInputType>>>;
  mstCrmInvoice?: InputMaybe<Array<InputMaybe<MstCrmInvoiceInputType>>>;
  mstCrmQuote?: InputMaybe<Array<InputMaybe<MstCrmQuoteInputType>>>;
  mstCustomerEnquiry?: InputMaybe<Array<InputMaybe<MstCustomerEnquiryInputType>>>;
  mstCustomerEnquiryResponse?: InputMaybe<Array<InputMaybe<MstCustomerEnquiryResponseInputType>>>;
  mstItemResponse?: InputMaybe<Array<InputMaybe<MstItemResponseInputType>>>;
  mstRating?: InputMaybe<Array<InputMaybe<MstRatingInputType>>>;
  payFastMerchantId?: InputMaybe<Scalars['String']>;
  payFastMerchantKey?: InputMaybe<Scalars['String']>;
  payGateMerchantId?: InputMaybe<Scalars['String']>;
  payGateMerchantKey?: InputMaybe<Scalars['String']>;
  payPalMerchantId?: InputMaybe<Scalars['String']>;
  payPalMerchantKey?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  serviceTax?: InputMaybe<Scalars['Decimal']>;
  vatnumber?: InputMaybe<Scalars['String']>;
  webSite?: InputMaybe<Scalars['String']>;
};

export type MstCompanyLimitedType = {
  __typename?: 'MstCompanyLimitedType';
  companyId: Scalars['Int'];
  companyName?: Maybe<Scalars['String']>;
  logoPath?: Maybe<Scalars['String']>;
};

export type MstCompanyStatusInputType = {
  companyStatusId: Scalars['Int'];
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  mstCompany?: InputMaybe<MstCompanyInputType>;
  statusName?: InputMaybe<Scalars['String']>;
};

export type MstCompanyStatusType = {
  __typename?: 'MstCompanyStatusType';
  companyStatusId: Scalars['Int'];
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  mstCompany?: Maybe<Array<Maybe<MstCompanyType>>>;
  statusName?: Maybe<Scalars['String']>;
};

export type MstCompanyTaskListInputType = {
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  mapCompanyTask?: InputMaybe<Array<InputMaybe<MapCompanyTaskInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  percentage?: InputMaybe<Scalars['Decimal']>;
  sortOrder?: InputMaybe<Scalars['Int']>;
  taskDescription?: InputMaybe<Scalars['String']>;
  taskId: Scalars['Int'];
  taskName?: InputMaybe<Scalars['String']>;
};

export type MstCompanyTaskListType = {
  __typename?: 'MstCompanyTaskListType';
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  mapCompanyTask?: Maybe<Array<Maybe<MapCompanyTaskType>>>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  percentage?: Maybe<Scalars['Decimal']>;
  sortOrder?: Maybe<Scalars['Int']>;
  taskDescription?: Maybe<Scalars['String']>;
  taskId: Scalars['Int'];
  taskName?: Maybe<Scalars['String']>;
};

export type MstCompanyType = {
  __typename?: 'MstCompanyType';
  beestatus?: Maybe<MstBeestatusType>;
  beestatusId?: Maybe<Scalars['Int']>;
  companyId: Scalars['Int'];
  companyName?: Maybe<Scalars['String']>;
  companyPercent?: Maybe<Scalars['Decimal']>;
  companyStatus?: Maybe<MstCompanyStatusType>;
  companyStatusId?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  crmInvoiceFooter?: Maybe<Scalars['String']>;
  crmInvoiceHeader?: Maybe<Scalars['String']>;
  crmQuoteFooter?: Maybe<Scalars['String']>;
  crmQuoteHeader?: Maybe<Scalars['String']>;
  crmcolorCode?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  directorsCount?: Maybe<Scalars['Int']>;
  domainUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
  franchiseeId?: Maybe<Scalars['Int']>;
  helpDeskNumber?: Maybe<Scalars['String']>;
  logoPath?: Maybe<Scalars['String']>;
  mainBusinessUserId?: Maybe<Scalars['Int']>;
  mapCompanyAuditLog?: Maybe<Array<Maybe<MapCompanyAuditLogType>>>;
  mapCompanyDocument?: Maybe<Array<Maybe<MapCompanyDocumentType>>>;
  mapCompanyTask?: Maybe<Array<Maybe<MapCompanyTaskType>>>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  mstCrmInventory?: Maybe<Array<Maybe<MstCrmInventoryType>>>;
  mstCrmInvoice?: Maybe<Array<Maybe<MstCrmInvoiceType>>>;
  mstCrmQuote?: Maybe<Array<Maybe<MstCrmQuoteType>>>;
  mstCustomerEnquiry?: Maybe<Array<Maybe<MstCustomerEnquiryType>>>;
  mstCustomerEnquiryResponse?: Maybe<Array<Maybe<MstCustomerEnquiryResponseType>>>;
  mstItemResponse?: Maybe<Array<Maybe<MstItemResponseType>>>;
  mstRating?: Maybe<Array<Maybe<MstRatingType>>>;
  payFastMerchantId?: Maybe<Scalars['String']>;
  payFastMerchantKey?: Maybe<Scalars['String']>;
  payGateMerchantId?: Maybe<Scalars['String']>;
  payGateMerchantKey?: Maybe<Scalars['String']>;
  payPalMerchantId?: Maybe<Scalars['String']>;
  payPalMerchantKey?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  serviceTax?: Maybe<Scalars['Decimal']>;
  vatnumber?: Maybe<Scalars['String']>;
  webSite?: Maybe<Scalars['String']>;
};

export type MstConfigurationInputType = {
  configurationId: Scalars['Int'];
  fbApiclientId?: InputMaybe<Scalars['String']>;
  fbApisecretKey?: InputMaybe<Scalars['String']>;
  fbFanPageLink?: InputMaybe<Scalars['String']>;
  gpApiclientId?: InputMaybe<Scalars['String']>;
  gpApisecretKey?: InputMaybe<Scalars['String']>;
  gpFanPageLink?: InputMaybe<Scalars['String']>;
  igApiclientId?: InputMaybe<Scalars['String']>;
  igApisecretKey?: InputMaybe<Scalars['String']>;
  igFanPageLink?: InputMaybe<Scalars['String']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  smsIsEnabled?: InputMaybe<Scalars['Boolean']>;
  smsPassword?: InputMaybe<Scalars['String']>;
  smsUserName?: InputMaybe<Scalars['String']>;
  smtpEnableSsl?: InputMaybe<Scalars['Boolean']>;
  smtpFromEmail?: InputMaybe<Scalars['String']>;
  smtpFromName?: InputMaybe<Scalars['String']>;
  smtpHostServer?: InputMaybe<Scalars['String']>;
  smtpPassword?: InputMaybe<Scalars['String']>;
  smtpPort?: InputMaybe<Scalars['String']>;
  smtpUserName?: InputMaybe<Scalars['String']>;
  twApiclientId?: InputMaybe<Scalars['String']>;
  twApisecretKey?: InputMaybe<Scalars['String']>;
  twFanPageLink?: InputMaybe<Scalars['String']>;
};

export type MstConfigurationType = {
  __typename?: 'MstConfigurationType';
  configurationId: Scalars['Int'];
  fbApiclientId?: Maybe<Scalars['String']>;
  fbApisecretKey?: Maybe<Scalars['String']>;
  fbFanPageLink?: Maybe<Scalars['String']>;
  gpApiclientId?: Maybe<Scalars['String']>;
  gpApisecretKey?: Maybe<Scalars['String']>;
  gpFanPageLink?: Maybe<Scalars['String']>;
  igApiclientId?: Maybe<Scalars['String']>;
  igApisecretKey?: Maybe<Scalars['String']>;
  igFanPageLink?: Maybe<Scalars['String']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  smsIsEnabled?: Maybe<Scalars['Boolean']>;
  smsPassword?: Maybe<Scalars['String']>;
  smsUserName?: Maybe<Scalars['String']>;
  smtpEnableSsl?: Maybe<Scalars['Boolean']>;
  smtpFromEmail?: Maybe<Scalars['String']>;
  smtpFromName?: Maybe<Scalars['String']>;
  smtpHostServer?: Maybe<Scalars['String']>;
  smtpPassword?: Maybe<Scalars['String']>;
  smtpPort?: Maybe<Scalars['String']>;
  smtpUserName?: Maybe<Scalars['String']>;
  twApiclientId?: Maybe<Scalars['String']>;
  twApisecretKey?: Maybe<Scalars['String']>;
  twFanPageLink?: Maybe<Scalars['String']>;
};

export type MstContactFormInputType = {
  contactId: Scalars['Int'];
  contactNo?: InputMaybe<Scalars['String']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  emailAddress?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
};

export type MstContactFormType = {
  __typename?: 'MstContactFormType';
  contactId: Scalars['Int'];
  contactNo?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  emailAddress?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
};

export type MstCountryInputType = {
  countryId: Scalars['Int'];
  countryName?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Int']>;
  mapCompanyAreas?: InputMaybe<Array<InputMaybe<MapCompanyAreaInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  mstFranchises?: InputMaybe<Array<InputMaybe<MstFranchiseeInputType>>>;
  mstProvinces?: InputMaybe<Array<InputMaybe<MstProvinceInputType>>>;
  mstSpecials?: InputMaybe<Array<InputMaybe<MstSpecialsInputType>>>;
  mstUsers?: InputMaybe<Array<InputMaybe<MstUsersInputType>>>;
};

export type MstCountryParameter = {
  countryId?: InputMaybe<Scalars['ID']>;
  countryName?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
};

export type MstCountryQuery = {
  __typename?: 'MstCountryQuery';
  companyCheck?: Maybe<Response1>;
  confirmEmail?: Maybe<Response>;
  devForm?: Maybe<DevFormsType>;
  devForms?: Maybe<PaginationListDevForms>;
  elmahError?: Maybe<ElmahErrorType>;
  elmahErrors?: Maybe<PaginationListElmahError>;
  emailCheck?: Maybe<Response>;
  forgetPassword?: Maybe<Response>;
  getBusinessIncomingEnquiry?: Maybe<ResponseMstCustomerEnquiry>;
  getBusinessList?: Maybe<ResponseMstCompanyDto>;
  getBusinessOrdersUsers?: Maybe<ResponseMstBusinessUsersDto>;
  getBusinessTopBids?: Maybe<ResponseMstBusinessUsersDto>;
  getBusinessTopHire?: Maybe<ResponseMstBusinessUsersDto>;
  getBusinessTopOrderedBids?: Maybe<ResponseMstBusinessUsersDto>;
  getBusinessTopUserOrdersUsers?: Maybe<ResponseMstBusinessUsersDto>;
  getBusinessUsers?: Maybe<ResponseMstUserDto>;
  getCity?: Maybe<ResponseMstCity>;
  getCityByProvince?: Maybe<ResponseMstCity>;
  getCompanyAuditLog?: Maybe<ResponseMapCompanyAuditLog>;
  getCompanyCategories?: Maybe<ResponseMapCompanyCategory>;
  getCompanyTaskAsync?: Maybe<ResponseMapCompanyTask>;
  getCustomerEnquiryList?: Maybe<ResponseMstCustomerEnquiry>;
  getHierarchyResponseItems?: Maybe<Array<Maybe<MstItemResponseType>>>;
  getIncomingItemRequestList?: Maybe<ResponseMstItemRequestDto>;
  getIncommingHierarchyResponseItems?: Maybe<Array<Maybe<MstItemResponseType>>>;
  getIncommingTopLevelResponseItems?: Maybe<Array<Maybe<MstItemResponseType>>>;
  getItemRequestList?: Maybe<ResponseMstItemRequestDto>;
  getItemRequestServiceList?: Maybe<ResponseMstItemRequestServiceDto>;
  getMagazinesList?: Maybe<ResponseMstEFlyersDto>;
  getMapProductImages?: Maybe<ResponseMapProductImages>;
  getMstCategoryByParentId?: Maybe<ResponseMstCategory>;
  getMstCategoryMain?: Maybe<ResponseMstCategory>;
  getMstFavouritesProductList?: Maybe<ResponseProductDt>;
  getMstPackageDetailList?: Maybe<ResponseMstPackageDetailsDto>;
  getMstPackageList?: Maybe<ResponseMstPackageListDto>;
  getMstRatingScoreList?: Maybe<Response6>;
  getMstSpecialList?: Maybe<ResponseMstSpecialsDto>;
  getPostList?: Maybe<ResponsePostDto>;
  getPostReply?: Maybe<ResponsePostReplyDto>;
  getPrdBidList?: Maybe<ResponsePrdBid>;
  getPrdCategoryList?: Maybe<ResponsePrdCategoryDto>;
  getPrdProductList?: Maybe<ResponseProductDt>;
  getPrdSalesType?: Maybe<ResponsePrdSalesType>;
  getPrdScope?: Maybe<ResponsePrdScope>;
  getPrdShoppingCart?: Maybe<ResponsePrdShoppingCartTotalDto>;
  getPrdType?: Maybe<ResponsePrdType>;
  getProvince?: Maybe<ResponseMstProvince>;
  getProvinceByCountry?: Maybe<ResponseMstProvince>;
  getRatingList?: Maybe<Response6>;
  getResponseItems?: Maybe<Array<Maybe<MstItemResponseType>>>;
  getSession?: Maybe<Response2>;
  getSuburb?: Maybe<ResponseMstSuburb>;
  getSuburbByCity?: Maybe<ResponseMstSuburb>;
  getTopLevelResponseItems?: Maybe<Array<Maybe<MstItemResponseType>>>;
  getUser?: Maybe<Response3>;
  getUserActivity?: Maybe<ResponseMapUserActivity>;
  getUserAddress?: Maybe<ResponseMstUserAddress>;
  getUserTopBids?: Maybe<ResponseMstBusinessUsersDto>;
  getUserTopHire?: Maybe<ResponseMstBusinessUsersDto>;
  getVehicles?: Maybe<ResponseMstVehicle>;
  guestLogin?: Maybe<Response4>;
  job?: Maybe<JobType>;
  jobs?: Maybe<PaginationListJob>;
  mapCategoryAttribute?: Maybe<MapCategoryAttributesType>;
  mapCategoryAttributes?: Maybe<PaginationListMapCategoryAttributes>;
  mapCompanyArea?: Maybe<MapCompanyAreaType>;
  mapCompanyAreas?: Maybe<PaginationListMapCompanyArea>;
  mapCompanyAuditLog?: Maybe<MapCompanyAuditLogType>;
  mapCompanyAuditLogs?: Maybe<PaginationListMapCompanyAuditLog>;
  mapCompanyCategories?: Maybe<PaginationListMapCompanyCategory>;
  mapCompanyCategory?: Maybe<MapCompanyCategoryType>;
  mapCompanyDocument?: Maybe<MapCompanyDocumentType>;
  mapCompanyDocuments?: Maybe<PaginationListMapCompanyDocument>;
  mapCompanyEmail?: Maybe<MapCompanyEmailType>;
  mapCompanyEmails?: Maybe<PaginationListMapCompanyEmail>;
  mapCompanyMagazineAd?: Maybe<MapCompanyMagazineAdType>;
  mapCompanyMagazineAds?: Maybe<PaginationListMapCompanyMagazineAd>;
  mapCompanyPackage?: Maybe<MapCompanyPackageType>;
  mapCompanyPackageById?: Maybe<MapCompanyPackageType>;
  mapCompanyPackages?: Maybe<PaginationListMapCompanyPackage>;
  mapCompanyPayment?: Maybe<MapCompanyPaymentType>;
  mapCompanyPayments?: Maybe<PaginationListMapCompanyPayment>;
  mapCompanyProvide?: Maybe<MapCompanyProvideType>;
  mapCompanyProvides?: Maybe<PaginationListMapCompanyProvide>;
  mapCompanySeek?: Maybe<MapCompanySeekType>;
  mapCompanySeeks?: Maybe<PaginationListMapCompanySeek>;
  mapCompanyTask?: Maybe<MapCompanyTaskType>;
  mapCompanyTasks?: Maybe<PaginationListMapCompanyTask>;
  mapCompanyUsers?: Maybe<MapCompanyUsersType>;
  mapCompanyUserss?: Maybe<PaginationListMapCompanyUsers>;
  mapCustomerEnquiryUpload?: Maybe<MapCustomerEnquiryUploadType>;
  mapCustomerEnquiryUploads?: Maybe<PaginationListMapCustomerEnquiryUpload>;
  mapEflyersUpload?: Maybe<MapEflyersUploadType>;
  mapEflyersUploads?: Maybe<PaginationListMapEflyersUpload>;
  mapItemRequestArea?: Maybe<MapItemRequestAreaType>;
  mapItemRequestAreas?: Maybe<PaginationListMapItemRequestArea>;
  mapItemRequestCategory?: Maybe<MapItemRequestCategoryType>;
  mapItemRequestCategoryAttribute?: Maybe<MapItemRequestCategoryAttributeType>;
  mapItemRequestCategoryAttributes?: Maybe<PaginationListMapItemRequestCategoryAttribute>;
  mapItemRequestCategorys?: Maybe<PaginationListMapItemRequestCategory>;
  mapItemRequestUpload?: Maybe<MapItemRequestUploadType>;
  mapItemRequestUploads?: Maybe<PaginationListMapItemRequestUpload>;
  mapItemResponseUpload?: Maybe<MapItemResponseUploadType>;
  mapItemResponseUploads?: Maybe<PaginationListMapItemResponseUpload>;
  mapPackageAttributes?: Maybe<MapPackageAttributesType>;
  mapPackageAttributess?: Maybe<PaginationListMapPackageAttributes>;
  mapProductDocument?: Maybe<MapProductDocumentType>;
  mapProductDocuments?: Maybe<PaginationListMapProductDocument>;
  mapProductImages?: Maybe<MapProductImagesType>;
  mapProductImagess?: Maybe<PaginationListMapProductImages>;
  mapSettingsRole?: Maybe<MapSettingsRoleType>;
  mapSettingsRoles?: Maybe<PaginationListMapSettingsRole>;
  mapSpecialUpload?: Maybe<MapSpecialUploadType>;
  mapSpecialUploads?: Maybe<PaginationListMapSpecialUpload>;
  mapUserRoleRights?: Maybe<MapUserRoleRightsType>;
  mapUserRoleRightss?: Maybe<PaginationListMapUserRoleRights>;
  mapUsersSettings?: Maybe<MapUsersSettingsType>;
  mapUsersSettingss?: Maybe<PaginationListMapUsersSettings>;
  mobileCheck?: Maybe<Response1>;
  mstBeestatus?: Maybe<MstBeestatusType>;
  mstBeestatuss?: Maybe<PaginationListMstBeestatus>;
  mstCategory?: Maybe<MstCategoryType>;
  mstCategoryAttribute?: Maybe<MstCategoryAttributeType>;
  mstCategoryAttributeDataType?: Maybe<MstCategoryAttributeDataTypeType>;
  mstCategoryAttributeDataTypes?: Maybe<PaginationListMstCategoryAttributeDataType>;
  mstCategoryAttributes?: Maybe<PaginationListMstCategoryAttribute>;
  mstCategorys?: Maybe<Array<Maybe<MstCategoryType>>>;
  mstCity?: Maybe<MstCityType>;
  mstCitys?: Maybe<PaginationListMstCity>;
  mstCms?: Maybe<MstCmsType>;
  mstCmss?: Maybe<PaginationListMstCms>;
  mstCompany?: Maybe<MstCompanyType>;
  mstCompanyDocumentType?: Maybe<MstCompanyDocumentTypeType>;
  mstCompanyDocumentTypes?: Maybe<PaginationListMstCompanyDocumentType>;
  mstCompanyStatus?: Maybe<MstCompanyStatusType>;
  mstCompanyStatuss?: Maybe<PaginationListMstCompanyStatus>;
  mstCompanyTaskList?: Maybe<MstCompanyTaskListType>;
  mstCompanyTaskLists?: Maybe<PaginationListMstCompanyTaskList>;
  mstCompanys?: Maybe<PaginationListMstCompany>;
  mstConfiguration?: Maybe<MstConfigurationType>;
  mstConfigurations?: Maybe<PaginationListMstConfiguration>;
  mstContactForm?: Maybe<MstContactFormType>;
  mstContactForms?: Maybe<PaginationListMstContactForm>;
  mstCountries?: Maybe<PaginationListMstCountry>;
  mstCountry?: Maybe<MstCountryType>;
  mstCrmCustomer?: Maybe<MstCrmCustomerType>;
  mstCrmCustomerComment?: Maybe<MstCrmCustomerCommentType>;
  mstCrmCustomerComments?: Maybe<PaginationListMstCrmCustomerComment>;
  mstCrmCustomers?: Maybe<PaginationListMstCrmCustomer>;
  mstCrmInventory?: Maybe<MstCrmInventoryType>;
  mstCrmInventoryType?: Maybe<MstCrmInventoryTypeType>;
  mstCrmInventoryTypes?: Maybe<PaginationListMstCrmInventoryType>;
  mstCrmInventorys?: Maybe<PaginationListMstCrmInventory>;
  mstCrmInvoice?: Maybe<MstCrmInvoiceType>;
  mstCrmInvoiceDetails?: Maybe<MstCrmInvoiceDetailsType>;
  mstCrmInvoiceDetailss?: Maybe<PaginationListMstCrmInvoiceDetails>;
  mstCrmInvoices?: Maybe<PaginationListMstCrmInvoice>;
  mstCrmQuote?: Maybe<MstCrmQuoteType>;
  mstCrmQuoteDetails?: Maybe<MstCrmQuoteDetailsType>;
  mstCrmQuoteDetailss?: Maybe<PaginationListMstCrmQuoteDetails>;
  mstCrmQuotes?: Maybe<PaginationListMstCrmQuote>;
  mstCustomerEnquiry?: Maybe<MstCustomerEnquiryType>;
  mstCustomerEnquiryResponse?: Maybe<MstCustomerEnquiryResponseType>;
  mstCustomerEnquiryResponses?: Maybe<PaginationListMstCustomerEnquiryResponse>;
  mstCustomerEnquirys?: Maybe<PaginationListMstCustomerEnquiry>;
  mstDocumentStatus?: Maybe<MstDocumentStatusType>;
  mstDocumentStatuss?: Maybe<PaginationListMstDocumentStatus>;
  mstDomain?: Maybe<MstDomainType>;
  mstDomains?: Maybe<PaginationListMstDomain>;
  mstEFlyers?: Maybe<MstEFlyersType>;
  mstEFlyerss?: Maybe<PaginationListMstEFlyers>;
  mstEmailStack?: Maybe<MstEmailStackType>;
  mstEmailStacks?: Maybe<PaginationListMstEmailStack>;
  mstFavourites?: Maybe<MstFavouritesType>;
  mstFavouritess?: Maybe<PaginationListMstFavourites>;
  mstFranchisee?: Maybe<MstFranchiseeType>;
  mstFranchisees?: Maybe<PaginationListMstFranchisee>;
  mstItemRequest?: Maybe<MstItemRequestType>;
  mstItemRequests?: Maybe<PaginationListMstItemRequest>;
  mstItemResponse?: Maybe<MstItemResponseType>;
  mstItemResponses?: Maybe<PaginationListMstItemResponse>;
  mstKeywords?: Maybe<MstKeywordsType>;
  mstKeywordss?: Maybe<PaginationListMstKeywords>;
  mstMagazineAd?: Maybe<MstMagazineAdType>;
  mstMagazineAdType?: Maybe<MstMagazineAdTypeType>;
  mstMagazineAdTypes?: Maybe<PaginationListMstMagazineAdType>;
  mstMagazineAds?: Maybe<PaginationListMstMagazineAd>;
  mstMagazineSection?: Maybe<MstMagazineSectionType>;
  mstMagazineSections?: Maybe<PaginationListMstMagazineSection>;
  mstMailType?: Maybe<MstMailTypeType>;
  mstMailTypes?: Maybe<PaginationListMstMailType>;
  mstNotificationStack?: Maybe<MstNotificationStackType>;
  mstNotificationStacks?: Maybe<PaginationListMstNotificationStack>;
  mstPackage?: Maybe<MstPackageType>;
  mstPackageAttribute?: Maybe<MstPackageAttributeType>;
  mstPackageAttributes?: Maybe<PaginationListMstPackageAttribute>;
  mstPackages?: Maybe<PaginationListMstPackage>;
  mstPaymentMode?: Maybe<MstPaymentModeType>;
  mstPaymentModes?: Maybe<PaginationListMstPaymentMode>;
  mstPaymentStatus?: Maybe<MstPaymentStatusType>;
  mstPaymentStatuss?: Maybe<PaginationListMstPaymentStatus>;
  mstPaymentType?: Maybe<MstPaymentTypeType>;
  mstPaymentTypes?: Maybe<PaginationListMstPaymentType>;
  mstPeriodType?: Maybe<MstPeriodTypeType>;
  mstPeriodTypes?: Maybe<PaginationListMstPeriodType>;
  mstProvince?: Maybe<MstProvinceType>;
  mstProvinces?: Maybe<PaginationListMstProvince>;
  mstQuantityType?: Maybe<MstQuantityTypeType>;
  mstQuantityTypes?: Maybe<PaginationListMstQuantityType>;
  mstRating?: Maybe<MstRatingType>;
  mstRatings?: Maybe<PaginationListMstRating>;
  mstSettingType?: Maybe<MstSettingTypeType>;
  mstSettingTypes?: Maybe<PaginationListMstSettingType>;
  mstSettings?: Maybe<MstSettingsType>;
  mstSettingss?: Maybe<PaginationListMstSettings>;
  mstSpecials?: Maybe<MstSpecialsType>;
  mstSpecialss?: Maybe<PaginationListMstSpecials>;
  mstStatus?: Maybe<MstStatusType>;
  mstStatuss?: Maybe<PaginationListMstStatus>;
  mstSuburb?: Maybe<MstSuburbType>;
  mstSuburbs?: Maybe<PaginationListMstSuburb>;
  mstUserRole?: Maybe<MstUserRoleType>;
  mstUserRoles?: Maybe<PaginationListMstUserRole>;
  mstUserStatus?: Maybe<MstUserStatusType>;
  mstUserStatuss?: Maybe<PaginationListMstUserStatus>;
  mstUsers?: Maybe<MstUsersType>;
  mstUserss?: Maybe<PaginationListMstUsers>;
  mstVersion?: Maybe<MstVersionType>;
  mstVersions?: Maybe<PaginationListMstVersion>;
  mstVolumeType?: Maybe<MstVolumeTypeType>;
  mstVolumeTypes?: Maybe<PaginationListMstVolumeType>;
  oAuth?: Maybe<ResponseMstLoggedInUserDto>;
  post?: Maybe<PostType>;
  postAttachment?: Maybe<PostAttachmentType>;
  postAttachments?: Maybe<PaginationListPostAttachment>;
  postReply?: Maybe<PostReplyType>;
  postReplyAttachment?: Maybe<PostReplyAttachmentType>;
  postReplyAttachments?: Maybe<PaginationListPostReplyAttachment>;
  postReplys?: Maybe<PaginationListPostReply>;
  posts?: Maybe<PaginationListPost>;
  prdBid?: Maybe<PrdBidType>;
  prdBids?: Maybe<PaginationListPrdBid>;
  prdCategory?: Maybe<PrdCategoryType>;
  prdCategorys?: Maybe<PaginationListPrdCategory>;
  prdHire?: Maybe<PrdHireType>;
  prdHires?: Maybe<PaginationListPrdHire>;
  prdOrderDetails?: Maybe<PrdOrderDetailsType>;
  prdOrderDetailss?: Maybe<PaginationListPrdOrderDetails>;
  prdOrderPayment?: Maybe<PrdOrderPaymentType>;
  prdOrderPayments?: Maybe<PaginationListPrdOrderPayment>;
  prdOrderStatus?: Maybe<PrdOrderStatusType>;
  prdOrderStatusType?: Maybe<PrdOrderStatusTypeType>;
  prdOrderStatusTypes?: Maybe<PaginationListPrdOrderStatusType>;
  prdOrderStatuss?: Maybe<PaginationListPrdOrderStatus>;
  prdOrders?: Maybe<PrdOrdersType>;
  prdOrdersByUser?: Maybe<ResponsePrdOrders>;
  prdOrdersForBusiness?: Maybe<ResponsePrdOrders>;
  prdOrdersGrowth?: Maybe<ResponsePrdOrdersSummary>;
  prdOrdersStats?: Maybe<ResponsePrdOrdersStats>;
  prdOrdersSummary?: Maybe<ResponsePrdOrdersSummary>;
  prdOrderss?: Maybe<PaginationListPrdOrders>;
  prdProducts?: Maybe<PrdProductsType>;
  prdProductss?: Maybe<PaginationListPrdProducts>;
  prdShoppingCart?: Maybe<PrdShoppingCartType>;
  prdShoppingCarts?: Maybe<PaginationListPrdShoppingCart>;
  prdSubCategory?: Maybe<PrdSubCategoryType>;
  prdSubCategorys?: Maybe<PaginationListPrdSubCategory>;
  prdTopOrdersProducts?: Maybe<ResponsePrdOrdersProducts>;
  purchaseShoppingCartAsync?: Maybe<Response7>;
  sSOLogin?: Maybe<ResponseMstLoggedInUserDto>;
  sSOLoginEncrypt?: Maybe<Response5>;
  systemRole?: Maybe<SystemRoleType>;
  systemRoles?: Maybe<PaginationListSystemRole>;
  systemUser?: Maybe<SystemUserType>;
  systemUsers?: Maybe<PaginationListSystemUser>;
};


export type MstCountryQueryCompanyCheckArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type MstCountryQueryConfirmEmailArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MstCountryQueryDevFormArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryDevFormsArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryElmahErrorArgs = {
  id?: InputMaybe<Scalars['Guid']>;
};


export type MstCountryQueryElmahErrorsArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryEmailCheckArgs = {
  email?: InputMaybe<Scalars['String']>;
};


export type MstCountryQueryForgetPasswordArgs = {
  domainUrl?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
};


export type MstCountryQueryGetBusinessIncomingEnquiryArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryGetBusinessListArgs = {
  categoryIds?: InputMaybe<Scalars['String']>;
  cityIds?: InputMaybe<Scalars['String']>;
  companyId?: InputMaybe<Scalars['Int']>;
  companyName?: InputMaybe<Scalars['String']>;
  franchiseeId?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  provinceIds?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  statusIds?: InputMaybe<Scalars['String']>;
  suburbIds?: InputMaybe<Scalars['String']>;
};


export type MstCountryQueryGetBusinessOrdersUsersArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryGetBusinessTopBidsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryGetBusinessTopHireArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryGetBusinessTopOrderedBidsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryGetBusinessTopUserOrdersUsersArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryGetBusinessUsersArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryGetCityByProvinceArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryGetCompanyAuditLogArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryGetCompanyCategoriesArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryGetCompanyTaskAsyncArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryGetCustomerEnquiryListArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryGetHierarchyResponseItemsArgs = {
  id?: InputMaybe<Scalars['ID']>;
  replyToId?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryGetIncomingItemRequestListArgs = {
  categoryIds?: InputMaybe<Scalars['String']>;
  cityIds?: InputMaybe<Scalars['String']>;
  itemRequestTitle?: InputMaybe<Scalars['String']>;
  page: Scalars['Int'];
  provinceIds?: InputMaybe<Scalars['String']>;
  size: Scalars['Int'];
  suburbIds?: InputMaybe<Scalars['String']>;
};


export type MstCountryQueryGetIncommingHierarchyResponseItemsArgs = {
  id?: InputMaybe<Scalars['ID']>;
  replyToId?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryGetIncommingTopLevelResponseItemsArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryGetItemRequestListArgs = {
  categoryIds?: InputMaybe<Scalars['String']>;
  cityIds?: InputMaybe<Scalars['String']>;
  itemRequestTitle?: InputMaybe<Scalars['String']>;
  page: Scalars['Int'];
  provinceIds?: InputMaybe<Scalars['String']>;
  size: Scalars['Int'];
  suburbIds?: InputMaybe<Scalars['String']>;
};


export type MstCountryQueryGetItemRequestServiceListArgs = {
  categoryId?: InputMaybe<Scalars['Int']>;
  domainCategoryIds?: InputMaybe<Scalars['String']>;
  page: Scalars['Int'];
  size: Scalars['Int'];
  subCategoryId?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryGetMagazinesListArgs = {
  categoryIds?: InputMaybe<Scalars['String']>;
  cityIds?: InputMaybe<Scalars['String']>;
  companyIds?: InputMaybe<Scalars['String']>;
  eflyerId?: InputMaybe<Scalars['String']>;
  franchiseId?: InputMaybe<Scalars['Int']>;
  magazineName?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  provinceIds?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  statusIds?: InputMaybe<Scalars['String']>;
  suburbIds?: InputMaybe<Scalars['String']>;
};


export type MstCountryQueryGetMapProductImagesArgs = {
  productId?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryGetMstCategoryByParentIdArgs = {
  id?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryGetMstFavouritesProductListArgs = {
  page?: InputMaybe<Scalars['ID']>;
  productId?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryGetMstPackageDetailListArgs = {
  packageId?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Boolean']>;
};


export type MstCountryQueryGetMstPackageListArgs = {
  excludePackageIds?: InputMaybe<Scalars['String']>;
  includePackageIds?: InputMaybe<Scalars['String']>;
  packageId?: InputMaybe<Scalars['Int']>;
  packageIds?: InputMaybe<Scalars['String']>;
  packageName?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Boolean']>;
};


export type MstCountryQueryGetMstRatingScoreListArgs = {
  key?: InputMaybe<Scalars['Int']>;
  keyType?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryGetMstSpecialListArgs = {
  categoryIds?: InputMaybe<Scalars['String']>;
  cityIds?: InputMaybe<Scalars['String']>;
  companyIds?: InputMaybe<Scalars['String']>;
  distance?: InputMaybe<Scalars['Decimal']>;
  franchiseId?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  provinceIds?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  specialId?: InputMaybe<Scalars['Int']>;
  specialName?: InputMaybe<Scalars['String']>;
  statusIds?: InputMaybe<Scalars['String']>;
  suburbIds?: InputMaybe<Scalars['String']>;
};


export type MstCountryQueryGetPostListArgs = {
  categoryId?: InputMaybe<Scalars['Int']>;
  companyId?: InputMaybe<Scalars['Int']>;
  domainId?: InputMaybe<Scalars['Int']>;
  location?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  postId?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};


export type MstCountryQueryGetPostReplyArgs = {
  page?: InputMaybe<Scalars['Int']>;
  postId?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryGetPrdBidListArgs = {
  page?: InputMaybe<Scalars['Int']>;
  productId?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Boolean']>;
  userId?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryGetPrdCategoryListArgs = {
  categoryId?: InputMaybe<Scalars['Int']>;
  categoryIds?: InputMaybe<Scalars['String']>;
  categoryName?: InputMaybe<Scalars['String']>;
  domainId?: InputMaybe<Scalars['Int']>;
  excludeCategoryIds?: InputMaybe<Scalars['String']>;
  includeCategoryIds?: InputMaybe<Scalars['String']>;
  page: Scalars['Int'];
  size: Scalars['Int'];
  status?: InputMaybe<Scalars['Boolean']>;
};


export type MstCountryQueryGetPrdProductListArgs = {
  categoryId?: InputMaybe<Scalars['Int']>;
  companyId?: InputMaybe<Scalars['Int']>;
  domainCategoryIds?: InputMaybe<Scalars['String']>;
  fromPrice?: InputMaybe<Scalars['Decimal']>;
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  productId?: InputMaybe<Scalars['Int']>;
  productName?: InputMaybe<Scalars['String']>;
  salesTypeId?: InputMaybe<Scalars['Int']>;
  scopeId?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Boolean']>;
  toPrice?: InputMaybe<Scalars['Decimal']>;
  userId?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryGetPrdShoppingCartArgs = {
  page: Scalars['Int'];
  size: Scalars['Int'];
};


export type MstCountryQueryGetProvinceByCountryArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryGetRatingListArgs = {
  documentPath?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['Int']>;
  keyType?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryGetResponseItemsArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryGetSessionArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryGetSuburbByCityArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryGetTopLevelResponseItemsArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryGetUserActivityArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryGetUserTopBidsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryGetUserTopHireArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryJobArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryJobsArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMapCategoryAttributeArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMapCategoryAttributesArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMapCompanyAreaArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMapCompanyAreasArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMapCompanyAuditLogArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMapCompanyAuditLogsArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMapCompanyCategoriesArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMapCompanyCategoryArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMapCompanyDocumentArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMapCompanyDocumentsArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMapCompanyEmailArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMapCompanyEmailsArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMapCompanyMagazineAdArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMapCompanyMagazineAdsArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMapCompanyPackageArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMapCompanyPackageByIdArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMapCompanyPackagesArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMapCompanyPaymentArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMapCompanyPaymentsArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMapCompanyProvideArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMapCompanyProvidesArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMapCompanySeekArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMapCompanySeeksArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMapCompanyTaskArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMapCompanyTasksArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMapCompanyUsersArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMapCompanyUserssArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMapCustomerEnquiryUploadArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMapCustomerEnquiryUploadsArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMapEflyersUploadArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMapEflyersUploadsArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMapItemRequestAreaArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMapItemRequestAreasArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMapItemRequestCategoryArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMapItemRequestCategoryAttributeArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMapItemRequestCategoryAttributesArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMapItemRequestCategorysArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMapItemRequestUploadArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMapItemRequestUploadsArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMapItemResponseUploadArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMapItemResponseUploadsArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMapPackageAttributesArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMapPackageAttributessArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMapProductDocumentArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMapProductDocumentsArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMapProductImagesArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMapProductImagessArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMapSettingsRoleArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMapSettingsRolesArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMapSpecialUploadArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMapSpecialUploadsArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMapUserRoleRightsArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMapUserRoleRightssArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMapUsersSettingsArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMapUsersSettingssArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMobileCheckArgs = {
  mobile?: InputMaybe<Scalars['String']>;
};


export type MstCountryQueryMstBeestatusArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstBeestatussArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstCategoryArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstCategoryAttributeArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstCategoryAttributeDataTypeArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstCategoryAttributeDataTypesArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstCategoryAttributesArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstCategorysArgs = {
  filter?: InputMaybe<MstCategoryParameter>;
};


export type MstCountryQueryMstCityArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstCitysArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstCmsArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstCmssArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstCompanyArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstCompanyDocumentTypeArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstCompanyDocumentTypesArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstCompanyStatusArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstCompanyStatussArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstCompanyTaskListArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstCompanyTaskListsArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstCompanysArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstConfigurationArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstConfigurationsArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstContactFormArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstContactFormsArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstCountriesArgs = {
  filter?: InputMaybe<MstCountryParameter>;
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstCountryArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstCrmCustomerArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstCrmCustomerCommentArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstCrmCustomerCommentsArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstCrmCustomersArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstCrmInventoryArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstCrmInventoryTypeArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstCrmInventoryTypesArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstCrmInventorysArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstCrmInvoiceArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstCrmInvoiceDetailsArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstCrmInvoiceDetailssArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstCrmInvoicesArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstCrmQuoteArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstCrmQuoteDetailsArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstCrmQuoteDetailssArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstCrmQuotesArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstCustomerEnquiryArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstCustomerEnquiryResponseArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstCustomerEnquiryResponsesArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstCustomerEnquirysArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstDocumentStatusArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstDocumentStatussArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstDomainArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstDomainsArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstEFlyersArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstEFlyerssArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstEmailStackArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstEmailStacksArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstFavouritesArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstFavouritessArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstFranchiseeArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstFranchiseesArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstItemRequestArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstItemRequestsArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstItemResponseArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstItemResponsesArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstKeywordsArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstKeywordssArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstMagazineAdArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstMagazineAdTypeArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstMagazineAdTypesArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstMagazineAdsArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstMagazineSectionArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstMagazineSectionsArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstMailTypeArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstMailTypesArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstNotificationStackArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstNotificationStacksArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstPackageArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstPackageAttributeArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstPackageAttributesArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstPackagesArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstPaymentModeArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstPaymentModesArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstPaymentStatusArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstPaymentStatussArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstPaymentTypeArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstPaymentTypesArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstPeriodTypeArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstPeriodTypesArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstProvinceArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstProvincesArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstQuantityTypeArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstQuantityTypesArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstRatingArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstRatingsArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstSettingTypeArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstSettingTypesArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstSettingsArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstSettingssArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstSpecialsArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstSpecialssArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstStatusArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstStatussArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstSuburbArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstSuburbsArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstUserRoleArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstUserRolesArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstUserStatusArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstUserStatussArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstUsersArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstUserssArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstVersionArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstVersionsArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryMstVolumeTypeArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryMstVolumeTypesArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryOAuthArgs = {
  jti?: InputMaybe<Scalars['String']>;
};


export type MstCountryQueryPostArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryPostAttachmentArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryPostAttachmentsArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryPostReplyArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryPostReplyAttachmentArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryPostReplyAttachmentsArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryPostReplysArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryPostsArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryPrdBidArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryPrdBidsArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryPrdCategoryArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryPrdCategorysArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryPrdHireArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryPrdHiresArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryPrdOrderDetailsArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryPrdOrderDetailssArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryPrdOrderPaymentArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryPrdOrderPaymentsArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryPrdOrderStatusArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryPrdOrderStatusTypeArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryPrdOrderStatusTypesArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryPrdOrderStatussArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryPrdOrdersArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryPrdOrdersByUserArgs = {
  fromDate?: InputMaybe<Scalars['DateTime']>;
  orderStatusTypeId?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
  toDate?: InputMaybe<Scalars['DateTime']>;
};


export type MstCountryQueryPrdOrdersForBusinessArgs = {
  categoryId?: InputMaybe<Scalars['Int']>;
  fromDate?: InputMaybe<Scalars['DateTime']>;
  orderStatusTypeId?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['ID']>;
  paymentStatusId?: InputMaybe<Scalars['Int']>;
  productId?: InputMaybe<Scalars['Int']>;
  salesTypeId?: InputMaybe<Scalars['Int']>;
  scopeId?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['ID']>;
  toDate?: InputMaybe<Scalars['DateTime']>;
  typeId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryPrdOrderssArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryPrdProductsArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryPrdProductssArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryPrdShoppingCartArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryPrdShoppingCartsArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryPrdSubCategoryArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQueryPrdSubCategorysArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQueryPurchaseShoppingCartAsyncArgs = {
  id: Scalars['Int'];
};


export type MstCountryQuerySSoLoginArgs = {
  jti?: InputMaybe<Scalars['String']>;
};


export type MstCountryQuerySSoLoginEncryptArgs = {
  jti?: InputMaybe<Scalars['String']>;
};


export type MstCountryQuerySystemRoleArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQuerySystemRolesArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};


export type MstCountryQuerySystemUserArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MstCountryQuerySystemUsersArgs = {
  page?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['ID']>;
};

export type MstCountryType = {
  __typename?: 'MstCountryType';
  countryId: Scalars['Int'];
  countryName?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Int']>;
  mapCompanyAreas?: Maybe<Array<Maybe<MapCompanyAreaType>>>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  mstFranchises?: Maybe<Array<Maybe<MstFranchiseeType>>>;
  mstProvinces?: Maybe<Array<Maybe<MstProvinceType>>>;
  mstSpecials?: Maybe<Array<Maybe<MstSpecialsType>>>;
  mstUsers?: Maybe<Array<Maybe<MstUsersType>>>;
};

export type MstCrmCustomerCommentInputType = {
  comment?: InputMaybe<Scalars['String']>;
  commentDate?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  customer?: InputMaybe<MstCrmCustomerInputType>;
  customerCommentId: Scalars['Int'];
  customerId?: InputMaybe<Scalars['Int']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<MstUsersInputType>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type MstCrmCustomerCommentType = {
  __typename?: 'MstCrmCustomerCommentType';
  comment?: Maybe<Scalars['String']>;
  commentDate?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<MstCrmCustomerType>;
  customerCommentId: Scalars['Int'];
  customerId?: Maybe<Scalars['Int']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  user?: Maybe<MstUsersType>;
  userId?: Maybe<Scalars['Int']>;
};

export type MstCrmCustomerInputType = {
  cityId?: InputMaybe<Scalars['Int']>;
  companyId?: InputMaybe<Scalars['Int']>;
  companyName?: InputMaybe<Scalars['String']>;
  contactNo?: InputMaybe<Scalars['String']>;
  countryId?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  customerId: Scalars['Int'];
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['Int']>;
  lastName?: InputMaybe<Scalars['String']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  mstCrmCustomerComment?: InputMaybe<Array<InputMaybe<MstCrmCustomerCommentInputType>>>;
  mstCrmInvoice?: InputMaybe<Array<InputMaybe<MstCrmInvoiceInputType>>>;
  mstCrmQuote?: InputMaybe<Array<InputMaybe<MstCrmQuoteInputType>>>;
  provinceId?: InputMaybe<Scalars['Int']>;
  streetAddress?: InputMaybe<Scalars['String']>;
  suburbId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type MstCrmCustomerType = {
  __typename?: 'MstCrmCustomerType';
  cityId?: Maybe<Scalars['Int']>;
  companyId?: Maybe<Scalars['Int']>;
  companyName?: Maybe<Scalars['String']>;
  contactNo?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  customerId: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  mstCrmCustomerComment?: Maybe<Array<Maybe<MstCrmCustomerCommentType>>>;
  mstCrmInvoice?: Maybe<Array<Maybe<MstCrmInvoiceType>>>;
  mstCrmQuote?: Maybe<Array<Maybe<MstCrmQuoteType>>>;
  provinceId?: Maybe<Scalars['Int']>;
  streetAddress?: Maybe<Scalars['String']>;
  suburbId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type MstCrmInventoryInputType = {
  company?: InputMaybe<MstCompanyInputType>;
  companyId?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  inventoryDescription?: InputMaybe<Scalars['String']>;
  inventoryId: Scalars['Int'];
  inventoryName?: InputMaybe<Scalars['String']>;
  inventoryType?: InputMaybe<MstCrmInventoryTypeInputType>;
  inventoryTypeId?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  mstCrmInvoiceDetails?: InputMaybe<Array<InputMaybe<MstCrmInvoiceDetailsInputType>>>;
  mstCrmQuoteDetails?: InputMaybe<Array<InputMaybe<MstCrmQuoteDetailsInputType>>>;
  officeDescription?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  qunatityTypeName?: InputMaybe<Scalars['String']>;
};

export type MstCrmInventoryType = {
  __typename?: 'MstCrmInventoryType';
  company?: Maybe<MstCompanyType>;
  companyId?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  inventoryDescription?: Maybe<Scalars['String']>;
  inventoryId: Scalars['Int'];
  inventoryName?: Maybe<Scalars['String']>;
  inventoryType?: Maybe<MstCrmInventoryTypeType>;
  inventoryTypeId?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  mstCrmInvoiceDetails?: Maybe<Array<Maybe<MstCrmInvoiceDetailsType>>>;
  mstCrmQuoteDetails?: Maybe<Array<Maybe<MstCrmQuoteDetailsType>>>;
  officeDescription?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  qunatityTypeName?: Maybe<Scalars['String']>;
};

export type MstCrmInventoryTypeInputType = {
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  inventoryTypeId: Scalars['Int'];
  inventoryTypeName?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  mstCrmInventory?: InputMaybe<Array<InputMaybe<MstCrmInventoryInputType>>>;
};

export type MstCrmInventoryTypeType = {
  __typename?: 'MstCrmInventoryTypeType';
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  inventoryTypeId: Scalars['Int'];
  inventoryTypeName?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  mstCrmInventory?: Maybe<Array<Maybe<MstCrmInventoryType>>>;
};

export type MstCrmInvoiceDetailsInputType = {
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  inventory?: InputMaybe<Array<InputMaybe<MstCrmInventoryInputType>>>;
  inventoryId?: InputMaybe<Scalars['Int']>;
  invoice?: InputMaybe<Array<InputMaybe<MstCrmInvoiceInputType>>>;
  invoiceId?: InputMaybe<Scalars['Int']>;
  invoiceLineItemId: Scalars['Int'];
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  price?: InputMaybe<Scalars['Decimal']>;
  quantity?: InputMaybe<Scalars['Int']>;
  totalAmount?: InputMaybe<Scalars['Decimal']>;
};

export type MstCrmInvoiceDetailsType = {
  __typename?: 'MstCrmInvoiceDetailsType';
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  inventory?: Maybe<Array<Maybe<MstCrmInventoryType>>>;
  inventoryId?: Maybe<Scalars['Int']>;
  invoice?: Maybe<Array<Maybe<MstCrmInvoiceType>>>;
  invoiceId?: Maybe<Scalars['Int']>;
  invoiceLineItemId: Scalars['Int'];
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Decimal']>;
  quantity?: Maybe<Scalars['Int']>;
  totalAmount?: Maybe<Scalars['Decimal']>;
};

export type MstCrmInvoiceInputType = {
  amount?: InputMaybe<Scalars['Decimal']>;
  company?: InputMaybe<MstCompanyInputType>;
  companyId?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  customer?: InputMaybe<MstCrmCustomerInputType>;
  customerId?: InputMaybe<Scalars['Int']>;
  invoiceDate?: InputMaybe<Scalars['DateTime']>;
  invoiceDescription?: InputMaybe<Scalars['String']>;
  invoiceFooter?: InputMaybe<Scalars['String']>;
  invoiceId: Scalars['Int'];
  invoiceNo?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  mstCrmInvoiceDetails?: InputMaybe<Array<InputMaybe<MstCrmInvoiceDetailsInputType>>>;
  paymentDate?: InputMaybe<Scalars['DateTime']>;
  paymentModeId?: InputMaybe<Scalars['Int']>;
  paymentStatusId?: InputMaybe<Scalars['Int']>;
  quoteId?: InputMaybe<Scalars['Int']>;
  totalAmount?: InputMaybe<Scalars['Decimal']>;
  transactionId?: InputMaybe<Scalars['String']>;
  vatamount?: InputMaybe<Scalars['Decimal']>;
};

export type MstCrmInvoiceType = {
  __typename?: 'MstCrmInvoiceType';
  amount?: Maybe<Scalars['Decimal']>;
  company?: Maybe<MstCompanyType>;
  companyId?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<MstCrmCustomerType>;
  customerId?: Maybe<Scalars['Int']>;
  invoiceDate?: Maybe<Scalars['DateTime']>;
  invoiceDescription?: Maybe<Scalars['String']>;
  invoiceFooter?: Maybe<Scalars['String']>;
  invoiceId: Scalars['Int'];
  invoiceNo?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  mstCrmInvoiceDetails?: Maybe<Array<Maybe<MstCrmInvoiceDetailsType>>>;
  paymentDate?: Maybe<Scalars['DateTime']>;
  paymentModeId?: Maybe<Scalars['Int']>;
  paymentStatusId?: Maybe<Scalars['Int']>;
  quoteId?: Maybe<Scalars['Int']>;
  totalAmount?: Maybe<Scalars['Decimal']>;
  transactionId?: Maybe<Scalars['String']>;
  vatamount?: Maybe<Scalars['Decimal']>;
};

export type MstCrmQuoteDetailsInputType = {
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  inventory?: InputMaybe<MstCrmInventoryInputType>;
  inventoryId?: InputMaybe<Scalars['Int']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  price?: InputMaybe<Scalars['Decimal']>;
  quantity?: InputMaybe<Scalars['Int']>;
  quote?: InputMaybe<MstCrmQuoteInputType>;
  quoteId?: InputMaybe<Scalars['Int']>;
  quoteLineItemId: Scalars['Int'];
  totalAmount?: InputMaybe<Scalars['Decimal']>;
};

export type MstCrmQuoteDetailsType = {
  __typename?: 'MstCrmQuoteDetailsType';
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  inventory?: Maybe<MstCrmInventoryType>;
  inventoryId?: Maybe<Scalars['Int']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Decimal']>;
  quantity?: Maybe<Scalars['Int']>;
  quote?: Maybe<MstCrmQuoteType>;
  quoteId?: Maybe<Scalars['Int']>;
  quoteLineItemId: Scalars['Int'];
  totalAmount?: Maybe<Scalars['Decimal']>;
};

export type MstCrmQuoteInputType = {
  amount?: InputMaybe<Scalars['Decimal']>;
  company?: InputMaybe<MstCompanyInputType>;
  companyId?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  customer?: InputMaybe<MstCrmCustomerInputType>;
  customerId?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  mstCrmQuoteDetails?: InputMaybe<Array<InputMaybe<MstCrmQuoteDetailsInputType>>>;
  quoteDate?: InputMaybe<Scalars['DateTime']>;
  quoteDescription?: InputMaybe<Scalars['String']>;
  quoteFooter?: InputMaybe<Scalars['String']>;
  quoteId: Scalars['Int'];
  quoteNo?: InputMaybe<Scalars['String']>;
  totalAmount?: InputMaybe<Scalars['Decimal']>;
  vatamount?: InputMaybe<Scalars['Decimal']>;
};

export type MstCrmQuoteType = {
  __typename?: 'MstCrmQuoteType';
  amount?: Maybe<Scalars['Decimal']>;
  company?: Maybe<MstCompanyType>;
  companyId?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<MstCrmCustomerType>;
  customerId?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  mstCrmQuoteDetails?: Maybe<Array<Maybe<MstCrmQuoteDetailsType>>>;
  quoteDate?: Maybe<Scalars['DateTime']>;
  quoteDescription?: Maybe<Scalars['String']>;
  quoteFooter?: Maybe<Scalars['String']>;
  quoteId: Scalars['Int'];
  quoteNo?: Maybe<Scalars['String']>;
  totalAmount?: Maybe<Scalars['Decimal']>;
  vatamount?: Maybe<Scalars['Decimal']>;
};

export type MstCustomerEnquiryInputType = {
  companyId?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  customerEnquiryId?: InputMaybe<Scalars['Int']>;
  enquiryDate?: InputMaybe<Scalars['DateTime']>;
  enquiryDescription?: InputMaybe<Scalars['String']>;
  enquiryStatusId?: InputMaybe<Scalars['Int']>;
  enquiryTitle?: InputMaybe<Scalars['String']>;
  mapCustomerEnquiryUpload?: InputMaybe<Array<InputMaybe<MapCustomerEnquiryUploadInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  mstCustomerEnquiryResponse?: InputMaybe<Array<InputMaybe<MstCustomerEnquiryResponseInputType>>>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type MstCustomerEnquiryResponseInputType = {
  ceresponseId: Scalars['Int'];
  comment?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<MstCompanyInputType>;
  companyId?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  customerEnquiry?: InputMaybe<MstCustomerEnquiryInputType>;
  customerEnquiryId?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  responseDate?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<MstUsersInputType>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type MstCustomerEnquiryResponseType = {
  __typename?: 'MstCustomerEnquiryResponseType';
  ceresponseId: Scalars['Int'];
  comment?: Maybe<Scalars['String']>;
  company?: Maybe<MstCompanyType>;
  companyId?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  customerEnquiry?: Maybe<MstCustomerEnquiryType>;
  customerEnquiryId?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  responseDate?: Maybe<Scalars['DateTime']>;
  user?: Maybe<MstUsersType>;
  userId?: Maybe<Scalars['Int']>;
};

export type MstCustomerEnquiryType = {
  __typename?: 'MstCustomerEnquiryType';
  companyId?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  customerEnquiryId: Scalars['Int'];
  enquiryDate?: Maybe<Scalars['DateTime']>;
  enquiryDescription?: Maybe<Scalars['String']>;
  enquiryStatusId?: Maybe<Scalars['Int']>;
  enquiryTitle?: Maybe<Scalars['String']>;
  mapCustomerEnquiryUpload?: Maybe<Array<Maybe<MapCustomerEnquiryUploadType>>>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  mstCompanyLimited?: Maybe<MstCompanyLimitedType>;
  mstCustomerEnquiryResponse?: Maybe<Array<Maybe<MstCustomerEnquiryResponseType>>>;
  userId?: Maybe<Scalars['Int']>;
};

export type MstDocumentStatusInputType = {
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  documentStatus?: InputMaybe<Scalars['String']>;
  documentStatusId: Scalars['Int'];
  isActive?: InputMaybe<Scalars['Boolean']>;
  mapCompanyDocument?: InputMaybe<Array<InputMaybe<MapCompanyDocumentInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
};

export type MstDocumentStatusType = {
  __typename?: 'MstDocumentStatusType';
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  documentStatus?: Maybe<Scalars['String']>;
  documentStatusId: Scalars['Int'];
  isActive?: Maybe<Scalars['Boolean']>;
  mapCompanyDocument?: Maybe<Array<Maybe<MapCompanyDocumentType>>>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
};

export type MstDomainInputType = {
  active?: InputMaybe<Scalars['Boolean']>;
  domainId: Scalars['Int'];
  domainName?: InputMaybe<Scalars['String']>;
  prdCategory?: InputMaybe<Array<InputMaybe<PrdCategoryInputType>>>;
  prdProducts?: InputMaybe<Array<InputMaybe<PrdProductsInputType>>>;
};

export type MstDomainType = {
  __typename?: 'MstDomainType';
  active?: Maybe<Scalars['Boolean']>;
  domainId: Scalars['Int'];
  domainName?: Maybe<Scalars['String']>;
  prdCategory?: Maybe<Array<Maybe<PrdCategoryType>>>;
  prdProducts?: Maybe<Array<Maybe<PrdProductsType>>>;
};

export type MstEFlyersDtoType = {
  __typename?: 'MstEFlyersDtoType';
  callType?: Maybe<Scalars['Int']>;
  categoryID?: Maybe<Scalars['Int']>;
  categoryIds?: Maybe<Scalars['String']>;
  categoryName?: Maybe<Scalars['String']>;
  cityID?: Maybe<Scalars['Int']>;
  cityIds?: Maybe<Scalars['String']>;
  cityName?: Maybe<Scalars['String']>;
  companyDescription?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['Int']>;
  companyIds?: Maybe<Scalars['String']>;
  companyLocation?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  countryID?: Maybe<Scalars['Int']>;
  countryName?: Maybe<Scalars['String']>;
  documentLink?: Maybe<Scalars['String']>;
  eFlyerDescription?: Maybe<Scalars['String']>;
  eFlyerID?: Maybe<Scalars['Int']>;
  eFlyerName?: Maybe<Scalars['String']>;
  eflyerId?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['DateTime']>;
  favouriteID?: Maybe<Scalars['Int']>;
  franchiseID?: Maybe<Scalars['Int']>;
  imagePath?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Int']>;
  isMenu?: Maybe<Scalars['Boolean']>;
  magazineName?: Maybe<Scalars['String']>;
  mapEflyersUploadDtos?: Maybe<Array<Maybe<MstEFlyersUploadDtoType>>>;
  phone?: Maybe<Scalars['String']>;
  provinceID?: Maybe<Scalars['Int']>;
  provinceIds?: Maybe<Scalars['String']>;
  provinceName?: Maybe<Scalars['String']>;
  ratingScore?: Maybe<Scalars['Decimal']>;
  searchTitle?: Maybe<Scalars['String']>;
  stId?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  statusId?: Maybe<Scalars['Int']>;
  statusName?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  suburb?: Maybe<Scalars['String']>;
  suburbID?: Maybe<Scalars['Int']>;
  suburbIds?: Maybe<Scalars['String']>;
  userID?: Maybe<Scalars['Int']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type MstEFlyersInputType = {
  category?: InputMaybe<MstCategoryInputType>;
  categoryId?: InputMaybe<Scalars['Int']>;
  company?: InputMaybe<MstCompanyInputType>;
  companyId?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  efmid: Scalars['Int'];
  endDate?: InputMaybe<Scalars['DateTime']>;
  isMenu?: InputMaybe<Scalars['Boolean']>;
  mapEflyersUpload?: InputMaybe<Array<InputMaybe<MapEflyersUploadInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<MstStatusInputType>;
  statusId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type MstEFlyersType = {
  __typename?: 'MstEFlyersType';
  category?: Maybe<MstCategoryType>;
  categoryId?: Maybe<Scalars['Int']>;
  company?: Maybe<MstCompanyType>;
  companyId?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  efmid: Scalars['Int'];
  endDate?: Maybe<Scalars['DateTime']>;
  isMenu?: Maybe<Scalars['Boolean']>;
  mapEflyersUpload?: Maybe<Array<Maybe<MapEflyersUploadType>>>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<MstStatusType>;
  statusId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type MstEFlyersUploadDtoType = {
  __typename?: 'MstEFlyersUploadDtoType';
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  documentName?: Maybe<Scalars['String']>;
  documentType?: Maybe<Scalars['Int']>;
  eflyerUploadId?: Maybe<Scalars['Int']>;
  efmid?: Maybe<Scalars['Int']>;
  filePath?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  sortOrder?: Maybe<Scalars['Int']>;
  thumbNailImagePath?: Maybe<Scalars['String']>;
};

export type MstEmailStackInputType = {
  attachmentName?: InputMaybe<Scalars['String']>;
  attachmentPath?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['String']>;
  emailCreatedOn?: InputMaybe<Scalars['DateTime']>;
  emailSendCount?: InputMaybe<Scalars['Int']>;
  emailSentFrom?: InputMaybe<Scalars['String']>;
  emailSentOn?: InputMaybe<Scalars['DateTime']>;
  emailSentSuccess?: InputMaybe<Scalars['Boolean']>;
  emailStackId: Scalars['Int'];
  fromAddress?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
  toAddress?: InputMaybe<Scalars['String']>;
  toBcc?: InputMaybe<Scalars['String']>;
  toBccname?: InputMaybe<Scalars['String']>;
  toCc?: InputMaybe<Scalars['String']>;
  toCcname?: InputMaybe<Scalars['String']>;
  toName?: InputMaybe<Scalars['String']>;
};

export type MstEmailStackType = {
  __typename?: 'MstEmailStackType';
  attachmentName?: Maybe<Scalars['String']>;
  attachmentPath?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  emailCreatedOn?: Maybe<Scalars['DateTime']>;
  emailSendCount?: Maybe<Scalars['Int']>;
  emailSentFrom?: Maybe<Scalars['String']>;
  emailSentOn?: Maybe<Scalars['DateTime']>;
  emailSentSuccess?: Maybe<Scalars['Boolean']>;
  emailStackId: Scalars['Int'];
  fromAddress?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  toAddress?: Maybe<Scalars['String']>;
  toBcc?: Maybe<Scalars['String']>;
  toBccname?: Maybe<Scalars['String']>;
  toCc?: Maybe<Scalars['String']>;
  toCcname?: Maybe<Scalars['String']>;
  toName?: Maybe<Scalars['String']>;
};

export type MstFavouritesInputType = {
  companyId?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  eflyerId?: InputMaybe<Scalars['Int']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  mstFavouriteId: Scalars['Int'];
  productId?: InputMaybe<Scalars['Int']>;
  specialId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type MstFavouritesType = {
  __typename?: 'MstFavouritesType';
  companyId?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  eflyerId?: Maybe<Scalars['Int']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  mstFavouriteId: Scalars['Int'];
  productId?: Maybe<Scalars['Int']>;
  specialId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type MstFranchiseeInputType = {
  cityId?: InputMaybe<Scalars['Int']>;
  country?: InputMaybe<MstCountryInputType>;
  countryId?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  emailId?: InputMaybe<Scalars['String']>;
  franchiseId: Scalars['Int'];
  franchiseName?: InputMaybe<Scalars['String']>;
  franchiseUser?: InputMaybe<MstUsersInputType>;
  franchiseUserId?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  phone?: InputMaybe<Scalars['String']>;
  provinceId?: InputMaybe<Scalars['Int']>;
  streetAddress?: InputMaybe<Scalars['String']>;
  suburbId?: InputMaybe<Scalars['Int']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type MstFranchiseeType = {
  __typename?: 'MstFranchiseeType';
  cityId?: Maybe<Scalars['Int']>;
  country?: Maybe<MstCountryType>;
  countryId?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  emailId?: Maybe<Scalars['String']>;
  franchiseId: Scalars['Int'];
  franchiseName?: Maybe<Scalars['String']>;
  franchiseUser?: Maybe<MstUsersType>;
  franchiseUserId?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  phone?: Maybe<Scalars['String']>;
  provinceId?: Maybe<Scalars['Int']>;
  streetAddress?: Maybe<Scalars['String']>;
  suburbId?: Maybe<Scalars['Int']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type MstItemRequestDtoType = {
  __typename?: 'MstItemRequestDtoType';
  city?: Maybe<Scalars['String']>;
  cityID?: Maybe<Scalars['Int']>;
  itemCategory?: Maybe<Scalars['String']>;
  itemCategoryID?: Maybe<Scalars['Int']>;
  itemImagePath?: Maybe<Scalars['String']>;
  itemRequestDate?: Maybe<Scalars['DateTime']>;
  itemRequestDescription?: Maybe<Scalars['String']>;
  itemRequestID?: Maybe<Scalars['Int']>;
  itemRequestStatus?: Maybe<Scalars['String']>;
  itemRequestStatusID?: Maybe<Scalars['Int']>;
  itemRequestTitle?: Maybe<Scalars['String']>;
  mapItemRequestUploadDto?: Maybe<Array<Maybe<MapItemRequestUploadDtoType>>>;
  province?: Maybe<Scalars['String']>;
  provinceID?: Maybe<Scalars['Int']>;
  selectedCompany?: Maybe<Scalars['String']>;
  suburb?: Maybe<Scalars['String']>;
  suburbID?: Maybe<Scalars['Int']>;
  userID?: Maybe<Scalars['Int']>;
  userName?: Maybe<Scalars['String']>;
};

export type MstItemRequestInputType = {
  categoryId?: InputMaybe<Scalars['Int']>;
  cityId?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  itemRequestDate?: InputMaybe<Scalars['DateTime']>;
  itemRequestDescription?: InputMaybe<Scalars['String']>;
  itemRequestId?: InputMaybe<Scalars['Int']>;
  itemRequestStatusId?: InputMaybe<Scalars['Int']>;
  itemRequestTitle?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  provinceId?: InputMaybe<Scalars['Int']>;
  requestApprovedMail?: InputMaybe<Scalars['Boolean']>;
  selectedCompany?: InputMaybe<Scalars['Int']>;
  suburbId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type MstItemRequestServiceDto = {
  __typename?: 'MstItemRequestServiceDto';
  categoryID?: Maybe<Scalars['Int']>;
  categoryName?: Maybe<MstCategoryType>;
  createdBy?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  domainCategoryID?: Maybe<Scalars['Int']>;
  domainCategoryName?: Maybe<MstCategoryType>;
  itemRequestServiceDate?: Maybe<Scalars['DateTime']>;
  itemRequestServiceDescription?: Maybe<Scalars['String']>;
  itemRequestServiceID?: Maybe<Scalars['Int']>;
  itemRequestServiceStatusID?: Maybe<Scalars['Int']>;
  itemRequestServiceTitle?: Maybe<Scalars['String']>;
  modifiedBy?: Maybe<Scalars['String']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  subCategoryID?: Maybe<Scalars['Int']>;
  subCategoryName?: Maybe<MstCategoryType>;
  thumbNailPath?: Maybe<Scalars['String']>;
  uploadPath?: Maybe<Scalars['String']>;
};

export type MstItemRequestType = {
  __typename?: 'MstItemRequestType';
  categoryId?: Maybe<Scalars['Int']>;
  cityId?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  itemRequestDate?: Maybe<Scalars['DateTime']>;
  itemRequestDescription?: Maybe<Scalars['String']>;
  itemRequestId: Scalars['Int'];
  itemRequestStatusId?: Maybe<Scalars['Int']>;
  itemRequestTitle?: Maybe<Scalars['String']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  provinceId?: Maybe<Scalars['Int']>;
  requestApprovedMail?: Maybe<Scalars['Boolean']>;
  selectedCompany?: Maybe<Scalars['Int']>;
  suburbId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type MstItemResponseInputType = {
  comment?: InputMaybe<Scalars['String']>;
  companyId?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isAccepted?: InputMaybe<Scalars['Boolean']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isRejected?: InputMaybe<Scalars['Boolean']>;
  itemRequestId?: InputMaybe<Scalars['Int']>;
  itemResponseId: Scalars['Int'];
  mapItemResponseUpload?: InputMaybe<Array<InputMaybe<MapItemResponseUploadInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  replyTo?: InputMaybe<MstItemResponseInputType>;
  replyToId?: InputMaybe<Scalars['Int']>;
  responseDate?: InputMaybe<Scalars['DateTime']>;
  statusId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type MstItemResponseType = {
  __typename?: 'MstItemResponseType';
  comment?: Maybe<Scalars['String']>;
  company?: Maybe<MstCompanyType>;
  companyId?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  inverseReplyTo?: Maybe<MstItemResponseType>;
  isAccepted?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isRejected?: Maybe<Scalars['Boolean']>;
  itemRequestId?: Maybe<Scalars['Int']>;
  itemResponseId: Scalars['Int'];
  mapItemResponseUpload?: Maybe<Array<Maybe<MapItemResponseUploadType>>>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  replyTo?: Maybe<MstItemResponseType>;
  replyToId?: Maybe<Scalars['Int']>;
  responseDate?: Maybe<Scalars['DateTime']>;
  statusId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type MstKeywordsInputType = {
  category?: InputMaybe<MstCategoryInputType>;
  categoryId?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  keyword?: InputMaybe<Scalars['String']>;
  keywordId: Scalars['Int'];
  mapCompanyProvide?: InputMaybe<Array<InputMaybe<MapCompanyProvideInputType>>>;
  mapCompanySeek?: InputMaybe<Array<InputMaybe<MapCompanySeekInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<MstStatusInputType>;
  statusId?: InputMaybe<Scalars['Int']>;
};

export type MstKeywordsType = {
  __typename?: 'MstKeywordsType';
  category?: Maybe<MstCategoryType>;
  categoryId?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  keyword?: Maybe<Scalars['String']>;
  keywordId: Scalars['Int'];
  mapCompanyProvide?: Maybe<Array<Maybe<MapCompanyProvideType>>>;
  mapCompanySeek?: Maybe<Array<Maybe<MapCompanySeekType>>>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<MstStatusType>;
  statusId?: Maybe<Scalars['Int']>;
};

export type MstLoggedInUserDtoType = {
  __typename?: 'MstLoggedInUserDtoType';
  cityID?: Maybe<Scalars['Int']>;
  cityName?: Maybe<Scalars['String']>;
  companyStatus?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  packageID?: Maybe<Scalars['Int']>;
  paymentUrl?: Maybe<Scalars['String']>;
  provinceID?: Maybe<Scalars['Int']>;
  provinceName?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  suburbID?: Maybe<Scalars['Int']>;
  suburbName?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  tokenExpires?: Maybe<Scalars['DateTime']>;
  userProfileImage?: Maybe<Scalars['String']>;
  vGender?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type MstLoggedInUserMobileDtoType = {
  __typename?: 'MstLoggedInUserMobileDtoType';
  cityID?: Maybe<Scalars['Int']>;
  cityName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  passPhrase?: Maybe<Scalars['String']>;
  paymentUrl?: Maybe<Scalars['String']>;
  provinceID?: Maybe<Scalars['Int']>;
  provinceName?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  suburbID?: Maybe<Scalars['Int']>;
  suburbName?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  tokenExpires?: Maybe<Scalars['DateTime']>;
  userProfileImage?: Maybe<Scalars['String']>;
  vGender?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type MstMagazineAdInputType = {
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  discount?: InputMaybe<Scalars['Decimal']>;
  duration?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  magazineAdId: Scalars['Int'];
  magazineAdType?: InputMaybe<MstMagazineAdTypeInputType>;
  magazineAdTypeId?: InputMaybe<Scalars['Int']>;
  magazineSection?: InputMaybe<MstMagazineSectionInputType>;
  magazineSectionId?: InputMaybe<Scalars['Int']>;
  mapCompanyMagazineAd?: InputMaybe<Array<InputMaybe<MapCompanyMagazineAdInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  price?: InputMaybe<Scalars['Decimal']>;
};

export type MstMagazineAdType = {
  __typename?: 'MstMagazineAdType';
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  discount?: Maybe<Scalars['Decimal']>;
  duration?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  magazineAdId: Scalars['Int'];
  magazineAdType?: Maybe<MstMagazineAdTypeType>;
  magazineAdTypeId?: Maybe<Scalars['Int']>;
  magazineSection?: Maybe<MstMagazineSectionType>;
  magazineSectionId?: Maybe<Scalars['Int']>;
  mapCompanyMagazineAd?: Maybe<Array<Maybe<MapCompanyMagazineAdType>>>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Decimal']>;
};

export type MstMagazineAdTypeInputType = {
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  magazineAdTypeId: Scalars['Int'];
  magazineAdTypeName?: InputMaybe<Scalars['String']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  mstMagazineAd?: InputMaybe<Array<InputMaybe<MstMagazineAdInputType>>>;
};

export type MstMagazineAdTypeType = {
  __typename?: 'MstMagazineAdTypeType';
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  magazineAdTypeId: Scalars['Int'];
  magazineAdTypeName?: Maybe<Scalars['String']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  mstMagazineAd?: Maybe<Array<Maybe<MstMagazineAdType>>>;
};

export type MstMagazineSectionInputType = {
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  magazineSectionId: Scalars['Int'];
  magazineSectionName?: InputMaybe<Scalars['Int']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  mstMagazineAd?: InputMaybe<Array<InputMaybe<MstMagazineAdInputType>>>;
};

export type MstMagazineSectionType = {
  __typename?: 'MstMagazineSectionType';
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  magazineSectionId: Scalars['Int'];
  magazineSectionName?: Maybe<Scalars['Int']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  mstMagazineAd?: Maybe<Array<Maybe<MstMagazineAdType>>>;
};

export type MstMailTypeInputType = {
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  mailBody?: InputMaybe<Scalars['String']>;
  mailSubject?: InputMaybe<Scalars['String']>;
  mailType?: InputMaybe<Scalars['String']>;
  mailTypeId: Scalars['Int'];
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
};

export type MstMailTypeType = {
  __typename?: 'MstMailTypeType';
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  mailBody?: Maybe<Scalars['String']>;
  mailSubject?: Maybe<Scalars['String']>;
  mailType?: Maybe<Scalars['String']>;
  mailTypeId: Scalars['Int'];
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
};

export type MstNotificationStackInputType = {
  deviceId?: InputMaybe<Scalars['String']>;
  deviceType?: InputMaybe<Scalars['Int']>;
  notificationDate?: InputMaybe<Scalars['DateTime']>;
  notificationId: Scalars['Long'];
  postData?: InputMaybe<Scalars['String']>;
};

export type MstNotificationStackType = {
  __typename?: 'MstNotificationStackType';
  deviceId?: Maybe<Scalars['String']>;
  deviceType?: Maybe<Scalars['Int']>;
  notificationDate?: Maybe<Scalars['DateTime']>;
  notificationId: Scalars['Long'];
  postData?: Maybe<Scalars['String']>;
};

export type MstPackageAttributeInputType = {
  attributeName?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  mapPackageAttributes?: InputMaybe<Array<InputMaybe<MapPackageAttributesInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  pattributeId: Scalars['Int'];
  sortOrder?: InputMaybe<Scalars['Int']>;
};

export type MstPackageAttributeType = {
  __typename?: 'MstPackageAttributeType';
  attributeName?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  mapPackageAttributes?: Maybe<Array<Maybe<MapPackageAttributesType>>>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  pattributeId: Scalars['Int'];
  sortOrder?: Maybe<Scalars['Int']>;
};

export type MstPackageDetailsDtoType = {
  __typename?: 'MstPackageDetailsDtoType';
  activeText?: Maybe<Scalars['String']>;
  actualValue?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Decimal']>;
  attributeID?: Maybe<Scalars['Int']>;
  attributeName?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  pD_ActiveText?: Maybe<Scalars['String']>;
  pD_isActive?: Maybe<Scalars['Boolean']>;
  packageDetailsID?: Maybe<Scalars['Int']>;
  packageID?: Maybe<Scalars['Int']>;
  sortOrder?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

export type MstPackageInputType = {
  amount?: InputMaybe<Scalars['Decimal']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isRecommended?: InputMaybe<Scalars['Boolean']>;
  mapCompanyPackage?: InputMaybe<Array<InputMaybe<MapCompanyPackageInputType>>>;
  mapPackageAttributes?: InputMaybe<Array<InputMaybe<MapPackageAttributesInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  mstPackageAttribute?: InputMaybe<Array<InputMaybe<MstPackageAttributeInputType>>>;
  packageId: Scalars['Int'];
  packageName?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['Int']>;
};

export type MstPackageListDtoType = {
  __typename?: 'MstPackageListDtoType';
  activeText?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Decimal']>;
  fifteenDiscount?: Maybe<Scalars['Decimal']>;
  fifteenOFF?: Maybe<Scalars['Decimal']>;
  fiveDiscount?: Maybe<Scalars['Decimal']>;
  fiveOFF?: Maybe<Scalars['Decimal']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isRecommended?: Maybe<Scalars['Boolean']>;
  packageID?: Maybe<Scalars['Int']>;
  packageName?: Maybe<Scalars['String']>;
  recommendedText?: Maybe<Scalars['String']>;
  sixMonths?: Maybe<Scalars['Decimal']>;
  sixMonthsVat?: Maybe<Scalars['Decimal']>;
  sortOrder?: Maybe<Scalars['Int']>;
  tenDiscount?: Maybe<Scalars['Decimal']>;
  tenOFF?: Maybe<Scalars['Decimal']>;
  threeMonths?: Maybe<Scalars['Decimal']>;
  threeMonthsVat?: Maybe<Scalars['Decimal']>;
  twelveMonths?: Maybe<Scalars['Decimal']>;
  twelveMonthsVat?: Maybe<Scalars['Decimal']>;
  zeroOFF?: Maybe<Scalars['Decimal']>;
};

export type MstPackageType = {
  __typename?: 'MstPackageType';
  amount?: Maybe<Scalars['Decimal']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isRecommended?: Maybe<Scalars['Boolean']>;
  mapCompanyPackage?: Maybe<Array<Maybe<MapCompanyPackageType>>>;
  mapPackageAttributes?: Maybe<Array<Maybe<MapPackageAttributesType>>>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  mstPackageAttribute?: Maybe<Array<Maybe<MstPackageAttributeType>>>;
  packageId: Scalars['Int'];
  packageName?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['Int']>;
};

export type MstPaymentModeInputType = {
  cancelUrl?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  mapCompanyPayment?: InputMaybe<Array<InputMaybe<MapCompanyPaymentInputType>>>;
  merchantID?: InputMaybe<Scalars['String']>;
  merchantKey?: InputMaybe<Scalars['String']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  mstProvinces?: InputMaybe<Array<InputMaybe<MstProvinceInputType>>>;
  notifyUrl?: InputMaybe<Scalars['String']>;
  paymentMode?: InputMaybe<Scalars['String']>;
  paymentModeId: Scalars['Int'];
  returnUrl?: InputMaybe<Scalars['String']>;
};

export type MstPaymentModeType = {
  __typename?: 'MstPaymentModeType';
  cancelUrl?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  mapCompanyPayment?: Maybe<Array<Maybe<MapCompanyPaymentType>>>;
  merchantID?: Maybe<Scalars['String']>;
  merchantKey?: Maybe<Scalars['String']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  mstProvinces?: Maybe<Array<Maybe<MstProvinceType>>>;
  notifyUrl?: Maybe<Scalars['String']>;
  paymentMode?: Maybe<Scalars['String']>;
  paymentModeId: Scalars['Int'];
  returnUrl?: Maybe<Scalars['String']>;
};

export type MstPaymentStatusInputType = {
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  mapCompanyPayment?: InputMaybe<Array<InputMaybe<MapCompanyPaymentInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  paymentStatus?: InputMaybe<Scalars['String']>;
  paymentStatusId: Scalars['Int'];
};

export type MstPaymentStatusType = {
  __typename?: 'MstPaymentStatusType';
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  mapCompanyPayment?: Maybe<Array<Maybe<MapCompanyPaymentType>>>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  paymentStatus?: Maybe<Scalars['String']>;
  paymentStatusId: Scalars['Int'];
};

export type MstPaymentTypeInputType = {
  description?: InputMaybe<Scalars['String']>;
  paymentTypeId: Scalars['Int'];
};

export type MstPaymentTypeType = {
  __typename?: 'MstPaymentTypeType';
  description?: Maybe<Scalars['String']>;
  paymentTypeId: Scalars['Int'];
};

export type MstPeriodTypeInputType = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  mapCompanyProvide?: InputMaybe<Array<InputMaybe<MapCompanyProvideInputType>>>;
  mapCompanySeek?: InputMaybe<Array<InputMaybe<MapCompanySeekInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  parentFormNavigation?: InputMaybe<DevFormsInputType>;
  periodType?: InputMaybe<Scalars['String']>;
  periodTypeId: Scalars['Int'];
};

export type MstPeriodTypeType = {
  __typename?: 'MstPeriodTypeType';
  active?: Maybe<Scalars['Boolean']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  mapCompanyProvide?: Maybe<Array<Maybe<MapCompanyProvideType>>>;
  mapCompanySeek?: Maybe<Array<Maybe<MapCompanySeekType>>>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  periodType?: Maybe<Scalars['String']>;
  periodTypeId: Scalars['Int'];
};

export type MstProvinceInputType = {
  country?: InputMaybe<MstCountryInputType>;
  countryId?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  mapCompanyArea?: InputMaybe<Array<InputMaybe<MstSpecialsInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  mstCity?: InputMaybe<Array<InputMaybe<MapCompanyAreaInputType>>>;
  mstSpecials?: InputMaybe<Array<InputMaybe<MstCityInputType>>>;
  mstUsers?: InputMaybe<Array<InputMaybe<MstUsersInputType>>>;
  provinceId?: InputMaybe<Scalars['ID']>;
  provinceName?: InputMaybe<Scalars['String']>;
};

export type MstProvinceType = {
  __typename?: 'MstProvinceType';
  country?: Maybe<MstCountryType>;
  countryId?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  mapCompanyArea?: Maybe<Array<Maybe<MapCompanyAreaType>>>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  mstCity?: Maybe<Array<Maybe<MstCityType>>>;
  mstSpecials?: Maybe<Array<Maybe<MstSpecialsType>>>;
  mstUsers?: Maybe<Array<Maybe<MstUsersType>>>;
  provinceId?: Maybe<Scalars['ID']>;
  provinceName?: Maybe<Scalars['String']>;
};

export type MstQuantityTypeInputType = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  mapCompanyProvide?: InputMaybe<Array<InputMaybe<MapCompanyProvideInputType>>>;
  mapCompanySeek?: InputMaybe<Array<InputMaybe<MapCompanySeekInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  quantityType?: InputMaybe<Scalars['String']>;
  quantityTypeId: Scalars['Int'];
};

export type MstQuantityTypeType = {
  __typename?: 'MstQuantityTypeType';
  active?: Maybe<Scalars['Boolean']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  mapCompanyProvide?: Maybe<Array<Maybe<MapCompanyProvideType>>>;
  mapCompanySeek?: Maybe<Array<Maybe<MapCompanySeekType>>>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  quantityType?: Maybe<Scalars['String']>;
  quantityTypeId: Scalars['Int'];
};

export type MstRatingDtoType = {
  __typename?: 'MstRatingDtoType';
  companyID?: Maybe<Scalars['Int']>;
  contactNo?: Maybe<Scalars['String']>;
  dateofReview?: Maybe<Scalars['DateTime']>;
  documentPath?: Maybe<Scalars['String']>;
  emaiId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fromDate?: Maybe<Scalars['DateTime']>;
  imagePath?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['Int']>;
  keyID?: Maybe<Scalars['Int']>;
  keyType?: Maybe<Scalars['Int']>;
  mST_RatingID?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  ratingForDescription?: Maybe<Scalars['String']>;
  ratingForTitle?: Maybe<Scalars['String']>;
  ratingID?: Maybe<Scalars['Int']>;
  ratingScore?: Maybe<Scalars['Int']>;
  ratingScoreCount?: Maybe<Scalars['Int']>;
  ratingScoreName?: Maybe<Scalars['String']>;
  ratingScorePercent?: Maybe<Scalars['Decimal']>;
  review?: Maybe<Scalars['String']>;
  reviewType?: Maybe<Scalars['Int']>;
  showResult?: Maybe<Scalars['Int']>;
  staId?: Maybe<Scalars['String']>;
  statusId?: Maybe<Scalars['Int']>;
  statusName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  toDate?: Maybe<Scalars['DateTime']>;
  totalRatingCount?: Maybe<Scalars['Int']>;
  totalRatingScore?: Maybe<Scalars['Decimal']>;
  userID?: Maybe<Scalars['Int']>;
  userName?: Maybe<Scalars['String']>;
  userPhoto?: Maybe<Scalars['String']>;
};

export type MstRatingInputType = {
  company?: InputMaybe<MstCompanyInputType>;
  companyId?: InputMaybe<Scalars['Int']>;
  contactNo?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  eflyerId?: InputMaybe<Scalars['Int']>;
  emaiId?: InputMaybe<Scalars['String']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  mstRatingId?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  productId?: InputMaybe<Scalars['Int']>;
  ratingScore?: InputMaybe<Scalars['Int']>;
  review?: InputMaybe<Scalars['String']>;
  special?: InputMaybe<MstSpecialsInputType>;
  specialId?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<MstStatusInputType>;
  statusId?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<MstUsersInputType>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type MstRatingType = {
  __typename?: 'MstRatingType';
  company?: Maybe<MstCompanyType>;
  companyId?: Maybe<Scalars['Int']>;
  contactNo?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  eflyerId?: Maybe<Scalars['Int']>;
  emaiId?: Maybe<Scalars['String']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  mstRatingId: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['Int']>;
  ratingScore?: Maybe<Scalars['Int']>;
  review?: Maybe<Scalars['String']>;
  special?: Maybe<MstSpecialsType>;
  specialId?: Maybe<Scalars['Int']>;
  status?: Maybe<MstStatusType>;
  statusId?: Maybe<Scalars['Int']>;
  user?: Maybe<MstUsersType>;
  userId?: Maybe<Scalars['Int']>;
};

export type MstReportUserDtoType = {
  __typename?: 'MstReportUserDtoType';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  userID: Scalars['Int'];
  userProfileImage?: Maybe<Scalars['String']>;
  userProfileThumbNailImage?: Maybe<Scalars['String']>;
};

export type MstSettingTypeInputType = {
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  mstSettings?: InputMaybe<Array<InputMaybe<MstSettingsInputType>>>;
  settingTypeId: Scalars['Int'];
  settingTypeName?: InputMaybe<Scalars['String']>;
};

export type MstSettingTypeType = {
  __typename?: 'MstSettingTypeType';
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  mstSettings?: Maybe<Array<Maybe<MstSettingsType>>>;
  settingTypeId: Scalars['Int'];
  settingTypeName?: Maybe<Scalars['String']>;
};

export type MstSettingsInputType = {
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  mapSettingsRole?: InputMaybe<Array<InputMaybe<MapSettingsRoleInputType>>>;
  mapUsersSettings?: InputMaybe<Array<InputMaybe<MapUsersSettingsInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  settingId: Scalars['Int'];
  settingName?: InputMaybe<Scalars['String']>;
  settingType?: InputMaybe<MstSettingTypeInputType>;
  settingTypeId?: InputMaybe<Scalars['Int']>;
};

export type MstSettingsType = {
  __typename?: 'MstSettingsType';
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  mapSettingsRole?: Maybe<Array<Maybe<MapSettingsRoleType>>>;
  mapUsersSettings?: Maybe<Array<Maybe<MapUsersSettingsType>>>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  settingId: Scalars['Int'];
  settingName?: Maybe<Scalars['String']>;
  settingType?: Maybe<MstSettingTypeType>;
  settingTypeId?: Maybe<Scalars['Int']>;
};

export type MstSpecialsDtoType = {
  __typename?: 'MstSpecialsDtoType';
  amount?: Maybe<Scalars['Decimal']>;
  categoryID?: Maybe<Scalars['Int']>;
  categoryIds?: Maybe<Scalars['String']>;
  categoryName?: Maybe<Scalars['String']>;
  cityID?: Maybe<Scalars['Int']>;
  cityIds?: Maybe<Scalars['String']>;
  cityName?: Maybe<Scalars['String']>;
  companyIds?: Maybe<Scalars['String']>;
  countryID?: Maybe<Scalars['Int']>;
  countryName?: Maybe<Scalars['String']>;
  dis?: Maybe<Scalars['Float']>;
  distance?: Maybe<Scalars['Decimal']>;
  documentLink?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  franchiseId?: Maybe<Scalars['Int']>;
  imagePath?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  mapSpecialUpload?: Maybe<Array<Maybe<MapSpecialUploadType>>>;
  phone?: Maybe<Scalars['String']>;
  provinceID?: Maybe<Scalars['Int']>;
  provinceIds?: Maybe<Scalars['String']>;
  provinceName?: Maybe<Scalars['String']>;
  specialDescription?: Maybe<Scalars['String']>;
  specialID?: Maybe<Scalars['Int']>;
  specialId?: Maybe<Scalars['Int']>;
  specialName?: Maybe<Scalars['String']>;
  staId?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  statusID?: Maybe<Scalars['Int']>;
  statusId?: Maybe<Scalars['Int']>;
  statusName?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  suburb?: Maybe<Scalars['String']>;
  suburbID?: Maybe<Scalars['Int']>;
  suburbIds?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  userLatitude?: Maybe<Scalars['Float']>;
  userLongtitude?: Maybe<Scalars['Float']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type MstSpecialsInputType = {
  amount?: InputMaybe<Scalars['Decimal']>;
  category?: InputMaybe<MstCategoryInputType>;
  categoryId?: InputMaybe<Scalars['Int']>;
  city?: InputMaybe<MstCityInputType>;
  cityId?: InputMaybe<Scalars['Int']>;
  company?: InputMaybe<MstCompanyInputType>;
  companyId?: InputMaybe<Scalars['Int']>;
  country?: InputMaybe<MstCountryInputType>;
  countryId?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  imagePath?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  mapSpecialUpload?: InputMaybe<Array<InputMaybe<MapSpecialUploadInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  mstFavourites?: InputMaybe<Array<InputMaybe<MstFavouritesInputType>>>;
  mstRating?: InputMaybe<Array<InputMaybe<MstRatingInputType>>>;
  phone?: InputMaybe<Scalars['String']>;
  province?: InputMaybe<MstProvinceInputType>;
  provinceId?: InputMaybe<Scalars['Int']>;
  specialId: Scalars['Int'];
  specialName?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<MstStatusInputType>;
  statusId?: InputMaybe<Scalars['Int']>;
  statusNavigation?: InputMaybe<MstSuburbInputType>;
  streetAddress?: InputMaybe<Scalars['String']>;
  suburbId?: InputMaybe<Scalars['Int']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type MstSpecialsType = {
  __typename?: 'MstSpecialsType';
  amount?: Maybe<Scalars['Decimal']>;
  category?: Maybe<MstCategoryType>;
  categoryId?: Maybe<Scalars['Int']>;
  city?: Maybe<MstCityType>;
  cityId?: Maybe<Scalars['Int']>;
  company?: Maybe<MstCompanyType>;
  companyId?: Maybe<Scalars['Int']>;
  country?: Maybe<MstCountryType>;
  countryId?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  featured?: Maybe<Scalars['Boolean']>;
  imagePath?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  mapSpecialUpload?: Maybe<Array<Maybe<MapSpecialUploadType>>>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  mstFavourites?: Maybe<Array<Maybe<MstFavouritesType>>>;
  mstRating?: Maybe<Array<Maybe<MstRatingType>>>;
  phone?: Maybe<Scalars['String']>;
  province?: Maybe<MstProvinceType>;
  provinceId?: Maybe<Scalars['Int']>;
  specialId: Scalars['Int'];
  specialName?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<MstStatusType>;
  statusId?: Maybe<Scalars['Int']>;
  statusNavigation?: Maybe<MstSuburbType>;
  streetAddress?: Maybe<Scalars['String']>;
  suburbId?: Maybe<Scalars['Int']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type MstStatusInputType = {
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  mstCustomerEnquiry?: InputMaybe<Array<InputMaybe<MstCustomerEnquiryInputType>>>;
  mstEFlyers?: InputMaybe<Array<InputMaybe<MstEFlyersInputType>>>;
  mstKeywords?: InputMaybe<Array<InputMaybe<MstKeywordsInputType>>>;
  mstRating?: InputMaybe<Array<InputMaybe<MstRatingInputType>>>;
  mstSpecials?: InputMaybe<Array<InputMaybe<MstSpecialsInputType>>>;
  statusId: Scalars['Int'];
  statusName?: InputMaybe<Scalars['String']>;
};

export type MstStatusType = {
  __typename?: 'MstStatusType';
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  mstCustomerEnquiry?: Maybe<Array<Maybe<MstCustomerEnquiryType>>>;
  mstEFlyers?: Maybe<Array<Maybe<MstEFlyersType>>>;
  mstKeywords?: Maybe<Array<Maybe<MstKeywordsType>>>;
  mstRating?: Maybe<Array<Maybe<MstRatingType>>>;
  mstSpecials?: Maybe<Array<Maybe<MstSpecialsType>>>;
  statusId: Scalars['Int'];
  statusName?: Maybe<Scalars['String']>;
};

export type MstSuburbInputType = {
  city?: InputMaybe<MstCityInputType>;
  cityId?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  mapCompanyArea?: InputMaybe<Array<InputMaybe<MapCompanyAreaInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  mstSpecials?: InputMaybe<Array<InputMaybe<MstSpecialsInputType>>>;
  mstUsers?: InputMaybe<Array<InputMaybe<MstUsersInputType>>>;
  suburbId: Scalars['Int'];
  suburbName?: InputMaybe<Scalars['String']>;
};

export type MstSuburbType = {
  __typename?: 'MstSuburbType';
  city?: Maybe<MstCityType>;
  cityId?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  mapCompanyArea?: Maybe<Array<Maybe<MapCompanyAreaType>>>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  mstSpecials?: Maybe<Array<Maybe<MstSpecialsType>>>;
  mstUsers?: Maybe<Array<Maybe<MstUsersType>>>;
  suburbId: Scalars['Int'];
  suburbName?: Maybe<Scalars['String']>;
};

export type MstUserAddressInputType = {
  cityID?: InputMaybe<Scalars['Int']>;
  countryID?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  provinceID?: InputMaybe<Scalars['Int']>;
  streetAddress?: InputMaybe<Scalars['String']>;
  suburbID?: InputMaybe<Scalars['Int']>;
  userAddressID?: InputMaybe<Scalars['Int']>;
  userID?: InputMaybe<Scalars['Int']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type MstUserAddressType = {
  __typename?: 'MstUserAddressType';
  city?: Maybe<Scalars['String']>;
  cityID?: Maybe<Scalars['Int']>;
  countryID?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  province?: Maybe<Scalars['String']>;
  provinceID?: Maybe<Scalars['Int']>;
  streetAddress?: Maybe<Scalars['String']>;
  suburb?: Maybe<Scalars['String']>;
  suburbID?: Maybe<Scalars['Int']>;
  userAddressID?: Maybe<Scalars['Int']>;
  userID?: Maybe<Scalars['Int']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type MstUserDtoInputType = {
  appleUserID?: InputMaybe<Scalars['String']>;
  categoryID?: InputMaybe<Scalars['Int']>;
  cityID?: InputMaybe<Scalars['Int']>;
  cityName?: InputMaybe<Scalars['String']>;
  compPackageID?: InputMaybe<Scalars['Int']>;
  compPercent?: InputMaybe<Scalars['Decimal']>;
  companyId?: InputMaybe<Scalars['Int']>;
  companyName?: InputMaybe<Scalars['String']>;
  contactNo?: InputMaybe<Scalars['String']>;
  countryId?: InputMaybe<Scalars['Int']>;
  countryName?: InputMaybe<Scalars['String']>;
  dateofBirth?: InputMaybe<Scalars['DateTime']>;
  deviceID?: InputMaybe<Scalars['String']>;
  deviceType?: InputMaybe<Scalars['Int']>;
  discount?: InputMaybe<Scalars['Int']>;
  domainUrl?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  emailActivationCode?: InputMaybe<Scalars['String']>;
  emailNotification?: InputMaybe<Scalars['Boolean']>;
  fBAccessCode?: InputMaybe<Scalars['String']>;
  facebookUserID?: InputMaybe<Scalars['String']>;
  failedLoginCount?: InputMaybe<Scalars['Int']>;
  firstName?: InputMaybe<Scalars['String']>;
  forgetPasswordCode?: InputMaybe<Scalars['String']>;
  franchiseID?: InputMaybe<Scalars['Int']>;
  fullName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['Int']>;
  getRequests?: InputMaybe<Scalars['Boolean']>;
  googleUserID?: InputMaybe<Scalars['String']>;
  instagramUserID?: InputMaybe<Scalars['String']>;
  isLoggedIn?: InputMaybe<Scalars['Boolean']>;
  isMobileLoggedIn?: InputMaybe<Scalars['Boolean']>;
  joinDate?: InputMaybe<Scalars['DateTime']>;
  lastLogin?: InputMaybe<Scalars['DateTime']>;
  lastName?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['String']>;
  linkedInUserID?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  mobileActivationCode?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  packageID?: InputMaybe<Scalars['Int']>;
  password?: InputMaybe<Scalars['String']>;
  paymentUrl?: InputMaybe<Scalars['String']>;
  postOnFB?: InputMaybe<Scalars['Boolean']>;
  postOnGP?: InputMaybe<Scalars['Boolean']>;
  postOnInstagram?: InputMaybe<Scalars['Boolean']>;
  postOnLI?: InputMaybe<Scalars['Boolean']>;
  postOnTwitter?: InputMaybe<Scalars['Boolean']>;
  provinceID?: InputMaybe<Scalars['Int']>;
  provinceName?: InputMaybe<Scalars['String']>;
  rId?: InputMaybe<Scalars['String']>;
  roleId?: InputMaybe<Scalars['Int']>;
  roleName?: InputMaybe<Scalars['String']>;
  sMSNotification?: InputMaybe<Scalars['Boolean']>;
  staId?: InputMaybe<Scalars['String']>;
  statusId?: InputMaybe<Scalars['Int']>;
  statusName?: InputMaybe<Scalars['String']>;
  streetAddress?: InputMaybe<Scalars['String']>;
  suburbID?: InputMaybe<Scalars['Int']>;
  suburbName?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  tokenExpired?: InputMaybe<Scalars['String']>;
  track?: InputMaybe<Scalars['Int']>;
  twitterUserId?: InputMaybe<Scalars['String']>;
  userID?: InputMaybe<Scalars['Int']>;
  userName?: InputMaybe<Scalars['String']>;
  userProfileImage?: InputMaybe<Scalars['String']>;
  userProfileThumbNailImage?: InputMaybe<Scalars['String']>;
  vGender?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type MstUserDtoType = {
  __typename?: 'MstUserDtoType';
  categoryID?: Maybe<Scalars['Int']>;
  cityID?: Maybe<Scalars['Int']>;
  cityName?: Maybe<Scalars['String']>;
  compPackageID?: Maybe<Scalars['Int']>;
  compPercent?: Maybe<Scalars['Decimal']>;
  companyId?: Maybe<Scalars['Int']>;
  companyName?: Maybe<Scalars['String']>;
  companyStatus?: Maybe<Scalars['Int']>;
  contactNo?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['Int']>;
  countryName?: Maybe<Scalars['String']>;
  dateofBirth?: Maybe<Scalars['DateTime']>;
  deviceID?: Maybe<Scalars['String']>;
  deviceType?: Maybe<Scalars['Int']>;
  domainUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailActivationCode?: Maybe<Scalars['String']>;
  emailNotification?: Maybe<Scalars['Boolean']>;
  fBAccessCode?: Maybe<Scalars['String']>;
  facebookUserID?: Maybe<Scalars['String']>;
  failedLoginCount?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  forgetPasswordCode?: Maybe<Scalars['String']>;
  franchiseID?: Maybe<Scalars['Int']>;
  fullName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  getRequests?: Maybe<Scalars['Boolean']>;
  googleUserID?: Maybe<Scalars['String']>;
  instagramUserID?: Maybe<Scalars['String']>;
  isLoggedIn?: Maybe<Scalars['Boolean']>;
  isMobileLoggedIn?: Maybe<Scalars['Boolean']>;
  joinDate?: Maybe<Scalars['DateTime']>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  linkedInUserID?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  mobileActivationCode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  packageID?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  paymentUrl?: Maybe<Scalars['String']>;
  postOnFB?: Maybe<Scalars['Boolean']>;
  postOnGP?: Maybe<Scalars['Boolean']>;
  postOnInstagram?: Maybe<Scalars['Boolean']>;
  postOnLI?: Maybe<Scalars['Boolean']>;
  postOnTwitter?: Maybe<Scalars['Boolean']>;
  provinceID?: Maybe<Scalars['Int']>;
  provinceName?: Maybe<Scalars['String']>;
  rId?: Maybe<Scalars['String']>;
  roleId?: Maybe<Scalars['Int']>;
  roleName?: Maybe<Scalars['String']>;
  sMSNotification?: Maybe<Scalars['Boolean']>;
  staId?: Maybe<Scalars['String']>;
  statusId?: Maybe<Scalars['Int']>;
  statusName?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  suburbID?: Maybe<Scalars['Int']>;
  suburbName?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  tokenExpired?: Maybe<Scalars['String']>;
  track?: Maybe<Scalars['Int']>;
  twitterUserId?: Maybe<Scalars['String']>;
  userID?: Maybe<Scalars['Int']>;
  userName?: Maybe<Scalars['String']>;
  userProfileImage?: Maybe<Scalars['String']>;
  userProfileThumbNailImage?: Maybe<Scalars['String']>;
  vGender?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type MstUserRoleInputType = {
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  deletedBy?: InputMaybe<Scalars['Int']>;
  deletedDate?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  mapSettingsRole?: InputMaybe<Array<InputMaybe<MapSettingsRoleInputType>>>;
  mapUserRoleRights?: InputMaybe<Array<InputMaybe<MapUserRoleRightsInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  mstUsers?: InputMaybe<Array<InputMaybe<MstUsersInputType>>>;
  roleId: Scalars['Int'];
  roleName?: InputMaybe<Scalars['String']>;
};

export type MstUserRoleType = {
  __typename?: 'MstUserRoleType';
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['Int']>;
  deletedDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  mapSettingsRole?: Maybe<Array<Maybe<MapSettingsRoleType>>>;
  mapUserRoleRights?: Maybe<Array<Maybe<MapUserRoleRightsType>>>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  mstUsers?: Maybe<Array<Maybe<MstUsersType>>>;
  roleId: Scalars['Int'];
  roleName?: Maybe<Scalars['String']>;
};

export type MstUserStatusInputType = {
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  mstUsers?: InputMaybe<Array<InputMaybe<MstUsersInputType>>>;
  statusId: Scalars['Int'];
  statusName?: InputMaybe<Scalars['String']>;
};

export type MstUserStatusType = {
  __typename?: 'MstUserStatusType';
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  mstUsers?: Maybe<Array<Maybe<MstUsersType>>>;
  statusId: Scalars['Int'];
  statusName?: Maybe<Scalars['String']>;
};

export type MstUsersInputType = {
  adminPin?: InputMaybe<Scalars['Int']>;
  cityId?: InputMaybe<Scalars['Int']>;
  companyId?: InputMaybe<Scalars['Int']>;
  contactNo?: InputMaybe<Scalars['String']>;
  countryId?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  dateofBirth?: InputMaybe<Scalars['DateTime']>;
  deviceId?: InputMaybe<Scalars['String']>;
  deviceType?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  emailActivationCode?: InputMaybe<Scalars['String']>;
  failedLoginCount?: InputMaybe<Scalars['Int']>;
  firstName?: InputMaybe<Scalars['String']>;
  forgetPasswordCode?: InputMaybe<Scalars['String']>;
  franchiseId?: InputMaybe<Scalars['Int']>;
  gender?: InputMaybe<Scalars['Int']>;
  isLoggedIn?: InputMaybe<Scalars['Boolean']>;
  isMobileLoggedIn?: InputMaybe<Scalars['Boolean']>;
  lastLogin?: InputMaybe<Scalars['DateTime']>;
  lastName?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['String']>;
  logInCode?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  mobileActivationCode?: InputMaybe<Scalars['String']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  mstCrmCustomerComment?: InputMaybe<Array<InputMaybe<MstCrmCustomerCommentInputType>>>;
  mstCustomerEnquiry?: InputMaybe<Array<InputMaybe<MstCustomerEnquiryInputType>>>;
  mstCustomerEnquiryResponse?: InputMaybe<Array<InputMaybe<MstCustomerEnquiryResponseInputType>>>;
  mstFranchisee?: InputMaybe<Array<InputMaybe<MstFranchiseeInputType>>>;
  mstItemResponse?: InputMaybe<Array<InputMaybe<MstItemResponseInputType>>>;
  mstRating?: InputMaybe<Array<InputMaybe<MstRatingInputType>>>;
  password?: InputMaybe<Scalars['String']>;
  prdOrders?: InputMaybe<Array<InputMaybe<PrdOrdersInputType>>>;
  provinceId?: InputMaybe<Scalars['Int']>;
  roleId?: InputMaybe<Scalars['Int']>;
  statusId?: InputMaybe<Scalars['Int']>;
  streetAddress?: InputMaybe<Scalars['String']>;
  suburbId?: InputMaybe<Scalars['Int']>;
  userId: Scalars['Int'];
  userName?: InputMaybe<Scalars['String']>;
  userProfileImage?: InputMaybe<Scalars['String']>;
  userProfileThumbNailImage?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type MstUsersType = {
  __typename?: 'MstUsersType';
  adminPin?: Maybe<Scalars['Int']>;
  cityId?: Maybe<Scalars['Int']>;
  companyId?: Maybe<Scalars['Int']>;
  contactNo?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  dateofBirth?: Maybe<Scalars['DateTime']>;
  deviceId?: Maybe<Scalars['String']>;
  deviceType?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailActivationCode?: Maybe<Scalars['String']>;
  failedLoginCount?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  forgetPasswordCode?: Maybe<Scalars['String']>;
  franchiseId?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['Int']>;
  isLoggedIn?: Maybe<Scalars['Boolean']>;
  isMobileLoggedIn?: Maybe<Scalars['Boolean']>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  logInCode?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  mobileActivationCode?: Maybe<Scalars['String']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  mstCrmCustomerComment?: Maybe<Array<Maybe<MstCrmCustomerCommentType>>>;
  mstCustomerEnquiry?: Maybe<Array<Maybe<MstCustomerEnquiryType>>>;
  mstCustomerEnquiryResponse?: Maybe<Array<Maybe<MstCustomerEnquiryResponseType>>>;
  mstFranchisee?: Maybe<Array<Maybe<MstFranchiseeType>>>;
  mstItemResponse?: Maybe<Array<Maybe<MstItemResponseType>>>;
  mstRating?: Maybe<Array<Maybe<MstRatingType>>>;
  password?: Maybe<Scalars['String']>;
  prdOrders?: Maybe<Array<Maybe<PrdOrdersType>>>;
  provinceId?: Maybe<Scalars['Int']>;
  roleId?: Maybe<Scalars['Int']>;
  statusId?: Maybe<Scalars['Int']>;
  streetAddress?: Maybe<Scalars['String']>;
  suburbId?: Maybe<Scalars['Int']>;
  userId: Scalars['Int'];
  userName?: Maybe<Scalars['String']>;
  userProfileImage?: Maybe<Scalars['String']>;
  userProfileThumbNailImage?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type MstVersionInputType = {
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  versionId: Scalars['Int'];
  versionNumber?: InputMaybe<Scalars['Decimal']>;
  versionType?: InputMaybe<Scalars['String']>;
};

export type MstVersionType = {
  __typename?: 'MstVersionType';
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  versionId: Scalars['Int'];
  versionNumber?: Maybe<Scalars['Decimal']>;
  versionType?: Maybe<Scalars['String']>;
};

export type MstVolumeTypeInputType = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  mapCompanyProvide?: InputMaybe<Array<InputMaybe<MapCompanyProvideInputType>>>;
  mapCompanySeek?: InputMaybe<Array<InputMaybe<MapCompanySeekInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  volumeType?: InputMaybe<Scalars['String']>;
  volumeTypeId: Scalars['Int'];
};

export type MstVolumeTypeType = {
  __typename?: 'MstVolumeTypeType';
  active?: Maybe<Scalars['Boolean']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  mapCompanyProvide?: Maybe<Array<Maybe<MapCompanyProvideType>>>;
  mapCompanySeek?: Maybe<Array<Maybe<MapCompanySeekType>>>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  volumeType?: Maybe<Scalars['String']>;
  volumeTypeId: Scalars['Int'];
};

export type PaginationListDevForms = {
  __typename?: 'PaginationListDevForms';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<DevFormsType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListElmahError = {
  __typename?: 'PaginationListElmahError';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<ElmahErrorType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListJob = {
  __typename?: 'PaginationListJob';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<JobType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMapCategoryAttributes = {
  __typename?: 'PaginationListMapCategoryAttributes';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MapCategoryAttributesType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMapCompanyArea = {
  __typename?: 'PaginationListMapCompanyArea';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MapCompanyAreaType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMapCompanyAuditLog = {
  __typename?: 'PaginationListMapCompanyAuditLog';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MapCompanyAuditLogType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMapCompanyCategory = {
  __typename?: 'PaginationListMapCompanyCategory';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MapCompanyCategoryType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMapCompanyDocument = {
  __typename?: 'PaginationListMapCompanyDocument';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MapCompanyDocumentType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMapCompanyEmail = {
  __typename?: 'PaginationListMapCompanyEmail';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MapCompanyEmailType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMapCompanyMagazineAd = {
  __typename?: 'PaginationListMapCompanyMagazineAd';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MapCompanyMagazineAdType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMapCompanyPackage = {
  __typename?: 'PaginationListMapCompanyPackage';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MapCompanyPackageType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMapCompanyPayment = {
  __typename?: 'PaginationListMapCompanyPayment';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MapCompanyPaymentType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMapCompanyProvide = {
  __typename?: 'PaginationListMapCompanyProvide';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MapCompanyProvideType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMapCompanySeek = {
  __typename?: 'PaginationListMapCompanySeek';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MapCompanySeekType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMapCompanyTask = {
  __typename?: 'PaginationListMapCompanyTask';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MapCompanyTaskType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMapCompanyUsers = {
  __typename?: 'PaginationListMapCompanyUsers';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MapCompanyUsersType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMapCustomerEnquiryUpload = {
  __typename?: 'PaginationListMapCustomerEnquiryUpload';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MapCustomerEnquiryUploadType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMapEflyersUpload = {
  __typename?: 'PaginationListMapEflyersUpload';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MapEflyersUploadType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMapItemRequestArea = {
  __typename?: 'PaginationListMapItemRequestArea';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MapItemRequestAreaType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMapItemRequestCategory = {
  __typename?: 'PaginationListMapItemRequestCategory';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MapItemRequestCategoryType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMapItemRequestCategoryAttribute = {
  __typename?: 'PaginationListMapItemRequestCategoryAttribute';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MapItemRequestCategoryAttributeType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMapItemRequestUpload = {
  __typename?: 'PaginationListMapItemRequestUpload';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MapItemRequestUploadType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMapItemResponseUpload = {
  __typename?: 'PaginationListMapItemResponseUpload';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MapItemResponseUploadType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMapPackageAttributes = {
  __typename?: 'PaginationListMapPackageAttributes';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MapPackageAttributesType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMapProductDocument = {
  __typename?: 'PaginationListMapProductDocument';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MapProductDocumentType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMapProductImages = {
  __typename?: 'PaginationListMapProductImages';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MapProductImagesType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMapSettingsRole = {
  __typename?: 'PaginationListMapSettingsRole';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MapSettingsRoleType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMapSpecialUpload = {
  __typename?: 'PaginationListMapSpecialUpload';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MapSpecialUploadType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMapUserRoleRights = {
  __typename?: 'PaginationListMapUserRoleRights';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MapUserRoleRightsType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMapUsersSettings = {
  __typename?: 'PaginationListMapUsersSettings';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MapUsersSettingsType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstBeestatus = {
  __typename?: 'PaginationListMstBeestatus';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstBeestatusType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstCategoryAttribute = {
  __typename?: 'PaginationListMstCategoryAttribute';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCategoryAttributeType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstCategoryAttributeDataType = {
  __typename?: 'PaginationListMstCategoryAttributeDataType';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCategoryAttributeDataTypeType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstCity = {
  __typename?: 'PaginationListMstCity';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCityType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstCms = {
  __typename?: 'PaginationListMstCms';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCmsType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstCompany = {
  __typename?: 'PaginationListMstCompany';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCompanyType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstCompanyDocumentType = {
  __typename?: 'PaginationListMstCompanyDocumentType';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCompanyDocumentTypeType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstCompanyStatus = {
  __typename?: 'PaginationListMstCompanyStatus';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCompanyStatusType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstCompanyTaskList = {
  __typename?: 'PaginationListMstCompanyTaskList';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCompanyTaskListType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstConfiguration = {
  __typename?: 'PaginationListMstConfiguration';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstConfigurationType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstContactForm = {
  __typename?: 'PaginationListMstContactForm';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstContactFormType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstCountry = {
  __typename?: 'PaginationListMstCountry';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCountryType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstCrmCustomer = {
  __typename?: 'PaginationListMstCrmCustomer';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCrmCustomerType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstCrmCustomerComment = {
  __typename?: 'PaginationListMstCrmCustomerComment';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCrmCustomerCommentType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstCrmInventory = {
  __typename?: 'PaginationListMstCrmInventory';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCrmInventoryType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstCrmInventoryType = {
  __typename?: 'PaginationListMstCrmInventoryType';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCrmInventoryTypeType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstCrmInvoice = {
  __typename?: 'PaginationListMstCrmInvoice';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCrmInvoiceType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstCrmInvoiceDetails = {
  __typename?: 'PaginationListMstCrmInvoiceDetails';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCrmInvoiceDetailsType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstCrmQuote = {
  __typename?: 'PaginationListMstCrmQuote';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCrmQuoteType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstCrmQuoteDetails = {
  __typename?: 'PaginationListMstCrmQuoteDetails';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCrmQuoteDetailsType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstCustomerEnquiry = {
  __typename?: 'PaginationListMstCustomerEnquiry';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCustomerEnquiryType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstCustomerEnquiryResponse = {
  __typename?: 'PaginationListMstCustomerEnquiryResponse';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCustomerEnquiryResponseType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstDocumentStatus = {
  __typename?: 'PaginationListMstDocumentStatus';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstDocumentStatusType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstDomain = {
  __typename?: 'PaginationListMstDomain';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstDomainType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstEFlyers = {
  __typename?: 'PaginationListMstEFlyers';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstEFlyersType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstEmailStack = {
  __typename?: 'PaginationListMstEmailStack';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstEmailStackType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstFavourites = {
  __typename?: 'PaginationListMstFavourites';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstFavouritesType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstFranchisee = {
  __typename?: 'PaginationListMstFranchisee';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstFranchiseeType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstItemRequest = {
  __typename?: 'PaginationListMstItemRequest';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstItemRequestType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstItemResponse = {
  __typename?: 'PaginationListMstItemResponse';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstItemResponseType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstKeywords = {
  __typename?: 'PaginationListMstKeywords';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstKeywordsType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstMagazineAd = {
  __typename?: 'PaginationListMstMagazineAd';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstMagazineAdType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstMagazineAdType = {
  __typename?: 'PaginationListMstMagazineAdType';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstMagazineAdTypeType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstMagazineSection = {
  __typename?: 'PaginationListMstMagazineSection';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstMagazineSectionType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstMailType = {
  __typename?: 'PaginationListMstMailType';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstMailTypeType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstNotificationStack = {
  __typename?: 'PaginationListMstNotificationStack';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstNotificationStackType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstPackage = {
  __typename?: 'PaginationListMstPackage';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstPackageType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstPackageAttribute = {
  __typename?: 'PaginationListMstPackageAttribute';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstPackageAttributeType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstPaymentMode = {
  __typename?: 'PaginationListMstPaymentMode';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstPaymentModeType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstPaymentStatus = {
  __typename?: 'PaginationListMstPaymentStatus';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstPaymentStatusType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstPaymentType = {
  __typename?: 'PaginationListMstPaymentType';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstPaymentTypeType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstPeriodType = {
  __typename?: 'PaginationListMstPeriodType';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstPeriodTypeType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstProvince = {
  __typename?: 'PaginationListMstProvince';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstProvinceType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstQuantityType = {
  __typename?: 'PaginationListMstQuantityType';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstQuantityTypeType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstRating = {
  __typename?: 'PaginationListMstRating';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstRatingType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstSettingType = {
  __typename?: 'PaginationListMstSettingType';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstSettingTypeType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstSettings = {
  __typename?: 'PaginationListMstSettings';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstSettingsType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstSpecials = {
  __typename?: 'PaginationListMstSpecials';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstSpecialsType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstStatus = {
  __typename?: 'PaginationListMstStatus';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstStatusType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstSuburb = {
  __typename?: 'PaginationListMstSuburb';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstSuburbType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstUserRole = {
  __typename?: 'PaginationListMstUserRole';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstUserRoleType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstUserStatus = {
  __typename?: 'PaginationListMstUserStatus';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstUserStatusType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstUsers = {
  __typename?: 'PaginationListMstUsers';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstUsersType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstVersion = {
  __typename?: 'PaginationListMstVersion';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstVersionType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListMstVolumeType = {
  __typename?: 'PaginationListMstVolumeType';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<MstVolumeTypeType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListPost = {
  __typename?: 'PaginationListPost';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<PostType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListPostAttachment = {
  __typename?: 'PaginationListPostAttachment';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<PostAttachmentType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListPostReply = {
  __typename?: 'PaginationListPostReply';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<PostReplyType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListPostReplyAttachment = {
  __typename?: 'PaginationListPostReplyAttachment';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<PostReplyAttachmentType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListPrdBid = {
  __typename?: 'PaginationListPrdBid';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<PrdBidType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListPrdCategory = {
  __typename?: 'PaginationListPrdCategory';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<PrdCategoryType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListPrdHire = {
  __typename?: 'PaginationListPrdHire';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<PrdHireType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListPrdOrderDetails = {
  __typename?: 'PaginationListPrdOrderDetails';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<PrdOrderDetailsType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListPrdOrderPayment = {
  __typename?: 'PaginationListPrdOrderPayment';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<PrdOrderPaymentType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListPrdOrderStatus = {
  __typename?: 'PaginationListPrdOrderStatus';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<PrdOrderStatusType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListPrdOrderStatusType = {
  __typename?: 'PaginationListPrdOrderStatusType';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<PrdOrderStatusTypeType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListPrdOrders = {
  __typename?: 'PaginationListPrdOrders';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<PrdOrdersType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListPrdProducts = {
  __typename?: 'PaginationListPrdProducts';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<PrdProductsType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListPrdShoppingCart = {
  __typename?: 'PaginationListPrdShoppingCart';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<PrdShoppingCartType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListPrdSubCategory = {
  __typename?: 'PaginationListPrdSubCategory';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<PrdSubCategoryType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListSystemRole = {
  __typename?: 'PaginationListSystemRole';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<SystemRoleType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PaginationListSystemUser = {
  __typename?: 'PaginationListSystemUser';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Data */
  data?: Maybe<Array<Maybe<SystemUserType>>>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type PostAttachmentInputType = {
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  documentName?: InputMaybe<Scalars['String']>;
  documentType?: InputMaybe<Scalars['Int']>;
  filePath?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  post?: InputMaybe<PostInputType>;
  postAttachmentId: Scalars['Int'];
  postId?: InputMaybe<Scalars['Int']>;
  sortOrder?: InputMaybe<Scalars['Int']>;
  thumbNailImagePath?: InputMaybe<Scalars['String']>;
};

export type PostAttachmentType = {
  __typename?: 'PostAttachmentType';
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  documentName?: Maybe<Scalars['String']>;
  documentType?: Maybe<Scalars['Int']>;
  filePath?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  post?: Maybe<PostType>;
  postAttachmentId: Scalars['Int'];
  postId?: Maybe<Scalars['Int']>;
  sortOrder?: Maybe<Scalars['Int']>;
  thumbNailImagePath?: Maybe<Scalars['String']>;
};

export type PostDtoType = {
  __typename?: 'PostDtoType';
  categoryID?: Maybe<Scalars['Int']>;
  companyID?: Maybe<Scalars['Int']>;
  companyName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  descriptionSEO?: Maybe<Scalars['String']>;
  documentName?: Maybe<Scalars['String']>;
  domainID?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['DateTime']>;
  filePath?: Maybe<Scalars['String']>;
  googleSchema?: Maybe<Scalars['String']>;
  keywordsSEO?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  postID?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['DateTime']>;
  thumbNailImagePath?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  titleSEO?: Maybe<Scalars['String']>;
};

export type PostInputType = {
  companyID?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  descriptionSEO?: InputMaybe<Scalars['String']>;
  domainId?: InputMaybe<Scalars['Int']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  googleSchema?: InputMaybe<Scalars['String']>;
  keywordsSEO?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  postAttachment?: InputMaybe<Array<InputMaybe<PostAttachmentInputType>>>;
  postId: Scalars['Int'];
  postedDate?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  titleCategoryId?: InputMaybe<Scalars['Int']>;
  titleSEO?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type PostReplyAttachmentInputType = {
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  documentName?: InputMaybe<Scalars['String']>;
  documentType?: InputMaybe<Scalars['Int']>;
  filePath?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  postReply?: InputMaybe<Array<InputMaybe<PostReplyInputType>>>;
  postReplyAttachmentId: Scalars['Int'];
  postReplyId?: InputMaybe<Scalars['Int']>;
  sortOrder?: InputMaybe<Scalars['Int']>;
  thumbNailImagePath?: InputMaybe<Scalars['String']>;
};

export type PostReplyAttachmentType = {
  __typename?: 'PostReplyAttachmentType';
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  documentName?: Maybe<Scalars['String']>;
  documentType?: Maybe<Scalars['Int']>;
  filePath?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  postReply?: Maybe<Array<Maybe<PostReplyType>>>;
  postReplyAttachmentId: Scalars['Int'];
  postReplyId?: Maybe<Scalars['Int']>;
  sortOrder?: Maybe<Scalars['Int']>;
  thumbNailImagePath?: Maybe<Scalars['String']>;
};

export type PostReplyDtoType = {
  __typename?: 'PostReplyDtoType';
  contactNo?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  filePath?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  postID?: Maybe<Scalars['Int']>;
  postReplyID?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  titleCategoryID?: Maybe<Scalars['Int']>;
  titlePost?: Maybe<Scalars['String']>;
  userID?: Maybe<Scalars['Int']>;
  userName?: Maybe<Scalars['String']>;
};

export type PostReplyInputType = {
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  postId?: InputMaybe<Scalars['Int']>;
  postReplyAttachments?: InputMaybe<Array<InputMaybe<PostReplyAttachmentInputType>>>;
  postReplyId?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  titleCategoryId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type PostReplyType = {
  __typename?: 'PostReplyType';
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  postId?: Maybe<Scalars['Int']>;
  postReplyAttachments?: Maybe<Array<Maybe<PostReplyAttachmentType>>>;
  postReplyId: Scalars['Int'];
  status?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  titleCategoryId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type PostType = {
  __typename?: 'PostType';
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  domainId?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  postAttachment?: Maybe<Array<Maybe<PostAttachmentType>>>;
  postId: Scalars['Int'];
  postedDate?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  titleCategoryId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type PostVehicleInputType = {
  createdDate?: InputMaybe<Scalars['DateTime']>;
  dateOfExpiry?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  engineNumber?: InputMaybe<Scalars['String']>;
  make?: InputMaybe<Scalars['String']>;
  registrationNumber?: InputMaybe<Scalars['String']>;
  sessionID?: InputMaybe<Scalars['String']>;
  userID?: InputMaybe<Scalars['Int']>;
  vIN?: InputMaybe<Scalars['String']>;
  vehicleID?: InputMaybe<Scalars['Int']>;
};

export type PrdBidInputType = {
  bidAmount?: InputMaybe<Scalars['Decimal']>;
  bidApprovedMail?: InputMaybe<Scalars['Boolean']>;
  bidId: Scalars['Int'];
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isAccepted?: InputMaybe<Scalars['Boolean']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  mstProvinces?: InputMaybe<Array<InputMaybe<PrdProductsInputType>>>;
  productId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type PrdBidType = {
  __typename?: 'PrdBidType';
  bidAmount?: Maybe<Scalars['Decimal']>;
  bidApprovedMail?: Maybe<Scalars['Boolean']>;
  bidId: Scalars['Int'];
  createdDate?: Maybe<Scalars['DateTime']>;
  isAccepted?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  mstCountry?: Maybe<PrdProductsType>;
  productId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type PrdCategoryDtoType = {
  __typename?: 'PrdCategoryDtoType';
  activeText?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['Int']>;
  categoryName?: Maybe<Scalars['String']>;
  domainID?: Maybe<Scalars['Int']>;
  domainId?: Maybe<Scalars['Int']>;
  domainName?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type PrdCategoryInputType = {
  category?: InputMaybe<PrdCategoryInputType>;
  categoryId: Scalars['Int'];
  categoryName?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  domain?: InputMaybe<MstDomainInputType>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  prdProducts?: InputMaybe<Array<InputMaybe<PrdProductsInputType>>>;
  prdSubCategory?: InputMaybe<Array<InputMaybe<PrdSubCategoryInputType>>>;
};

export type PrdCategoryType = {
  __typename?: 'PrdCategoryType';
  category?: Maybe<PrdCategoryType>;
  categoryId: Scalars['Int'];
  categoryName?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  domain?: Maybe<MstDomainType>;
  isActive?: Maybe<Scalars['Boolean']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  prdProducts?: Maybe<Array<Maybe<PrdProductsType>>>;
  prdSubCategory?: Maybe<Array<Maybe<PrdSubCategoryType>>>;
};

export type PrdHireInputType = {
  businessConfirmedReturned?: InputMaybe<Scalars['Boolean']>;
  businessConfirmedReturnedDate?: InputMaybe<Scalars['DateTime']>;
  clientConfirmedReturned?: InputMaybe<Scalars['Int']>;
  clientConfirmedReturnedDate?: InputMaybe<Scalars['DateTime']>;
  fromDate?: InputMaybe<Scalars['DateTime']>;
  hireId: Scalars['Int'];
  isAccepted?: InputMaybe<Scalars['Boolean']>;
  mstProvinces?: InputMaybe<Array<InputMaybe<PrdProductsInputType>>>;
  productId?: InputMaybe<Scalars['Int']>;
  returned?: InputMaybe<Scalars['Boolean']>;
  returnedDate?: InputMaybe<Scalars['DateTime']>;
  toDate?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type PrdHireType = {
  __typename?: 'PrdHireType';
  businessConfirmedReturned?: Maybe<Scalars['Boolean']>;
  businessConfirmedReturnedDate?: Maybe<Scalars['DateTime']>;
  clientConfirmedReturned?: Maybe<Scalars['Boolean']>;
  clientConfirmedReturnedDate?: Maybe<Scalars['DateTime']>;
  fromDate?: Maybe<Scalars['DateTime']>;
  hireId: Scalars['Int'];
  isAccepted?: Maybe<Scalars['Boolean']>;
  mstCountry?: Maybe<PrdProductsType>;
  productId?: Maybe<Scalars['Int']>;
  returned?: Maybe<Scalars['Boolean']>;
  returnedDate?: Maybe<Scalars['DateTime']>;
  toDate?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type PrdOrderDetailsInputType = {
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  downloadCount?: InputMaybe<Scalars['Int']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  order?: InputMaybe<PrdOrdersInputType>;
  orderAmount?: InputMaybe<Scalars['Decimal']>;
  orderDetailsId: Scalars['Int'];
  orderId?: InputMaybe<Scalars['Int']>;
  orderQuantity?: InputMaybe<Scalars['Int']>;
  productId?: InputMaybe<Scalars['Int']>;
  productPrice?: InputMaybe<Scalars['Decimal']>;
};

export type PrdOrderDetailsType = {
  __typename?: 'PrdOrderDetailsType';
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  downloadCount?: Maybe<Scalars['Int']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  order?: Maybe<PrdOrdersType>;
  orderAmount?: Maybe<Scalars['Decimal']>;
  orderDetailsId: Scalars['Int'];
  orderId?: Maybe<Scalars['Int']>;
  orderQuantity?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Int']>;
  productPrice?: Maybe<Scalars['Decimal']>;
  products?: Maybe<PrdProductsType>;
};

export type PrdOrderPaymentInputType = {
  amount?: InputMaybe<Scalars['Decimal']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  orderId?: InputMaybe<Scalars['Int']>;
  orderPaymentId: Scalars['Int'];
  paymentDate?: InputMaybe<Scalars['DateTime']>;
  paymentMode?: InputMaybe<MstPaymentModeInputType>;
  paymentModeId?: InputMaybe<Scalars['Int']>;
  paymentRefNo?: InputMaybe<Scalars['String']>;
};

export type PrdOrderPaymentType = {
  __typename?: 'PrdOrderPaymentType';
  amount?: Maybe<Scalars['Decimal']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  orderId?: Maybe<Scalars['Int']>;
  orderPaymentId: Scalars['Int'];
  paymentDate?: Maybe<Scalars['DateTime']>;
  paymentMode?: Maybe<MstPaymentModeType>;
  paymentModeId?: Maybe<Scalars['Int']>;
  paymentRefNo?: Maybe<Scalars['String']>;
};

export type PrdOrderStatusInputType = {
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isCurrentStatus?: InputMaybe<Scalars['Boolean']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  order?: InputMaybe<PrdOrdersInputType>;
  orderId?: InputMaybe<Scalars['Int']>;
  orderStatusDate?: InputMaybe<Scalars['DateTime']>;
  orderStatusId: Scalars['Int'];
  orderStatusTypeId?: InputMaybe<Scalars['Int']>;
};

export type PrdOrderStatusType = {
  __typename?: 'PrdOrderStatusType';
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  isCurrentStatus?: Maybe<Scalars['Boolean']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  orderId?: Maybe<Scalars['Int']>;
  orderStatusDate?: Maybe<Scalars['DateTime']>;
  orderStatusId: Scalars['Int'];
  orderStatusTypeId?: Maybe<Scalars['Int']>;
  prdOrderStatusType?: Maybe<Array<Maybe<PrdOrderStatusTypeType>>>;
};

export type PrdOrderStatusTypeInputType = {
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  orderStatusTypeId: Scalars['Int'];
  statusName?: InputMaybe<Scalars['String']>;
  statusSequence?: InputMaybe<Scalars['Int']>;
};

export type PrdOrderStatusTypeType = {
  __typename?: 'PrdOrderStatusTypeType';
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  orderStatusTypeId: Scalars['Int'];
  statusName?: Maybe<Scalars['String']>;
  statusSequence?: Maybe<Scalars['Int']>;
};

export type PrdOrdersInputType = {
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  downloadCount?: InputMaybe<Scalars['Int']>;
  expiredDate?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  orderAmount?: InputMaybe<Scalars['Decimal']>;
  orderDate?: InputMaybe<Scalars['DateTime']>;
  orderId: Scalars['Int'];
  orderIdstring?: InputMaybe<Scalars['String']>;
  orderIpaddress?: InputMaybe<Scalars['String']>;
  orderSessionId?: InputMaybe<Scalars['String']>;
  orderStatusId?: InputMaybe<Scalars['Int']>;
  orderTotal?: InputMaybe<Scalars['Decimal']>;
  paymentDate?: InputMaybe<Scalars['DateTime']>;
  prdOrderDetails?: InputMaybe<Array<InputMaybe<PrdOrderDetailsInputType>>>;
  prdOrderStatus?: InputMaybe<Array<InputMaybe<PrdOrderStatusInputType>>>;
  productId?: InputMaybe<Scalars['Int']>;
  transactionId?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<MstUsersInputType>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type PrdOrdersProductsType = {
  __typename?: 'PrdOrdersProductsType';
  count?: Maybe<Scalars['Int']>;
  productID?: Maybe<Scalars['Int']>;
  productName?: Maybe<Scalars['String']>;
};

export type PrdOrdersStatsType = {
  __typename?: 'PrdOrdersStatsType';
  averageAmount?: Maybe<Scalars['Decimal']>;
  maxAmount?: Maybe<Scalars['Decimal']>;
  minAmount?: Maybe<Scalars['Decimal']>;
  month?: Maybe<Scalars['String']>;
  totalAmount?: Maybe<Scalars['Decimal']>;
  year?: Maybe<Scalars['String']>;
};

export type PrdOrdersSummaryType = {
  __typename?: 'PrdOrdersSummaryType';
  salesType?: Maybe<Scalars['String']>;
  totalAmount?: Maybe<Scalars['Decimal']>;
};

export type PrdOrdersType = {
  __typename?: 'PrdOrdersType';
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  downloadCount?: Maybe<Scalars['Int']>;
  expiredDate?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  orderAmount?: Maybe<Scalars['Decimal']>;
  orderDate?: Maybe<Scalars['DateTime']>;
  orderId: Scalars['Int'];
  orderIdstring?: Maybe<Scalars['String']>;
  orderIpaddress?: Maybe<Scalars['String']>;
  orderSessionId?: Maybe<Scalars['String']>;
  orderStatusId?: Maybe<Scalars['Int']>;
  orderTotal?: Maybe<Scalars['Decimal']>;
  paymentDate?: Maybe<Scalars['DateTime']>;
  prdOrderDetails?: Maybe<Array<Maybe<PrdOrderDetailsType>>>;
  prdOrderStatus?: Maybe<Array<Maybe<PrdOrderStatusType>>>;
  productId?: Maybe<Scalars['Int']>;
  transactionId?: Maybe<Scalars['String']>;
  user?: Maybe<MstUsersType>;
  userId?: Maybe<Scalars['Int']>;
};

export type PrdProductsInputType = {
  category?: InputMaybe<PrdCategoryInputType>;
  categoryId?: InputMaybe<Scalars['Int']>;
  companyID?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  documentName?: InputMaybe<Scalars['String']>;
  documentPath?: InputMaybe<Scalars['String']>;
  domain?: InputMaybe<MstDomainInputType>;
  domainCategory?: InputMaybe<Scalars['Int']>;
  domainId?: InputMaybe<Scalars['Int']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  googleSchema?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Decimal']>;
  inventory?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  length?: InputMaybe<Scalars['Decimal']>;
  mapProductDocument?: InputMaybe<Array<InputMaybe<MapProductDocumentInputType>>>;
  mapProductImages?: InputMaybe<Array<InputMaybe<MapProductImagesInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  prdBid?: InputMaybe<Array<InputMaybe<PrdBidInputType>>>;
  prdShoppingCart?: InputMaybe<Array<InputMaybe<PrdShoppingCartInputType>>>;
  productId: Scalars['Int'];
  productImage?: InputMaybe<Scalars['String']>;
  productName?: InputMaybe<Scalars['String']>;
  productNumber?: InputMaybe<Scalars['String']>;
  salesTypeId?: InputMaybe<Scalars['Int']>;
  scopeId?: InputMaybe<Scalars['Int']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  subCategoryId?: InputMaybe<Scalars['Int']>;
  typeId?: InputMaybe<Scalars['Int']>;
  unitCost?: InputMaybe<Scalars['Decimal']>;
  volume?: InputMaybe<Scalars['Decimal']>;
  weight?: InputMaybe<Scalars['Decimal']>;
  width?: InputMaybe<Scalars['Decimal']>;
};

export type PrdProductsType = {
  __typename?: 'PrdProductsType';
  category?: Maybe<PrdCategoryType>;
  categoryId?: Maybe<Scalars['Int']>;
  companyID?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  documentName?: Maybe<Scalars['String']>;
  documentPath?: Maybe<Scalars['String']>;
  domain?: Maybe<MstDomainType>;
  domainCategory?: Maybe<Scalars['Int']>;
  domainId?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['DateTime']>;
  googleSchema?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Decimal']>;
  inventory?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  length?: Maybe<Scalars['Decimal']>;
  mapProductDocument?: Maybe<Array<Maybe<MapProductDocumentType>>>;
  mapProductImages?: Maybe<Array<Maybe<MapProductImagesType>>>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  prdBid?: Maybe<Array<Maybe<PrdBidType>>>;
  prdShoppingCart?: Maybe<Array<Maybe<PrdShoppingCartType>>>;
  productId: Scalars['Int'];
  productImage?: Maybe<Scalars['String']>;
  productName?: Maybe<Scalars['String']>;
  productNumber?: Maybe<Scalars['String']>;
  salesTypeId?: Maybe<Scalars['Int']>;
  scopeId?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['DateTime']>;
  subCategoryId?: Maybe<Scalars['Int']>;
  typeId?: Maybe<Scalars['Int']>;
  unitCost?: Maybe<Scalars['Decimal']>;
  volume?: Maybe<Scalars['Decimal']>;
  weight?: Maybe<Scalars['Decimal']>;
  width?: Maybe<Scalars['Decimal']>;
};

export type PrdPurchaseShoppingCartDtoType = {
  __typename?: 'PrdPurchaseShoppingCartDtoType';
  paymentMethod?: Maybe<Scalars['String']>;
  paymentUrl?: Maybe<Scalars['String']>;
};

export type PrdSalesTypeType = {
  __typename?: 'PrdSalesTypeType';
  createdDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  salesTypeID: Scalars['Int'];
  salesTypeName?: Maybe<Scalars['String']>;
};

export type PrdScopeType = {
  __typename?: 'PrdScopeType';
  createdDate?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  scopeId: Scalars['Int'];
  scopeName?: Maybe<Scalars['String']>;
};

export type PrdShoppingCartDtoType = {
  __typename?: 'PrdShoppingCartDtoType';
  categoryID?: Maybe<Scalars['Int']>;
  categoryName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['Date']>;
  fromDate?: Maybe<Scalars['Date']>;
  isActive?: Maybe<Scalars['Boolean']>;
  prdProduct?: Maybe<PrdProductsType>;
  productID?: Maybe<Scalars['Int']>;
  productImage?: Maybe<Scalars['String']>;
  productName?: Maybe<Scalars['String']>;
  productNumber?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  recordID?: Maybe<Scalars['Int']>;
  totalPrice?: Maybe<Scalars['Decimal']>;
  unitCost?: Maybe<Scalars['Decimal']>;
};

export type PrdShoppingCartInputType = {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  fromDate?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  productId?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  recordId?: InputMaybe<Scalars['Int']>;
  sessionId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type PrdShoppingCartTotalDtoType = {
  __typename?: 'PrdShoppingCartTotalDtoType';
  amountExlVat?: Maybe<Scalars['Decimal']>;
  /** prdShoppingCartDto */
  prdShoppingCartDto?: Maybe<Array<Maybe<PrdShoppingCartDtoType>>>;
  recuringAmount?: Maybe<Scalars['Decimal']>;
  totalAmount?: Maybe<Scalars['Decimal']>;
  vatAmount?: Maybe<Scalars['Decimal']>;
};

export type PrdShoppingCartType = {
  __typename?: 'PrdShoppingCartType';
  dateCreated?: Maybe<Scalars['DateTime']>;
  productId?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  recordId: Scalars['Int'];
  sessionId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type PrdSubCategoryInputType = {
  active?: InputMaybe<Scalars['Boolean']>;
  category?: InputMaybe<PrdCategoryInputType>;
  categoryId?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  domainId?: InputMaybe<Scalars['Int']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  subCategoryId: Scalars['Int'];
  subCategoryName?: InputMaybe<Scalars['String']>;
};

export type PrdSubCategoryType = {
  __typename?: 'PrdSubCategoryType';
  active?: Maybe<Scalars['Boolean']>;
  category?: Maybe<PrdCategoryType>;
  categoryId?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  domainId?: Maybe<Scalars['Int']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  subCategoryId: Scalars['Int'];
  subCategoryName?: Maybe<Scalars['String']>;
};

export type PrdTypeType = {
  __typename?: 'PrdTypeType';
  createdDate?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  typeID: Scalars['Int'];
  typeName?: Maybe<Scalars['String']>;
};

export type ProductDtType = {
  __typename?: 'ProductDtType';
  activeText?: Maybe<Scalars['String']>;
  categoryID?: Maybe<Scalars['Int']>;
  categoryName?: Maybe<Scalars['String']>;
  clickCount?: Maybe<Scalars['Int']>;
  companyID?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  documentName?: Maybe<Scalars['String']>;
  documentPath?: Maybe<Scalars['String']>;
  domainCategory?: Maybe<Scalars['Int']>;
  domainCategoryName?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  googleSchema?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Decimal']>;
  inventory?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  latitude?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Decimal']>;
  longitude?: Maybe<Scalars['String']>;
  mapProductImages?: Maybe<Array<Maybe<MapProductImagesType>>>;
  originalUnitCost?: Maybe<Scalars['Decimal']>;
  prdBid?: Maybe<Array<Maybe<PrdBidType>>>;
  prdHire?: Maybe<Array<Maybe<PrdHireType>>>;
  productID?: Maybe<Scalars['Int']>;
  productImage?: Maybe<Scalars['String']>;
  productName?: Maybe<Scalars['String']>;
  productNumber?: Maybe<Scalars['String']>;
  ratingScore?: Maybe<Scalars['Decimal']>;
  salesTypeId?: Maybe<Scalars['Int']>;
  scopeID?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['DateTime']>;
  typeID?: Maybe<Scalars['Int']>;
  unitCost?: Maybe<Scalars['Decimal']>;
  viewCount?: Maybe<Scalars['Int']>;
  volume?: Maybe<Scalars['Decimal']>;
  weight?: Maybe<Scalars['Decimal']>;
  width?: Maybe<Scalars['Decimal']>;
};

export type Response = {
  __typename?: 'Response';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type Response1 = {
  __typename?: 'Response1';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message?: Maybe<Scalars['String']>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Scalars['String']>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type Response2 = {
  __typename?: 'Response2';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message?: Maybe<Scalars['String']>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<SessionType>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type Response3 = {
  __typename?: 'Response3';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message?: Maybe<Scalars['String']>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<MstUserDtoType>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type Response4 = {
  __typename?: 'Response4';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message?: Maybe<Scalars['String']>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<JwtTokenType>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type Response5 = {
  __typename?: 'Response5';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message?: Maybe<Scalars['String']>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<MstLoggedInUserMobileDtoType>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type Response6 = {
  __typename?: 'Response6';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message?: Maybe<Scalars['String']>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<MstRatingDtoType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type Response7 = {
  __typename?: 'Response7';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message?: Maybe<Scalars['String']>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<PrdPurchaseShoppingCartDtoType>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type Response8 = {
  __typename?: 'Response8';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message?: Maybe<Scalars['String']>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Scalars['Boolean']>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type Response9 = {
  __typename?: 'Response9';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message?: Maybe<Scalars['String']>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<MapProductImagesType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type Response10 = {
  __typename?: 'Response10';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message?: Maybe<Scalars['String']>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<MapProductImagesType>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type Response11 = {
  __typename?: 'Response11';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message?: Maybe<Scalars['String']>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<MapProductDocumentType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type Response12 = {
  __typename?: 'Response12';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message?: Maybe<Scalars['String']>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<MstLoggedInUserDtoType>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type Response13 = {
  __typename?: 'Response13';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message?: Maybe<Scalars['String']>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Scalars['Int']>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type Response14 = {
  __typename?: 'Response14';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message?: Maybe<Scalars['String']>;
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<PostDtoType>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponseMapCompanyAuditLog = {
  __typename?: 'ResponseMapCompanyAuditLog';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<MstCompanyAuditLogType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponseMapCompanyCategory = {
  __typename?: 'ResponseMapCompanyCategory';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<MapCompanyCategoryType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponseMapCompanyTask = {
  __typename?: 'ResponseMapCompanyTask';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<MapCompanyTaskType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponseMapProductDocument = {
  __typename?: 'ResponseMapProductDocument';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<MapProductDocumentType>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponseMapProductImages = {
  __typename?: 'ResponseMapProductImages';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<MapProductImagesType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponseMapUserActivity = {
  __typename?: 'ResponseMapUserActivity';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<MapUserActivityType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponseMstBusinessUsersDto = {
  __typename?: 'ResponseMstBusinessUsersDto';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<MstBusinessUserDtoType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponseMstCategory = {
  __typename?: 'ResponseMstCategory';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<MstCategoryType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponseMstCity = {
  __typename?: 'ResponseMstCity';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<MstCityType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponseMstCompany = {
  __typename?: 'ResponseMstCompany';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<MstCompanyType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponseMstCompanyDto = {
  __typename?: 'ResponseMstCompanyDto';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<MstCompanyDtoType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponseMstCustomerEnquiry = {
  __typename?: 'ResponseMstCustomerEnquiry';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<MstCustomerEnquiryType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponseMstEFlyersDto = {
  __typename?: 'ResponseMstEFlyersDto';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<MstEFlyersDtoType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponseMstItemRequestDto = {
  __typename?: 'ResponseMstItemRequestDto';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<MstItemRequestDtoType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponseMstItemRequestServiceDto = {
  __typename?: 'ResponseMstItemRequestServiceDto';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<MstItemRequestServiceDto>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponseMstLoggedInUserDto = {
  __typename?: 'ResponseMstLoggedInUserDto';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<MstLoggedInUserDtoType>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponseMstPackageDetailsDto = {
  __typename?: 'ResponseMstPackageDetailsDto';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<MstPackageDetailsDtoType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponseMstPackageListDto = {
  __typename?: 'ResponseMstPackageListDto';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<MstPackageListDtoType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponseMstProvince = {
  __typename?: 'ResponseMstProvince';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<MstProvinceType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponseMstSpecialsDto = {
  __typename?: 'ResponseMstSpecialsDto';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<MstSpecialsDtoType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponseMstSuburb = {
  __typename?: 'ResponseMstSuburb';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<MstSuburbType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponseMstUserAddress = {
  __typename?: 'ResponseMstUserAddress';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<MstUserAddressType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponseMstUserDto = {
  __typename?: 'ResponseMstUserDto';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<MstUserDtoType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponseMstUsers = {
  __typename?: 'ResponseMstUsers';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<MstUsersType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponseMstVehicle = {
  __typename?: 'ResponseMstVehicle';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<VehicleType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponsePostDto = {
  __typename?: 'ResponsePostDto';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<PostDtoType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponsePostReplyDto = {
  __typename?: 'ResponsePostReplyDto';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<PostReplyDtoType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponsePrdBid = {
  __typename?: 'ResponsePrdBid';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<PrdBidType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponsePrdCategoryDto = {
  __typename?: 'ResponsePrdCategoryDto';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<PrdCategoryDtoType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponsePrdOrders = {
  __typename?: 'ResponsePrdOrders';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<PrdOrdersType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponsePrdOrdersProducts = {
  __typename?: 'ResponsePrdOrdersProducts';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<PrdOrdersProductsType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponsePrdOrdersStats = {
  __typename?: 'ResponsePrdOrdersStats';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<PrdOrdersStatsType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponsePrdOrdersSummary = {
  __typename?: 'ResponsePrdOrdersSummary';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<PrdOrdersSummaryType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponsePrdProducts = {
  __typename?: 'ResponsePrdProducts';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<PrdProductsType>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponsePrdSalesType = {
  __typename?: 'ResponsePrdSalesType';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<PrdSalesTypeType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponsePrdScope = {
  __typename?: 'ResponsePrdScope';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<PrdScopeType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponsePrdShoppingCartTotalDto = {
  __typename?: 'ResponsePrdShoppingCartTotalDto';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<PrdShoppingCartTotalDtoType>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponsePrdType = {
  __typename?: 'ResponsePrdType';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<PrdTypeType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type ResponseProductDt = {
  __typename?: 'ResponseProductDt';
  /** Count */
  count: Scalars['Int'];
  /** CurrentPage */
  currentPage: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** NextPage */
  nextPage: Scalars['Int'];
  /** PrevPage */
  prevPage: Scalars['Int'];
  /** Result */
  result?: Maybe<Array<Maybe<ProductDtType>>>;
  /** Success */
  success: Scalars['Boolean'];
  /** TotalPages */
  totalPages: Scalars['Int'];
};

export type SessionType = {
  __typename?: 'SessionType';
  domain?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['DateTime']>;
  sessionContractLogin?: Maybe<Scalars['String']>;
  sessionKeyContractLogin?: Maybe<Scalars['String']>;
  sessionKeyLogin?: Maybe<Scalars['String']>;
  sessionLogin?: Maybe<Scalars['String']>;
};

export type SystemRoleInputType = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  systemRoleId: Scalars['Int'];
  systemRoleName?: InputMaybe<Scalars['String']>;
  systemUser?: InputMaybe<Array<InputMaybe<SystemUserInputType>>>;
};

export type SystemRoleType = {
  __typename?: 'SystemRoleType';
  active?: Maybe<Scalars['Boolean']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  systemRoleId: Scalars['Int'];
  systemRoleName?: Maybe<Scalars['String']>;
  systemUser?: Maybe<Array<Maybe<SystemUserType>>>;
};

export type SystemUserInputType = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']>;
  emailAddress?: InputMaybe<Scalars['String']>;
  failedLoginCount?: InputMaybe<Scalars['Int']>;
  genderId?: InputMaybe<Scalars['Int']>;
  lastLogin?: InputMaybe<Scalars['DateTime']>;
  mobileNo?: InputMaybe<Scalars['String']>;
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<SystemRoleInputType>;
  roleId?: InputMaybe<Scalars['Int']>;
  systemUserId: Scalars['Int'];
  systemUserName?: InputMaybe<Scalars['String']>;
};

export type SystemUserType = {
  __typename?: 'SystemUserType';
  active?: Maybe<Scalars['Boolean']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  emailAddress?: Maybe<Scalars['String']>;
  failedLoginCount?: Maybe<Scalars['Int']>;
  genderId?: Maybe<Scalars['Int']>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  mobileNo?: Maybe<Scalars['String']>;
  modifiedBy?: Maybe<Scalars['Int']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<SystemRoleType>;
  roleId?: Maybe<Scalars['Int']>;
  systemUserId: Scalars['Int'];
  systemUserName?: Maybe<Scalars['String']>;
};

export type VehicleType = {
  __typename?: 'VehicleType';
  createdDate?: Maybe<Scalars['DateTime']>;
  dateOfExpiry?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  engineNumber?: Maybe<Scalars['String']>;
  make?: Maybe<Scalars['String']>;
  registrationNumber?: Maybe<Scalars['String']>;
  sessionID?: Maybe<Scalars['String']>;
  userID?: Maybe<Scalars['Int']>;
  vIN?: Maybe<Scalars['String']>;
  vehicleID?: Maybe<Scalars['Int']>;
};

export type AddAddressVariables = Exact<{
  userId?: InputMaybe<Scalars['Int']>;
  curdate?: InputMaybe<Scalars['DateTime']>;
  streetAddress?: InputMaybe<Scalars['String']>;
  provinceID?: InputMaybe<Scalars['Int']>;
  cityID?: InputMaybe<Scalars['Int']>;
  suburbID?: InputMaybe<Scalars['Int']>;
  longitude?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
}>;


export type AddAddress = { __typename?: 'EzyFindMutation', postUserAddress?: { __typename?: 'ResponseMstUserAddress', count: number, currentPage: number, message: string, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: Array<{ __typename?: 'MstUserAddressType', userAddressID?: number | null, userID?: number | null, streetAddress?: string | null, countryID?: number | null, provinceID?: number | null, cityID?: number | null, suburbID?: number | null, zipCode?: string | null, longitude?: string | null, latitude?: string | null, createdDate?: any | null } | null> | null } | null };

export type PostMstCustomerEnquiryVariables = Exact<{
  title: Scalars['String'];
  companyId: Scalars['Int'];
  enquiryDescription: Scalars['String'];
}>;


export type PostMstCustomerEnquiry = { __typename?: 'EzyFindMutation', addCustomerEnquiry?: { __typename?: 'Response13', count: number, currentPage: number, message?: string | null, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: number | null } | null };

export type CreateFavouritesVariables = Exact<{
  productId?: InputMaybe<Scalars['Int']>;
  createDate?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['Int']>;
}>;


export type CreateFavourites = { __typename?: 'EzyFindMutation', createMstFavourites?: { __typename?: 'MstFavouritesType', mstFavouriteId: number } | null };

export type AddToCartVariables = Exact<{
  pid: Scalars['Int'];
  userid: Scalars['Int'];
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  fromDate?: InputMaybe<Scalars['DateTime']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  quantity?: InputMaybe<Scalars['Int']>;
}>;


export type AddToCart = { __typename?: 'EzyFindMutation', postPrdShoppingCartOptimized?: { __typename?: 'ResponsePrdShoppingCartTotalDto', count: number, currentPage: number, message: string, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: { __typename?: 'PrdShoppingCartTotalDtoType', totalAmount?: any | null, amountExlVat?: any | null, vatAmount?: any | null, recuringAmount?: any | null, prdShoppingCartDto?: Array<{ __typename?: 'PrdShoppingCartDtoType', categoryID?: number | null, categoryName?: string | null, description?: string | null, productID?: number | null, productImage?: string | null, productName?: string | null, productNumber?: string | null, quantity?: number | null, recordID?: number | null, totalPrice?: any | null, unitCost?: any | null } | null> | null } | null } | null };

export type MstVehicleVariables = Exact<{
  userId?: InputMaybe<Scalars['Int']>;
  registrationNumber?: InputMaybe<Scalars['String']>;
  desc?: InputMaybe<Scalars['String']>;
  engineNumber?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['DateTime']>;
  dateOfExpiry?: InputMaybe<Scalars['DateTime']>;
  vin?: InputMaybe<Scalars['String']>;
  make?: InputMaybe<Scalars['String']>;
}>;


export type MstVehicle = { __typename?: 'EzyFindMutation', postVehicle?: { __typename?: 'ResponseMstVehicle', count: number, currentPage: number, message: string, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: Array<{ __typename?: 'VehicleType', vehicleID?: number | null, make?: string | null, vIN?: string | null, engineNumber?: string | null, description?: string | null, registrationNumber?: string | null, sessionID?: string | null, userID?: number | null, createdDate?: any | null } | null> | null } | null };

export type BidOnProductVariables = Exact<{
  productId?: InputMaybe<Scalars['Int']>;
  amount?: InputMaybe<Scalars['Decimal']>;
  userId?: InputMaybe<Scalars['Int']>;
}>;


export type BidOnProduct = { __typename?: 'EzyFindMutation', createPrdBid?: { __typename?: 'PrdBidType', bidId: number } | null };

export type CreateContactRequestVariables = Exact<{
  fullname?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['DateTime']>;
}>;


export type CreateContactRequest = { __typename?: 'EzyFindMutation', createMstContactForm?: { __typename?: 'MstContactFormType', contactId: number } | null };

export type DeletePrdShoppingCartVariables = Exact<{
  recordId: Scalars['Int'];
}>;


export type DeletePrdShoppingCart = { __typename?: 'EzyFindMutation', deletePrdShoppingCart?: { __typename?: 'ResponsePrdShoppingCartTotalDto', count: number, currentPage: number, message: string, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: { __typename?: 'PrdShoppingCartTotalDtoType', totalAmount?: any | null, amountExlVat?: any | null, vatAmount?: any | null, recuringAmount?: any | null, prdShoppingCartDto?: Array<{ __typename?: 'PrdShoppingCartDtoType', categoryID?: number | null, categoryName?: string | null, description?: string | null, productID?: number | null, productImage?: string | null, productName?: string | null, productNumber?: string | null, quantity?: number | null, recordID?: number | null, totalPrice?: any | null, unitCost?: any | null } | null> | null } | null } | null };

export type GetAllCategroiesVariables = Exact<{ [key: string]: never; }>;


export type GetAllCategroies = { __typename?: 'MstCountryQuery', mstCategorys?: Array<{ __typename?: 'MstCategoryType', categoryIcon?: string | null, categoryId: number, categoryName?: string | null, categoryThumbNailIcon?: string | null, createdBy?: number | null, createdDate?: any | null, isActive?: boolean | null, isCategory?: boolean | null, isMainCategory?: boolean | null, isMenuAllowed?: boolean | null, modifiedBy?: number | null, modifiedDate?: any | null, parentCategoryId?: number | null, timeDelayException?: boolean | null } | null> | null };

export type GetAllVehicleDetailsVariables = Exact<{ [key: string]: never; }>;


export type GetAllVehicleDetails = { __typename?: 'MstCountryQuery', getVehicles?: { __typename?: 'ResponseMstVehicle', count: number, currentPage: number, message: string, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: Array<{ __typename?: 'VehicleType', vehicleID?: number | null, make?: string | null, vIN?: string | null, engineNumber?: string | null, description?: string | null, dateOfExpiry?: any | null, registrationNumber?: string | null, sessionID?: string | null, userID?: number | null, createdDate?: any | null } | null> | null } | null };

export type GetBusinessListVariables = Exact<{
  size: Scalars['Int'];
  categories?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
}>;


export type GetBusinessList = { __typename?: 'MstCountryQuery', getBusinessList?: { __typename?: 'ResponseMstCompanyDto', count: number, currentPage: number, message: string, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: Array<{ __typename?: 'MstCompanyDtoType', bEEScorePoint?: string | null, bEEStatus?: string | null, bEEStatusID?: number | null, companyId?: number | null, companyName?: string | null, companyPercentage?: any | null, companyStatus?: string | null, companyStatusID?: number | null, compCityID?: number | null, compCityName?: string | null, compCountryID?: number | null, compCountryName?: string | null, compDescription?: string | null, compEmailId?: string | null, compHelpDeskNumber?: string | null, compPhone?: string | null, compProvinceID?: number | null, compProvinceName?: string | null, compStreetAddress?: string | null, compSuburb?: string | null, compSuburbID?: number | null, compWebSite?: string | null, directorsCount?: number | null, franchiseId?: number | null, intCompanyMBUDeviceID?: string | null, intCompanyMBUDeviceType?: number | null, intCompanyMBUEmail?: string | null, intCompanyMBUName?: string | null, joinDate?: any | null, logoPath?: string | null, procurementRecognition?: string | null, serviceTax?: string | null, vATNumber?: string | null, zipCode?: string | null } | null> | null } | null };

export type GetCityVariables = Exact<{ [key: string]: never; }>;


export type GetCity = { __typename?: 'MstCountryQuery', getCity?: { __typename?: 'ResponseMstCity', count: number, currentPage: number, message: string, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: Array<{ __typename?: 'MstCityType', cityId: number, cityName?: string | null, createdBy?: number | null, createdDate?: any | null, isActive?: boolean | null, modifiedBy?: number | null, modifiedDate?: any | null, provinceId?: number | null } | null> | null } | null };

export type GetCustomerEnquiryListVariables = Exact<{
  size: Scalars['Int'];
}>;


export type GetCustomerEnquiryList = { __typename?: 'MstCountryQuery', getCustomerEnquiryList?: { __typename?: 'ResponseMstCustomerEnquiry', count: number, currentPage: number, message: string, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: Array<{ __typename?: 'MstCustomerEnquiryType', customerEnquiryId: number, companyId?: number | null, enquiryDate?: any | null, enquiryStatusId?: number | null, enquiryTitle?: string | null, enquiryDescription?: string | null, createdDate?: any | null, mstCompanyLimited?: { __typename?: 'MstCompanyLimitedType', companyName?: string | null, logoPath?: string | null } | null, mstCustomerEnquiryResponse?: Array<{ __typename?: 'MstCustomerEnquiryResponseType', comment?: string | null, responseDate?: any | null } | null> | null, mapCustomerEnquiryUpload?: Array<{ __typename?: 'MapCustomerEnquiryUploadType', customerEnquiryId?: number | null, uploadPath?: string | null, thumbNailPath?: string | null } | null> | null } | null> | null } | null };

export type GetFavoriteProductListVariables = Exact<{ [key: string]: never; }>;


export type GetFavoriteProductList = { __typename?: 'MstCountryQuery', getMstFavouritesProductList?: { __typename?: 'ResponseProductDt', count: number, currentPage: number, message: string, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: Array<{ __typename?: 'ProductDtType', activeText?: string | null, categoryID?: number | null, categoryName?: string | null, description?: string | null, documentName?: string | null, documentPath?: string | null, isActive?: boolean | null, ratingScore?: any | null, productID?: number | null, productImage?: string | null, productName?: string | null, productNumber?: string | null, salesTypeId?: number | null, typeID?: number | null, inventory?: number | null, clickCount?: number | null, viewCount?: number | null, unitCost?: any | null, length?: any | null, width?: any | null, height?: any | null, volume?: any | null, weight?: any | null, googleSchema?: string | null, domainCategory?: number | null, startDate?: any | null, endDate?: any | null, companyID?: number | null, mapProductImages?: Array<{ __typename?: 'MapProductImagesType', imageName?: string | null, imagePath?: string | null } | null> | null, prdBid?: Array<{ __typename?: 'PrdBidType', bidId: number, createdDate?: any | null, bidAmount?: any | null, userId?: number | null } | null> | null, prdHire?: Array<{ __typename?: 'PrdHireType', hireId: number, userId?: number | null, isAccepted?: boolean | null, fromDate?: any | null, toDate?: any | null, returned?: boolean | null } | null> | null } | null> | null } | null };

export type GetGuestLoginVariables = Exact<{ [key: string]: never; }>;


export type GetGuestLogin = { __typename?: 'MstCountryQuery', guestLogin?: { __typename?: 'Response4', count: number, currentPage: number, message?: string | null, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: { __typename?: 'JwtTokenType', validTo?: any | null, value?: string | null } | null } | null };

export type GetHierarchyResponseItemsVariables = Exact<{
  requestId: Scalars['ID'];
}>;


export type GetHierarchyResponseItems = { __typename?: 'MstCountryQuery', getHierarchyResponseItems?: Array<{ __typename?: 'MstItemResponseType', comment?: string | null, companyId?: number | null, createdBy?: number | null, createdDate?: any | null, isAccepted?: boolean | null, isActive?: boolean | null, isRejected?: boolean | null, itemRequestId?: number | null, itemResponseId: number, modifiedBy?: number | null, modifiedDate?: any | null, replyToId?: number | null, responseDate?: any | null, userId?: number | null, statusId?: number | null, company?: { __typename?: 'MstCompanyType', companyName?: string | null } | null, mapItemResponseUpload?: Array<{ __typename?: 'MapItemResponseUploadType', createdBy?: number | null, createdDate?: any | null, documentName?: string | null, irUploadId: number, isActive?: boolean | null, itemResponseId?: number | null, modifiedBy?: number | null, modifiedDate?: any | null, uploadPath?: string | null } | null> | null, replyTo?: { __typename?: 'MstItemResponseType', comment?: string | null, companyId?: number | null, createdBy?: number | null, createdDate?: any | null, isAccepted?: boolean | null, isActive?: boolean | null, isRejected?: boolean | null, itemRequestId?: number | null, itemResponseId: number, modifiedBy?: number | null, modifiedDate?: any | null, replyToId?: number | null, responseDate?: any | null, userId?: number | null, replyTo?: { __typename?: 'MstItemResponseType', comment?: string | null, companyId?: number | null, createdBy?: number | null, createdDate?: any | null, isAccepted?: boolean | null, isActive?: boolean | null, isRejected?: boolean | null, itemRequestId?: number | null, itemResponseId: number, modifiedBy?: number | null, modifiedDate?: any | null, replyToId?: number | null, responseDate?: any | null, userId?: number | null, replyTo?: { __typename?: 'MstItemResponseType', comment?: string | null, companyId?: number | null, createdBy?: number | null, createdDate?: any | null, isAccepted?: boolean | null, isActive?: boolean | null, isRejected?: boolean | null, itemRequestId?: number | null, itemResponseId: number, modifiedBy?: number | null, modifiedDate?: any | null, replyToId?: number | null, responseDate?: any | null, userId?: number | null } | null } | null, mapItemResponseUpload?: Array<{ __typename?: 'MapItemResponseUploadType', createdBy?: number | null, createdDate?: any | null, documentName?: string | null, irUploadId: number, isActive?: boolean | null, itemResponseId?: number | null, modifiedBy?: number | null, modifiedDate?: any | null, uploadPath?: string | null } | null> | null } | null } | null> | null };

export type GetIncomingRequestListVariables = Exact<{
  size: Scalars['Int'];
}>;


export type GetIncomingRequestList = { __typename?: 'MstCountryQuery', getIncomingItemRequestList?: { __typename?: 'ResponseMstItemRequestDto', count: number, currentPage: number, message: string, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: Array<{ __typename?: 'MstItemRequestDtoType', city?: string | null, cityID?: number | null, itemCategory?: string | null, itemCategoryID?: number | null, itemImagePath?: string | null, itemRequestDate?: any | null, itemRequestDescription?: string | null, itemRequestID?: number | null, itemRequestStatus?: string | null, itemRequestStatusID?: number | null, itemRequestTitle?: string | null, province?: string | null, provinceID?: number | null, selectedCompany?: string | null, suburb?: string | null, suburbID?: number | null, userID?: number | null, userName?: string | null, mapItemRequestUploadDto?: Array<{ __typename?: 'MapItemRequestUploadDtoType', createdBy?: number | null, createdDate?: any | null, irUploadId?: number | null, isActive?: boolean | null, itemRequestId?: number | null, modifiedBy?: number | null, modifiedDate?: any | null, thumbNailPath?: string | null, uploadPath?: string | null } | null> | null } | null> | null } | null };

export type GetIncomingTopLevelResponseItemsVariables = Exact<{
  requestId: Scalars['ID'];
}>;


export type GetIncomingTopLevelResponseItems = { __typename?: 'MstCountryQuery', getIncommingTopLevelResponseItems?: Array<{ __typename?: 'MstItemResponseType', comment?: string | null, companyId?: number | null, createdBy?: number | null, createdDate?: any | null, isAccepted?: boolean | null, isActive?: boolean | null, isRejected?: boolean | null, itemRequestId?: number | null, itemResponseId: number, modifiedBy?: number | null, modifiedDate?: any | null, replyToId?: number | null, responseDate?: any | null, userId?: number | null, company?: { __typename?: 'MstCompanyType', companyName?: string | null } | null, mapItemResponseUpload?: Array<{ __typename?: 'MapItemResponseUploadType', createdBy?: number | null, createdDate?: any | null, documentName?: string | null, irUploadId: number, isActive?: boolean | null, itemResponseId?: number | null, modifiedBy?: number | null, modifiedDate?: any | null, uploadPath?: string | null } | null> | null, replyTo?: { __typename?: 'MstItemResponseType', comment?: string | null, companyId?: number | null, createdBy?: number | null, createdDate?: any | null, isAccepted?: boolean | null, isActive?: boolean | null, isRejected?: boolean | null, itemRequestId?: number | null, itemResponseId: number, modifiedBy?: number | null, modifiedDate?: any | null, replyToId?: number | null, responseDate?: any | null, userId?: number | null, replyTo?: { __typename?: 'MstItemResponseType', comment?: string | null, companyId?: number | null, createdBy?: number | null, createdDate?: any | null, isAccepted?: boolean | null, isActive?: boolean | null, isRejected?: boolean | null, itemRequestId?: number | null, itemResponseId: number, modifiedBy?: number | null, modifiedDate?: any | null, replyToId?: number | null, responseDate?: any | null, userId?: number | null, replyTo?: { __typename?: 'MstItemResponseType', comment?: string | null, companyId?: number | null, createdBy?: number | null, createdDate?: any | null, isAccepted?: boolean | null, isActive?: boolean | null, isRejected?: boolean | null, itemRequestId?: number | null, itemResponseId: number, modifiedBy?: number | null, modifiedDate?: any | null, replyToId?: number | null, responseDate?: any | null, userId?: number | null } | null } | null, mapItemResponseUpload?: Array<{ __typename?: 'MapItemResponseUploadType', createdBy?: number | null, createdDate?: any | null, documentName?: string | null, irUploadId: number, isActive?: boolean | null, itemResponseId?: number | null, modifiedBy?: number | null, modifiedDate?: any | null, uploadPath?: string | null } | null> | null } | null } | null> | null };

export type GetItemRequestServiceListVariables = Exact<{
  domainCategoryIds?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['Int']>;
  subCategoryId?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
}>;


export type GetItemRequestServiceList = { __typename?: 'MstCountryQuery', getItemRequestServiceList?: { __typename?: 'ResponseMstItemRequestServiceDto', count: number, currentPage: number, message: string, nextPage: number, prevPage: number, result?: Array<{ __typename?: 'MstItemRequestServiceDto', itemRequestServiceTitle?: string | null, itemRequestServiceDescription?: string | null, itemRequestServiceStatusID?: number | null, uploadPath?: string | null, thumbNailPath?: string | null, categoryID?: number | null, subCategoryID?: number | null, domainCategoryID?: number | null, domainCategoryName?: { __typename?: 'MstCategoryType', categoryName?: string | null } | null, categoryName?: { __typename?: 'MstCategoryType', categoryName?: string | null } | null, subCategoryName?: { __typename?: 'MstCategoryType', categoryName?: string | null } | null } | null> | null } | null };

export type GetMagazinesListVariables = Exact<{
  companyId: Scalars['String'];
}>;


export type GetMagazinesList = { __typename?: 'MstCountryQuery', getMagazinesList?: { __typename?: 'ResponseMstEFlyersDto', result?: Array<{ __typename?: 'MstEFlyersDtoType', eflyerId?: number | null, magazineName?: string | null, eFlyerDescription?: string | null, categoryID?: number | null, categoryName?: string | null, startDate?: any | null, endDate?: any | null, statusId?: number | null, statusName?: string | null, companyId?: number | null, companyName?: string | null, companyDescription?: string | null, isMenu?: boolean | null, streetAddress?: string | null, countryID?: number | null, countryName?: string | null, provinceID?: number | null, provinceName?: string | null, cityID?: number | null, cityName?: string | null, suburbID?: number | null, suburb?: string | null, zipCode?: string | null, phone?: string | null, companyLocation?: string | null, mapEflyersUploadDtos?: Array<{ __typename?: 'MstEFlyersUploadDtoType', documentName?: string | null } | null> | null } | null> | null } | null };

export type GetMstCategoryByParentIdVariables = Exact<{
  id?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
}>;


export type GetMstCategoryByParentId = { __typename?: 'MstCountryQuery', getMstCategoryByParentId?: { __typename?: 'ResponseMstCategory', count: number, currentPage: number, message: string, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: Array<{ __typename?: 'MstCategoryType', categoryIcon?: string | null, categoryId: number, categoryName?: string | null, categoryThumbNailIcon?: string | null, createdBy?: number | null, createdDate?: any | null, isActive?: boolean | null, isCategory?: boolean | null, isMainCategory?: boolean | null, isMenuAllowed?: boolean | null, modifiedBy?: number | null, modifiedDate?: any | null, parentCategoryId?: number | null, timeDelayException?: boolean | null } | null> | null } | null };

export type GetMstCategoryMainVariables = Exact<{ [key: string]: never; }>;


export type GetMstCategoryMain = { __typename?: 'MstCountryQuery', getMstCategoryMain?: { __typename?: 'ResponseMstCategory', count: number, currentPage: number, message: string, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: Array<{ __typename?: 'MstCategoryType', categoryIcon?: string | null, categoryId: number, categoryName?: string | null, categoryThumbNailIcon?: string | null, createdBy?: number | null, createdDate?: any | null, isActive?: boolean | null, isCategory?: boolean | null, isMainCategory?: boolean | null, isMenuAllowed?: boolean | null, modifiedBy?: number | null, modifiedDate?: any | null, parentCategoryId?: number | null, timeDelayException?: boolean | null } | null> | null } | null };

export type GetMstPackageDetailListVariables = Exact<{
  id?: InputMaybe<Scalars['Int']>;
}>;


export type GetMstPackageDetailList = { __typename?: 'MstCountryQuery', getMstPackageDetailList?: { __typename?: 'ResponseMstPackageDetailsDto', count: number, currentPage: number, message: string, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: Array<{ __typename?: 'MstPackageDetailsDtoType', activeText?: string | null, actualValue?: string | null, amount?: any | null, attributeID?: number | null, attributeName?: string | null, isActive?: boolean | null, packageDetailsID?: number | null, packageID?: number | null, pD_ActiveText?: string | null, pD_isActive?: boolean | null, sortOrder?: number | null, value?: string | null } | null> | null } | null };

export type GetMstPackageListVariables = Exact<{
  packageIds?: InputMaybe<Scalars['String']>;
}>;


export type GetMstPackageList = { __typename?: 'MstCountryQuery', getMstPackageList?: { __typename?: 'ResponseMstPackageListDto', count: number, currentPage: number, message: string, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: Array<{ __typename?: 'MstPackageListDtoType', activeText?: string | null, amount?: any | null, isActive?: boolean | null, isRecommended?: boolean | null, packageID?: number | null, packageName?: string | null, recommendedText?: string | null, sortOrder?: number | null, threeMonths?: any | null, sixMonths?: any | null, twelveMonths?: any | null, threeMonthsVat?: any | null, sixMonthsVat?: any | null, twelveMonthsVat?: any | null, fiveDiscount?: any | null, tenDiscount?: any | null, fifteenDiscount?: any | null, fiveOFF?: any | null, tenOFF?: any | null, fifteenOFF?: any | null, zeroOFF?: any | null } | null> | null } | null };

export type GetRatingVariables = Exact<{
  id?: InputMaybe<Scalars['Int']>;
  key?: InputMaybe<Scalars['Int']>;
}>;


export type GetRating = { __typename?: 'MstCountryQuery', getMstRatingScoreList?: { __typename?: 'Response6', count: number, currentPage: number, message?: string | null, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: Array<{ __typename?: 'MstRatingDtoType', ratingScore?: number | null, ratingScoreName?: string | null, ratingScoreCount?: number | null, ratingScorePercent?: any | null, totalRatingCount?: number | null, totalRatingScore?: any | null } | null> | null } | null };

export type GetRequestListVariables = Exact<{
  size: Scalars['Int'];
}>;


export type GetRequestList = { __typename?: 'MstCountryQuery', getItemRequestList?: { __typename?: 'ResponseMstItemRequestDto', count: number, currentPage: number, message: string, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: Array<{ __typename?: 'MstItemRequestDtoType', city?: string | null, cityID?: number | null, itemCategory?: string | null, itemCategoryID?: number | null, itemImagePath?: string | null, itemRequestDate?: any | null, itemRequestDescription?: string | null, itemRequestID?: number | null, itemRequestStatus?: string | null, itemRequestStatusID?: number | null, itemRequestTitle?: string | null, province?: string | null, provinceID?: number | null, selectedCompany?: string | null, suburb?: string | null, suburbID?: number | null, userID?: number | null, userName?: string | null, mapItemRequestUploadDto?: Array<{ __typename?: 'MapItemRequestUploadDtoType', createdBy?: number | null, createdDate?: any | null, irUploadId?: number | null, isActive?: boolean | null, itemRequestId?: number | null, modifiedBy?: number | null, modifiedDate?: any | null, thumbNailPath?: string | null, uploadPath?: string | null } | null> | null } | null> | null } | null };

export type GetOrderStatusTypesVariables = Exact<{ [key: string]: never; }>;


export type GetOrderStatusTypes = { __typename?: 'MstCountryQuery', prdOrderStatusTypes?: { __typename?: 'PaginationListPrdOrderStatusType', data?: Array<{ __typename?: 'PrdOrderStatusTypeType', createdDate?: any | null, modifiedBy?: number | null, modifiedDate?: any | null, orderStatusTypeId: number, statusName?: string | null, statusSequence?: number | null } | null> | null } | null };

export type GetPrdProductListVariables = Exact<{
  productName?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  catgoryId?: InputMaybe<Scalars['Int']>;
  domainCategoryIds?: InputMaybe<Scalars['String']>;
  salesTypeId?: InputMaybe<Scalars['Int']>;
  companyId?: InputMaybe<Scalars['Int']>;
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
}>;


export type GetPrdProductList = { __typename?: 'MstCountryQuery', getPrdProductList?: { __typename?: 'ResponseProductDt', count: number, currentPage: number, message: string, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: Array<{ __typename?: 'ProductDtType', activeText?: string | null, categoryID?: number | null, categoryName?: string | null, description?: string | null, documentName?: string | null, documentPath?: string | null, isActive?: boolean | null, ratingScore?: any | null, productID?: number | null, productImage?: string | null, productName?: string | null, productNumber?: string | null, salesTypeId?: number | null, typeID?: number | null, inventory?: number | null, clickCount?: number | null, viewCount?: number | null, unitCost?: any | null, length?: any | null, width?: any | null, height?: any | null, volume?: any | null, weight?: any | null, googleSchema?: string | null, domainCategory?: number | null, startDate?: any | null, endDate?: any | null, companyID?: number | null, originalUnitCost?: any | null, mapProductImages?: Array<{ __typename?: 'MapProductImagesType', imageName?: string | null, imagePath?: string | null, thumbNailPath?: string | null } | null> | null, prdBid?: Array<{ __typename?: 'PrdBidType', bidId: number, createdDate?: any | null, bidAmount?: any | null, userId?: number | null } | null> | null, prdHire?: Array<{ __typename?: 'PrdHireType', hireId: number, userId?: number | null, isAccepted?: boolean | null, fromDate?: any | null, toDate?: any | null, returned?: boolean | null } | null> | null } | null> | null } | null };

export type GetProvinceVariables = Exact<{ [key: string]: never; }>;


export type GetProvince = { __typename?: 'MstCountryQuery', getProvince?: { __typename?: 'ResponseMstProvince', count: number, currentPage: number, message: string, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: Array<{ __typename?: 'MstProvinceType', countryId?: number | null, createdBy?: number | null, createdDate?: any | null, isActive?: boolean | null, modifiedBy?: number | null, modifiedDate?: any | null, provinceId?: string | null, provinceName?: string | null } | null> | null } | null };

export type GetRatingListVariables = Exact<{
  key?: InputMaybe<Scalars['Int']>;
  keyType?: InputMaybe<Scalars['Int']>;
  size?: Scalars['Int'];
}>;


export type GetRatingList = { __typename?: 'MstCountryQuery', getRatingList?: { __typename?: 'Response6', count: number, currentPage: number, message?: string | null, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: Array<{ __typename?: 'MstRatingDtoType', mST_RatingID?: number | null, title?: string | null, review?: string | null, name?: string | null, ratingScore?: number | null, dateofReview?: any | null } | null> | null } | null };

export type GetSsoLoginVariables = Exact<{
  jti?: InputMaybe<Scalars['String']>;
}>;


export type GetSsoLogin = { __typename?: 'MstCountryQuery', sSOLogin?: { __typename?: 'ResponseMstLoggedInUserDto', count: number, currentPage: number, message: string, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: { __typename?: 'MstLoggedInUserDtoType', firstName?: string | null, lastName?: string | null, vGender?: string | null, email?: string | null, streetAddress?: string | null, provinceID?: number | null, provinceName?: string | null, cityID?: number | null, cityName?: string | null, suburbID?: number | null, suburbName?: string | null, longitude?: string | null, latitude?: string | null, zipCode?: string | null, userProfileImage?: string | null, paymentUrl?: string | null, packageID?: number | null, token?: string | null, tokenExpires?: any | null } | null } | null };

export type GetShopingCartVariables = Exact<{ [key: string]: never; }>;


export type GetShopingCart = { __typename?: 'MstCountryQuery', getPrdShoppingCart?: { __typename?: 'ResponsePrdShoppingCartTotalDto', count: number, currentPage: number, message: string, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: { __typename?: 'PrdShoppingCartTotalDtoType', totalAmount?: any | null, amountExlVat?: any | null, vatAmount?: any | null, recuringAmount?: any | null, prdShoppingCartDto?: Array<{ __typename?: 'PrdShoppingCartDtoType', categoryID?: number | null, categoryName?: string | null, description?: string | null, productID?: number | null, productImage?: string | null, productName?: string | null, productNumber?: string | null, quantity?: number | null, recordID?: number | null, totalPrice?: any | null, unitCost?: any | null, prdProduct?: { __typename?: 'PrdProductsType', productId: number, productName?: string | null, typeId?: number | null, scopeId?: number | null, salesTypeId?: number | null } | null } | null> | null } | null } | null };

export type GetSpecialProductListVariables = Exact<{
  productName?: InputMaybe<Scalars['String']>;
  domainCategoryIds?: InputMaybe<Scalars['String']>;
  companyId?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
}>;


export type GetSpecialProductList = { __typename?: 'MstCountryQuery', getPrdProductList?: { __typename?: 'ResponseProductDt', count: number, currentPage: number, message: string, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: Array<{ __typename?: 'ProductDtType', activeText?: string | null, categoryID?: number | null, categoryName?: string | null, description?: string | null, documentName?: string | null, documentPath?: string | null, isActive?: boolean | null, ratingScore?: any | null, productID?: number | null, productImage?: string | null, productName?: string | null, productNumber?: string | null, salesTypeId?: number | null, typeID?: number | null, inventory?: number | null, clickCount?: number | null, viewCount?: number | null, unitCost?: any | null, length?: any | null, width?: any | null, height?: any | null, volume?: any | null, weight?: any | null, googleSchema?: string | null, domainCategory?: number | null, startDate?: any | null, endDate?: any | null, companyID?: number | null, originalUnitCost?: any | null, longitude?: string | null, latitude?: string | null, mapProductImages?: Array<{ __typename?: 'MapProductImagesType', imageName?: string | null, imagePath?: string | null, thumbNailPath?: string | null } | null> | null, prdBid?: Array<{ __typename?: 'PrdBidType', bidId: number, createdDate?: any | null, bidAmount?: any | null, userId?: number | null } | null> | null, prdHire?: Array<{ __typename?: 'PrdHireType', hireId: number, userId?: number | null, isAccepted?: boolean | null, fromDate?: any | null, toDate?: any | null, returned?: boolean | null } | null> | null } | null> | null } | null };

export type GetSuburbVariables = Exact<{ [key: string]: never; }>;


export type GetSuburb = { __typename?: 'MstCountryQuery', getSuburb?: { __typename?: 'ResponseMstSuburb', count: number, currentPage: number, message: string, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: Array<{ __typename?: 'MstSuburbType', cityId?: number | null, createdBy?: number | null, createdDate?: any | null, isActive?: boolean | null, modifiedBy?: number | null, modifiedDate?: any | null, suburbId: number, suburbName?: string | null } | null> | null } | null };

export type GetTopLevelResponseItemsVariables = Exact<{
  requestId: Scalars['ID'];
}>;


export type GetTopLevelResponseItems = { __typename?: 'MstCountryQuery', getTopLevelResponseItems?: Array<{ __typename?: 'MstItemResponseType', comment?: string | null, companyId?: number | null, createdBy?: number | null, createdDate?: any | null, isAccepted?: boolean | null, isActive?: boolean | null, isRejected?: boolean | null, itemRequestId?: number | null, itemResponseId: number, modifiedBy?: number | null, modifiedDate?: any | null, replyToId?: number | null, responseDate?: any | null, userId?: number | null, company?: { __typename?: 'MstCompanyType', companyName?: string | null } | null, mapItemResponseUpload?: Array<{ __typename?: 'MapItemResponseUploadType', createdBy?: number | null, createdDate?: any | null, documentName?: string | null, irUploadId: number, isActive?: boolean | null, itemResponseId?: number | null, modifiedBy?: number | null, modifiedDate?: any | null, uploadPath?: string | null } | null> | null, replyTo?: { __typename?: 'MstItemResponseType', comment?: string | null, companyId?: number | null, createdBy?: number | null, createdDate?: any | null, isAccepted?: boolean | null, isActive?: boolean | null, isRejected?: boolean | null, itemRequestId?: number | null, itemResponseId: number, modifiedBy?: number | null, modifiedDate?: any | null, replyToId?: number | null, responseDate?: any | null, userId?: number | null, replyTo?: { __typename?: 'MstItemResponseType', comment?: string | null, companyId?: number | null, createdBy?: number | null, createdDate?: any | null, isAccepted?: boolean | null, isActive?: boolean | null, isRejected?: boolean | null, itemRequestId?: number | null, itemResponseId: number, modifiedBy?: number | null, modifiedDate?: any | null, replyToId?: number | null, responseDate?: any | null, userId?: number | null, replyTo?: { __typename?: 'MstItemResponseType', comment?: string | null, companyId?: number | null, createdBy?: number | null, createdDate?: any | null, isAccepted?: boolean | null, isActive?: boolean | null, isRejected?: boolean | null, itemRequestId?: number | null, itemResponseId: number, modifiedBy?: number | null, modifiedDate?: any | null, replyToId?: number | null, responseDate?: any | null, userId?: number | null } | null } | null, mapItemResponseUpload?: Array<{ __typename?: 'MapItemResponseUploadType', createdBy?: number | null, createdDate?: any | null, documentName?: string | null, irUploadId: number, isActive?: boolean | null, itemResponseId?: number | null, modifiedBy?: number | null, modifiedDate?: any | null, uploadPath?: string | null } | null> | null } | null } | null> | null };

export type GetUserVariables = Exact<{ [key: string]: never; }>;


export type GetUser = { __typename?: 'MstCountryQuery', getUser?: { __typename?: 'Response3', count: number, currentPage: number, message?: string | null, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: { __typename?: 'MstUserDtoType', firstName?: string | null, lastName?: string | null, vGender?: string | null, email?: string | null, streetAddress?: string | null, provinceID?: number | null, provinceName?: string | null, cityID?: number | null, cityName?: string | null, suburbID?: number | null, suburbName?: string | null, longitude?: string | null, latitude?: string | null, zipCode?: string | null, userProfileImage?: string | null, paymentUrl?: string | null, packageID?: number | null, compPercent?: any | null, companyId?: number | null, companyStatus?: number | null, statusName?: string | null } | null } | null };

export type GetUserAddressVariables = Exact<{ [key: string]: never; }>;


export type GetUserAddress = { __typename?: 'MstCountryQuery', getUserAddress?: { __typename?: 'ResponseMstUserAddress', count: number, currentPage: number, message: string, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: Array<{ __typename?: 'MstUserAddressType', userAddressID?: number | null, userID?: number | null, streetAddress?: string | null, countryID?: number | null, provinceID?: number | null, province?: string | null, cityID?: number | null, city?: string | null, suburbID?: number | null, suburb?: string | null, zipCode?: string | null, longitude?: string | null, latitude?: string | null } | null> | null } | null };

export type GetPrdOdersByUserVariables = Exact<{
  orderStatusTypeId?: InputMaybe<Scalars['Int']>;
  fromDate?: InputMaybe<Scalars['DateTime']>;
  toDate?: InputMaybe<Scalars['DateTime']>;
  page: Scalars['ID'];
}>;


export type GetPrdOdersByUser = { __typename?: 'MstCountryQuery', prdOrdersByUser?: { __typename?: 'ResponsePrdOrders', count: number, currentPage: number, message: string, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: Array<{ __typename?: 'PrdOrdersType', createdBy?: number | null, createdDate?: any | null, downloadCount?: number | null, expiredDate?: any | null, modifiedBy?: number | null, modifiedDate?: any | null, orderAmount?: any | null, orderDate?: any | null, orderId: number, orderIdstring?: string | null, orderIpaddress?: string | null, orderSessionId?: string | null, orderStatusId?: number | null, orderTotal?: any | null, paymentDate?: any | null, productId?: number | null, transactionId?: string | null, userId?: number | null, prdOrderDetails?: Array<{ __typename?: 'PrdOrderDetailsType', createdBy?: number | null, createdDate?: any | null, downloadCount?: number | null, modifiedBy?: number | null, modifiedDate?: any | null, orderAmount?: any | null, orderDetailsId: number, orderId?: number | null, orderQuantity?: number | null, productId?: number | null, productPrice?: any | null, products?: { __typename?: 'PrdProductsType', productName?: string | null, mapProductDocument?: Array<{ __typename?: 'MapProductDocumentType', documentName?: string | null, documentPath?: string | null } | null> | null, mapProductImages?: Array<{ __typename?: 'MapProductImagesType', imagePath?: string | null, thumbNailPath?: string | null } | null> | null } | null } | null> | null, prdOrderStatus?: Array<{ __typename?: 'PrdOrderStatusType', createdBy?: number | null, createdDate?: any | null, modifiedBy?: number | null, modifiedDate?: any | null, orderStatusTypeId?: number | null, prdOrderStatusType?: Array<{ __typename?: 'PrdOrderStatusTypeType', orderStatusTypeId: number, statusName?: string | null, statusSequence?: number | null } | null> | null } | null> | null } | null> | null } | null };

export type GetUserTopHiresVariables = Exact<{
  size?: Scalars['Int'];
}>;


export type GetUserTopHires = { __typename?: 'MstCountryQuery', getUserTopHire?: { __typename?: 'ResponseMstBusinessUsersDto', count: number, currentPage: number, message: string, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: Array<{ __typename?: 'MstBusinessUserDtoType', userID?: number | null, firstName?: string | null, lastName?: string | null, email?: string | null, status?: string | null, userStatus?: number | null, userProfileImage?: string | null, userProfileThumbNailImage?: string | null, bidAmount?: any | null, productID?: number | null, productName?: string | null, orderID?: number | null } | null> | null } | null };

export type GetUserTopBidsVariables = Exact<{
  size?: Scalars['Int'];
}>;


export type GetUserTopBids = { __typename?: 'MstCountryQuery', getUserTopBids?: { __typename?: 'ResponseMstBusinessUsersDto', count: number, currentPage: number, message: string, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: Array<{ __typename?: 'MstBusinessUserDtoType', userID?: number | null, firstName?: string | null, lastName?: string | null, email?: string | null, status?: string | null, userStatus?: number | null, userProfileImage?: string | null, userProfileThumbNailImage?: string | null, bidAmount?: any | null, productID?: number | null, productName?: string | null, orderID?: number | null } | null> | null } | null };

export type PostMstRatingVariables = Exact<{
  reviewData: Scalars['String'];
  companyId: Scalars['Int'];
  specialId: Scalars['Int'];
  eflyerId: Scalars['Int'];
  ratingScore: Scalars['Int'];
  userId: Scalars['Int'];
}>;


export type PostMstRating = { __typename?: 'EzyFindMutation', postMstRating?: { __typename?: 'Response13', count: number, currentPage: number, message?: string | null, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: number | null } | null };

export type MstVersionsVariables = Exact<{ [key: string]: never; }>;


export type MstVersions = { __typename?: 'MstCountryQuery', mstVersions?: { __typename?: 'PaginationListMstVersion', count: number, currentPage: number, nextPage: number, prevPage: number, data?: Array<{ __typename?: 'MstVersionType', versionId: number, versionNumber?: any | null, versionType?: string | null } | null> | null } | null };

export type PostMstItemRequestVariables = Exact<{ [key: string]: never; }>;

export type PostMstItemRequest = { __typename?: 'EzyFindMutation', postMstItemRequest?: { __typename?: 'Response13', count: number, currentPage: number, message?: string | null, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: number | null } | null };

export type PostRequestItemResponseVariables = Exact<{
  userId?: InputMaybe<Scalars['Int']>;
  itemRequestId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  filePath?: InputMaybe<Scalars['String']>;
  fileName?: InputMaybe<Scalars['String']>;
  companyId?: InputMaybe<Scalars['Int']>;
  replyToId?: InputMaybe<Scalars['Int']>;
}>;


export type PostRequestItemResponse = { __typename?: 'EzyFindMutation', postMstItemResponse?: { __typename?: 'MstItemResponseType', itemResponseId: number, comment?: string | null, companyId?: number | null, createdBy?: number | null, createdDate?: any | null, isAccepted?: boolean | null, isActive?: boolean | null, isRejected?: boolean | null, itemRequestId?: number | null, modifiedBy?: number | null, modifiedDate?: any | null, replyToId?: number | null, responseDate?: any | null, userId?: number | null, mapItemResponseUpload?: Array<{ __typename?: 'MapItemResponseUploadType', irUploadId: number, itemResponseId?: number | null, uploadPath?: string | null } | null> | null } | null };

export type PurchaseShoppingCartVariables = Exact<{ [key: string]: never; }>;


export type PurchaseShoppingCart = { __typename?: 'MstCountryQuery', purchaseShoppingCartAsync?: { __typename?: 'Response7', count: number, currentPage: number, message?: string | null, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: { __typename?: 'PrdPurchaseShoppingCartDtoType', paymentUrl?: string | null, paymentMethod?: string | null } | null } | null };

export type MstItemRequestVariables = Exact<{
  userId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  desc?: InputMaybe<Scalars['String']>;
  catId?: InputMaybe<Scalars['Int']>;
  date?: InputMaybe<Scalars['DateTime']>;
  suburbId?: InputMaybe<Scalars['Int']>;
  files?: InputMaybe<Array<Scalars['Upload']> | Scalars['Upload']>;
}>;


export type MstItemRequest = { __typename?: 'EzyFindMutation', postMstItemRequest?: { __typename?: 'Response13', count: number, currentPage: number, message?: string | null, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: number | null } | null };

export type SocialAuthVariables = Exact<{
  jti?: InputMaybe<Scalars['String']>;
}>;


export type SocialAuth = { __typename?: 'MstCountryQuery', oAuth?: { __typename?: 'ResponseMstLoggedInUserDto', count: number, currentPage: number, message: string, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: { __typename?: 'MstLoggedInUserDtoType', firstName?: string | null, lastName?: string | null, paymentUrl?: string | null, token?: string | null, tokenExpires?: any | null } | null } | null };

export type UpdateCartItemVariables = Exact<{
  pid: Scalars['Int'];
  quantity: Scalars['Int'];
  userid: Scalars['Int'];
  fromDate?: InputMaybe<Scalars['DateTime']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  dateCreated?: InputMaybe<Scalars['DateTime']>;
}>;


export type UpdateCartItem = { __typename?: 'EzyFindMutation', postPrdShoppingCartOptimized?: { __typename?: 'ResponsePrdShoppingCartTotalDto', count: number, currentPage: number, message: string, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: { __typename?: 'PrdShoppingCartTotalDtoType', totalAmount?: any | null, amountExlVat?: any | null, vatAmount?: any | null, recuringAmount?: any | null, prdShoppingCartDto?: Array<{ __typename?: 'PrdShoppingCartDtoType', categoryID?: number | null, categoryName?: string | null, description?: string | null, productID?: number | null, productImage?: string | null, productName?: string | null, productNumber?: string | null, quantity?: number | null, recordID?: number | null, totalPrice?: any | null, unitCost?: any | null } | null> | null } | null } | null };

export type UpdateRequestItemResponseVariables = Exact<{
  comment: Scalars['String'];
  companyId?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<Scalars['Int']>;
  createdDate?: InputMaybe<Scalars['DateTime']>;
  isAccepted?: InputMaybe<Scalars['Boolean']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isRejected?: InputMaybe<Scalars['Boolean']>;
  itemRequestId?: InputMaybe<Scalars['Int']>;
  itemResponseId: Scalars['Int'];
  modifiedBy?: InputMaybe<Scalars['Int']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']>;
  replyToId?: InputMaybe<Scalars['Int']>;
  responseDate?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
}>;


export type UpdateRequestItemResponse = { __typename?: 'EzyFindMutation', updateMstItemResponse?: { __typename?: 'MstItemResponseType', itemResponseId: number, itemRequestId?: number | null } | null };

export type UpdateMstUserLocationVariables = Exact<{
  userId: Scalars['Int'];
  longitude?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['String']>;
}>;


export type UpdateMstUserLocation = { __typename?: 'EzyFindMutation', updateMstUserLocation?: { __typename?: 'Response3', count: number, currentPage: number, message?: string | null, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: { __typename?: 'MstUserDtoType', firstName?: string | null, lastName?: string | null, email?: string | null, streetAddress?: string | null, longitude?: string | null, latitude?: string | null, zipCode?: string | null, userProfileImage?: string | null } | null } | null };

export type UpdateMstUserVariables = Exact<{
  userId: Scalars['Int'];
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  streetAddress?: InputMaybe<Scalars['String']>;
  suburbId?: InputMaybe<Scalars['Int']>;
  cityId?: InputMaybe<Scalars['Int']>;
  provinceId?: InputMaybe<Scalars['Int']>;
  countryId?: InputMaybe<Scalars['Int']>;
}>;


export type UpdateMstUser = { __typename?: 'EzyFindMutation', updateMstUsers?: { __typename?: 'ResponseMstUsers', count: number, currentPage: number, message: string, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: Array<{ __typename?: 'MstUsersType', firstName?: string | null, lastName?: string | null, email?: string | null, streetAddress?: string | null, provinceId?: number | null, cityId?: number | null, suburbId?: number | null, longitude?: string | null, latitude?: string | null, zipCode?: string | null, userProfileImage?: string | null } | null> | null } | null };


export const AddAddressDocument = /*#__PURE__*/ `
    mutation AddAddress($userId: Int, $curdate: DateTime, $streetAddress: String, $provinceID: Int, $cityID: Int, $suburbID: Int, $longitude: String, $latitude: String, $zipCode: String) {
  postUserAddress(
    mstUserAddress: {userAddressID: 0, userID: $userId, streetAddress: $streetAddress, countryID: 1, provinceID: $provinceID, cityID: $cityID, suburbID: $suburbID, zipCode: $zipCode, longitude: $longitude, latitude: $latitude, createdDate: $curdate}
  ) {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result {
      userAddressID
      userID
      streetAddress
      countryID
      provinceID
      cityID
      suburbID
      zipCode
      longitude
      latitude
      createdDate
    }
  }
}
    `;
export const useAddAddress = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<AddAddress, TError, AddAddressVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<AddAddress, TError, AddAddressVariables, TContext>(
      ['AddAddress'],
      (variables?: AddAddressVariables) => fetcher<AddAddress, AddAddressVariables>(client, AddAddressDocument, variables, headers)(),
      options
    );
export const PostMstCustomerEnquiryDocument = /*#__PURE__*/ `
    mutation PostMstCustomerEnquiry($title: String!, $companyId: Int!, $enquiryDescription: String!) {
  addCustomerEnquiry(
    customerEnquiry: {companyId: $companyId, enquiryTitle: $title, enquiryDescription: $enquiryDescription}
  ) {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result
  }
}
    `;
export const usePostMstCustomerEnquiry = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<PostMstCustomerEnquiry, TError, PostMstCustomerEnquiryVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<PostMstCustomerEnquiry, TError, PostMstCustomerEnquiryVariables, TContext>(
      ['PostMstCustomerEnquiry'],
      (variables?: PostMstCustomerEnquiryVariables) => fetcher<PostMstCustomerEnquiry, PostMstCustomerEnquiryVariables>(client, PostMstCustomerEnquiryDocument, variables, headers)(),
      options
    );
export const CreateFavouritesDocument = /*#__PURE__*/ `
    mutation CreateFavourites($productId: Int, $createDate: DateTime, $userId: Int) {
  createMstFavourites(
    mstFavourites: {companyId: null, createdBy: 0, createdDate: $createDate, eflyerId: null, modifiedBy: null, modifiedDate: null, mstFavouriteId: 0, productId: $productId, specialId: null, userId: $userId}
  ) {
    mstFavouriteId
  }
}
    `;
export const useCreateFavourites = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateFavourites, TError, CreateFavouritesVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateFavourites, TError, CreateFavouritesVariables, TContext>(
      ['CreateFavourites'],
      (variables?: CreateFavouritesVariables) => fetcher<CreateFavourites, CreateFavouritesVariables>(client, CreateFavouritesDocument, variables, headers)(),
      options
    );
export const AddToCartDocument = /*#__PURE__*/ `
    mutation AddToCart($pid: Int!, $userid: Int!, $dateCreated: DateTime, $fromDate: DateTime = null, $endDate: DateTime = null, $quantity: Int = 1) {
  postPrdShoppingCartOptimized(
    prdShoppingCart: {productId: $pid, dateCreated: $dateCreated, quantity: $quantity, fromDate: $fromDate, endDate: $endDate, userId: $userid}
  ) {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result {
      prdShoppingCartDto {
        categoryID
        categoryName
        description
        productID
        productImage
        productName
        productNumber
        quantity
        recordID
        totalPrice
        unitCost
      }
      totalAmount
      amountExlVat
      vatAmount
      recuringAmount
    }
  }
}
    `;
export const useAddToCart = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<AddToCart, TError, AddToCartVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<AddToCart, TError, AddToCartVariables, TContext>(
      ['AddToCart'],
      (variables?: AddToCartVariables) => fetcher<AddToCart, AddToCartVariables>(client, AddToCartDocument, variables, headers)(),
      options
    );
export const MstVehicleDocument = /*#__PURE__*/ `
    mutation MstVehicle($userId: Int, $registrationNumber: String, $desc: String, $engineNumber: String, $date: DateTime, $dateOfExpiry: DateTime, $vin: String, $make: String) {
  postVehicle(
    mstVehicle: {vehicleID: 0, userID: $userId, engineNumber: $engineNumber, registrationNumber: $registrationNumber, make: $make, vIN: $vin, description: $desc, dateOfExpiry: $dateOfExpiry, createdDate: $date, sessionID: "d5c969fe-8f5d-4075-9620-7cfd414bd7b6"}
  ) {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result {
      vehicleID
      make
      vIN
      engineNumber
      description
      registrationNumber
      sessionID
      userID
      createdDate
    }
  }
}
    `;
export const useMstVehicle = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<MstVehicle, TError, MstVehicleVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<MstVehicle, TError, MstVehicleVariables, TContext>(
      ['MstVehicle'],
      (variables?: MstVehicleVariables) => fetcher<MstVehicle, MstVehicleVariables>(client, MstVehicleDocument, variables, headers)(),
      options
    );
export const BidOnProductDocument = /*#__PURE__*/ `
    mutation BidOnProduct($productId: Int, $amount: Decimal, $userId: Int) {
  createPrdBid(
    prdBid: {bidAmount: $amount, bidApprovedMail: false, bidId: 0, createdDate: null, isAccepted: true, isActive: true, modifiedBy: 0, modifiedDate: null, productId: $productId, userId: $userId}
  ) {
    bidId
  }
}
    `;
export const useBidOnProduct = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<BidOnProduct, TError, BidOnProductVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<BidOnProduct, TError, BidOnProductVariables, TContext>(
      ['BidOnProduct'],
      (variables?: BidOnProductVariables) => fetcher<BidOnProduct, BidOnProductVariables>(client, BidOnProductDocument, variables, headers)(),
      options
    );
export const CreateContactRequestDocument = /*#__PURE__*/ `
    mutation createContactRequest($fullname: String, $email: String, $phone: String, $subject: String, $message: String, $date: DateTime) {
  createMstContactForm(
    mstContactForm: {contactId: 0, contactNo: $phone, createdDate: $date, emailAddress: $email, fullName: $fullname, message: $message, subject: $subject}
  ) {
    contactId
  }
}
    `;
export const useCreateContactRequest = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateContactRequest, TError, CreateContactRequestVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateContactRequest, TError, CreateContactRequestVariables, TContext>(
      ['createContactRequest'],
      (variables?: CreateContactRequestVariables) => fetcher<CreateContactRequest, CreateContactRequestVariables>(client, CreateContactRequestDocument, variables, headers)(),
      options
    );
export const DeletePrdShoppingCartDocument = /*#__PURE__*/ `
    mutation deletePrdShoppingCart($recordId: Int!) {
  deletePrdShoppingCart(prdShoppingCart: {recordId: $recordId}) {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result {
      prdShoppingCartDto {
        categoryID
        categoryName
        description
        productID
        productImage
        productName
        productNumber
        quantity
        recordID
        totalPrice
        unitCost
      }
      totalAmount
      amountExlVat
      vatAmount
      recuringAmount
    }
  }
}
    `;
export const useDeletePrdShoppingCart = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeletePrdShoppingCart, TError, DeletePrdShoppingCartVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeletePrdShoppingCart, TError, DeletePrdShoppingCartVariables, TContext>(
      ['deletePrdShoppingCart'],
      (variables?: DeletePrdShoppingCartVariables) => fetcher<DeletePrdShoppingCart, DeletePrdShoppingCartVariables>(client, DeletePrdShoppingCartDocument, variables, headers)(),
      options
    );
export const GetAllCategroiesDocument = /*#__PURE__*/ `
    query getAllCategroies {
  mstCategorys {
    categoryIcon
    categoryId
    categoryName
    categoryThumbNailIcon
    createdBy
    createdDate
    isActive
    isCategory
    isMainCategory
    isMenuAllowed
    modifiedBy
    modifiedDate
    parentCategoryId
    timeDelayException
  }
}
    `;
export const useGetAllCategroies = <
      TData = GetAllCategroies,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetAllCategroiesVariables,
      options?: UseQueryOptions<GetAllCategroies, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllCategroies, TError, TData>(
      variables === undefined ? ['getAllCategroies'] : ['getAllCategroies', variables],
      fetcher<GetAllCategroies, GetAllCategroiesVariables>(client, GetAllCategroiesDocument, variables, headers),
      options
    );
export const useInfiniteGetAllCategroies = <
      TData = GetAllCategroies,
      TError = unknown
    >(
      pageParamKey: keyof GetAllCategroiesVariables,
      client: GraphQLClient,
      variables?: GetAllCategroiesVariables,
      options?: UseInfiniteQueryOptions<GetAllCategroies, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetAllCategroies, TError, TData>(
      variables === undefined ? ['getAllCategroies.infinite'] : ['getAllCategroies.infinite', variables],
      (metaData) => fetcher<GetAllCategroies, GetAllCategroiesVariables>(client, GetAllCategroiesDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetAllVehicleDetailsDocument = /*#__PURE__*/ `
    query getAllVehicleDetails {
  getVehicles {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result {
      vehicleID
      make
      vIN
      engineNumber
      description
      dateOfExpiry
      registrationNumber
      sessionID
      userID
      createdDate
    }
  }
}
    `;
export const useGetAllVehicleDetails = <
      TData = GetAllVehicleDetails,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetAllVehicleDetailsVariables,
      options?: UseQueryOptions<GetAllVehicleDetails, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllVehicleDetails, TError, TData>(
      variables === undefined ? ['getAllVehicleDetails'] : ['getAllVehicleDetails', variables],
      fetcher<GetAllVehicleDetails, GetAllVehicleDetailsVariables>(client, GetAllVehicleDetailsDocument, variables, headers),
      options
    );
export const useInfiniteGetAllVehicleDetails = <
      TData = GetAllVehicleDetails,
      TError = unknown
    >(
      pageParamKey: keyof GetAllVehicleDetailsVariables,
      client: GraphQLClient,
      variables?: GetAllVehicleDetailsVariables,
      options?: UseInfiniteQueryOptions<GetAllVehicleDetails, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetAllVehicleDetails, TError, TData>(
      variables === undefined ? ['getAllVehicleDetails.infinite'] : ['getAllVehicleDetails.infinite', variables],
      (metaData) => fetcher<GetAllVehicleDetails, GetAllVehicleDetailsVariables>(client, GetAllVehicleDetailsDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetBusinessListDocument = /*#__PURE__*/ `
    query GetBusinessList($size: Int!, $categories: String = null, $title: String = null) {
  getBusinessList(
    companyId: null
    companyName: $title
    franchiseeId: null
    statusIds: "1"
    categoryIds: $categories
    provinceIds: ""
    cityIds: ""
    suburbIds: ""
    page: 1
    size: $size
  ) {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result {
      bEEScorePoint
      bEEStatus
      bEEStatusID
      companyId
      companyName
      companyPercentage
      companyStatus
      companyStatusID
      compCityID
      compCityName
      compCountryID
      compCountryName
      compDescription
      compEmailId
      compHelpDeskNumber
      compPhone
      compProvinceID
      compProvinceName
      compStreetAddress
      compSuburb
      compSuburbID
      compWebSite
      directorsCount
      franchiseId
      intCompanyMBUDeviceID
      intCompanyMBUDeviceType
      intCompanyMBUEmail
      intCompanyMBUName
      joinDate
      logoPath
      procurementRecognition
      serviceTax
      vATNumber
      zipCode
    }
  }
}
    `;
export const useGetBusinessList = <
      TData = GetBusinessList,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetBusinessListVariables,
      options?: UseQueryOptions<GetBusinessList, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetBusinessList, TError, TData>(
      ['GetBusinessList', variables],
      fetcher<GetBusinessList, GetBusinessListVariables>(client, GetBusinessListDocument, variables, headers),
      options
    );
export const useInfiniteGetBusinessList = <
      TData = GetBusinessList,
      TError = unknown
    >(
      pageParamKey: keyof GetBusinessListVariables,
      client: GraphQLClient,
      variables: GetBusinessListVariables,
      options?: UseInfiniteQueryOptions<GetBusinessList, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetBusinessList, TError, TData>(
      ['GetBusinessList.infinite', variables],
      (metaData) => fetcher<GetBusinessList, GetBusinessListVariables>(client, GetBusinessListDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetCityDocument = /*#__PURE__*/ `
    query getCity {
  getCity {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result {
      cityId
      cityName
      createdBy
      createdDate
      isActive
      modifiedBy
      modifiedDate
      provinceId
    }
  }
}
    `;
export const useGetCity = <
      TData = GetCity,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetCityVariables,
      options?: UseQueryOptions<GetCity, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetCity, TError, TData>(
      variables === undefined ? ['getCity'] : ['getCity', variables],
      fetcher<GetCity, GetCityVariables>(client, GetCityDocument, variables, headers),
      options
    );
export const useInfiniteGetCity = <
      TData = GetCity,
      TError = unknown
    >(
      pageParamKey: keyof GetCityVariables,
      client: GraphQLClient,
      variables?: GetCityVariables,
      options?: UseInfiniteQueryOptions<GetCity, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetCity, TError, TData>(
      variables === undefined ? ['getCity.infinite'] : ['getCity.infinite', variables],
      (metaData) => fetcher<GetCity, GetCityVariables>(client, GetCityDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetCustomerEnquiryListDocument = /*#__PURE__*/ `
    query GetCustomerEnquiryList($size: Int!) {
  getCustomerEnquiryList(page: 1, size: $size) {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result {
      customerEnquiryId
      companyId
      enquiryDate
      enquiryStatusId
      enquiryTitle
      enquiryDescription
      createdDate
      mstCompanyLimited {
        companyName
        logoPath
      }
      mstCustomerEnquiryResponse {
        comment
        responseDate
      }
      mapCustomerEnquiryUpload {
        customerEnquiryId
        uploadPath
        thumbNailPath
      }
    }
  }
}
    `;
export const useGetCustomerEnquiryList = <
      TData = GetCustomerEnquiryList,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetCustomerEnquiryListVariables,
      options?: UseQueryOptions<GetCustomerEnquiryList, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetCustomerEnquiryList, TError, TData>(
      ['GetCustomerEnquiryList', variables],
      fetcher<GetCustomerEnquiryList, GetCustomerEnquiryListVariables>(client, GetCustomerEnquiryListDocument, variables, headers),
      options
    );
export const useInfiniteGetCustomerEnquiryList = <
      TData = GetCustomerEnquiryList,
      TError = unknown
    >(
      pageParamKey: keyof GetCustomerEnquiryListVariables,
      client: GraphQLClient,
      variables: GetCustomerEnquiryListVariables,
      options?: UseInfiniteQueryOptions<GetCustomerEnquiryList, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetCustomerEnquiryList, TError, TData>(
      ['GetCustomerEnquiryList.infinite', variables],
      (metaData) => fetcher<GetCustomerEnquiryList, GetCustomerEnquiryListVariables>(client, GetCustomerEnquiryListDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetFavoriteProductListDocument = /*#__PURE__*/ `
    query getFavoriteProductList {
  getMstFavouritesProductList(page: 1, size: 20) {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result {
      activeText
      categoryID
      categoryName
      description
      documentName
      documentPath
      isActive
      ratingScore
      productID
      productImage
      productName
      productNumber
      salesTypeId
      typeID
      inventory
      clickCount
      viewCount
      unitCost
      length
      width
      height
      volume
      weight
      googleSchema
      domainCategory
      startDate
      endDate
      companyID
      mapProductImages {
        imageName
        imagePath
      }
      prdBid {
        bidId
        createdDate
        bidAmount
        userId
      }
      prdHire {
        hireId
        userId
        isAccepted
        fromDate
        toDate
        returned
      }
    }
  }
}
    `;
export const useGetFavoriteProductList = <
      TData = GetFavoriteProductList,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetFavoriteProductListVariables,
      options?: UseQueryOptions<GetFavoriteProductList, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetFavoriteProductList, TError, TData>(
      variables === undefined ? ['getFavoriteProductList'] : ['getFavoriteProductList', variables],
      fetcher<GetFavoriteProductList, GetFavoriteProductListVariables>(client, GetFavoriteProductListDocument, variables, headers),
      options
    );
export const useInfiniteGetFavoriteProductList = <
      TData = GetFavoriteProductList,
      TError = unknown
    >(
      pageParamKey: keyof GetFavoriteProductListVariables,
      client: GraphQLClient,
      variables?: GetFavoriteProductListVariables,
      options?: UseInfiniteQueryOptions<GetFavoriteProductList, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetFavoriteProductList, TError, TData>(
      variables === undefined ? ['getFavoriteProductList.infinite'] : ['getFavoriteProductList.infinite', variables],
      (metaData) => fetcher<GetFavoriteProductList, GetFavoriteProductListVariables>(client, GetFavoriteProductListDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetGuestLoginDocument = /*#__PURE__*/ `
    query getGuestLogin {
  guestLogin {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result {
      validTo
      value
    }
  }
}
    `;
export const useGetGuestLogin = <
      TData = GetGuestLogin,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetGuestLoginVariables,
      options?: UseQueryOptions<GetGuestLogin, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetGuestLogin, TError, TData>(
      variables === undefined ? ['getGuestLogin'] : ['getGuestLogin', variables],
      fetcher<GetGuestLogin, GetGuestLoginVariables>(client, GetGuestLoginDocument, variables, headers),
      options
    );
export const useInfiniteGetGuestLogin = <
      TData = GetGuestLogin,
      TError = unknown
    >(
      pageParamKey: keyof GetGuestLoginVariables,
      client: GraphQLClient,
      variables?: GetGuestLoginVariables,
      options?: UseInfiniteQueryOptions<GetGuestLogin, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetGuestLogin, TError, TData>(
      variables === undefined ? ['getGuestLogin.infinite'] : ['getGuestLogin.infinite', variables],
      (metaData) => fetcher<GetGuestLogin, GetGuestLoginVariables>(client, GetGuestLoginDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetHierarchyResponseItemsDocument = /*#__PURE__*/ `
    query GetHierarchyResponseItems($requestId: ID!) {
  getHierarchyResponseItems(id: $requestId) {
    comment
    companyId
    createdBy
    createdDate
    isAccepted
    isActive
    isRejected
    itemRequestId
    itemResponseId
    modifiedBy
    modifiedDate
    replyToId
    responseDate
    userId
    statusId
    company {
      companyName
    }
    mapItemResponseUpload {
      createdBy
      createdDate
      documentName
      irUploadId
      isActive
      itemResponseId
      modifiedBy
      modifiedDate
      uploadPath
    }
    replyTo {
      comment
      companyId
      createdBy
      createdDate
      isAccepted
      isActive
      isRejected
      itemRequestId
      itemResponseId
      modifiedBy
      modifiedDate
      replyToId
      responseDate
      userId
      replyTo {
        comment
        companyId
        createdBy
        createdDate
        isAccepted
        isActive
        isRejected
        itemRequestId
        itemResponseId
        modifiedBy
        modifiedDate
        replyToId
        responseDate
        userId
        replyTo {
          comment
          companyId
          createdBy
          createdDate
          isAccepted
          isActive
          isRejected
          itemRequestId
          itemResponseId
          modifiedBy
          modifiedDate
          replyToId
          responseDate
          userId
        }
      }
      mapItemResponseUpload {
        createdBy
        createdDate
        documentName
        irUploadId
        isActive
        itemResponseId
        modifiedBy
        modifiedDate
        uploadPath
      }
    }
  }
}
    `;
export const useGetHierarchyResponseItems = <
      TData = GetHierarchyResponseItems,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetHierarchyResponseItemsVariables,
      options?: UseQueryOptions<GetHierarchyResponseItems, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetHierarchyResponseItems, TError, TData>(
      ['GetHierarchyResponseItems', variables],
      fetcher<GetHierarchyResponseItems, GetHierarchyResponseItemsVariables>(client, GetHierarchyResponseItemsDocument, variables, headers),
      options
    );
export const useInfiniteGetHierarchyResponseItems = <
      TData = GetHierarchyResponseItems,
      TError = unknown
    >(
      pageParamKey: keyof GetHierarchyResponseItemsVariables,
      client: GraphQLClient,
      variables: GetHierarchyResponseItemsVariables,
      options?: UseInfiniteQueryOptions<GetHierarchyResponseItems, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetHierarchyResponseItems, TError, TData>(
      ['GetHierarchyResponseItems.infinite', variables],
      (metaData) => fetcher<GetHierarchyResponseItems, GetHierarchyResponseItemsVariables>(client, GetHierarchyResponseItemsDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetIncomingRequestListDocument = /*#__PURE__*/ `
    query GetIncomingRequestList($size: Int!) {
  getIncomingItemRequestList(
    itemRequestTitle: null
    categoryIds: null
    provinceIds: null
    cityIds: null
    suburbIds: null
    page: 1
    size: $size
  ) {
    count
    currentPage
    message
    nextPage
    prevPage
    result {
      city
      cityID
      itemCategory
      itemCategoryID
      itemImagePath
      itemRequestDate
      itemRequestDescription
      itemRequestID
      itemRequestStatus
      itemRequestStatusID
      itemRequestTitle
      mapItemRequestUploadDto {
        createdBy
        createdDate
        irUploadId
        isActive
        itemRequestId
        modifiedBy
        modifiedDate
        thumbNailPath
        uploadPath
      }
      province
      provinceID
      selectedCompany
      suburb
      suburbID
      userID
      userName
    }
    success
    totalPages
  }
}
    `;
export const useGetIncomingRequestList = <
      TData = GetIncomingRequestList,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetIncomingRequestListVariables,
      options?: UseQueryOptions<GetIncomingRequestList, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetIncomingRequestList, TError, TData>(
      ['GetIncomingRequestList', variables],
      fetcher<GetIncomingRequestList, GetIncomingRequestListVariables>(client, GetIncomingRequestListDocument, variables, headers),
      options
    );
export const useInfiniteGetIncomingRequestList = <
      TData = GetIncomingRequestList,
      TError = unknown
    >(
      pageParamKey: keyof GetIncomingRequestListVariables,
      client: GraphQLClient,
      variables: GetIncomingRequestListVariables,
      options?: UseInfiniteQueryOptions<GetIncomingRequestList, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetIncomingRequestList, TError, TData>(
      ['GetIncomingRequestList.infinite', variables],
      (metaData) => fetcher<GetIncomingRequestList, GetIncomingRequestListVariables>(client, GetIncomingRequestListDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetIncomingTopLevelResponseItemsDocument = /*#__PURE__*/ `
    query GetIncomingTopLevelResponseItems($requestId: ID!) {
  getIncommingTopLevelResponseItems(id: $requestId) {
    comment
    companyId
    createdBy
    createdDate
    isAccepted
    isActive
    isRejected
    itemRequestId
    itemResponseId
    modifiedBy
    modifiedDate
    replyToId
    responseDate
    userId
    company {
      companyName
    }
    mapItemResponseUpload {
      createdBy
      createdDate
      documentName
      irUploadId
      isActive
      itemResponseId
      modifiedBy
      modifiedDate
      uploadPath
    }
    replyTo {
      comment
      companyId
      createdBy
      createdDate
      isAccepted
      isActive
      isRejected
      itemRequestId
      itemResponseId
      modifiedBy
      modifiedDate
      replyToId
      responseDate
      userId
      replyTo {
        comment
        companyId
        createdBy
        createdDate
        isAccepted
        isActive
        isRejected
        itemRequestId
        itemResponseId
        modifiedBy
        modifiedDate
        replyToId
        responseDate
        userId
        replyTo {
          comment
          companyId
          createdBy
          createdDate
          isAccepted
          isActive
          isRejected
          itemRequestId
          itemResponseId
          modifiedBy
          modifiedDate
          replyToId
          responseDate
          userId
        }
      }
      mapItemResponseUpload {
        createdBy
        createdDate
        documentName
        irUploadId
        isActive
        itemResponseId
        modifiedBy
        modifiedDate
        uploadPath
      }
    }
  }
}
    `;
export const useGetIncomingTopLevelResponseItems = <
      TData = GetIncomingTopLevelResponseItems,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetIncomingTopLevelResponseItemsVariables,
      options?: UseQueryOptions<GetIncomingTopLevelResponseItems, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetIncomingTopLevelResponseItems, TError, TData>(
      ['GetIncomingTopLevelResponseItems', variables],
      fetcher<GetIncomingTopLevelResponseItems, GetIncomingTopLevelResponseItemsVariables>(client, GetIncomingTopLevelResponseItemsDocument, variables, headers),
      options
    );
export const useInfiniteGetIncomingTopLevelResponseItems = <
      TData = GetIncomingTopLevelResponseItems,
      TError = unknown
    >(
      pageParamKey: keyof GetIncomingTopLevelResponseItemsVariables,
      client: GraphQLClient,
      variables: GetIncomingTopLevelResponseItemsVariables,
      options?: UseInfiniteQueryOptions<GetIncomingTopLevelResponseItems, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetIncomingTopLevelResponseItems, TError, TData>(
      ['GetIncomingTopLevelResponseItems.infinite', variables],
      (metaData) => fetcher<GetIncomingTopLevelResponseItems, GetIncomingTopLevelResponseItemsVariables>(client, GetIncomingTopLevelResponseItemsDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetItemRequestServiceListDocument = /*#__PURE__*/ `
    query getItemRequestServiceList($domainCategoryIds: String = null, $category: Int = null, $subCategoryId: Int = null, $page: Int = 1, $size: Int = 10) {
  getItemRequestServiceList(
    domainCategoryIds: $domainCategoryIds
    categoryId: $category
    subCategoryId: $subCategoryId
    page: $page
    size: $size
  ) {
    count
    currentPage
    message
    nextPage
    prevPage
    result {
      itemRequestServiceTitle
      itemRequestServiceDescription
      itemRequestServiceStatusID
      uploadPath
      thumbNailPath
      categoryID
      subCategoryID
      domainCategoryID
      domainCategoryName {
        categoryName
      }
      categoryName {
        categoryName
      }
      subCategoryName {
        categoryName
      }
    }
  }
}
    `;
export const useGetItemRequestServiceList = <
      TData = GetItemRequestServiceList,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetItemRequestServiceListVariables,
      options?: UseQueryOptions<GetItemRequestServiceList, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetItemRequestServiceList, TError, TData>(
      variables === undefined ? ['getItemRequestServiceList'] : ['getItemRequestServiceList', variables],
      fetcher<GetItemRequestServiceList, GetItemRequestServiceListVariables>(client, GetItemRequestServiceListDocument, variables, headers),
      options
    );
export const useInfiniteGetItemRequestServiceList = <
      TData = GetItemRequestServiceList,
      TError = unknown
    >(
      pageParamKey: keyof GetItemRequestServiceListVariables,
      client: GraphQLClient,
      variables?: GetItemRequestServiceListVariables,
      options?: UseInfiniteQueryOptions<GetItemRequestServiceList, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetItemRequestServiceList, TError, TData>(
      variables === undefined ? ['getItemRequestServiceList.infinite'] : ['getItemRequestServiceList.infinite', variables],
      (metaData) => fetcher<GetItemRequestServiceList, GetItemRequestServiceListVariables>(client, GetItemRequestServiceListDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetMagazinesListDocument = /*#__PURE__*/ `
    query GetMagazinesList($companyId: String!) {
  getMagazinesList(
    franchiseId: null
    eflyerId: null
    magazineName: null
    statusIds: null
    companyIds: $companyId
    categoryIds: null
    provinceIds: null
    cityIds: null
    suburbIds: null
    page: 1
    size: 10
  ) {
    result {
      eflyerId
      magazineName
      eFlyerDescription
      categoryID
      categoryName
      startDate
      endDate
      statusId
      statusName
      companyId
      companyName
      companyDescription
      isMenu
      streetAddress
      countryID
      countryName
      provinceID
      provinceName
      cityID
      cityName
      suburbID
      suburb
      zipCode
      phone
      companyLocation
      mapEflyersUploadDtos {
        documentName
      }
    }
  }
}
    `;
export const useGetMagazinesList = <
      TData = GetMagazinesList,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetMagazinesListVariables,
      options?: UseQueryOptions<GetMagazinesList, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetMagazinesList, TError, TData>(
      ['GetMagazinesList', variables],
      fetcher<GetMagazinesList, GetMagazinesListVariables>(client, GetMagazinesListDocument, variables, headers),
      options
    );
export const useInfiniteGetMagazinesList = <
      TData = GetMagazinesList,
      TError = unknown
    >(
      pageParamKey: keyof GetMagazinesListVariables,
      client: GraphQLClient,
      variables: GetMagazinesListVariables,
      options?: UseInfiniteQueryOptions<GetMagazinesList, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetMagazinesList, TError, TData>(
      ['GetMagazinesList.infinite', variables],
      (metaData) => fetcher<GetMagazinesList, GetMagazinesListVariables>(client, GetMagazinesListDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetMstCategoryByParentIdDocument = /*#__PURE__*/ `
    query getMstCategoryByParentId($id: Int, $page: Int, $size: Int) {
  getMstCategoryByParentId(id: $id, page: $page, size: $size) {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result {
      categoryIcon
      categoryId
      categoryName
      categoryThumbNailIcon
      createdBy
      createdDate
      isActive
      isCategory
      isMainCategory
      isMenuAllowed
      modifiedBy
      modifiedDate
      parentCategoryId
      timeDelayException
    }
  }
}
    `;
export const useGetMstCategoryByParentId = <
      TData = GetMstCategoryByParentId,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetMstCategoryByParentIdVariables,
      options?: UseQueryOptions<GetMstCategoryByParentId, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetMstCategoryByParentId, TError, TData>(
      variables === undefined ? ['getMstCategoryByParentId'] : ['getMstCategoryByParentId', variables],
      fetcher<GetMstCategoryByParentId, GetMstCategoryByParentIdVariables>(client, GetMstCategoryByParentIdDocument, variables, headers),
      options
    );
export const useInfiniteGetMstCategoryByParentId = <
      TData = GetMstCategoryByParentId,
      TError = unknown
    >(
      pageParamKey: keyof GetMstCategoryByParentIdVariables,
      client: GraphQLClient,
      variables?: GetMstCategoryByParentIdVariables,
      options?: UseInfiniteQueryOptions<GetMstCategoryByParentId, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetMstCategoryByParentId, TError, TData>(
      variables === undefined ? ['getMstCategoryByParentId.infinite'] : ['getMstCategoryByParentId.infinite', variables],
      (metaData) => fetcher<GetMstCategoryByParentId, GetMstCategoryByParentIdVariables>(client, GetMstCategoryByParentIdDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetMstCategoryMainDocument = /*#__PURE__*/ `
    query getMstCategoryMain {
  getMstCategoryMain {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result {
      categoryIcon
      categoryId
      categoryName
      categoryThumbNailIcon
      createdBy
      createdDate
      isActive
      isCategory
      isMainCategory
      isMenuAllowed
      modifiedBy
      modifiedDate
      parentCategoryId
      timeDelayException
    }
  }
}
    `;
export const useGetMstCategoryMain = <
      TData = GetMstCategoryMain,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetMstCategoryMainVariables,
      options?: UseQueryOptions<GetMstCategoryMain, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetMstCategoryMain, TError, TData>(
      variables === undefined ? ['getMstCategoryMain'] : ['getMstCategoryMain', variables],
      fetcher<GetMstCategoryMain, GetMstCategoryMainVariables>(client, GetMstCategoryMainDocument, variables, headers),
      options
    );
export const useInfiniteGetMstCategoryMain = <
      TData = GetMstCategoryMain,
      TError = unknown
    >(
      pageParamKey: keyof GetMstCategoryMainVariables,
      client: GraphQLClient,
      variables?: GetMstCategoryMainVariables,
      options?: UseInfiniteQueryOptions<GetMstCategoryMain, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetMstCategoryMain, TError, TData>(
      variables === undefined ? ['getMstCategoryMain.infinite'] : ['getMstCategoryMain.infinite', variables],
      (metaData) => fetcher<GetMstCategoryMain, GetMstCategoryMainVariables>(client, GetMstCategoryMainDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetMstPackageDetailListDocument = /*#__PURE__*/ `
    query getMstPackageDetailList($id: Int) {
  getMstPackageDetailList(packageId: $id, status: true) {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result {
      activeText
      actualValue
      amount
      attributeID
      attributeName
      isActive
      packageDetailsID
      packageID
      pD_ActiveText
      pD_isActive
      sortOrder
      value
    }
  }
}
    `;
export const useGetMstPackageDetailList = <
      TData = GetMstPackageDetailList,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetMstPackageDetailListVariables,
      options?: UseQueryOptions<GetMstPackageDetailList, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetMstPackageDetailList, TError, TData>(
      variables === undefined ? ['getMstPackageDetailList'] : ['getMstPackageDetailList', variables],
      fetcher<GetMstPackageDetailList, GetMstPackageDetailListVariables>(client, GetMstPackageDetailListDocument, variables, headers),
      options
    );
export const useInfiniteGetMstPackageDetailList = <
      TData = GetMstPackageDetailList,
      TError = unknown
    >(
      pageParamKey: keyof GetMstPackageDetailListVariables,
      client: GraphQLClient,
      variables?: GetMstPackageDetailListVariables,
      options?: UseInfiniteQueryOptions<GetMstPackageDetailList, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetMstPackageDetailList, TError, TData>(
      variables === undefined ? ['getMstPackageDetailList.infinite'] : ['getMstPackageDetailList.infinite', variables],
      (metaData) => fetcher<GetMstPackageDetailList, GetMstPackageDetailListVariables>(client, GetMstPackageDetailListDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetMstPackageListDocument = /*#__PURE__*/ `
    query getMstPackageList($packageIds: String = null) {
  getMstPackageList(
    packageIds: $packageIds
    includePackageIds: null
    excludePackageIds: null
    packageName: null
    packageId: null
    status: true
  ) {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result {
      activeText
      amount
      isActive
      isRecommended
      packageID
      packageName
      recommendedText
      sortOrder
      threeMonths
      sixMonths
      twelveMonths
      threeMonthsVat
      sixMonthsVat
      twelveMonthsVat
      fiveDiscount
      tenDiscount
      fifteenDiscount
      fiveOFF
      tenOFF
      fifteenOFF
      zeroOFF
    }
  }
}
    `;
export const useGetMstPackageList = <
      TData = GetMstPackageList,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetMstPackageListVariables,
      options?: UseQueryOptions<GetMstPackageList, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetMstPackageList, TError, TData>(
      variables === undefined ? ['getMstPackageList'] : ['getMstPackageList', variables],
      fetcher<GetMstPackageList, GetMstPackageListVariables>(client, GetMstPackageListDocument, variables, headers),
      options
    );
export const useInfiniteGetMstPackageList = <
      TData = GetMstPackageList,
      TError = unknown
    >(
      pageParamKey: keyof GetMstPackageListVariables,
      client: GraphQLClient,
      variables?: GetMstPackageListVariables,
      options?: UseInfiniteQueryOptions<GetMstPackageList, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetMstPackageList, TError, TData>(
      variables === undefined ? ['getMstPackageList.infinite'] : ['getMstPackageList.infinite', variables],
      (metaData) => fetcher<GetMstPackageList, GetMstPackageListVariables>(client, GetMstPackageListDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetRatingDocument = /*#__PURE__*/ `
    query GetRating($id: Int, $key: Int) {
  getMstRatingScoreList(key: $id, keyType: $key, page: 1, size: 10) {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result {
      ratingScore
      ratingScoreName
      ratingScoreCount
      ratingScorePercent
      totalRatingCount
      totalRatingScore
    }
  }
}
    `;
export const useGetRating = <
      TData = GetRating,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetRatingVariables,
      options?: UseQueryOptions<GetRating, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetRating, TError, TData>(
      variables === undefined ? ['GetRating'] : ['GetRating', variables],
      fetcher<GetRating, GetRatingVariables>(client, GetRatingDocument, variables, headers),
      options
    );
export const useInfiniteGetRating = <
      TData = GetRating,
      TError = unknown
    >(
      pageParamKey: keyof GetRatingVariables,
      client: GraphQLClient,
      variables?: GetRatingVariables,
      options?: UseInfiniteQueryOptions<GetRating, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetRating, TError, TData>(
      variables === undefined ? ['GetRating.infinite'] : ['GetRating.infinite', variables],
      (metaData) => fetcher<GetRating, GetRatingVariables>(client, GetRatingDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetRequestListDocument = /*#__PURE__*/ `
    query GetRequestList($size: Int!) {
  getItemRequestList(
    itemRequestTitle: null
    categoryIds: null
    provinceIds: null
    cityIds: null
    suburbIds: null
    page: 1
    size: $size
  ) {
    count
    currentPage
    message
    nextPage
    prevPage
    result {
      city
      cityID
      itemCategory
      itemCategoryID
      itemImagePath
      itemRequestDate
      itemRequestDescription
      itemRequestID
      itemRequestStatus
      itemRequestStatusID
      itemRequestTitle
      mapItemRequestUploadDto {
        createdBy
        createdDate
        irUploadId
        isActive
        itemRequestId
        modifiedBy
        modifiedDate
        thumbNailPath
        uploadPath
      }
      province
      provinceID
      selectedCompany
      suburb
      suburbID
      userID
      userName
    }
    success
    totalPages
  }
}
    `;
export const useGetRequestList = <
      TData = GetRequestList,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetRequestListVariables,
      options?: UseQueryOptions<GetRequestList, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetRequestList, TError, TData>(
      ['GetRequestList', variables],
      fetcher<GetRequestList, GetRequestListVariables>(client, GetRequestListDocument, variables, headers),
      options
    );
export const useInfiniteGetRequestList = <
      TData = GetRequestList,
      TError = unknown
    >(
      pageParamKey: keyof GetRequestListVariables,
      client: GraphQLClient,
      variables: GetRequestListVariables,
      options?: UseInfiniteQueryOptions<GetRequestList, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetRequestList, TError, TData>(
      ['GetRequestList.infinite', variables],
      (metaData) => fetcher<GetRequestList, GetRequestListVariables>(client, GetRequestListDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetOrderStatusTypesDocument = /*#__PURE__*/ `
    query getOrderStatusTypes {
  prdOrderStatusTypes(page: 1, size: 5) {
    data {
      createdDate
      modifiedBy
      modifiedDate
      orderStatusTypeId
      statusName
      statusSequence
    }
  }
}
    `;
export const useGetOrderStatusTypes = <
      TData = GetOrderStatusTypes,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetOrderStatusTypesVariables,
      options?: UseQueryOptions<GetOrderStatusTypes, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetOrderStatusTypes, TError, TData>(
      variables === undefined ? ['getOrderStatusTypes'] : ['getOrderStatusTypes', variables],
      fetcher<GetOrderStatusTypes, GetOrderStatusTypesVariables>(client, GetOrderStatusTypesDocument, variables, headers),
      options
    );
export const useInfiniteGetOrderStatusTypes = <
      TData = GetOrderStatusTypes,
      TError = unknown
    >(
      pageParamKey: keyof GetOrderStatusTypesVariables,
      client: GraphQLClient,
      variables?: GetOrderStatusTypesVariables,
      options?: UseInfiniteQueryOptions<GetOrderStatusTypes, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetOrderStatusTypes, TError, TData>(
      variables === undefined ? ['getOrderStatusTypes.infinite'] : ['getOrderStatusTypes.infinite', variables],
      (metaData) => fetcher<GetOrderStatusTypes, GetOrderStatusTypesVariables>(client, GetOrderStatusTypesDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetPrdProductListDocument = /*#__PURE__*/ `
    query getPrdProductList($productName: String = null, $page: Int = 1, $size: Int = 10, $catgoryId: Int = null, $domainCategoryIds: String = null, $salesTypeId: Int = null, $companyId: Int = null, $latitude: String = null, $longitude: String = null) {
  getPrdProductList(
    productName: $productName
    productId: null
    fromPrice: null
    toPrice: null
    categoryId: $catgoryId
    domainCategoryIds: $domainCategoryIds
    status: null
    salesTypeId: $salesTypeId
    scopeId: null
    userId: null
    companyId: $companyId
    latitude: $latitude
    longitude: $longitude
    page: $page
    size: $size
  ) {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result {
      activeText
      categoryID
      categoryName
      description
      documentName
      documentPath
      isActive
      ratingScore
      productID
      productImage
      productName
      productNumber
      salesTypeId
      typeID
      inventory
      clickCount
      viewCount
      unitCost
      length
      width
      height
      volume
      weight
      googleSchema
      domainCategory
      startDate
      endDate
      companyID
      originalUnitCost
      mapProductImages {
        imageName
        imagePath
        thumbNailPath
      }
      prdBid {
        bidId
        createdDate
        bidAmount
        userId
      }
      prdHire {
        hireId
        userId
        isAccepted
        fromDate
        toDate
        returned
      }
    }
  }
}
    `;
export const useGetPrdProductList = <
      TData = GetPrdProductList,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetPrdProductListVariables,
      options?: UseQueryOptions<GetPrdProductList, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetPrdProductList, TError, TData>(
      variables === undefined ? ['getPrdProductList'] : ['getPrdProductList', variables],
      fetcher<GetPrdProductList, GetPrdProductListVariables>(client, GetPrdProductListDocument, variables, headers),
      options
    );
export const useInfiniteGetPrdProductList = <
      TData = GetPrdProductList,
      TError = unknown
    >(
      pageParamKey: keyof GetPrdProductListVariables,
      client: GraphQLClient,
      variables?: GetPrdProductListVariables,
      options?: UseInfiniteQueryOptions<GetPrdProductList, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetPrdProductList, TError, TData>(
      variables === undefined ? ['getPrdProductList.infinite'] : ['getPrdProductList.infinite', variables],
      (metaData) => fetcher<GetPrdProductList, GetPrdProductListVariables>(client, GetPrdProductListDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetProvinceDocument = /*#__PURE__*/ `
    query getProvince {
  getProvince {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result {
      countryId
      createdBy
      createdDate
      isActive
      modifiedBy
      modifiedDate
      provinceId
      provinceName
    }
  }
}
    `;
export const useGetProvince = <
      TData = GetProvince,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetProvinceVariables,
      options?: UseQueryOptions<GetProvince, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetProvince, TError, TData>(
      variables === undefined ? ['getProvince'] : ['getProvince', variables],
      fetcher<GetProvince, GetProvinceVariables>(client, GetProvinceDocument, variables, headers),
      options
    );
export const useInfiniteGetProvince = <
      TData = GetProvince,
      TError = unknown
    >(
      pageParamKey: keyof GetProvinceVariables,
      client: GraphQLClient,
      variables?: GetProvinceVariables,
      options?: UseInfiniteQueryOptions<GetProvince, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetProvince, TError, TData>(
      variables === undefined ? ['getProvince.infinite'] : ['getProvince.infinite', variables],
      (metaData) => fetcher<GetProvince, GetProvinceVariables>(client, GetProvinceDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetRatingListDocument = /*#__PURE__*/ `
    query getRatingList($key: Int, $keyType: Int, $size: Int! = 10) {
  getRatingList(key: $key, keyType: $keyType, page: 1, size: $size) {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result {
      mST_RatingID
      title
      review
      name
      ratingScore
      dateofReview
    }
  }
}
    `;
export const useGetRatingList = <
      TData = GetRatingList,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetRatingListVariables,
      options?: UseQueryOptions<GetRatingList, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetRatingList, TError, TData>(
      variables === undefined ? ['getRatingList'] : ['getRatingList', variables],
      fetcher<GetRatingList, GetRatingListVariables>(client, GetRatingListDocument, variables, headers),
      options
    );
export const useInfiniteGetRatingList = <
      TData = GetRatingList,
      TError = unknown
    >(
      pageParamKey: keyof GetRatingListVariables,
      client: GraphQLClient,
      variables?: GetRatingListVariables,
      options?: UseInfiniteQueryOptions<GetRatingList, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetRatingList, TError, TData>(
      variables === undefined ? ['getRatingList.infinite'] : ['getRatingList.infinite', variables],
      (metaData) => fetcher<GetRatingList, GetRatingListVariables>(client, GetRatingListDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetSsoLoginDocument = /*#__PURE__*/ `
    query getSSOLogin($jti: String) {
  sSOLogin(jti: $jti) {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result {
      firstName
      lastName
      vGender
      email
      streetAddress
      provinceID
      provinceName
      cityID
      cityName
      suburbID
      suburbName
      longitude
      latitude
      zipCode
      userProfileImage
      paymentUrl
      packageID
      token
      tokenExpires
    }
  }
}
    `;
export const useGetSsoLogin = <
      TData = GetSsoLogin,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetSsoLoginVariables,
      options?: UseQueryOptions<GetSsoLogin, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetSsoLogin, TError, TData>(
      variables === undefined ? ['getSSOLogin'] : ['getSSOLogin', variables],
      fetcher<GetSsoLogin, GetSsoLoginVariables>(client, GetSsoLoginDocument, variables, headers),
      options
    );
export const useInfiniteGetSsoLogin = <
      TData = GetSsoLogin,
      TError = unknown
    >(
      pageParamKey: keyof GetSsoLoginVariables,
      client: GraphQLClient,
      variables?: GetSsoLoginVariables,
      options?: UseInfiniteQueryOptions<GetSsoLogin, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetSsoLogin, TError, TData>(
      variables === undefined ? ['getSSOLogin.infinite'] : ['getSSOLogin.infinite', variables],
      (metaData) => fetcher<GetSsoLogin, GetSsoLoginVariables>(client, GetSsoLoginDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetShopingCartDocument = /*#__PURE__*/ `
    query getShopingCart {
  getPrdShoppingCart(page: 1, size: 20) {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result {
      prdShoppingCartDto {
        categoryID
        categoryName
        description
        productID
        productImage
        productName
        productNumber
        quantity
        recordID
        totalPrice
        unitCost
        prdProduct {
          productId
          productName
          typeId
          scopeId
          salesTypeId
        }
      }
      totalAmount
      amountExlVat
      vatAmount
      recuringAmount
    }
  }
}
    `;
export const useGetShopingCart = <
      TData = GetShopingCart,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetShopingCartVariables,
      options?: UseQueryOptions<GetShopingCart, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetShopingCart, TError, TData>(
      variables === undefined ? ['getShopingCart'] : ['getShopingCart', variables],
      fetcher<GetShopingCart, GetShopingCartVariables>(client, GetShopingCartDocument, variables, headers),
      options
    );
export const useInfiniteGetShopingCart = <
      TData = GetShopingCart,
      TError = unknown
    >(
      pageParamKey: keyof GetShopingCartVariables,
      client: GraphQLClient,
      variables?: GetShopingCartVariables,
      options?: UseInfiniteQueryOptions<GetShopingCart, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetShopingCart, TError, TData>(
      variables === undefined ? ['getShopingCart.infinite'] : ['getShopingCart.infinite', variables],
      (metaData) => fetcher<GetShopingCart, GetShopingCartVariables>(client, GetShopingCartDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetSpecialProductListDocument = /*#__PURE__*/ `
    query getSpecialProductList($productName: String = null, $domainCategoryIds: String = null, $companyId: Int = null, $size: Int = 10) {
  getPrdProductList(
    productName: $productName
    productId: null
    fromPrice: null
    toPrice: null
    categoryId: null
    domainCategoryIds: $domainCategoryIds
    status: null
    salesTypeId: null
    scopeId: 2
    userId: null
    companyId: $companyId
    page: 1
    size: $size
  ) {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result {
      activeText
      categoryID
      categoryName
      description
      documentName
      documentPath
      isActive
      ratingScore
      productID
      productImage
      productName
      productNumber
      salesTypeId
      typeID
      inventory
      clickCount
      viewCount
      unitCost
      length
      width
      height
      volume
      weight
      googleSchema
      domainCategory
      startDate
      endDate
      companyID
      originalUnitCost
      longitude
      latitude
      mapProductImages {
        imageName
        imagePath
        thumbNailPath
      }
      prdBid {
        bidId
        createdDate
        bidAmount
        userId
      }
      prdHire {
        hireId
        userId
        isAccepted
        fromDate
        toDate
        returned
      }
    }
  }
}
    `;
export const useGetSpecialProductList = <
      TData = GetSpecialProductList,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetSpecialProductListVariables,
      options?: UseQueryOptions<GetSpecialProductList, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetSpecialProductList, TError, TData>(
      variables === undefined ? ['getSpecialProductList'] : ['getSpecialProductList', variables],
      fetcher<GetSpecialProductList, GetSpecialProductListVariables>(client, GetSpecialProductListDocument, variables, headers),
      options
    );
export const useInfiniteGetSpecialProductList = <
      TData = GetSpecialProductList,
      TError = unknown
    >(
      pageParamKey: keyof GetSpecialProductListVariables,
      client: GraphQLClient,
      variables?: GetSpecialProductListVariables,
      options?: UseInfiniteQueryOptions<GetSpecialProductList, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetSpecialProductList, TError, TData>(
      variables === undefined ? ['getSpecialProductList.infinite'] : ['getSpecialProductList.infinite', variables],
      (metaData) => fetcher<GetSpecialProductList, GetSpecialProductListVariables>(client, GetSpecialProductListDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetSuburbDocument = /*#__PURE__*/ `
    query getSuburb {
  getSuburb {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result {
      cityId
      createdBy
      createdDate
      isActive
      modifiedBy
      modifiedDate
      suburbId
      suburbName
    }
  }
}
    `;
export const useGetSuburb = <
      TData = GetSuburb,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetSuburbVariables,
      options?: UseQueryOptions<GetSuburb, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetSuburb, TError, TData>(
      variables === undefined ? ['getSuburb'] : ['getSuburb', variables],
      fetcher<GetSuburb, GetSuburbVariables>(client, GetSuburbDocument, variables, headers),
      options
    );
export const useInfiniteGetSuburb = <
      TData = GetSuburb,
      TError = unknown
    >(
      pageParamKey: keyof GetSuburbVariables,
      client: GraphQLClient,
      variables?: GetSuburbVariables,
      options?: UseInfiniteQueryOptions<GetSuburb, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetSuburb, TError, TData>(
      variables === undefined ? ['getSuburb.infinite'] : ['getSuburb.infinite', variables],
      (metaData) => fetcher<GetSuburb, GetSuburbVariables>(client, GetSuburbDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetTopLevelResponseItemsDocument = /*#__PURE__*/ `
    query GetTopLevelResponseItems($requestId: ID!) {
  getTopLevelResponseItems(id: $requestId) {
    comment
    companyId
    createdBy
    createdDate
    isAccepted
    isActive
    isRejected
    itemRequestId
    itemResponseId
    modifiedBy
    modifiedDate
    replyToId
    responseDate
    userId
    company {
      companyName
    }
    mapItemResponseUpload {
      createdBy
      createdDate
      documentName
      irUploadId
      isActive
      itemResponseId
      modifiedBy
      modifiedDate
      uploadPath
    }
    replyTo {
      comment
      companyId
      createdBy
      createdDate
      isAccepted
      isActive
      isRejected
      itemRequestId
      itemResponseId
      modifiedBy
      modifiedDate
      replyToId
      responseDate
      userId
      replyTo {
        comment
        companyId
        createdBy
        createdDate
        isAccepted
        isActive
        isRejected
        itemRequestId
        itemResponseId
        modifiedBy
        modifiedDate
        replyToId
        responseDate
        userId
        replyTo {
          comment
          companyId
          createdBy
          createdDate
          isAccepted
          isActive
          isRejected
          itemRequestId
          itemResponseId
          modifiedBy
          modifiedDate
          replyToId
          responseDate
          userId
        }
      }
      mapItemResponseUpload {
        createdBy
        createdDate
        documentName
        irUploadId
        isActive
        itemResponseId
        modifiedBy
        modifiedDate
        uploadPath
      }
    }
  }
}
    `;
export const useGetTopLevelResponseItems = <
      TData = GetTopLevelResponseItems,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetTopLevelResponseItemsVariables,
      options?: UseQueryOptions<GetTopLevelResponseItems, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetTopLevelResponseItems, TError, TData>(
      ['GetTopLevelResponseItems', variables],
      fetcher<GetTopLevelResponseItems, GetTopLevelResponseItemsVariables>(client, GetTopLevelResponseItemsDocument, variables, headers),
      options
    );
export const useInfiniteGetTopLevelResponseItems = <
      TData = GetTopLevelResponseItems,
      TError = unknown
    >(
      pageParamKey: keyof GetTopLevelResponseItemsVariables,
      client: GraphQLClient,
      variables: GetTopLevelResponseItemsVariables,
      options?: UseInfiniteQueryOptions<GetTopLevelResponseItems, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetTopLevelResponseItems, TError, TData>(
      ['GetTopLevelResponseItems.infinite', variables],
      (metaData) => fetcher<GetTopLevelResponseItems, GetTopLevelResponseItemsVariables>(client, GetTopLevelResponseItemsDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetUserDocument = /*#__PURE__*/ `
    query getUser {
  getUser {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result {
      firstName
      lastName
      vGender
      email
      streetAddress
      provinceID
      provinceName
      cityID
      cityName
      suburbID
      suburbName
      longitude
      latitude
      zipCode
      userProfileImage
      paymentUrl
      packageID
      compPercent
      companyId
      companyStatus
      statusName
    }
  }
}
    `;
export const useGetUser = <
      TData = GetUser,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetUserVariables,
      options?: UseQueryOptions<GetUser, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetUser, TError, TData>(
      variables === undefined ? ['getUser'] : ['getUser', variables],
      fetcher<GetUser, GetUserVariables>(client, GetUserDocument, variables, headers),
      options
    );
export const useInfiniteGetUser = <
      TData = GetUser,
      TError = unknown
    >(
      pageParamKey: keyof GetUserVariables,
      client: GraphQLClient,
      variables?: GetUserVariables,
      options?: UseInfiniteQueryOptions<GetUser, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetUser, TError, TData>(
      variables === undefined ? ['getUser.infinite'] : ['getUser.infinite', variables],
      (metaData) => fetcher<GetUser, GetUserVariables>(client, GetUserDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetUserAddressDocument = /*#__PURE__*/ `
    query getUserAddress {
  getUserAddress {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result {
      userAddressID
      userID
      streetAddress
      countryID
      provinceID
      province
      cityID
      city
      suburbID
      suburb
      zipCode
      longitude
      latitude
    }
  }
}
    `;
export const useGetUserAddress = <
      TData = GetUserAddress,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetUserAddressVariables,
      options?: UseQueryOptions<GetUserAddress, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetUserAddress, TError, TData>(
      variables === undefined ? ['getUserAddress'] : ['getUserAddress', variables],
      fetcher<GetUserAddress, GetUserAddressVariables>(client, GetUserAddressDocument, variables, headers),
      options
    );
export const useInfiniteGetUserAddress = <
      TData = GetUserAddress,
      TError = unknown
    >(
      pageParamKey: keyof GetUserAddressVariables,
      client: GraphQLClient,
      variables?: GetUserAddressVariables,
      options?: UseInfiniteQueryOptions<GetUserAddress, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetUserAddress, TError, TData>(
      variables === undefined ? ['getUserAddress.infinite'] : ['getUserAddress.infinite', variables],
      (metaData) => fetcher<GetUserAddress, GetUserAddressVariables>(client, GetUserAddressDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetPrdOdersByUserDocument = /*#__PURE__*/ `
    query GetPrdOdersByUser($orderStatusTypeId: Int = null, $fromDate: DateTime, $toDate: DateTime, $page: ID!) {
  prdOrdersByUser(
    orderStatusTypeId: $orderStatusTypeId
    fromDate: $fromDate
    toDate: $toDate
    page: $page
    size: 50
  ) {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result {
      createdBy
      createdDate
      downloadCount
      expiredDate
      modifiedBy
      modifiedDate
      orderAmount
      orderDate
      orderId
      orderIdstring
      orderIpaddress
      orderSessionId
      orderStatusId
      orderTotal
      paymentDate
      productId
      transactionId
      userId
      prdOrderDetails {
        createdBy
        createdDate
        downloadCount
        modifiedBy
        modifiedDate
        orderAmount
        orderDetailsId
        orderId
        orderQuantity
        productId
        productPrice
        products {
          productName
          mapProductDocument {
            documentName
            documentPath
          }
          mapProductImages {
            imagePath
            thumbNailPath
          }
        }
      }
      prdOrderStatus {
        createdBy
        createdDate
        modifiedBy
        modifiedDate
        orderStatusTypeId
        prdOrderStatusType {
          orderStatusTypeId
          statusName
          statusSequence
        }
      }
    }
  }
}
    `;
export const useGetPrdOdersByUser = <
      TData = GetPrdOdersByUser,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetPrdOdersByUserVariables,
      options?: UseQueryOptions<GetPrdOdersByUser, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetPrdOdersByUser, TError, TData>(
      ['GetPrdOdersByUser', variables],
      fetcher<GetPrdOdersByUser, GetPrdOdersByUserVariables>(client, GetPrdOdersByUserDocument, variables, headers),
      options
    );
export const useInfiniteGetPrdOdersByUser = <
      TData = GetPrdOdersByUser,
      TError = unknown
    >(
      pageParamKey: keyof GetPrdOdersByUserVariables,
      client: GraphQLClient,
      variables: GetPrdOdersByUserVariables,
      options?: UseInfiniteQueryOptions<GetPrdOdersByUser, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetPrdOdersByUser, TError, TData>(
      ['GetPrdOdersByUser.infinite', variables],
      (metaData) => fetcher<GetPrdOdersByUser, GetPrdOdersByUserVariables>(client, GetPrdOdersByUserDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetUserTopHiresDocument = /*#__PURE__*/ `
    query getUserTopHires($size: Int! = 100) {
  getUserTopHire(page: 1, size: $size) {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result {
      userID
      firstName
      lastName
      email
      status
      userStatus
      userProfileImage
      userProfileThumbNailImage
      bidAmount
      productID
      productName
      orderID
    }
  }
}
    `;
export const useGetUserTopHires = <
      TData = GetUserTopHires,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetUserTopHiresVariables,
      options?: UseQueryOptions<GetUserTopHires, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetUserTopHires, TError, TData>(
      variables === undefined ? ['getUserTopHires'] : ['getUserTopHires', variables],
      fetcher<GetUserTopHires, GetUserTopHiresVariables>(client, GetUserTopHiresDocument, variables, headers),
      options
    );
export const useInfiniteGetUserTopHires = <
      TData = GetUserTopHires,
      TError = unknown
    >(
      pageParamKey: keyof GetUserTopHiresVariables,
      client: GraphQLClient,
      variables?: GetUserTopHiresVariables,
      options?: UseInfiniteQueryOptions<GetUserTopHires, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetUserTopHires, TError, TData>(
      variables === undefined ? ['getUserTopHires.infinite'] : ['getUserTopHires.infinite', variables],
      (metaData) => fetcher<GetUserTopHires, GetUserTopHiresVariables>(client, GetUserTopHiresDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetUserTopBidsDocument = /*#__PURE__*/ `
    query getUserTopBids($size: Int! = 100) {
  getUserTopBids(page: 1, size: $size) {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result {
      userID
      firstName
      lastName
      email
      status
      userStatus
      userProfileImage
      userProfileThumbNailImage
      bidAmount
      productID
      productName
      orderID
    }
  }
}
    `;
export const useGetUserTopBids = <
      TData = GetUserTopBids,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetUserTopBidsVariables,
      options?: UseQueryOptions<GetUserTopBids, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetUserTopBids, TError, TData>(
      variables === undefined ? ['getUserTopBids'] : ['getUserTopBids', variables],
      fetcher<GetUserTopBids, GetUserTopBidsVariables>(client, GetUserTopBidsDocument, variables, headers),
      options
    );
export const useInfiniteGetUserTopBids = <
      TData = GetUserTopBids,
      TError = unknown
    >(
      pageParamKey: keyof GetUserTopBidsVariables,
      client: GraphQLClient,
      variables?: GetUserTopBidsVariables,
      options?: UseInfiniteQueryOptions<GetUserTopBids, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetUserTopBids, TError, TData>(
      variables === undefined ? ['getUserTopBids.infinite'] : ['getUserTopBids.infinite', variables],
      (metaData) => fetcher<GetUserTopBids, GetUserTopBidsVariables>(client, GetUserTopBidsDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const PostMstRatingDocument = /*#__PURE__*/ `
    mutation PostMstRating($reviewData: String!, $companyId: Int!, $specialId: Int!, $eflyerId: Int!, $ratingScore: Int!, $userId: Int!) {
  postMstRating(
    mstRating: {mstRatingId: 0, companyId: $companyId, specialId: $specialId, eflyerId: $eflyerId, userId: $userId, name: "", contactNo: "", emaiId: "", review: $reviewData, ratingScore: $ratingScore, statusId: 0, productId: 0}
  ) {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result
  }
}
    `;
export const usePostMstRating = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<PostMstRating, TError, PostMstRatingVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<PostMstRating, TError, PostMstRatingVariables, TContext>(
      ['PostMstRating'],
      (variables?: PostMstRatingVariables) => fetcher<PostMstRating, PostMstRatingVariables>(client, PostMstRatingDocument, variables, headers)(),
      options
    );
export const MstVersionsDocument = /*#__PURE__*/ `
    query mstVersions {
  mstVersions(page: 1, size: 10) {
    count
    currentPage
    nextPage
    prevPage
    data {
      versionId
      versionNumber
      versionType
    }
  }
}
    `;
export const useMstVersions = <
      TData = MstVersions,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: MstVersionsVariables,
      options?: UseQueryOptions<MstVersions, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<MstVersions, TError, TData>(
      variables === undefined ? ['mstVersions'] : ['mstVersions', variables],
      fetcher<MstVersions, MstVersionsVariables>(client, MstVersionsDocument, variables, headers),
      options
    );
export const useInfiniteMstVersions = <
      TData = MstVersions,
      TError = unknown
    >(
      pageParamKey: keyof MstVersionsVariables,
      client: GraphQLClient,
      variables?: MstVersionsVariables,
      options?: UseInfiniteQueryOptions<MstVersions, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<MstVersions, TError, TData>(
      variables === undefined ? ['mstVersions.infinite'] : ['mstVersions.infinite', variables],
      (metaData) => fetcher<MstVersions, MstVersionsVariables>(client, MstVersionsDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const PostRequestItemResponseDocument = /*#__PURE__*/ `
    mutation postRequestItemResponse($userId: Int, $itemRequestId: Int, $title: String, $filePath: String, $fileName: String, $companyId: Int = null, $replyToId: Int = null) {
  postMstItemResponse(
    mstItemResponse: {comment: $title, companyId: $companyId, createdBy: null, createdDate: null, isAccepted: null, isActive: null, isRejected: null, itemRequestId: $itemRequestId, itemResponseId: 0, modifiedBy: null, modifiedDate: null, replyToId: $replyToId, responseDate: "2015-06-23T17:35:44.68", statusId: 1, userId: $userId, mapItemResponseUpload: {createdBy: null, createdDate: "2015-08-14T13:27:23.747", documentName: $fileName, irUploadId: null, isActive: true, itemResponseId: null, modifiedBy: null, modifiedDate: null, uploadPath: $filePath}}
  ) {
    itemResponseId
    comment
    companyId
    createdBy
    createdDate
    isAccepted
    isActive
    isRejected
    itemRequestId
    itemResponseId
    modifiedBy
    modifiedDate
    replyToId
    responseDate
    userId
    mapItemResponseUpload {
      irUploadId
      itemResponseId
      uploadPath
    }
  }
}
    `;
export const usePostRequestItemResponse = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<PostRequestItemResponse, TError, PostRequestItemResponseVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<PostRequestItemResponse, TError, PostRequestItemResponseVariables, TContext>(
      ['postRequestItemResponse'],
      (variables?: PostRequestItemResponseVariables) => fetcher<PostRequestItemResponse, PostRequestItemResponseVariables>(client, PostRequestItemResponseDocument, variables, headers)(),
      options
    );
export const PurchaseShoppingCartDocument = /*#__PURE__*/ `
    query purchaseShoppingCart {
  purchaseShoppingCartAsync(id: 5) {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result {
      paymentUrl
      paymentMethod
    }
  }
}
    `;
export const usePurchaseShoppingCart = <
      TData = PurchaseShoppingCart,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: PurchaseShoppingCartVariables,
      options?: UseQueryOptions<PurchaseShoppingCart, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<PurchaseShoppingCart, TError, TData>(
      variables === undefined ? ['purchaseShoppingCart'] : ['purchaseShoppingCart', variables],
      fetcher<PurchaseShoppingCart, PurchaseShoppingCartVariables>(client, PurchaseShoppingCartDocument, variables, headers),
      options
    );
export const useInfinitePurchaseShoppingCart = <
      TData = PurchaseShoppingCart,
      TError = unknown
    >(
      pageParamKey: keyof PurchaseShoppingCartVariables,
      client: GraphQLClient,
      variables?: PurchaseShoppingCartVariables,
      options?: UseInfiniteQueryOptions<PurchaseShoppingCart, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<PurchaseShoppingCart, TError, TData>(
      variables === undefined ? ['purchaseShoppingCart.infinite'] : ['purchaseShoppingCart.infinite', variables],
      (metaData) => fetcher<PurchaseShoppingCart, PurchaseShoppingCartVariables>(client, PurchaseShoppingCartDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const MstItemRequestDocument = /*#__PURE__*/ `
    mutation MstItemRequest($userId: Int, $title: String, $desc: String, $catId: Int, $date: DateTime, $suburbId: Int, $files: [Upload!]) {
  postMstItemRequest(
    mstItemRequest: {itemRequestTitle: $title, itemRequestDescription: $desc, itemRequestDate: $date, categoryId: $catId, suburbId: $suburbId, requestApprovedMail: false, createdBy: $userId, createdDate: $date, modifiedDate: $date}
    files: $files
  ) {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result
  }
}
    `;
export const useMstItemRequest = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<MstItemRequest, TError, MstItemRequestVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<MstItemRequest, TError, MstItemRequestVariables, TContext>(
      ['MstItemRequest'],
      (variables?: MstItemRequestVariables) => fetcher<MstItemRequest, MstItemRequestVariables>(client, MstItemRequestDocument, variables, headers)(),
      options
    );
export const SocialAuthDocument = /*#__PURE__*/ `
    query socialAuth($jti: String) {
  oAuth(jti: $jti) {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result {
      firstName
      lastName
      paymentUrl
      token
      tokenExpires
    }
  }
}
    `;
export const useSocialAuth = <
      TData = SocialAuth,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: SocialAuthVariables,
      options?: UseQueryOptions<SocialAuth, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<SocialAuth, TError, TData>(
      variables === undefined ? ['socialAuth'] : ['socialAuth', variables],
      fetcher<SocialAuth, SocialAuthVariables>(client, SocialAuthDocument, variables, headers),
      options
    );
export const useInfiniteSocialAuth = <
      TData = SocialAuth,
      TError = unknown
    >(
      pageParamKey: keyof SocialAuthVariables,
      client: GraphQLClient,
      variables?: SocialAuthVariables,
      options?: UseInfiniteQueryOptions<SocialAuth, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<SocialAuth, TError, TData>(
      variables === undefined ? ['socialAuth.infinite'] : ['socialAuth.infinite', variables],
      (metaData) => fetcher<SocialAuth, SocialAuthVariables>(client, SocialAuthDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const UpdateCartItemDocument = /*#__PURE__*/ `
    mutation updateCartItem($pid: Int!, $quantity: Int!, $userid: Int!, $fromDate: DateTime = null, $endDate: DateTime = null, $dateCreated: DateTime) {
  postPrdShoppingCartOptimized(
    prdShoppingCart: {productId: $pid, dateCreated: $dateCreated, quantity: $quantity, fromDate: $fromDate, endDate: $endDate, userId: $userid}
  ) {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result {
      prdShoppingCartDto {
        categoryID
        categoryName
        description
        productID
        productImage
        productName
        productNumber
        quantity
        recordID
        totalPrice
        unitCost
      }
      totalAmount
      amountExlVat
      vatAmount
      recuringAmount
    }
  }
}
    `;
export const useUpdateCartItem = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateCartItem, TError, UpdateCartItemVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateCartItem, TError, UpdateCartItemVariables, TContext>(
      ['updateCartItem'],
      (variables?: UpdateCartItemVariables) => fetcher<UpdateCartItem, UpdateCartItemVariables>(client, UpdateCartItemDocument, variables, headers)(),
      options
    );
export const UpdateRequestItemResponseDocument = /*#__PURE__*/ `
    mutation UpdateRequestItemResponse($comment: String!, $companyId: Int, $createdBy: Int, $createdDate: DateTime, $isAccepted: Boolean, $isActive: Boolean, $isRejected: Boolean, $itemRequestId: Int, $itemResponseId: Int!, $modifiedBy: Int, $modifiedDate: DateTime, $replyToId: Int, $responseDate: DateTime, $userId: Int!) {
  updateMstItemResponse(
    mstItemResponse: {comment: $comment, companyId: $companyId, createdBy: $createdBy, createdDate: $createdDate, isAccepted: $isAccepted, isActive: $isActive, isRejected: $isRejected, itemRequestId: $itemRequestId, itemResponseId: $itemResponseId, modifiedBy: $modifiedBy, modifiedDate: $modifiedDate, replyToId: $replyToId, responseDate: $responseDate, userId: $userId, statusId: 2}
  ) {
    itemResponseId
    itemRequestId
  }
}
    `;
export const useUpdateRequestItemResponse = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateRequestItemResponse, TError, UpdateRequestItemResponseVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateRequestItemResponse, TError, UpdateRequestItemResponseVariables, TContext>(
      ['UpdateRequestItemResponse'],
      (variables?: UpdateRequestItemResponseVariables) => fetcher<UpdateRequestItemResponse, UpdateRequestItemResponseVariables>(client, UpdateRequestItemResponseDocument, variables, headers)(),
      options
    );
export const UpdateMstUserLocationDocument = /*#__PURE__*/ `
    mutation updateMstUserLocation($userId: Int!, $longitude: String, $latitude: String) {
  updateMstUserLocation(
    mstUserInfo: {userId: $userId, longitude: $longitude, latitude: $latitude}
  ) {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result {
      firstName
      lastName
      email
      streetAddress
      longitude
      latitude
      zipCode
      userProfileImage
    }
  }
}
    `;
export const useUpdateMstUserLocation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateMstUserLocation, TError, UpdateMstUserLocationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateMstUserLocation, TError, UpdateMstUserLocationVariables, TContext>(
      ['updateMstUserLocation'],
      (variables?: UpdateMstUserLocationVariables) => fetcher<UpdateMstUserLocation, UpdateMstUserLocationVariables>(client, UpdateMstUserLocationDocument, variables, headers)(),
      options
    );
export const UpdateMstUserDocument = /*#__PURE__*/ `
    mutation updateMstUser($userId: Int!, $latitude: String, $longitude: String, $streetAddress: String, $suburbId: Int, $cityId: Int, $provinceId: Int, $countryId: Int) {
  updateMstUsers(
    mstUsers: {userId: $userId, cityId: $cityId, countryId: $countryId, latitude: $latitude, longitude: $longitude, provinceId: $provinceId, streetAddress: $streetAddress, suburbId: $suburbId}
  ) {
    count
    currentPage
    message
    nextPage
    prevPage
    success
    totalPages
    result {
      firstName
      lastName
      email
      streetAddress
      provinceId
      cityId
      suburbId
      longitude
      latitude
      zipCode
      userProfileImage
    }
  }
}
    `;
export const useUpdateMstUser = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateMstUser, TError, UpdateMstUserVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateMstUser, TError, UpdateMstUserVariables, TContext>(
      ['updateMstUser'],
      (variables?: UpdateMstUserVariables) => fetcher<UpdateMstUser, UpdateMstUserVariables>(client, UpdateMstUserDocument, variables, headers)(),
      options
    );