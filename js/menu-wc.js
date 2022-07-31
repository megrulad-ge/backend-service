'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">@megrulad-ge/backend-service documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/ActivityModule.html" data-type="entity-link" >ActivityModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ActivityModule-3117f37bdeb4435305b4a7dbd5ae87c333c322bbcc6e7bd93ae8a7c8fef873472eac4ea7a2aa016b1a041601c33ee277ca58e34a830699d4dac2cb10d5954e96"' : 'data-target="#xs-injectables-links-module-ActivityModule-3117f37bdeb4435305b4a7dbd5ae87c333c322bbcc6e7bd93ae8a7c8fef873472eac4ea7a2aa016b1a041601c33ee277ca58e34a830699d4dac2cb10d5954e96"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ActivityModule-3117f37bdeb4435305b4a7dbd5ae87c333c322bbcc6e7bd93ae8a7c8fef873472eac4ea7a2aa016b1a041601c33ee277ca58e34a830699d4dac2cb10d5954e96"' :
                                        'id="xs-injectables-links-module-ActivityModule-3117f37bdeb4435305b4a7dbd5ae87c333c322bbcc6e7bd93ae8a7c8fef873472eac4ea7a2aa016b1a041601c33ee277ca58e34a830699d4dac2cb10d5954e96"' }>
                                        <li class="link">
                                            <a href="injectables/ActivityService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivityService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ConfigModule.html" data-type="entity-link" >ConfigModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DictionaryModule.html" data-type="entity-link" >DictionaryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-DictionaryModule-ac4702a45b59f32d55075ce0f47d7876ecc002924920ce99991f539d3d954d810044fcb67e7b17487185fb7503e5b0f1c8030c49c0dc539da99a7951706537b2"' : 'data-target="#xs-controllers-links-module-DictionaryModule-ac4702a45b59f32d55075ce0f47d7876ecc002924920ce99991f539d3d954d810044fcb67e7b17487185fb7503e5b0f1c8030c49c0dc539da99a7951706537b2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DictionaryModule-ac4702a45b59f32d55075ce0f47d7876ecc002924920ce99991f539d3d954d810044fcb67e7b17487185fb7503e5b0f1c8030c49c0dc539da99a7951706537b2"' :
                                            'id="xs-controllers-links-module-DictionaryModule-ac4702a45b59f32d55075ce0f47d7876ecc002924920ce99991f539d3d954d810044fcb67e7b17487185fb7503e5b0f1c8030c49c0dc539da99a7951706537b2"' }>
                                            <li class="link">
                                                <a href="controllers/DictionaryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DictionaryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DictionaryModule-ac4702a45b59f32d55075ce0f47d7876ecc002924920ce99991f539d3d954d810044fcb67e7b17487185fb7503e5b0f1c8030c49c0dc539da99a7951706537b2"' : 'data-target="#xs-injectables-links-module-DictionaryModule-ac4702a45b59f32d55075ce0f47d7876ecc002924920ce99991f539d3d954d810044fcb67e7b17487185fb7503e5b0f1c8030c49c0dc539da99a7951706537b2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DictionaryModule-ac4702a45b59f32d55075ce0f47d7876ecc002924920ce99991f539d3d954d810044fcb67e7b17487185fb7503e5b0f1c8030c49c0dc539da99a7951706537b2"' :
                                        'id="xs-injectables-links-module-DictionaryModule-ac4702a45b59f32d55075ce0f47d7876ecc002924920ce99991f539d3d954d810044fcb67e7b17487185fb7503e5b0f1c8030c49c0dc539da99a7951706537b2"' }>
                                        <li class="link">
                                            <a href="injectables/DictionaryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DictionaryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HealthModule.html" data-type="entity-link" >HealthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-HealthModule-2572c50d23ab05ceabc5336a7cacad813c192e71c5663cf9a255c58a86ea3e97e929f22bce17d5a18d34713719da671fb20b0edcddfe7b0eda96cca404eaf084"' : 'data-target="#xs-controllers-links-module-HealthModule-2572c50d23ab05ceabc5336a7cacad813c192e71c5663cf9a255c58a86ea3e97e929f22bce17d5a18d34713719da671fb20b0edcddfe7b0eda96cca404eaf084"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthModule-2572c50d23ab05ceabc5336a7cacad813c192e71c5663cf9a255c58a86ea3e97e929f22bce17d5a18d34713719da671fb20b0edcddfe7b0eda96cca404eaf084"' :
                                            'id="xs-controllers-links-module-HealthModule-2572c50d23ab05ceabc5336a7cacad813c192e71c5663cf9a255c58a86ea3e97e929f22bce17d5a18d34713719da671fb20b0edcddfe7b0eda96cca404eaf084"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoggerModule.html" data-type="entity-link" >LoggerModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LoggerModule-2cf9206d256d789b00eef8c163b558524d8c69fa66c3b4815963c03a1f878a65a8133f625e7361cefe197c701cfa666aea71bb35415a905fbfee00667c92ef31"' : 'data-target="#xs-injectables-links-module-LoggerModule-2cf9206d256d789b00eef8c163b558524d8c69fa66c3b4815963c03a1f878a65a8133f625e7361cefe197c701cfa666aea71bb35415a905fbfee00667c92ef31"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LoggerModule-2cf9206d256d789b00eef8c163b558524d8c69fa66c3b4815963c03a1f878a65a8133f625e7361cefe197c701cfa666aea71bb35415a905fbfee00667c92ef31"' :
                                        'id="xs-injectables-links-module-LoggerModule-2cf9206d256d789b00eef8c163b558524d8c69fa66c3b4815963c03a1f878a65a8133f625e7361cefe197c701cfa666aea71bb35415a905fbfee00667c92ef31"' }>
                                        <li class="link">
                                            <a href="injectables/LoggerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoggerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RequestModule.html" data-type="entity-link" >RequestModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SeederModule.html" data-type="entity-link" >SeederModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SeederModule-7d7c1277d87e7c49b0ce1baf25e3bc34316842ca2691a4b964364eb74da2e3d18c4ce201cb4430f767859283d9141484250cb4fb786c00e91b46ff57b649d2f7"' : 'data-target="#xs-injectables-links-module-SeederModule-7d7c1277d87e7c49b0ce1baf25e3bc34316842ca2691a4b964364eb74da2e3d18c4ce201cb4430f767859283d9141484250cb4fb786c00e91b46ff57b649d2f7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SeederModule-7d7c1277d87e7c49b0ce1baf25e3bc34316842ca2691a4b964364eb74da2e3d18c4ce201cb4430f767859283d9141484250cb4fb786c00e91b46ff57b649d2f7"' :
                                        'id="xs-injectables-links-module-SeederModule-7d7c1277d87e7c49b0ce1baf25e3bc34316842ca2691a4b964364eb74da2e3d18c4ce201cb4430f767859283d9141484250cb4fb786c00e91b46ff57b649d2f7"' }>
                                        <li class="link">
                                            <a href="injectables/SeederService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SeederService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TestSeedAlterSomeData.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TestSeedAlterSomeData</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SentryModule.html" data-type="entity-link" >SentryModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SetupModule.html" data-type="entity-link" >SetupModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TranslationModule.html" data-type="entity-link" >TranslationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TranslationModule-5728f19607c56e5c2ca8f6bf28727f80084a4643981d321061f686b69771956d54b8b6b8187521e58021f377088a19978a3c09bc06a38c99b2219b6b52f97fb1"' : 'data-target="#xs-controllers-links-module-TranslationModule-5728f19607c56e5c2ca8f6bf28727f80084a4643981d321061f686b69771956d54b8b6b8187521e58021f377088a19978a3c09bc06a38c99b2219b6b52f97fb1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TranslationModule-5728f19607c56e5c2ca8f6bf28727f80084a4643981d321061f686b69771956d54b8b6b8187521e58021f377088a19978a3c09bc06a38c99b2219b6b52f97fb1"' :
                                            'id="xs-controllers-links-module-TranslationModule-5728f19607c56e5c2ca8f6bf28727f80084a4643981d321061f686b69771956d54b8b6b8187521e58021f377088a19978a3c09bc06a38c99b2219b6b52f97fb1"' }>
                                            <li class="link">
                                                <a href="controllers/TranslationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TranslationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TranslationModule-5728f19607c56e5c2ca8f6bf28727f80084a4643981d321061f686b69771956d54b8b6b8187521e58021f377088a19978a3c09bc06a38c99b2219b6b52f97fb1"' : 'data-target="#xs-injectables-links-module-TranslationModule-5728f19607c56e5c2ca8f6bf28727f80084a4643981d321061f686b69771956d54b8b6b8187521e58021f377088a19978a3c09bc06a38c99b2219b6b52f97fb1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TranslationModule-5728f19607c56e5c2ca8f6bf28727f80084a4643981d321061f686b69771956d54b8b6b8187521e58021f377088a19978a3c09bc06a38c99b2219b6b52f97fb1"' :
                                        'id="xs-injectables-links-module-TranslationModule-5728f19607c56e5c2ca8f6bf28727f80084a4643981d321061f686b69771956d54b8b6b8187521e58021f377088a19978a3c09bc06a38c99b2219b6b52f97fb1"' }>
                                        <li class="link">
                                            <a href="injectables/TranslationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TranslationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Activity.html" data-type="entity-link" >Activity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Dictionary.html" data-type="entity-link" >Dictionary</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Seed.html" data-type="entity-link" >Seed</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Translation.html" data-type="entity-link" >Translation</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateDictionaryRequest.html" data-type="entity-link" >CreateDictionaryRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDictionaryResponse.html" data-type="entity-link" >CreateDictionaryResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTranslationRequest.html" data-type="entity-link" >CreateTranslationRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteDictionaryRequestParam.html" data-type="entity-link" >DeleteDictionaryRequestParam</a>
                            </li>
                            <li class="link">
                                <a href="classes/Env.html" data-type="entity-link" >Env</a>
                            </li>
                            <li class="link">
                                <a href="classes/FetchDictionaryRequestParam.html" data-type="entity-link" >FetchDictionaryRequestParam</a>
                            </li>
                            <li class="link">
                                <a href="classes/FetchDictionaryResponse.html" data-type="entity-link" >FetchDictionaryResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/FullyQualifiedUrlParser.html" data-type="entity-link" >FullyQualifiedUrlParser</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoggerUtils.html" data-type="entity-link" >LoggerUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/SearchDictionaryRequestParam.html" data-type="entity-link" >SearchDictionaryRequestParam</a>
                            </li>
                            <li class="link">
                                <a href="classes/TimestampsEntity.html" data-type="entity-link" >TimestampsEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDictionaryRequest.html" data-type="entity-link" >UpdateDictionaryRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDictionaryRequestParam.html" data-type="entity-link" >UpdateDictionaryRequestParam</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTranslationRequest.html" data-type="entity-link" >UpdateTranslationRequest</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/BaseSeed.html" data-type="entity-link" >BaseSeed</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExceptionInterceptor.html" data-type="entity-link" >ExceptionInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RequestInterceptor.html" data-type="entity-link" >RequestInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RequestService.html" data-type="entity-link" >RequestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SentryFactoryService.html" data-type="entity-link" >SentryFactoryService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/DictionaryCreated.html" data-type="entity-link" >DictionaryCreated</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DictionaryDeleted.html" data-type="entity-link" >DictionaryDeleted</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DictionaryUpdated.html" data-type="entity-link" >DictionaryUpdated</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditedBy.html" data-type="entity-link" >EditedBy</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SeedInterface.html" data-type="entity-link" >SeedInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TimestampsInterface.html" data-type="entity-link" >TimestampsInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TranslationProperties.html" data-type="entity-link" >TranslationProperties</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});