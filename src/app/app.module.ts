import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { APP_INITIALIZER } from '@angular/core';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
// formly
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { ArrayTypeComponent } from '../app/forms/types/array.type';
import { ObjectTypeComponent } from '../app/forms/types/object.type';
import { MultiSchemaTypeComponent } from '../app/forms/types/multischema.type';
import { FormlyTemplateType } from './forms/types/template.type';
import { NullTypeComponent } from '../app/forms/types/null.type';
import { AutocompleteTypeComponent } from '../app/forms/types/autocomplete.type';
import { FormlyColorInput } from '../app/forms/types/color.type';
import { initializeKeycloak } from './utility/app.init';
import { initLang } from './multilingual.init';
import { MatStepperModule } from '@angular/material/stepper';

//Local imports
import { FormsComponent } from './forms/forms.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { ModalRouterEditLinkDirective } from '../app/layouts/modal/modal.directive';
import { ModalRouterAddLinkDirective } from '../app/layouts/modal/modal.directive';
import { PanelsComponent } from './layouts/modal/panels/panels.component';
import { EditPanelComponent } from './layouts/modal/panels/edit-panel/edit-panel.component';
import { AddPanelComponent } from './layouts/modal/panels/add-panel/add-panel.component';
import { TablesComponent } from './tables/tables.component';
import { HeaderComponent } from './header/header.component';
import { FormlyFieldFile } from './forms/types/file.type';
import { FileValueAccessor } from './forms/types/file-value-accessor';
import { DocViewComponent } from './layouts/doc-view/doc-view.component';
import { FormlyFieldNgSelect } from './forms/types/multiselect.type';
// import { Bootstrap4FrameworkModule } from 'angular6-json-schema-form';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { AttestationComponent } from './tables/attestation/attestation.component';
import { InstallComponent } from './install/install.component';
import { HomeComponent } from './home/home.component';
import { FormlyHorizontalWrapper } from './forms/types/horizontal.wrapper';
import { AppConfig } from './app.config';
import { PanelWrapperComponent } from './forms/types/panel.type';
import { LogoutComponent } from './authentication/logout/logout.component';
import { SearchComponent } from '../app/discovery/search/search.component';
import { AuthConfigService } from './authentication/auth-config.service';
import { DocumentsComponent } from './documents/documents.component';
import { AddDocumentComponent } from './documents/add-document/add-document.component';
import { WebcamModule} from 'ngx-webcam';
import { ScanDocumentComponent } from './documents/scan-document/scan-document.component';
import { ScanQrCodeComponent } from './documents/scan-qr-code/scan-qr-code.component';
// import { QuarModule} from '@altack/quar';
import { BrowseDocumentsComponent } from './documents/browse-documents/browse-documents.component';

import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { config } from 'process';
import { ColorPickerModule } from 'ngx-color-picker';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';  

// import { VerifyModule} from 'vc-verification'

//form validations
export function minItemsValidationMessage(err, field: FormlyFieldConfig) {
  return `should NOT have fewer than ${field.props.minItems} items`;
}

export function maxItemsValidationMessage(err, field: FormlyFieldConfig) {
  return `should NOT have more than ${field.props.maxItems} items`;
}

export function minlengthValidationMessage(err, field: FormlyFieldConfig) {
  return `should NOT be shorter than ${field.props.minLength} characters`;
}

export function maxlengthValidationMessage(err, field: FormlyFieldConfig) {
  return `should NOT be longer than ${field.props.maxLength} characters`;
}

export function minValidationMessage(err, field: FormlyFieldConfig) {
  return `should be >= ${field.props.min}`;
}

export function maxValidationMessage(err, field: FormlyFieldConfig) {
  return `should be <= ${field.props.max}`;
}

export function multipleOfValidationMessage(err, field: FormlyFieldConfig) {
  return `should be multiple of ${field.props.step}`;
}

export function exclusiveMinimumValidationMessage(err, field: FormlyFieldConfig) {
  return `should be > ${field.props.step}`;
}

export function exclusiveMaximumValidationMessage(err, field: FormlyFieldConfig) {
  return `should be < ${field.props.step}`;
}

export function constValidationMessage(err, field: FormlyFieldConfig) {
  return `should be equal to constant "${field.props.const}"`;
}

export function errValidatorMessage(error: any, field: FormlyFieldConfig) {
  if (field.props.customMessage) {
    return field.props.customMessage;
  } else {
    return `Please Enter ${field.props.label}`;
  }
}

export function patternValidatorMessage(error: any, field: FormlyFieldConfig) {
  return `Please enter a valid ${field.props.label}`;
}

function initConfig(config: AppConfig) {
  return () => config.load()
}

import ISO6391 from 'iso-639-1';
import { PagesComponent } from './pages/pages.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import {AuthImagePipe} from '../app/layouts/doc-view/doc-view.component';
// import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { DocDetailViewComponent } from './documents/doc-detail-view/doc-detail-view.component';
// import { FaqComponent } from './custom-components/faq/faq.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { initTheme } from './theme.config';
import { DocTypesComponent } from './tables/doc-types/doc-types.component';
import { DashboardComponent } from './issure/dashboard/dashboard.component';
import { AddCertificateComponent } from './issure/add-certificate/add-certificate.component';
import { GetRecordsComponent } from './issure/get-records/get-records.component';
import { AddRecordsComponent } from './issure/add-records/add-records.component';
import { PreviewHtmlComponent } from './issure/preview-html/preview-html.component';
// import { CreateCertificateComponent } from './create-certificate/create-certificate.component';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { VerifyComponent } from './issure/verify/verify.component' 
// import { FormioModule } from 'angular-formio';
// import { NgxTextEditorModule } from 'ngx-text-editor';

import * as configData from '../assets/config/config.json';
import { AdvanceEditorComponent } from './issure/advance-editor/advance-editor.component';
import { BulkRecordsComponent } from './issure/bulk-records/bulk-records.component';
import { MaskPipe } from './mask.pipe';
console.log(configData['default']);

import { TooltipType } from './forms/types/tooltip.type';
import { FormlyFieldNgRadioButton } from './forms/types/rc-radio.type';
import { FormlyFieldMultiCheckbox } from './forms/types/rc-multicheckbox.type';
import { FormlyFieldStepper } from '../app/forms/types/stepper.type';


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    SearchComponent,
    ArrayTypeComponent,
    ObjectTypeComponent,
    MultiSchemaTypeComponent,
    NullTypeComponent,
    LayoutsComponent,
    ModalRouterEditLinkDirective,
    ModalRouterAddLinkDirective,
    PanelsComponent, EditPanelComponent, AddPanelComponent, TablesComponent,
    AutocompleteTypeComponent,
    FormlyColorInput,
    HeaderComponent,
    AttestationComponent,
    FileValueAccessor,
    FormlyFieldFile,
    DocViewComponent,
    FormlyFieldNgSelect,
    InstallComponent,
    HomeComponent,
    LogoutComponent,
    DocumentsComponent,
    AddDocumentComponent,
    ScanDocumentComponent,
    ScanQrCodeComponent,
    BrowseDocumentsComponent,
    AuthImagePipe,
    DocTypesComponent,
    SafeHtmlPipe,
    DashboardComponent,
    AddCertificateComponent,
    GetRecordsComponent,
    AddRecordsComponent,
    PreviewHtmlComponent,
    VerifyComponent,
    AdvanceEditorComponent,
    BulkRecordsComponent,
    MaskPipe,
FormlyTemplateType,
TooltipType,
FormlyFieldNgRadioButton,
FormlyFieldStepper
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbAccordionModule,
    FormlyBootstrapModule,
    KeycloakAngularModule,
    // Bootstrap4FrameworkModule,
    // AngularMultiSelectModule,
    NgSelectModule,
    MatStepperModule,
    HttpClientModule,
    TranslateModule.forRoot(),

    WebcamModule,
    ColorPickerModule,
    // QuarModule,
    // NgxExtendedPdfViewerModule,
    FormlyModule.forRoot({
      extras: { resetFieldOnHide: true },
      wrappers: [
        { name: 'form-field-horizontal', component: FormlyHorizontalWrapper },
        { name: 'panel', component: PanelWrapperComponent }
    ],
      validationMessages: [
        { name: 'required', message:  errValidatorMessage },
        { name: 'pattern', message: patternValidatorMessage },
        { name: 'minLength', message: minlengthValidationMessage },
        { name: 'maxLength', message: maxlengthValidationMessage }
           
      ],
      types: [
        { name: 'string', extends: 'input' },
        {
          name: 'number',
          extends: 'input',
          defaultOptions: {
            props: {
              type: 'number',
            },
          },
        },
        {
          name: 'integer',
          extends: 'input',
          defaultOptions: {
            props: {
              type: 'number',
            },
          },
        },
        { name: 'boolean', extends: 'checkbox' },
        { name: 'enum', extends: 'select' },
        { name: 'null', component: NullTypeComponent, wrappers: ['form-field'] },
        // { name: 'array', component: ArrayTypeComponent },
        { name: 'object', component: ObjectTypeComponent },
        { name: 'multischema', component: MultiSchemaTypeComponent },
        {
          name: 'autocomplete',
          component: AutocompleteTypeComponent
        },
        { name: 'file', component: FormlyFieldFile, wrappers: ['form-field'] },
        { name: 'multiselect', component: FormlyFieldNgSelect },
        { name: 'color', component: FormlyColorInput },
        { name: 'template', component: FormlyTemplateType },
        { name: 'tooltip', component: TooltipType },
        { name: 'rc-radio', component: FormlyFieldNgRadioButton},
        { name: 'rc-multicheckbox', component: FormlyFieldMultiCheckbox},
        { name: 'stepper', component: FormlyFieldStepper, wrappers: [] }
      ],
    }),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-full-width',
      preventDuplicates: true,
    }),
    NgxPaginationModule,
    NgJsonEditorModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    // VerifyModule.forChild(configData['default']),
    // FormioModule,
    // NgxTextEditorModule
  ],
  exports: [TranslateModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // entryComponents: [],
  bootstrap: [AppComponent],
  providers: [
    AppConfig,
    AuthImagePipe,
    { provide: APP_INITIALIZER, useFactory: initConfig, deps: [AppConfig], multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService, AuthConfigService],
    },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { floatLabel: 'always' } },
    {
      provide: APP_INITIALIZER,
      useFactory: initLang,
      deps: [HttpClient, TranslateService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initTheme,
      deps: [HttpClient, TranslateService],
      multi: true
    }]
})


export class AppModule {
  languages;
  constructor(translate: TranslateService, authConfig: AuthConfigService) {

    authConfig.getConfig().subscribe((config) => {
      this.languages = config.languages;
      var installed_languages = [];

      for (let i = 0; i < this.languages.length; i++) {
        installed_languages.push({
          "code": this.languages[i],
          "name": ISO6391.getNativeName(this.languages[i])
        });
      }

      localStorage.setItem('languages', JSON.stringify(installed_languages));
      translate.addLangs(this.languages);

      if (localStorage.getItem('setLanguage') && this.languages.includes(localStorage.getItem('setLanguage'))) {
        translate.use(localStorage.getItem('setLanguage'));

      } else {
        const browserLang = translate.getBrowserLang();
        let lang = this.languages.includes(browserLang) ? browserLang : 'en';
        translate.use(lang);
        localStorage.setItem('setLanguage', lang);
      }
    });

  }
}

