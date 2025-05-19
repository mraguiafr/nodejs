import {
  PoButtonComponent,
  PoButtonModule,
  PoCheckboxGroupComponent,
  PoComboComponent,
  PoComponentInjectorService,
  PoContainerComponent,
  PoContainerModule,
  PoDatepickerComponent,
  PoDialogModule,
  PoDialogService,
  PoDividerComponent,
  PoDividerModule,
  PoDynamicFieldType,
  PoDynamicFormComponent,
  PoDynamicModule,
  PoDynamicViewComponent,
  PoEmailComponent,
  PoFieldModule,
  PoGridComponent,
  PoGridModule,
  PoI18nPipe,
  PoIconComponent,
  PoIconModule,
  PoInfoComponent,
  PoInfoModule,
  PoInfoOrientation,
  PoInputComponent,
  PoLanguageModule,
  PoLanguageService,
  PoLoginComponent,
  PoLogoComponent,
  PoLogoModule,
  PoLookupComponent,
  PoModalComponent,
  PoModalModule,
  PoModule,
  PoNotificationService,
  PoNumberComponent,
  PoPageDefaultComponent,
  PoPageListComponent,
  PoPageModule,
  PoPasswordComponent,
  PoRadioGroupComponent,
  PoSelectComponent,
  PoStepperComponent,
  PoStepperModule,
  PoStepperOrientation,
  PoStepperStatus,
  PoSwitchComponent,
  PoTableColumnSortType,
  PoTableColumnSpacing,
  PoTableComponent,
  PoTableModule,
  PoTagComponent,
  PoTooltipDirective,
  PoWidgetComponent,
  PoWidgetModule,
  poLanguageDefault,
  poLocaleDefault,
  poLocales
} from "./chunk-5QVSMCO2.js";
import {
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-KD2VYQK6.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-EM534MIX.js";
import "./chunk-2CCQZLIZ.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-RUP4DXWU.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgTemplateOutlet
} from "./chunk-6EDOQP5T.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  EventEmitter,
  Injectable,
  Input,
  IterableDiffers,
  NgModule,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵsetNgModuleScope,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-SCZVKGZ3.js";
import {
  merge
} from "./chunk-XPU7EA6D.js";
import "./chunk-QN5HDKTT.js";
import {
  EMPTY,
  Observable,
  Subscription,
  catchError,
  concat,
  from,
  map,
  of,
  switchMap,
  tap,
  throwError
} from "./chunk-MHK6ZZQX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-5Q4GJRSR.js";

// node_modules/@po-ui/ng-templates/fesm2022/po-ui-ng-templates.mjs
function getBrowserLanguage() {
  return navigator.language || navigator["userLanguage"];
}
function getShortBrowserLanguage() {
  const language = (getBrowserLanguage() || poLocaleDefault).toLowerCase().substring(0, 2);
  if (!poLocales.includes(language)) {
    return poLocaleDefault;
  }
  return language;
}
function convertToBoolean(val) {
  if (typeof val === "string") {
    val = val.toLowerCase().trim();
    return val === "true" || val === "on" || val === "";
  }
  if (typeof val === "number") {
    return val === 1;
  }
  return !!val;
}
function convertToInt(value, valueDefault) {
  const validNumber = parseInt(value, 10);
  const validDefaultValue = parseInt(valueDefault, 10);
  const defaultValue = validDefaultValue || validDefaultValue === 0 ? validDefaultValue : void 0;
  return validNumber || validNumber === 0 ? validNumber : defaultValue;
}
function isTypeof(object, type) {
  return typeof object === type;
}
function convertDateToISOExtended(date, time) {
  if (date) {
    const getMonth = date.getMonth() + 1;
    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    const month = getMonth < 10 ? "0" + getMonth : getMonth;
    const year = formatYear(date.getFullYear());
    const dateString = date.toString();
    if (time) {
      return year + "-" + month + "-" + day + time;
    } else {
      return year + "-" + month + "-" + day + "T" + dateString.substring(16, 24) + dateString.substring(28, 31) + ":" + dateString.substring(31, 33);
    }
  } else {
    return null;
  }
}
function formatYear(year) {
  if (year >= 1e3) {
    return year.toString();
  }
  if (year > 99 && year < 1e3) {
    return `0${year}`;
  }
  if (year > 9 && year < 100) {
    return `00${year}`;
  }
  if (year >= 0 && year < 10) {
    return `000${year}`;
  }
}
function isExternalLink(url) {
  return url ? url.startsWith("http") : false;
}
function openExternalLink(url) {
  window.open(url, "_blank");
}
function capitalizeFirstLetter(text) {
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
}
function mapArrayByProperties(items = [], properties = []) {
  return items.map((item) => mapObjectByProperties(item, properties));
}
function mapObjectByProperties(object = {}, properties = []) {
  const getSelectedProperties = (selectedProperties, property) => __spreadProps(__spreadValues({}, selectedProperties), {
    [property]: object[property]
  });
  return properties.reduce(getSelectedProperties, {});
}
function valuesFromObject(object = {}) {
  return Object.keys(object).map((property) => object[property]);
}
function addZero(time) {
  if (!time) {
    return "00";
  }
  if (time < 10) {
    return `0${time}`;
  }
  return time;
}
function removeKeysProperties(keys, newItemValue) {
  keys.forEach((key) => delete newItemValue[key]);
  return newItemValue;
}
function removeDuplicateItemsWithArrayKey(item, item2, keys) {
  const newKey = keys.length ? keys : ["id"];
  const combinedArray = item.concat(item2);
  return combinedArray.filter((obj, index) => index === combinedArray.findIndex((innerObj) => newKey.every((key) => innerObj[key] === obj[key])));
}
function sortArrayOfObjects(items, key, isAscendingOrder) {
  return items.sort((a, b) => {
    const valueA = a[key];
    const valueB = b[key];
    if (typeof valueA === "number" && typeof valueB === "number") {
      return isAscendingOrder ? valueA - valueB : valueB - valueA;
    } else {
      const compareResult = valueA.toString().localeCompare(valueB.toString());
      return isAscendingOrder ? compareResult : -compareResult;
    }
  });
}
var poModalPasswordRecoveryLiterals = {
  en: {
    cancelButton: "Cancel",
    closeButton: "Close",
    continueButton: "Continue",
    email: "e-mail",
    emailErrorMessagePhrase: "Invalid e-mail format",
    emailSentConfirmationPhrase: `We have sent the instructions and new password creation link to your e-mail.
    If you did not receive it after a few minutes, check your spam box or click Resend.`,
    emailSentTitle: "E-mail sent",
    forgotPasswordTitle: "Forgot your password?",
    insertCode: "Type the code",
    insertEmail: "Enter your e-mail",
    insertPhone: "Enter your mobile number",
    phoneErrorMessagePhrase: "Invalid phone number",
    prepositionIn: "in",
    prepositionOr: "or",
    recoveryPasswordPhrase: "To recover your password we will send you a {0} with instructions.",
    resendEmailButton: "Resend",
    resendSmsCodePhrase: "If the code does not arrive within a few minutes, please send it again.",
    sendAgainPhrase: "If the code does not arrive within a few minutes",
    sendAgain: "send again.",
    sendButton: "Submit",
    sentSmsCodePhrase: "We sent a code for your mobile phone.",
    sms: "SMS",
    smsCodeErrorMessagePhrase: "Invalid code. Please re-enter or contact support",
    supportContact: "If you do not have access to {0} contact support",
    telephone: "telephone",
    typeCodeTitle: "Enter sent code"
  },
  es: {
    cancelButton: "Cancelar",
    closeButton: "Cerrar",
    continueButton: "Continuar",
    email: "e-mail",
    emailErrorMessagePhrase: "Formato de correo electrónico no válido",
    emailSentConfirmationPhrase: `Enviamos las instrucciones y enlace de creación de nueva contraseña para su correo electrónico.
    Si no ha recibido después de unos minutos, compruebe su caja de spam o haga clic en Reenviar`,
    emailSentTitle: "E-mail enviado",
    forgotPasswordTitle: "Olvidaste tu contraseña?",
    insertCode: "Introduzca el código",
    insertEmail: "Introduce tu e-mail",
    insertPhone: "Introduce tu número de celular",
    phoneErrorMessagePhrase: "Número de teléfono no válido",
    prepositionIn: "en",
    prepositionOr: "u",
    recoveryPasswordPhrase: "Para recuperar su contraseña vamos a enviar un {0} con instrucciones.",
    resendEmailButton: "Reenviar",
    resendSmsCodePhrase: "Si el código no llega dentro de unos minutos, vuelva a enviar.",
    sendAgain: "envíe de nuevo.",
    sendAgainPhrase: "Si el código no llega dentro de unos minutos",
    sendButton: "Enviar",
    sentSmsCodePhrase: "Enviamos un código para su celular.",
    sms: "SMS",
    smsCodeErrorMessagePhrase: "Código no válido. Escriba de nuevo o póngase en contacto con el soporte",
    supportContact: "Si no tiene acceso a {0} póngase en contacto con el soporte",
    telephone: "teléfono",
    typeCodeTitle: "Escribir código enviado"
  },
  pt: {
    cancelButton: "Cancelar",
    closeButton: "Fechar",
    continueButton: "Continuar",
    email: "e-mail",
    emailErrorMessagePhrase: "Formato de e-mail inválido",
    emailSentConfirmationPhrase: `Enviamos as instruções e link de criação de nova senha para o seu e-mail.
    Caso não tenha recebido após alguns minutos, verifique sua caixa de spam ou clique em Reenviar.`,
    emailSentTitle: "E-mail enviado",
    forgotPasswordTitle: "Esqueceu sua senha?",
    insertCode: "Digite o código",
    insertEmail: "Insira seu e-mail",
    insertPhone: "Insira seu número de celular",
    phoneErrorMessagePhrase: "Número de telefone inválido",
    prepositionIn: "em",
    prepositionOr: "ou",
    recoveryPasswordPhrase: "Para recuperar sua senha vamos enviar um {0} com instruções.",
    resendEmailButton: "Reenviar",
    resendSmsCodePhrase: "Se o código não chegar dentro de alguns minutos envie novamente",
    sendAgain: "envie novamente.",
    sendAgainPhrase: "Se o código não chegar dentro de alguns minutos",
    sendButton: "Enviar",
    sentSmsCodePhrase: "Enviamos um código para seu celular cadastrado.",
    sms: "SMS",
    smsCodeErrorMessagePhrase: "Código inválido. Digite novamente ou contacte o suporte",
    supportContact: "Se não tiver acesso ao {0} contacte o suporte",
    telephone: "telefone",
    typeCodeTitle: "Digitar código enviado"
  },
  ru: {
    cancelButton: "отменить",
    closeButton: "близко",
    continueButton: "близко",
    email: "по электронной почте",
    emailErrorMessagePhrase: "Неверный формат электронной почты",
    emailSentConfirmationPhrase: `Мы отправили инструкции и новую ссылку для создания пароля для вашей электронной почты.
Если вы не получили его в течение нескольких минут, установите флажок Спам или нажмите Далее.`,
    emailSentTitle: "Письмо отправлено",
    forgotPasswordTitle: "Забыли пароль?",
    insertCode: "Введите код",
    insertEmail: "Введите адрес электронной почты",
    insertPhone: "Введите номер вашего мобильного телефона",
    phoneErrorMessagePhrase: "Неверный номер телефона",
    prepositionIn: "в",
    prepositionOr: "или",
    recoveryPasswordPhrase: "Для восстановления вашего пароля мы вышлем {0} с инструкциями.",
    resendEmailButton: "Отправить еще раз",
    resendSmsCodePhrase: "Если код не приходит через несколько минут, попробуйте еще раз.",
    sendAgain: "отправить снова.",
    sendAgainPhrase: "Если код не приходит через несколько минут",
    sendButton: "послать",
    sentSmsCodePhrase: "Мы отправляем код на ваш зарегистрированный мобильный телефон.",
    sms: "SMS",
    smsCodeErrorMessagePhrase: "Неверный код. Повторите или обратитесь в службу поддержки",
    supportContact: "Если у вас нет доступа к {0}, обратитесь в службу поддержки",
    telephone: "телефон",
    typeCodeTitle: "Введите отправленный код"
  }
};
var PoModalPasswordRecoveryType;
(function(PoModalPasswordRecoveryType2) {
  PoModalPasswordRecoveryType2["All"] = "all";
  PoModalPasswordRecoveryType2["Email"] = "email";
  PoModalPasswordRecoveryType2["SMS"] = "sms";
})(PoModalPasswordRecoveryType || (PoModalPasswordRecoveryType = {}));
var PoModalPasswordRecoveryDefaultMaxLength = 15;
var PoModalPasswordRecoveryDefaultMinLength = 15;
var PoModalPasswordRecoveryDefaultPhone = "(99) 99999-9999";
var PoModalPasswordRecoveryTypeDefault = PoModalPasswordRecoveryType.Email;
var PoModalPasswordRecoveryBaseComponent = class _PoModalPasswordRecoveryBaseComponent {
  /**
   * @optional
   *
   * @description
   *
   * Definição de mensagem de erro customizada para quando o usuário passar um código SMS inválido ou errado.
   */
  codeError;
  /**
   * @optional
   *
   * @description
   *
   * Endpoint usado pelo template para requisição do recurso. Quando preenchido,
   * o métodos `p-submit` e `p-submit-code` serão ignorados e o componente adquirirá automatização
   * para o processo de solicitação de troca de senha.
   *
   * ### Processos
   * Ao digitar um valor válido no campo de email/telefone e pressionar **enviar**,
   * o componente fará uma requisição `POST` na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usuário.
   *
   * ```
   * body {
   *  email: email,
   *  retry?: retry
   * }
   * ```
   *
   *
   * #### Recuperação por email
   * Para a recuperação de senha por **email**, o código de resposta HTTP de status esperado é `204`.
   *
   * Em caso de **sucesso**, será exibida a modal de confirmação de e-mail para o usuário.
   *
   *
   * > A ação **Reenviar** na tela de confirmação efetua uma nova requisição
   * passando-se o objeto com incremento para o valor da propriedade **retry**.
   *
   * *Processo finalizado.*
   *
   *
   * #### Recuperação por SMS
   * Se a opção de recuperação for por **SMS**, o código de status de sucesso deve ser `200`.
   * Em caso de **sucesso**, abre-se a modal de digitação de código SMS e a resposta
   * desta requisição deve retornar uma definição de dados abaixo:
   *
   * ```
   * 200:
   *  {
   *    hash: hash,
   *    urlValidationCode?: url
   *  }
   * ```
   *
   *
   * - O **hash** será o código de validação da solicitação do SMS para ser enviado juntamente com o código de verificação do SMS;
   * - **urlValidationCode** é a url usada para validação do código enviado por SMS.
   *
   *
   * > Caso não seja passado urlValidationCode, o endpoint usado para validação do código será `<p-url-recovery>/validation`.
   *
   *
   * #### Validação do código SMS
   * Ao digitar um valor válido no campo de código SMS e pressionar **continuar**, o componente fará uma requisição `POST` contendo:
   *
   * ```
   * POST /<p-url-recovery>/validation OU /<urlValidationCode>
   * Body {
   *  hash: hash,
   *  code: code
   * }
   * ```
   *
   *
   * O código de resposta HTTP de status esperado é `200`.
   *
   * Em caso de **erro** na validação do código SMS, a modal se mantém com o campo para digitação
   * de código SMS
   *
   *
   * > Pode-se atribuir a mensagem de erro (message) para o atributo `p-code-error` conforme retorno abaixo:
   *
   * ```
   * 400
   *  {
   *    error {
   *      message: 'Error Message'
   *    }
   *  }
   * ```
   *
   *
   * Em caso de **sucesso**, espera-se a resposta desta requisição retornando a seguinte definição:
   *
   * ```
   * 200:
   *  {
   *    token: token,
   *    urlChangePassword?: url
   *  }
   * ```
   *
   *
   * - **token**: Token de alteração de senha;
   * - **urlChangePassword**: url para o formulário de alteração de senha.
   *
   *
   * O componente está configurado para redirecionar para a url estabelecida em `urlChangePassword`.
   *
   * > Caso não seja passado valor para urlChangePassword,
   * a url usada para validação será a `<p-url-recovery>/changePassword?token=<token>`.
   *
   * *Processo finalizado.*
   */
  urlRecovery;
  /**
   * @optional
   *
   * @description
   *
   * Ação contendo como parâmetro o código enviado por SMS e digitado pelo usuário.
   *
   * > Esta propriedade será ignorada se for definido valor para a propriedade `p-url-recovery`.
   */
  codeSubmit = new EventEmitter();
  /**
   * @optional
   *
   * @description
   *
   * Ação contendo o email como parâmetro e que é executada quando o usuário clica sobres os botões de 'enviar' e 'reenviar' e-mail.
   *
   * > Esta propriedade será ignorada se for definido valor para a propriedade `p-url-recovery`.
   */
  submit = new EventEmitter();
  email;
  maxLength = PoModalPasswordRecoveryDefaultMaxLength;
  minLength = PoModalPasswordRecoveryDefaultMinLength;
  modalPasswordRecoveryTypeAll;
  phone;
  smsCode;
  smsCodeErrorMessage;
  literals = poModalPasswordRecoveryLiterals[poLocaleDefault];
  _contactEmail;
  _phoneMask = PoModalPasswordRecoveryDefaultPhone;
  _type = PoModalPasswordRecoveryTypeDefault;
  /**
   * @optional
   *
   * @description
   *
   * Definição do e-mail que é exibido na mensagem para contato de suporte.
   */
  set contactEmail(value) {
    this._contactEmail = value;
    this.smsCodeErrorMessage = this.concatenateSMSErrorMessage(value);
  }
  get contactEmail() {
    return this._contactEmail;
  }
  /**
   * @optional
   *
   * @description
   *
   * Definição da mascara do campo de telefone.
   *
   * @default `(99) 99999-9999`
   */
  set phoneMask(value) {
    this._phoneMask = value || PoModalPasswordRecoveryDefaultPhone;
    this.minLength = this.maxLength = this._phoneMask.length;
  }
  get phoneMask() {
    return this._phoneMask;
  }
  /**
   * @optional
   *
   * @description
   *
   * Define o tipo de recuperação de senha que será exibido.
   *
   * @default `PoModalPasswordRecoveryType.Email`
   *
   */
  set type(value) {
    this._type = Object.values(PoModalPasswordRecoveryType).includes(value) ? value : PoModalPasswordRecoveryTypeDefault;
  }
  get type() {
    return this._type;
  }
  constructor(languageService) {
    this.literals = __spreadValues(__spreadValues({}, this.literals), poModalPasswordRecoveryLiterals[languageService.getShortLanguage()]);
  }
  concatenateSMSErrorMessage(value) {
    const literalCodeErrorMessage = this.literals.smsCodeErrorMessagePhrase;
    return value && value !== "" ? `${literalCodeErrorMessage} ${this.literals.prepositionIn} ${value}.` : literalCodeErrorMessage;
  }
  static ɵfac = function PoModalPasswordRecoveryBaseComponent_Factory(t) {
    return new (t || _PoModalPasswordRecoveryBaseComponent)(ɵɵdirectiveInject(PoLanguageService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _PoModalPasswordRecoveryBaseComponent,
    inputs: {
      codeError: [0, "p-code-error", "codeError"],
      urlRecovery: [0, "p-url-recovery", "urlRecovery"],
      contactEmail: [0, "p-contact-email", "contactEmail"],
      phoneMask: [0, "p-phone-mask", "phoneMask"],
      type: [0, "p-type", "type"]
    },
    outputs: {
      codeSubmit: "p-code-submit",
      submit: "p-submit"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoModalPasswordRecoveryBaseComponent, [{
    type: Directive
  }], () => [{
    type: PoLanguageService
  }], {
    codeError: [{
      type: Input,
      args: ["p-code-error"]
    }],
    urlRecovery: [{
      type: Input,
      args: ["p-url-recovery"]
    }],
    codeSubmit: [{
      type: Output,
      args: ["p-code-submit"]
    }],
    submit: [{
      type: Output,
      args: ["p-submit"]
    }],
    contactEmail: [{
      type: Input,
      args: ["p-contact-email"]
    }],
    phoneMask: [{
      type: Input,
      args: ["p-phone-mask"]
    }],
    type: [{
      type: Input,
      args: ["p-type"]
    }]
  });
})();
var PoModalPasswordRecoveryModalContent;
(function(PoModalPasswordRecoveryModalContent2) {
  PoModalPasswordRecoveryModalContent2["Email"] = "email";
  PoModalPasswordRecoveryModalContent2["SMSCode"] = "smsCode";
  PoModalPasswordRecoveryModalContent2["Confirmation"] = "confirmation";
})(PoModalPasswordRecoveryModalContent || (PoModalPasswordRecoveryModalContent = {}));
var PoModalPasswordRecoveryService = class _PoModalPasswordRecoveryService {
  http;
  constructor(http) {
    this.http = http;
  }
  post(urlRecovery, item, params) {
    return this.http.post(urlRecovery, item, {
      observe: "response",
      params
    });
  }
  static ɵfac = function PoModalPasswordRecoveryService_Factory(t) {
    return new (t || _PoModalPasswordRecoveryService)(ɵɵinject(HttpClient));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _PoModalPasswordRecoveryService,
    factory: _PoModalPasswordRecoveryService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoModalPasswordRecoveryService, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }], null);
})();
var PoModalPasswordRecoveryErrorMessageComponent = class _PoModalPasswordRecoveryErrorMessageComponent {
  /** Texto exibido na mensagem de erro. */
  text;
  static ɵfac = function PoModalPasswordRecoveryErrorMessageComponent_Factory(t) {
    return new (t || _PoModalPasswordRecoveryErrorMessageComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PoModalPasswordRecoveryErrorMessageComponent,
    selectors: [["po-modal-password-recovery-error-message"]],
    inputs: {
      text: [0, "p-text", "text"]
    },
    decls: 4,
    vars: 1,
    consts: [[1, "po-field-container-bottom-text-error", "po-field-container-error-item"], ["p-icon", "ICON_EXCLAMATION"], [1, "po-field-container-error-text"]],
    template: function PoModalPasswordRecoveryErrorMessageComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelement(1, "po-icon", 1);
        ɵɵelementStart(2, "span", 2);
        ɵɵtext(3);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵadvance(3);
        ɵɵtextInterpolate(ctx.text);
      }
    },
    dependencies: [PoIconComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoModalPasswordRecoveryErrorMessageComponent, [{
    type: Component,
    args: [{
      selector: "po-modal-password-recovery-error-message",
      template: '<div class="po-field-container-bottom-text-error po-field-container-error-item">\n  <po-icon p-icon="ICON_EXCLAMATION"></po-icon>\n  <span class="po-field-container-error-text">{{ text }}</span>\n</div>\n'
    }]
  }], null, {
    text: [{
      type: Input,
      args: ["p-text"]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(PoModalPasswordRecoveryErrorMessageComponent, {
    className: "PoModalPasswordRecoveryErrorMessageComponent",
    filePath: "lib/components/po-modal-password-recovery/po-modal-password-recovery-error-message/po-modal-password-recovery-error-message.component.ts",
    lineNumber: 14
  });
})();
var _c0$9 = ["emailForm"];
var _c1$6 = ["recoveryModal"];
var _c2$4 = ["smsCodeForm"];
function PoModalPasswordRecoveryComponent_div_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "po-radio-group", 18);
    ɵɵtwoWayListener("ngModelChange", function PoModalPasswordRecoveryComponent_div_3_div_6_Template_po_radio_group_ngModelChange_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      ɵɵtwoWayBindingSet(ctx_r1.chosenTypeFormOption, $event) || (ctx_r1.chosenTypeFormOption = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("p-change", function PoModalPasswordRecoveryComponent_div_3_div_6_Template_po_radio_group_p_change_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.getInputType($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtwoWayProperty("ngModel", ctx_r1.chosenTypeFormOption);
    ɵɵproperty("p-options", ctx_r1.typeFormOptions);
  }
}
function PoModalPasswordRecoveryComponent_div_3_po_email_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "po-email", 19);
    ɵɵtwoWayListener("ngModelChange", function PoModalPasswordRecoveryComponent_div_3_po_email_8_Template_po_email_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      ɵɵtwoWayBindingSet(ctx_r1.email, $event) || (ctx_r1.email = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("p-change-model", function PoModalPasswordRecoveryComponent_div_3_po_email_8_Template_po_email_p_change_model_0_listener() {
      ɵɵrestoreView(_r3);
      ɵɵnextContext();
      const emailForm_r4 = ɵɵreference(5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.formModelChangesCheck(emailForm_r4));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵtwoWayProperty("ngModel", ctx_r1.email);
    ɵɵproperty("p-label", ctx_r1.literals.insertEmail);
  }
}
function PoModalPasswordRecoveryComponent_div_3_po_input_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "po-input", 20);
    ɵɵtwoWayListener("ngModelChange", function PoModalPasswordRecoveryComponent_div_3_po_input_9_Template_po_input_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      ɵɵtwoWayBindingSet(ctx_r1.phone, $event) || (ctx_r1.phone = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("p-change-model", function PoModalPasswordRecoveryComponent_div_3_po_input_9_Template_po_input_p_change_model_0_listener() {
      ɵɵrestoreView(_r5);
      ɵɵnextContext();
      const emailForm_r4 = ɵɵreference(5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.formModelChangesCheck(emailForm_r4));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵtwoWayProperty("ngModel", ctx_r1.phone);
    ɵɵproperty("p-label", ctx_r1.literals.insertPhone)("p-mask", ctx_r1.phoneMask)("p-maxlength", ctx_r1.maxLength)("p-minlength", ctx_r1.minLength);
  }
}
function PoModalPasswordRecoveryComponent_div_3_po_modal_password_recovery_error_message_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "po-modal-password-recovery-error-message", 21);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("p-text", ctx_r1.type === "sms" ? ctx_r1.literals.phoneErrorMessagePhrase : ctx_r1.literals.emailErrorMessagePhrase);
  }
}
function PoModalPasswordRecoveryComponent_div_3_span_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementStart(2, "a", 22);
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.literals.prepositionIn, " ");
    ɵɵadvance();
    ɵɵpropertyInterpolate1("href", "mailto:", ctx_r1.contactEmail, "", ɵɵsanitizeUrl);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.contactEmail, " ");
  }
}
function PoModalPasswordRecoveryComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8)(1, "div", 9);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 10)(4, "form", null, 1);
    ɵɵtemplate(6, PoModalPasswordRecoveryComponent_div_3_div_6_Template, 2, 2, "div", 11);
    ɵɵelementStart(7, "div", 12);
    ɵɵtemplate(8, PoModalPasswordRecoveryComponent_div_3_po_email_8_Template, 1, 2, "po-email", 13)(9, PoModalPasswordRecoveryComponent_div_3_po_input_9_Template, 1, 5, "po-input", 14);
    ɵɵelementEnd();
    ɵɵelementStart(10, "div", 15);
    ɵɵtemplate(11, PoModalPasswordRecoveryComponent_div_3_po_modal_password_recovery_error_message_11_Template, 1, 1, "po-modal-password-recovery-error-message", 16);
    ɵɵelementEnd()()();
    ɵɵelementStart(12, "div", 17);
    ɵɵtext(13);
    ɵɵtemplate(14, PoModalPasswordRecoveryComponent_div_3_span_14_Template, 4, 4, "span", 11);
    ɵɵtext(15);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1.emailModalPhrases.firstPhrase, " ");
    ɵɵadvance(4);
    ɵɵproperty("ngIf", ctx_r1.modalPasswordRecoveryTypeAll);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.type === "email" || ctx_r1.type === "all");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.type === "sms");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.invalidEmail && ctx_r1.control.dirty);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1.emailModalPhrases.secondPhrase, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.contactEmail);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.endpoint, " ");
  }
}
function PoModalPasswordRecoveryComponent_div_4_po_modal_password_recovery_error_message_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "po-modal-password-recovery-error-message", 21);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("p-text", ctx_r1.smsCodeErrorMessage || ctx_r1.literals.smsCodeErrorMessagePhrase);
  }
}
function PoModalPasswordRecoveryComponent_div_4_po_modal_password_recovery_error_message_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "po-modal-password-recovery-error-message", 21);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("p-text", ctx_r1.codeError);
  }
}
function PoModalPasswordRecoveryComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8, 2)(2, "div", 9);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 10)(5, "form", null, 3)(7, "po-input", 23);
    ɵɵtwoWayListener("ngModelChange", function PoModalPasswordRecoveryComponent_div_4_Template_po_input_ngModelChange_7_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.smsCode, $event) || (ctx_r1.smsCode = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("p-change-model", function PoModalPasswordRecoveryComponent_div_4_Template_po_input_p_change_model_7_listener() {
      ɵɵrestoreView(_r6);
      const smsCodeForm_r7 = ɵɵreference(6);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.formModelChangesCheck(smsCodeForm_r7));
    });
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 15);
    ɵɵtemplate(9, PoModalPasswordRecoveryComponent_div_4_po_modal_password_recovery_error_message_9_Template, 1, 1, "po-modal-password-recovery-error-message", 16)(10, PoModalPasswordRecoveryComponent_div_4_po_modal_password_recovery_error_message_10_Template, 1, 1, "po-modal-password-recovery-error-message", 16);
    ɵɵelementEnd()()();
    ɵɵelementStart(11, "div", 17);
    ɵɵtext(12);
    ɵɵelementStart(13, "span", 24);
    ɵɵlistener("click", function PoModalPasswordRecoveryComponent_div_4_Template_span_click_13_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.resendSmsCode());
    });
    ɵɵtext(14);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r1.literals.sentSmsCodePhrase);
    ɵɵadvance(4);
    ɵɵtwoWayProperty("ngModel", ctx_r1.smsCode);
    ɵɵproperty("p-label", ctx_r1.literals.insertCode)("p-mask", ctx_r1.codeMask);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.invalidEmail);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showCustomCodeError);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1.literals.sendAgainPhrase, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.literals.sendAgain);
  }
}
function PoModalPasswordRecoveryComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8, 4);
    ɵɵelement(2, "img", 25);
    ɵɵelementStart(3, "div", 26);
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ctx_r1.literals.emailSentConfirmationPhrase, " ");
  }
}
var PoModalPasswordRecoveryComponent = class _PoModalPasswordRecoveryComponent extends PoModalPasswordRecoveryBaseComponent {
  router;
  poI18nPipe;
  poModalPasswordRecoveryService;
  emailForm;
  recoveryModalElement;
  smsCodeForm;
  chosenTypeFormOption = PoModalPasswordRecoveryType.Email;
  codeMask = "9 9 9 9 9 9";
  control;
  emailModal = true;
  emailModalPhrases = {
    firstPhrase: null,
    secondPhrase: null
  };
  endpoint = ".";
  invalidCode = false;
  invalidEmail = false;
  modalTitle;
  modalType = PoModalPasswordRecoveryModalContent.Email;
  showCustomCodeError;
  smsCodeErrorMessagePhrase;
  submittedCodeValue = {};
  submittedContactValue = {};
  primaryAction = {
    label: void 0,
    action: () => {
    }
  };
  secondaryAction = {
    label: void 0,
    action: () => {
    }
  };
  typeFormOptions = [{
    label: "e-mail",
    value: PoModalPasswordRecoveryType.Email
  }, {
    label: "SMS",
    value: PoModalPasswordRecoveryType.SMS
  }];
  passwordRecoverySubscription;
  smsBodyResponse;
  smsCodeSubscription;
  constructor(router, poI18nPipe, poModalPasswordRecoveryService, poLanguageService) {
    super(poLanguageService);
    this.router = router;
    this.poI18nPipe = poI18nPipe;
    this.poModalPasswordRecoveryService = poModalPasswordRecoveryService;
  }
  ngOnDestroy() {
    if (this.passwordRecoverySubscription) {
      this.passwordRecoverySubscription.unsubscribe();
    }
    if (this.smsCodeSubscription) {
      this.smsCodeSubscription.unsubscribe();
    }
  }
  completed() {
    this.cancelAction();
  }
  formModelChangesCheck(form) {
    const invalidForm = form.invalid;
    this.invalidEmail = invalidForm && form.dirty;
    this.primaryAction.disabled = invalidForm;
    if (this.modalType === PoModalPasswordRecoveryModalContent.SMSCode) {
      const codeError = this.codeError !== void 0 && this.codeError !== "";
      this.showCustomCodeError = codeError && form.pristine;
    }
  }
  getInputType(type) {
    this.type = type;
    this.pipeModalPhrases();
    setTimeout(() => {
      this.control = this.emailForm.controls[type];
      this.formModelChangesCheck(this.emailForm);
      this.resetFormFields(this.control);
    });
  }
  open() {
    const control = this.checkFormType(this.type);
    this.control = this.emailForm.controls[control];
    this.setEmailModalPhrasesAndActions();
    this.formModelChangesCheck(this.emailForm);
    this.recoveryModalElement.open();
  }
  openConfirmation() {
    this.modalTitle = this.literals.emailSentTitle;
    this.modalType = PoModalPasswordRecoveryModalContent.Confirmation;
    this.setActions(this.cancelAction, this.literals.closeButton, this.submitAction, this.literals.resendEmailButton, false);
  }
  openSmsCode() {
    this.modalTitle = this.literals.typeCodeTitle;
    this.modalType = PoModalPasswordRecoveryModalContent.SMSCode;
    this.setActions(this.submitSmsCodeAction, this.literals.continueButton, this.cancelAction, this.literals.cancelButton, true);
    setTimeout(() => {
      this.control = this.smsCodeForm.controls["sms"];
      this.formModelChangesCheck(this.smsCodeForm);
    });
  }
  resendSmsCode() {
    this.incrementRetryAttempts();
    if (this.urlRecovery) {
      this.submitActionRequest(this.submittedContactValue, this.type);
    } else {
      this.submit.emit(this.submittedContactValue);
    }
  }
  assignSmsResponse(responseObj) {
    this.smsBodyResponse = Object.assign({}, {
      hash: responseObj.hash
    });
    if (responseObj.urlValidationCode) {
      this.smsBodyResponse = Object.assign(this.smsBodyResponse, {
        urlValidationCode: responseObj.urlValidationCode
      });
    }
  }
  cancelAction() {
    this.resetFormFields(this.control);
    this.submittedContactValue = {};
    this.chosenTypeFormOption = PoModalPasswordRecoveryType.Email;
    this.modalType = PoModalPasswordRecoveryModalContent.Email;
    this.type = this.modalPasswordRecoveryTypeAll ? PoModalPasswordRecoveryType.All : this.type;
    this.recoveryModalElement.close();
  }
  checkFormType(type) {
    return type !== PoModalPasswordRecoveryType.All ? type : PoModalPasswordRecoveryType.Email;
  }
  formReset(control) {
    control.markAsPristine();
    control.markAsUntouched();
    control.updateValueAndValidity();
  }
  getEmitValue(type) {
    return type === PoModalPasswordRecoveryType.SMS ? this.phone : this.email;
  }
  incrementRetryAttempts() {
    this.submittedContactValue.retry = this.submittedContactValue.retry + 1 || 1;
  }
  openExternalLink(url, queryParam) {
    window.open(`${url}?token=${queryParam}`, "_self");
  }
  openInternalLink(url, endpoint, queryParam) {
    this.router.navigate([`${url}/${endpoint}`], {
      queryParams: {
        token: queryParam
      }
    });
  }
  pipeModalPhrases() {
    if (this.type === PoModalPasswordRecoveryType.SMS) {
      this.emailModalPhrases.firstPhrase = this.setPipeArguments(this.literals.recoveryPasswordPhrase, this.literals.sms);
      this.emailModalPhrases.secondPhrase = this.setPipeArguments(this.literals.supportContact, this.literals.telephone);
    } else {
      this.emailModalPhrases.firstPhrase = this.setPipeArguments(this.literals.recoveryPasswordPhrase, this.literals.email);
      this.emailModalPhrases.secondPhrase = this.setPipeArguments(this.literals.supportContact, this.literals.email);
    }
  }
  redirectToChangePassword(recoveryToken) {
    const urlChangePassword = recoveryToken.urlChangePassword;
    if (urlChangePassword) {
      isExternalLink(urlChangePassword) ? this.openExternalLink(urlChangePassword, recoveryToken.token) : this.openInternalLink(this.urlRecovery, urlChangePassword, recoveryToken.token);
    } else {
      const changePasswordEndpoint = "changePassword";
      this.openInternalLink(this.urlRecovery, changePasswordEndpoint, recoveryToken.token);
    }
  }
  resetFormFields(control) {
    this.formReset(control);
    this.email = void 0;
    this.phone = void 0;
    this.smsCode = void 0;
  }
  setActions(primaryAction, primarylabel, secondaryAction, secondaryLabel, disabled) {
    this.primaryAction.action = () => primaryAction.call(this);
    this.primaryAction.label = primarylabel;
    this.secondaryAction.action = () => secondaryAction.call(this);
    this.secondaryAction.label = secondaryLabel;
    this.primaryAction.disabled = disabled;
  }
  setEmailModalPhrasesAndActions() {
    this.modalTitle = this.literals.forgotPasswordTitle;
    this.pipeModalPhrases();
    this.modalPasswordRecoveryTypeAll = this.type === PoModalPasswordRecoveryType.All;
    this.setActions(this.submitAction, this.literals.sendButton, this.cancelAction, this.literals.cancelButton, true);
  }
  setRequestEndpoint(urlValidationCode) {
    const endpoint = urlValidationCode || "validation";
    return `${this.urlRecovery}/${endpoint}`;
  }
  setPipeArguments(literalAttr, arg) {
    return this.poI18nPipe.transform(literalAttr, arg);
  }
  submitAction() {
    this.modalType === PoModalPasswordRecoveryModalContent.Confirmation ? this.incrementRetryAttempts() : this.formReset(this.control);
    this.submittedContactValue[this.checkFormType(this.type)] = this.getEmitValue(this.type);
    if (this.urlRecovery) {
      this.submitActionRequest(this.submittedContactValue, this.type);
    } else {
      this.submit.emit(this.submittedContactValue);
    }
  }
  submitActionRequest(data, modalType) {
    const params = modalType === PoModalPasswordRecoveryType.SMS ? {
      type: "sms"
    } : void 0;
    this.passwordRecoverySubscription = this.poModalPasswordRecoveryService.post(this.urlRecovery, data, params).subscribe((response) => {
      if ((modalType === PoModalPasswordRecoveryType.Email || modalType === PoModalPasswordRecoveryType.All) && response.status === 204) {
        this.openConfirmation();
      } else if (modalType === PoModalPasswordRecoveryType.SMS && response.status === 200) {
        this.assignSmsResponse(response.body);
        this.openSmsCode();
      }
    });
  }
  submitSmsCodeAction() {
    this.submittedCodeValue.code = this.smsCode;
    if (this.urlRecovery) {
      this.submittedCodeValue = Object.assign(this.submittedCodeValue, {
        hash: this.smsBodyResponse.hash
      });
      this.submitSmsCodeRequest(this.submittedCodeValue);
    } else {
      this.codeSubmit.emit(this.submittedCodeValue);
    }
    this.resetFormFields(this.control);
  }
  submitSmsCodeRequest(data) {
    this.smsCodeSubscription = this.poModalPasswordRecoveryService.post(this.setRequestEndpoint(this.smsBodyResponse.urlValidationCode), data).subscribe((response) => {
      const successStatus = response.status === 200;
      if (successStatus) {
        this.completed();
        this.redirectToChangePassword(response.body);
      }
    }, (error) => {
      this.codeError = error.error.message;
      this.openSmsCode();
    });
  }
  static ɵfac = function PoModalPasswordRecoveryComponent_Factory(t) {
    return new (t || _PoModalPasswordRecoveryComponent)(ɵɵdirectiveInject(Router), ɵɵdirectiveInject(PoI18nPipe), ɵɵdirectiveInject(PoModalPasswordRecoveryService), ɵɵdirectiveInject(PoLanguageService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PoModalPasswordRecoveryComponent,
    selectors: [["po-modal-password-recovery"]],
    viewQuery: function PoModalPasswordRecoveryComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0$9, 5);
        ɵɵviewQuery(_c1$6, 7);
        ɵɵviewQuery(_c2$4, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.emailForm = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.recoveryModalElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.smsCodeForm = _t.first);
      }
    },
    features: [ɵɵInheritDefinitionFeature],
    decls: 6,
    vars: 7,
    consts: [["recoveryModal", ""], ["emailForm", "ngForm"], ["smsCodeModal", ""], ["smsCodeForm", "ngForm"], ["confirmationModal", ""], ["p-hide-close", "", "p-size", "auto", 3, "ngSwitch", "p-primary-action", "p-secondary-action", "p-title"], [1, "po-modal-password-recovery-wrapper"], ["class", "po-modal-password-recovery-content po-row", 4, "ngSwitchCase"], [1, "po-modal-password-recovery-content", "po-row"], [1, "po-modal-password-recovery-text", "po-md-12", "po-mb-1"], [1, "po-mb-2", "po-md-12"], [4, "ngIf"], [1, "po-mt-1"], ["name", "email", "p-required", "", 3, "ngModel", "p-label", "ngModelChange", "p-change-model", 4, "ngIf"], ["name", "sms", "p-icon", "ICON_TELEPHONE", "p-required", "", 3, "ngModel", "p-label", "p-mask", "p-maxlength", "p-minlength", "ngModelChange", "p-change-model", 4, "ngIf"], [1, "po-field-container-bottom", "po-field-container-error-container"], [3, "p-text", 4, "ngIf"], [1, "po-modal-password-recovery-text", "po-md-12"], ["name", "type", 3, "ngModelChange", "p-change", "ngModel", "p-options"], ["name", "email", "p-required", "", 3, "ngModelChange", "p-change-model", "ngModel", "p-label"], ["name", "sms", "p-icon", "ICON_TELEPHONE", "p-required", "", 3, "ngModelChange", "p-change-model", "ngModel", "p-label", "p-mask", "p-maxlength", "p-minlength"], [3, "p-text"], ["target", "_self", 1, "po-modal-password-recovery-link", 3, "href"], ["name", "sms", "p-maxlength", "11", "p-minlength", "11", "p-required", "", 3, "ngModelChange", "p-change-model", "ngModel", "p-label", "p-mask"], [1, "po-modal-password-recovery-link", 3, "click"], ["src", "./assets/images/email-sent.svg", 1, "po-modal-password-recovery-user-image", "po-mb-2"], [1, "po-modal-password-recovery-text"]],
    template: function PoModalPasswordRecoveryComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "po-modal", 5, 0)(2, "div", 6);
        ɵɵtemplate(3, PoModalPasswordRecoveryComponent_div_3_Template, 16, 8, "div", 7)(4, PoModalPasswordRecoveryComponent_div_4_Template, 15, 8, "div", 7)(5, PoModalPasswordRecoveryComponent_div_5_Template, 5, 1, "div", 7);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵproperty("ngSwitch", ctx.modalType)("p-primary-action", ctx.primaryAction)("p-secondary-action", ctx.secondaryAction)("p-title", ctx.modalTitle);
        ɵɵadvance(3);
        ɵɵproperty("ngSwitchCase", "email");
        ɵɵadvance();
        ɵɵproperty("ngSwitchCase", "smsCode");
        ɵɵadvance();
        ɵɵproperty("ngSwitchCase", "confirmation");
      }
    },
    dependencies: [NgIf, NgSwitch, NgSwitchCase, ɵNgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, PoRadioGroupComponent, PoEmailComponent, PoInputComponent, PoModalComponent, PoModalPasswordRecoveryErrorMessageComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoModalPasswordRecoveryComponent, [{
    type: Component,
    args: [{
      selector: "po-modal-password-recovery",
      template: `<po-modal
  #recoveryModal
  p-hide-close
  p-size="auto"
  [ngSwitch]="modalType"
  [p-primary-action]="primaryAction"
  [p-secondary-action]="secondaryAction"
  [p-title]="modalTitle"
>
  <div class="po-modal-password-recovery-wrapper">
    <div *ngSwitchCase="'email'" class="po-modal-password-recovery-content po-row">
      <div class="po-modal-password-recovery-text po-md-12 po-mb-1">
        {{ emailModalPhrases.firstPhrase }}
      </div>
      <div class="po-mb-2 po-md-12">
        <form #emailForm="ngForm">
          <div *ngIf="modalPasswordRecoveryTypeAll">
            <po-radio-group
              name="type"
              [(ngModel)]="chosenTypeFormOption"
              [p-options]="typeFormOptions"
              (p-change)="getInputType($event)"
            >
            </po-radio-group>
          </div>

          <div class="po-mt-1">
            <po-email
              *ngIf="type === 'email' || type === 'all'"
              name="email"
              [(ngModel)]="email"
              p-required
              [p-label]="literals.insertEmail"
              (p-change-model)="formModelChangesCheck(emailForm)"
            >
            </po-email>

            <po-input
              *ngIf="type === 'sms'"
              name="sms"
              [(ngModel)]="phone"
              p-icon="ICON_TELEPHONE"
              p-required
              [p-label]="literals.insertPhone"
              [p-mask]="phoneMask"
              [p-maxlength]="maxLength"
              [p-minlength]="minLength"
              (p-change-model)="formModelChangesCheck(emailForm)"
            >
            </po-input>
          </div>

          <div class="po-field-container-bottom po-field-container-error-container">
            <po-modal-password-recovery-error-message
              *ngIf="invalidEmail && control.dirty"
              [p-text]="type === 'sms' ? literals.phoneErrorMessagePhrase : literals.emailErrorMessagePhrase"
            >
            </po-modal-password-recovery-error-message>
          </div>
        </form>
      </div>
      <div class="po-modal-password-recovery-text po-md-12">
        {{ emailModalPhrases.secondPhrase }}
        <span *ngIf="contactEmail">
          {{ literals.prepositionIn }}
          <a class="po-modal-password-recovery-link" href="mailto:{{ contactEmail }}" target="_self">
            {{ contactEmail }}
          </a>
        </span>
        {{ endpoint }}
      </div>
    </div>

    <div #smsCodeModal *ngSwitchCase="'smsCode'" class="po-modal-password-recovery-content po-row">
      <div class="po-modal-password-recovery-text po-md-12 po-mb-1">{{ literals.sentSmsCodePhrase }}</div>
      <div class="po-mb-2 po-md-12">
        <form #smsCodeForm="ngForm">
          <po-input
            name="sms"
            [(ngModel)]="smsCode"
            p-maxlength="11"
            p-minlength="11"
            p-required
            [p-label]="literals.insertCode"
            [p-mask]="codeMask"
            (p-change-model)="formModelChangesCheck(smsCodeForm)"
          >
          </po-input>
          <div class="po-field-container-bottom po-field-container-error-container">
            <po-modal-password-recovery-error-message
              *ngIf="invalidEmail"
              [p-text]="smsCodeErrorMessage || this.literals.smsCodeErrorMessagePhrase"
            >
            </po-modal-password-recovery-error-message>
            <po-modal-password-recovery-error-message *ngIf="showCustomCodeError" [p-text]="codeError">
            </po-modal-password-recovery-error-message>
          </div>
        </form>
      </div>
      <div class="po-modal-password-recovery-text po-md-12">
        {{ literals.sendAgainPhrase }}
        <span class="po-modal-password-recovery-link" (click)="resendSmsCode()">{{ literals.sendAgain }}</span>
      </div>
    </div>

    <div #confirmationModal *ngSwitchCase="'confirmation'" class="po-modal-password-recovery-content po-row">
      <img class="po-modal-password-recovery-user-image po-mb-2" src="./assets/images/email-sent.svg" />
      <div class="po-modal-password-recovery-text">
        {{ literals.emailSentConfirmationPhrase }}
      </div>
    </div>
  </div>
</po-modal>
`
    }]
  }], () => [{
    type: Router
  }, {
    type: PoI18nPipe
  }, {
    type: PoModalPasswordRecoveryService
  }, {
    type: PoLanguageService
  }], {
    emailForm: [{
      type: ViewChild,
      args: ["emailForm"]
    }],
    recoveryModalElement: [{
      type: ViewChild,
      args: ["recoveryModal", {
        static: true
      }]
    }],
    smsCodeForm: [{
      type: ViewChild,
      args: ["smsCodeForm"]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(PoModalPasswordRecoveryComponent, {
    className: "PoModalPasswordRecoveryComponent",
    filePath: "lib/components/po-modal-password-recovery/po-modal-password-recovery.component.ts",
    lineNumber: 47
  });
})();
var PoModalPasswordRecoveryModule = class _PoModalPasswordRecoveryModule {
  static ɵfac = function PoModalPasswordRecoveryModule_Factory(t) {
    return new (t || _PoModalPasswordRecoveryModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _PoModalPasswordRecoveryModule
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [PoI18nPipe, PoModalPasswordRecoveryService],
    imports: [CommonModule, FormsModule, PoFieldModule, PoModalModule, PoIconModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoModalPasswordRecoveryModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, PoFieldModule, PoModalModule, PoIconModule],
      declarations: [PoModalPasswordRecoveryComponent, PoModalPasswordRecoveryErrorMessageComponent],
      exports: [PoModalPasswordRecoveryComponent, PoModalPasswordRecoveryErrorMessageComponent],
      providers: [PoI18nPipe, PoModalPasswordRecoveryService]
    }]
  }], null, null);
})();
(function() {
  (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PoModalPasswordRecoveryModule, {
    declarations: [PoModalPasswordRecoveryComponent, PoModalPasswordRecoveryErrorMessageComponent],
    imports: [CommonModule, FormsModule, PoFieldModule, PoModalModule, PoIconModule],
    exports: [PoModalPasswordRecoveryComponent, PoModalPasswordRecoveryErrorMessageComponent]
  });
})();
var _c0$8 = ["*"];
function PoPageBackgroundComponent_po_logo_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "po-logo", 13);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("p-link", false)("p-logo", ctx_r0.logo)("p-logo-alt", ctx_r0.logoAlt);
  }
}
function PoPageBackgroundComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 14)(1, "po-select", 15);
    ɵɵtwoWayListener("ngModelChange", function PoPageBackgroundComponent_div_10_Template_po_select_ngModelChange_1_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r0.selectedLanguageOption, $event) || (ctx_r0.selectedLanguageOption = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("p-change", function PoPageBackgroundComponent_div_10_Template_po_select_p_change_1_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onChangeLanguage());
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtwoWayProperty("ngModel", ctx_r0.selectedLanguageOption);
    ɵɵproperty("p-options", ctx_r0.selectLanguageOptions);
  }
}
function PoPageBackgroundComponent_po_logo_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "po-logo", 16);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("p-link", false)("p-logo", ctx_r0.secondaryLogo);
  }
}
function PoPageBackgroundComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 17)(1, "div", 18)(2, "div", 19);
    ɵɵtext(3);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("background-image", "url(" + ctx_r0.background + ")");
    ɵɵproperty("ngClass", ctx_r0.background ? "po-page-login-highlight-image" : "po-page-login-highlight-image-off");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r0.highlightInfo);
  }
}
var PoPageBackgroundComponent = class _PoPageBackgroundComponent {
  poLanguageService;
  /** Insere uma imagem de destaque ao lado direito do container. */
  background;
  /** Idioma inicial selecionado no combo */
  initialSelectLanguage;
  /** Designa se o logotipo deve desaparecer em resoluções menores. */
  hideLogo;
  /** Texto de destaque sobreposto à imagem de destaque. Essa opção é utilizada em conjunto com o atributo `p-background`. */
  highlightInfo;
  /**
   * @optional
   *
   * @description
   *
   * Evento disparado ao selecionar alguma opção no seletor de idiomas.
   * Para este evento será passado como parâmetro o valor de idioma selecionado.
   */
  selectedLanguage = new EventEmitter();
  selectedLanguageOption;
  _showSelectLanguage = false;
  _languagesList;
  _selectLanguageOptions;
  /** Lista de idiomas para o combo box */
  set languagesList(value) {
    this._languagesList = value;
    this.setLanguageOptions();
  }
  get languagesList() {
    if (this._languagesList?.length) {
      return this._languagesList;
    }
    return poLanguageDefault;
  }
  /** Caminho para a logomarca localizada na parte superior. */
  logo;
  /** Texto alternativo para a logomarca. */
  logoAlt;
  /**
   * @optional
   *
   * @description
   *
   * Caminho para a logomarca localizada no rodapé.
   */
  secondaryLogo;
  /** Define se o seletor de idiomas deve ser exibido. */
  set showSelectLanguage(showSelectLanguage) {
    this._showSelectLanguage = convertToBoolean(showSelectLanguage);
  }
  get showSelectLanguage() {
    return this._showSelectLanguage;
  }
  constructor(poLanguageService) {
    this.poLanguageService = poLanguageService;
  }
  ngOnInit() {
    this.selectedLanguageOption = this.initialSelectLanguage || this.poLanguageService.getShortLanguage();
  }
  onChangeLanguage() {
    this.selectedLanguage.emit(this.selectedLanguageOption);
  }
  get selectLanguageOptions() {
    return this._selectLanguageOptions;
  }
  setLanguageOptions() {
    this._selectLanguageOptions = this.languagesList.map((language) => ({
      label: language.description,
      value: language.language
    }));
  }
  static ɵfac = function PoPageBackgroundComponent_Factory(t) {
    return new (t || _PoPageBackgroundComponent)(ɵɵdirectiveInject(PoLanguageService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PoPageBackgroundComponent,
    selectors: [["po-page-background"]],
    inputs: {
      background: [0, "p-background", "background"],
      initialSelectLanguage: [0, "p-initial-language", "initialSelectLanguage"],
      hideLogo: [0, "p-hide-logo", "hideLogo"],
      highlightInfo: [0, "p-highlight-info", "highlightInfo"],
      languagesList: [0, "p-languages", "languagesList"],
      logo: [0, "p-logo", "logo"],
      logoAlt: [0, "p-logo-alt", "logoAlt"],
      secondaryLogo: [0, "p-secondary-logo", "secondaryLogo"],
      showSelectLanguage: [0, "p-show-select-language", "showSelectLanguage"]
    },
    outputs: {
      selectedLanguage: "p-selected-language"
    },
    ngContentSelectors: _c0$8,
    decls: 14,
    vars: 7,
    consts: [[1, "po-page-login-container"], [1, "po-page-login-panel"], [1, "po-page-background-main-logo"], ["p-class", "po-page-background-main-logo-image", 3, "p-link", "p-logo", "p-logo-alt", 4, "ngIf"], [1, "po-page-login-body"], [1, "po-page-login-panel-content"], [1, "po-page-background-footer", "po-sm-12"], [1, "po-page-background-footer-mobile-only"], [1, "po-page-background-footer-content"], ["class", "po-page-background-footer-select", 4, "ngIf"], [1, "po-page-background-secondary-logo", 3, "ngClass"], ["p-class", "po-page-background-secondary-logo-image", "p-logo-alt", "secondary-logomarca", 3, "p-link", "p-logo", 4, "ngIf"], [3, "ngClass", "background-image", 4, "ngIf"], ["p-class", "po-page-background-main-logo-image", 3, "p-link", "p-logo", "p-logo-alt"], [1, "po-page-background-footer-select"], ["name", "selectedLanguageOption", 3, "ngModelChange", "p-change", "ngModel", "p-options"], ["p-class", "po-page-background-secondary-logo-image", "p-logo-alt", "secondary-logomarca", 3, "p-link", "p-logo"], [3, "ngClass"], [1, "po-page-login-highlight-text"], [1, "po-font-display"]],
    template: function PoPageBackgroundComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        ɵɵtemplate(3, PoPageBackgroundComponent_po_logo_3_Template, 1, 3, "po-logo", 3);
        ɵɵelementEnd();
        ɵɵelementStart(4, "div", 4)(5, "div", 5);
        ɵɵprojection(6);
        ɵɵelementEnd()();
        ɵɵelementStart(7, "div", 6);
        ɵɵelement(8, "po-divider", 7);
        ɵɵelementStart(9, "div", 8);
        ɵɵtemplate(10, PoPageBackgroundComponent_div_10_Template, 2, 2, "div", 9);
        ɵɵelementStart(11, "div", 10);
        ɵɵtemplate(12, PoPageBackgroundComponent_po_logo_12_Template, 1, 2, "po-logo", 11);
        ɵɵelementEnd()()()();
        ɵɵtemplate(13, PoPageBackgroundComponent_div_13_Template, 4, 4, "div", 12);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵclassProp("po-page-background-hide-logo", ctx.hideLogo);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.logo);
        ɵɵadvance(7);
        ɵɵproperty("ngIf", ctx.showSelectLanguage);
        ɵɵadvance();
        ɵɵproperty("ngClass", ctx.showSelectLanguage ? "po-page-background-secondary-logo-right" : "po-page-background-secondary-logo-centered");
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.secondaryLogo);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.background);
      }
    },
    dependencies: [NgClass, NgIf, NgControlStatus, NgModel, PoDividerComponent, PoSelectComponent, PoLogoComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageBackgroundComponent, [{
    type: Component,
    args: [{
      selector: "po-page-background",
      template: `<div class="po-page-login-container">
  <div class="po-page-login-panel">
    <div class="po-page-background-main-logo" [class.po-page-background-hide-logo]="hideLogo">
      <po-logo
        *ngIf="logo"
        p-class="po-page-background-main-logo-image"
        [p-link]="false"
        [p-logo]="logo"
        [p-logo-alt]="logoAlt"
      ></po-logo>
    </div>

    <div class="po-page-login-body">
      <div class="po-page-login-panel-content">
        <ng-content></ng-content>
      </div>
    </div>
    <div class="po-page-background-footer po-sm-12">
      <po-divider class="po-page-background-footer-mobile-only"></po-divider>

      <div class="po-page-background-footer-content">
        <div *ngIf="showSelectLanguage" class="po-page-background-footer-select">
          <po-select
            name="selectedLanguageOption"
            [(ngModel)]="selectedLanguageOption"
            [p-options]="selectLanguageOptions"
            (p-change)="onChangeLanguage()"
          ></po-select>
        </div>

        <div
          class="po-page-background-secondary-logo"
          [ngClass]="
            showSelectLanguage
              ? 'po-page-background-secondary-logo-right'
              : 'po-page-background-secondary-logo-centered'
          "
        >
          <po-logo
            *ngIf="secondaryLogo"
            p-class="po-page-background-secondary-logo-image"
            [p-link]="false"
            [p-logo]="secondaryLogo"
            p-logo-alt="secondary-logomarca"
          ></po-logo>
        </div>
      </div>
    </div>
  </div>

  <div
    *ngIf="background"
    [ngClass]="background ? 'po-page-login-highlight-image' : 'po-page-login-highlight-image-off'"
    [style.background-image]="'url(' + background + ')'"
  >
    <div class="po-page-login-highlight-text">
      <div class="po-font-display">{{ highlightInfo }}</div>
    </div>
  </div>
</div>
`
    }]
  }], () => [{
    type: PoLanguageService
  }], {
    background: [{
      type: Input,
      args: ["p-background"]
    }],
    initialSelectLanguage: [{
      type: Input,
      args: ["p-initial-language"]
    }],
    hideLogo: [{
      type: Input,
      args: ["p-hide-logo"]
    }],
    highlightInfo: [{
      type: Input,
      args: ["p-highlight-info"]
    }],
    selectedLanguage: [{
      type: Output,
      args: ["p-selected-language"]
    }],
    languagesList: [{
      type: Input,
      args: ["p-languages"]
    }],
    logo: [{
      type: Input,
      args: ["p-logo"]
    }],
    logoAlt: [{
      type: Input,
      args: ["p-logo-alt"]
    }],
    secondaryLogo: [{
      type: Input,
      args: ["p-secondary-logo"]
    }],
    showSelectLanguage: [{
      type: Input,
      args: ["p-show-select-language"]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(PoPageBackgroundComponent, {
    className: "PoPageBackgroundComponent",
    filePath: "lib/components/po-page-background/po-page-background.component.ts",
    lineNumber: 20
  });
})();
var PoPageBackgroundModule = class _PoPageBackgroundModule {
  static ɵfac = function PoPageBackgroundModule_Factory(t) {
    return new (t || _PoPageBackgroundModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _PoPageBackgroundModule
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, FormsModule, RouterModule, PoDividerModule, PoFieldModule, PoLogoModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageBackgroundModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, RouterModule, PoDividerModule, PoFieldModule, PoLogoModule],
      declarations: [PoPageBackgroundComponent],
      exports: [PoPageBackgroundComponent]
    }]
  }], null, null);
})();
(function() {
  (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PoPageBackgroundModule, {
    declarations: [PoPageBackgroundComponent],
    imports: [CommonModule, FormsModule, RouterModule, PoDividerModule, PoFieldModule, PoLogoModule],
    exports: [PoPageBackgroundComponent]
  });
})();
var PoPageBlockedUserReason;
(function(PoPageBlockedUserReason2) {
  PoPageBlockedUserReason2["None"] = "none";
  PoPageBlockedUserReason2["ExceededAttempts"] = "exceededAttempts";
  PoPageBlockedUserReason2["ExpiredPassword"] = "expiredPassword";
})(PoPageBlockedUserReason || (PoPageBlockedUserReason = {}));
var PoPageBlockedUserReasonDefault = PoPageBlockedUserReason.None;
var PoPageBlockedUserParamsDefault = {
  attempts: 5,
  days: 90,
  hours: 24
};
var PoPageBlockedUserBaseComponent = class _PoPageBlockedUserBaseComponent {
  /**
   * @optional
   *
   * @description
   *
   * Valor para o email de contato que deve ser exibido. A ação está de acordo com o protocolo MAILTO e é possível definir
   * tanto rotas internas quanto externas.
   */
  contactEmail;
  /**
   * @optional
   *
   * @description
   *
   * Valor para o telefone de contato que deve ser exibido. A ação está de acordo com o protocolo TEL.
   *
   * > A propriedade não contem tratamento de máscara, fica a critério do desenvolvedor defini-la.
   */
  contactPhone;
  /** Caminho para a logomarca localizada na parte superior, caso não seja definida ou seja inválida assume a logo padrão do PO UI. */
  logo;
  /**
   * @optional
   *
   * @description
   *
   * Caminho para a logomarca localizada no rodapé.
   */
  secondaryLogo;
  _params = __spreadValues({}, PoPageBlockedUserParamsDefault);
  _reason = PoPageBlockedUserReason.None;
  _urlBack = "/";
  /**
   * @optional
   *
   * @description
   *
   * Designação de valores usados para a customização da mensagem de bloqueio.
   * Confira abaixo os valores pré-definidos.
   *
   * ```
   *  const customLiterals: PoPageBlockedUserReasonParams = {
   *    attempts: 5,
   *    days: 90,
   *    hours: 24
   *  };
   * ```
   *
   * > Salientamos a importância e atenção para configuração desses valores conforme definidos no projeto.
   *
   * > Veja os parâmetros customizáveis na interface `PoPageBlockedUserReasonParams`.
   *
   */
  set params(value) {
    if (value instanceof Object) {
      const keys = Object.keys(value);
      const newParams = __spreadValues({}, PoPageBlockedUserParamsDefault);
      keys.forEach((key) => {
        newParams[key] = value[key];
      });
      this._params = newParams;
    } else {
      this._params = __spreadValues({}, PoPageBlockedUserParamsDefault);
    }
  }
  get params() {
    return this._params;
  }
  /**
   * @optional
   *
   * @description
   *
   * Definição de motivo de bloqueio de usuário. As informações modificam conforme o motivo selecionado.
   *
   * > Veja os valores válidos no *enum* `PoPageBlockedUserReason`.
   *
   * @default `PoPageBlockedUserReason.None`
   */
  set reason(value) {
    this._reason = Object.values(PoPageBlockedUserReason).includes(value) ? value : PoPageBlockedUserReasonDefault;
  }
  get reason() {
    return this._reason;
  }
  /**
   * @optional
   *
   * @description
   *
   * URL para a ação de retorno da página.
   *
   * @default `/`
   */
  set urlBack(url) {
    this._urlBack = url;
  }
  get urlBack() {
    return this._urlBack;
  }
  static ɵfac = function PoPageBlockedUserBaseComponent_Factory(t) {
    return new (t || _PoPageBlockedUserBaseComponent)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _PoPageBlockedUserBaseComponent,
    inputs: {
      contactEmail: [0, "p-contact-email", "contactEmail"],
      contactPhone: [0, "p-contact-phone", "contactPhone"],
      logo: [0, "p-logo", "logo"],
      secondaryLogo: [0, "p-secondary-logo", "secondaryLogo"],
      params: [0, "p-params", "params"],
      reason: [0, "p-reason", "reason"],
      urlBack: [0, "p-url-back", "urlBack"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageBlockedUserBaseComponent, [{
    type: Directive
  }], null, {
    contactEmail: [{
      type: Input,
      args: ["p-contact-email"]
    }],
    contactPhone: [{
      type: Input,
      args: ["p-contact-phone"]
    }],
    logo: [{
      type: Input,
      args: ["p-logo"]
    }],
    secondaryLogo: [{
      type: Input,
      args: ["p-secondary-logo"]
    }],
    params: [{
      type: Input,
      args: ["p-params"]
    }],
    reason: [{
      type: Input,
      args: ["p-reason"]
    }],
    urlBack: [{
      type: Input,
      args: ["p-url-back"]
    }]
  });
})();
var _c0$7 = ["contactGroup"];
var _c1$5 = ["mailItem"];
var _c2$3 = ["phoneItem"];
var poPageBlockedUserContactItemMargin = 16;
var PoPageBlockedUserContactsComponent = class _PoPageBlockedUserContactsComponent {
  changeDetector;
  contactGroup;
  mailItem;
  phoneItem;
  overflowItem = true;
  _email;
  _phone;
  set email(value) {
    this._email = value;
    this.checkContactItemWidth();
  }
  get email() {
    return this._email;
  }
  set phone(value) {
    this._phone = value;
    this.checkContactItemWidth();
  }
  get phone() {
    return this._phone;
  }
  constructor(changeDetector) {
    this.changeDetector = changeDetector;
  }
  checkContactItemWidth() {
    this.overflowItem = true;
    if (this.phone && this.email) {
      this.changeDetector.detectChanges();
      const phoneWidth = this.phoneItem.nativeElement.offsetWidth;
      const mailWidth = this.mailItem.nativeElement.offsetWidth;
      const contactGroupHalfWidth = this.contactGroup.nativeElement.offsetWidth / 2 - poPageBlockedUserContactItemMargin;
      this.overflowItem = phoneWidth > contactGroupHalfWidth || mailWidth > contactGroupHalfWidth - poPageBlockedUserContactItemMargin;
    }
  }
  static ɵfac = function PoPageBlockedUserContactsComponent_Factory(t) {
    return new (t || _PoPageBlockedUserContactsComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PoPageBlockedUserContactsComponent,
    selectors: [["po-page-blocked-user-contacts"]],
    viewQuery: function PoPageBlockedUserContactsComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0$7, 7);
        ɵɵviewQuery(_c1$5, 7);
        ɵɵviewQuery(_c2$3, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contactGroup = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.mailItem = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.phoneItem = _t.first);
      }
    },
    inputs: {
      email: [0, "p-email", "email"],
      phone: [0, "p-phone", "phone"]
    },
    decls: 16,
    vars: 16,
    consts: [["contactGroup", ""], ["phoneItem", ""], ["mailItem", ""], [1, "po-page-blocked-user-contact-group", "po-row", "po-mb-3"], [1, "po-page-blocked-user-contact-item", 3, "ngClass"], ["target", "_self", 1, "po-page-blocked-user-link", "po-clickable", 3, "href"], [1, "po-page-blocked-user-contact-group-item"], ["p-icon", "ICON_TELEPHONE", 1, "po-page-blocked-user-contact-icon", "po-pr-1"], [1, "po-page-blocked-user-contact-text", "po-font-text"], [1, "po-page-blocked-user-contact-item", "po-page-blocked-user-contact-mail", 3, "ngClass"], ["p-icon", "ICON_MAIL", 1, "po-page-blocked-user-contact-icon", "po-pr-1"]],
    template: function PoPageBlockedUserContactsComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 3, 0)(2, "div", 4)(3, "a", 5)(4, "div", 6);
        ɵɵelement(5, "po-icon", 7);
        ɵɵelementStart(6, "div", 8, 1);
        ɵɵtext(8);
        ɵɵelementEnd()()()();
        ɵɵelementStart(9, "div", 9)(10, "a", 5)(11, "div", 6);
        ɵɵelement(12, "po-icon", 10);
        ɵɵelementStart(13, "div", 8, 2);
        ɵɵtext(15);
        ɵɵelementEnd()()()()();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵclassProp("po-invisible", !ctx.phone);
        ɵɵproperty("ngClass", ctx.overflowItem ? "po-md-12" : "po-md-6");
        ɵɵadvance();
        ɵɵclassProp("po-page-blocked-user-contact-content-inline", ctx.overflowItem);
        ɵɵpropertyInterpolate1("href", "tel:", ctx.phone, "", ɵɵsanitizeUrl);
        ɵɵadvance(5);
        ɵɵtextInterpolate(ctx.phone);
        ɵɵadvance();
        ɵɵclassProp("po-invisible", !ctx.email);
        ɵɵproperty("ngClass", ctx.overflowItem ? "po-md-12" : "po-md-6");
        ɵɵadvance();
        ɵɵclassProp("po-page-blocked-user-contact-content-inline", ctx.overflowItem);
        ɵɵpropertyInterpolate1("href", "mailto:", ctx.email, "", ɵɵsanitizeUrl);
        ɵɵadvance(5);
        ɵɵtextInterpolate(ctx.email);
      }
    },
    dependencies: [NgClass, PoIconComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageBlockedUserContactsComponent, [{
    type: Component,
    args: [{
      selector: "po-page-blocked-user-contacts",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div #contactGroup class="po-page-blocked-user-contact-group po-row po-mb-3">
  <div
    class="po-page-blocked-user-contact-item"
    [class.po-invisible]="!phone"
    [ngClass]="overflowItem ? 'po-md-12' : 'po-md-6'"
  >
    <a
      class="po-page-blocked-user-link po-clickable"
      [class.po-page-blocked-user-contact-content-inline]="overflowItem"
      href="tel:{{ phone }}"
      target="_self"
    >
      <div class="po-page-blocked-user-contact-group-item">
        <po-icon class="po-page-blocked-user-contact-icon po-pr-1" p-icon="ICON_TELEPHONE"></po-icon>
        <div #phoneItem class="po-page-blocked-user-contact-text po-font-text">{{ phone }}</div>
      </div>
    </a>
  </div>
  <div
    class="po-page-blocked-user-contact-item po-page-blocked-user-contact-mail"
    [class.po-invisible]="!email"
    [ngClass]="overflowItem ? 'po-md-12' : 'po-md-6'"
  >
    <a
      class="po-page-blocked-user-link po-clickable"
      [class.po-page-blocked-user-contact-content-inline]="overflowItem"
      href="mailto:{{ email }}"
      target="_self"
    >
      <div class="po-page-blocked-user-contact-group-item">
        <po-icon class="po-page-blocked-user-contact-icon po-pr-1" p-icon="ICON_MAIL"></po-icon>
        <div #mailItem class="po-page-blocked-user-contact-text po-font-text">{{ email }}</div>
      </div>
    </a>
  </div>
</div>
`
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    contactGroup: [{
      type: ViewChild,
      args: ["contactGroup", {
        static: true
      }]
    }],
    mailItem: [{
      type: ViewChild,
      args: ["mailItem", {
        static: true
      }]
    }],
    phoneItem: [{
      type: ViewChild,
      args: ["phoneItem", {
        static: true
      }]
    }],
    email: [{
      type: Input,
      args: ["p-email"]
    }],
    phone: [{
      type: Input,
      args: ["p-phone"]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(PoPageBlockedUserContactsComponent, {
    className: "PoPageBlockedUserContactsComponent",
    filePath: "lib/components/po-page-blocked-user/po-page-blocked-user-contacts/po-page-blocked-user-contacts.component.ts",
    lineNumber: 10
  });
})();
var poPageBlockedUserLiterals = {
  none: {
    pt: {
      title: "Opa!",
      firstPhrase: "Tivemos que bloquear essa tela temporariamente.",
      secondPhrase: "Mas não se preocupe! Basta fazer seu login novamente."
    },
    en: {
      title: "Oops!",
      firstPhrase: "We had to temporarily block this screen.",
      secondPhrase: "But do not worry! Just sign in again."
    },
    es: {
      title: "Opa!",
      firstPhrase: "Tuvimos que bloquear esta pantalla temporalmente.",
      secondPhrase: "¡Pero no se preocupe! Sólo tienes que iniciar sesión de nuevo."
    },
    ru: {
      title: "Ой!",
      firstPhrase: "Нам пришлось временно заблокировать этот раздел.",
      secondPhrase: "Но не волнуйтесь! Просто войдите в систему еще раз."
    }
  },
  exceededAttempts: {
    pt: {
      title: "Opa!",
      firstPhrase: `Para sua segurança, após {0} tentativa(s) de senha seu usuário fica bloqueado e não pode ser acessado em {1} hora(s) :( `,
      secondPhrase: "Isso é para evitar que hackers invadam sua conta.",
      thirdPhrase: "Mas não se preocupe! Se você for o dono da conta e apenas esqueceu sua senha, basta entrar em contato com o suporte."
    },
    en: {
      title: "Oops!",
      firstPhrase: `For your security, after {0} attempt(s) of password
        your user gets blocked and can not be accessed in {1} hour(s) :(`,
      secondPhrase: "This is to prevent hackers from hacking into your account.",
      thirdPhrase: "But do not worry! If you are the owner of the account and just forgot your password, just contact support."
    },
    es: {
      title: "Opa!",
      firstPhrase: `Para su seguridad, después de {0} intento(s) de contraseña
        su usuario queda bloqueado y no puede ser accedido en {1} hora(s) :(`,
      secondPhrase: "Esto es para evitar que los hackers invadan su cuenta.",
      thirdPhrase: `¡Pero no se preocupe! Si usted es el dueño de la cuenta
        y acaba de olvidar su contraseña, simplemente póngase en contacto con el soporte.`
    },
    ru: {
      title: "Ой!",
      firstPhrase: "Для вашей безопасности, после {0} попыток ввода пароля\r\nваш пользователь блокируется и не сможет авторизоваться в течение {1} часа(ов) :(",
      secondPhrase: "Это делается для того, чтобы хакеры не могли взломать ваш аккаунт.",
      thirdPhrase: "Но не волнуйтесь! Если вы являетесь владельцем учетной записи и просто забыли свой пароль, обратитесь в службу поддержки."
    }
  },
  expiredPassword: {
    pt: {
      title: "Opa! Sua senha expirou",
      firstPhrase: `A cada {0} dia(s) é preciso criar uma nova senha por questão de segurança. Após esses {0} dia(s) seu acesso é bloqueado :(`,
      secondPhrase: "Mas não se preocupe! Basta entrar em contato com o administrador do sistema."
    },
    en: {
      title: "Oops! Your Password has expired",
      firstPhrase: `Every {0} day(s) you need to create a new password for security reasons.
        After these {0} day(s) your access is blocked :(`,
      secondPhrase: "But do not worry! Just contact your system administrator."
    },
    es: {
      title: "Opa! Su contraseña ha caducado",
      firstPhrase: `Cada {0} día(s) es necesario crear una nueva contraseña por razones de seguridad.
        Después de estos {0} día(s) su acceso está bloqueado :(`,
      secondPhrase: "¡Pero no se preocupe! Sólo tienes que ponerse en contacto con el administrador del sistema."
    },
    ru: {
      title: "Ой! Срок действия вашего пароля истек",
      firstPhrase: "Каждые {0} дней вам необходимо создавать новый пароль в целях безопасности.\r\nПосле {0} дней ваш доступ будет заблокирован :(",
      secondPhrase: "Но не волнуйтесь! Просто обратитесь к своему системному администратору."
    }
  }
};
function PoPageBlockedUserReasonComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.literals == null ? null : ctx_r0.literals.thirdPhrase);
  }
}
var PoPageBlockedUserReasonComponent = class _PoPageBlockedUserReasonComponent {
  changeDetector;
  params;
  reason;
  literalParams;
  literals;
  language;
  constructor(changeDetector, languageService) {
    this.changeDetector = changeDetector;
    this.language = languageService.getShortLanguage();
  }
  ngOnChanges(changes) {
    if (changes.reason || changes.params) {
      this.getLiterals();
    }
  }
  ngOnInit() {
    this.getLiterals();
  }
  getImageByReasonType() {
    let reasonImage;
    switch (this.reason) {
      case "none": {
        reasonImage = "big-lock";
        break;
      }
      case "exceededAttempts": {
        reasonImage = "blocked-user";
        break;
      }
      case "expiredPassword": {
        reasonImage = "expired";
        break;
      }
    }
    return `./assets/images/${reasonImage}.svg`;
  }
  getParams() {
    this.literalParams = this.reason === "expiredPassword" ? [this.params.days, this.params.days] : [this.params.attempts, this.params.hours];
  }
  getLiterals() {
    this.getParams();
    this.literals = __spreadValues(__spreadValues({}, poPageBlockedUserLiterals[this.reason][poLocaleDefault]), poPageBlockedUserLiterals[this.reason][this.language]);
    this.changeDetector.detectChanges();
  }
  static ɵfac = function PoPageBlockedUserReasonComponent_Factory(t) {
    return new (t || _PoPageBlockedUserReasonComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PoLanguageService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PoPageBlockedUserReasonComponent,
    selectors: [["po-page-blocked-user-reason"]],
    inputs: {
      params: [0, "p-params", "params"],
      reason: [0, "p-reason", "reason"]
    },
    features: [ɵɵNgOnChangesFeature],
    decls: 12,
    vars: 8,
    consts: [[1, "po-page-blocked-user-reason-content"], [1, "po-page-blocked-user-image", "po-mb-3", 3, "src"], [1, "po-page-blocked-user-header", "po-mb-md-3", "po-row"], [1, "po-md-12"], [1, "po-page-blocked-user-text", "po-font-text", "po-row"], [1, "po-mb-sm-2", "po-mb-md-3", "po-md-12", "po-page-blocked-user-text-bold"], [1, "po-mb-sm-2", "po-mb-md-3", "po-md-12"], ["class", "po-mb-sm-2 po-mb-md-3 po-md-12", 4, "ngIf"]],
    template: function PoPageBlockedUserReasonComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelement(1, "img", 1);
        ɵɵelementStart(2, "div", 2)(3, "div", 3);
        ɵɵtext(4);
        ɵɵelementEnd()();
        ɵɵelementStart(5, "div", 4)(6, "div", 5);
        ɵɵtext(7);
        ɵɵpipe(8, "poI18n");
        ɵɵelementEnd();
        ɵɵelementStart(9, "div", 6);
        ɵɵtext(10);
        ɵɵelementEnd();
        ɵɵtemplate(11, PoPageBlockedUserReasonComponent_div_11_Template, 2, 1, "div", 7);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵproperty("src", ctx.getImageByReasonType(), ɵɵsanitizeUrl);
        ɵɵadvance(3);
        ɵɵtextInterpolate(ctx.literals == null ? null : ctx.literals.title);
        ɵɵadvance(3);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind2(8, 5, ctx.literals == null ? null : ctx.literals.firstPhrase, ctx.literalParams), " ");
        ɵɵadvance(3);
        ɵɵtextInterpolate(ctx.literals == null ? null : ctx.literals.secondPhrase);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.literals == null ? null : ctx.literals.thirdPhrase);
      }
    },
    dependencies: [NgIf, PoI18nPipe],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageBlockedUserReasonComponent, [{
    type: Component,
    args: [{
      selector: "po-page-blocked-user-reason",
      template: '<div class="po-page-blocked-user-reason-content">\n  <img class="po-page-blocked-user-image po-mb-3" [src]="getImageByReasonType()" />\n  <div class="po-page-blocked-user-header po-mb-md-3 po-row">\n    <div class="po-md-12">{{ literals?.title }}</div>\n  </div>\n  <div class="po-page-blocked-user-text po-font-text po-row">\n    <div class="po-mb-sm-2 po-mb-md-3 po-md-12 po-page-blocked-user-text-bold">\n      {{ literals?.firstPhrase | poI18n: literalParams }}\n    </div>\n    <div class="po-mb-sm-2 po-mb-md-3 po-md-12">{{ literals?.secondPhrase }}</div>\n    <div class="po-mb-sm-2 po-mb-md-3 po-md-12" *ngIf="literals?.thirdPhrase">{{ literals?.thirdPhrase }}</div>\n  </div>\n</div>\n'
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: PoLanguageService
  }], {
    params: [{
      type: Input,
      args: ["p-params"]
    }],
    reason: [{
      type: Input,
      args: ["p-reason"]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(PoPageBlockedUserReasonComponent, {
    className: "PoPageBlockedUserReasonComponent",
    filePath: "lib/components/po-page-blocked-user/po-page-blocked-user-reason/po-page-blocked-user-reason.component.ts",
    lineNumber: 13
  });
})();
var poPageBlockedUserButtonLiterals = {
  en: {
    primaryButton: "Back to home screen"
  },
  es: {
    primaryButton: "Volver al inicio"
  },
  pt: {
    primaryButton: "Voltar para o início"
  },
  ru: {
    primaryButton: "Перейти к началу страницы"
  }
};
var PoPageBlockedUserComponent = class _PoPageBlockedUserComponent extends PoPageBlockedUserBaseComponent {
  activatedRoute;
  router;
  literals;
  constructor(activatedRoute, router, languageService) {
    super();
    this.activatedRoute = activatedRoute;
    this.router = router;
    const language = languageService.getShortLanguage();
    this.literals = __spreadValues(__spreadValues({}, poPageBlockedUserButtonLiterals[poLocaleDefault]), poPageBlockedUserButtonLiterals[language]);
  }
  ngOnInit() {
    this.checkingForRouteMetadata(this.activatedRoute.snapshot.data);
  }
  navigateTo(url) {
    isExternalLink(url) ? window.open(url) : this.router.navigate([url || "/"]);
  }
  checkingForMetadataProperty(object, property) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      return object[property];
    }
  }
  checkingForRouteMetadata(data) {
    if (Object.keys(data).length !== 0) {
      this.contactEmail = this.checkingForMetadataProperty(data, "contactEmail") || this.contactEmail;
      this.contactPhone = this.checkingForMetadataProperty(data, "contactPhone") || this.contactPhone;
      this.reason = this.checkingForMetadataProperty(data, "reason") || this.reason;
      this.urlBack = this.checkingForMetadataProperty(data, "urlBack") || this.urlBack;
    }
  }
  static ɵfac = function PoPageBlockedUserComponent_Factory(t) {
    return new (t || _PoPageBlockedUserComponent)(ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(PoLanguageService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PoPageBlockedUserComponent,
    selectors: [["po-page-blocked-user"]],
    features: [ɵɵInheritDefinitionFeature],
    decls: 8,
    vars: 8,
    consts: [[1, "po-page-blocked-user-wrapper"], [1, "po-page-background-wrap"], [3, "p-hide-logo", "p-logo", "p-secondary-logo"], [3, "p-params", "p-reason"], [1, "po-page-blocked-user-mobile-bottom-alignment"], [3, "p-email", "p-phone"], [1, "po-row"], ["p-kind", "primary", 1, "po-lg-12", "po-sm-12", "po-page-blocked-user-button", 3, "p-click", "p-label"]],
    template: function PoPageBlockedUserComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "po-page-background", 2);
        ɵɵelement(3, "po-page-blocked-user-reason", 3);
        ɵɵelementStart(4, "div", 4);
        ɵɵelement(5, "po-page-blocked-user-contacts", 5);
        ɵɵelementStart(6, "div", 6)(7, "po-button", 7);
        ɵɵlistener("p-click", function PoPageBlockedUserComponent_Template_po_button_p_click_7_listener() {
          return ctx.navigateTo(ctx.urlBack);
        });
        ɵɵelementEnd()()()()()();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("p-hide-logo", true)("p-logo", ctx.logo)("p-secondary-logo", ctx.secondaryLogo);
        ɵɵadvance();
        ɵɵproperty("p-params", ctx.params)("p-reason", ctx.reason);
        ɵɵadvance(2);
        ɵɵproperty("p-email", ctx.contactEmail)("p-phone", ctx.contactPhone);
        ɵɵadvance(2);
        ɵɵproperty("p-label", ctx.literals == null ? null : ctx.literals.primaryButton);
      }
    },
    dependencies: [PoButtonComponent, PoPageBackgroundComponent, PoPageBlockedUserContactsComponent, PoPageBlockedUserReasonComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageBlockedUserComponent, [{
    type: Component,
    args: [{
      selector: "po-page-blocked-user",
      template: '<div class="po-page-blocked-user-wrapper">\n  <div class="po-page-background-wrap">\n    <po-page-background [p-hide-logo]="true" [p-logo]="logo" [p-secondary-logo]="secondaryLogo">\n      <po-page-blocked-user-reason [p-params]="params" [p-reason]="reason"> </po-page-blocked-user-reason>\n\n      <div class="po-page-blocked-user-mobile-bottom-alignment">\n        <po-page-blocked-user-contacts [p-email]="contactEmail" [p-phone]="contactPhone">\n        </po-page-blocked-user-contacts>\n\n        <div class="po-row">\n          <po-button\n            class="po-lg-12 po-sm-12 po-page-blocked-user-button"\n            p-kind="primary"\n            [p-label]="literals?.primaryButton"\n            (p-click)="navigateTo(urlBack)"\n          >\n          </po-button>\n        </div>\n      </div>\n    </po-page-background>\n  </div>\n</div>\n'
    }]
  }], () => [{
    type: ActivatedRoute
  }, {
    type: Router
  }, {
    type: PoLanguageService
  }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(PoPageBlockedUserComponent, {
    className: "PoPageBlockedUserComponent",
    filePath: "lib/components/po-page-blocked-user/po-page-blocked-user.component.ts",
    lineNumber: 55
  });
})();
var PoPageBlockedUserModule = class _PoPageBlockedUserModule {
  static ɵfac = function PoPageBlockedUserModule_Factory(t) {
    return new (t || _PoPageBlockedUserModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _PoPageBlockedUserModule
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, RouterModule, PoModule, PoPageBackgroundModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageBlockedUserModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, PoModule, PoPageBackgroundModule],
      declarations: [PoPageBlockedUserComponent, PoPageBlockedUserContactsComponent, PoPageBlockedUserReasonComponent],
      exports: [PoPageBlockedUserComponent, PoPageBlockedUserContactsComponent, PoPageBlockedUserReasonComponent]
    }]
  }], null, null);
})();
(function() {
  (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PoPageBlockedUserModule, {
    declarations: [PoPageBlockedUserComponent, PoPageBlockedUserContactsComponent, PoPageBlockedUserReasonComponent],
    imports: [CommonModule, RouterModule, PoModule, PoPageBackgroundModule],
    exports: [PoPageBlockedUserComponent, PoPageBlockedUserContactsComponent, PoPageBlockedUserReasonComponent]
  });
})();
var PoPageChangePasswordBaseComponent = class _PoPageChangePasswordBaseComponent {
  /**
   * @optional
   *
   * @description
   *
   * Caminho para a logomarca localizada na parte superior.
   *
   * > Caso seja indefinida o espaço se mantém preservado porém vazio.
   */
  logo;
  /**
   * @optional
   *
   * @description
   *
   * Caminho para a logomarca localizada no rodapé.
   */
  secondaryLogo;
  /**
   * Token para solicitação de troca/recuperação de senha.
   *
   * > Esta propriedade será ignorada caso exista um token como parâmetro na URL inicial do template.
   */
  token;
  /**
   * @optional
   *
   * @description
   *
   * URL para a ação de retorno da página.
   *
   * > O botão `Voltar` aparece apenas para telas de alteração de senha, ou seja, só aparece se a propriedade `p-hide-current-password` for
   * falsa.
   *
   * @default `/`
   */
  urlBack = "/";
  /**
   * Endpoint usado pelo template para realizar um POST. Quando preenchido, o método `p-submit` será ignorado e o componente adquirirá
   * automatização para o processo de cadastro/troca de senha.
   *
   * ### Processo
   * Ao digitar um valor válido nos campos de senha e pressionar **salvar**,
   * o componente fará uma requisição `POST` na url especificada nesta propriedade passando o objeto contendo os valores definidos pelo
   * usuário.
   *
   * ```
   * body {
   *  token?: token,
   *  oldPassword?: oldPassword,
   *  newPassword: newPassword
   * }
   * ```
   *
   * O código de resposta HTTP de status esperado é `204`.
   *
   * Em caso de **sucesso**, será exibida a modal de confirmação de senha alterada.
   *
   * > O token será informado pela propriedade `p-token`do componente ou por um *query parameter* na URL do template.
   *
   * *Processo finalizado.*
   *
   * _______________
   *
   * #### Praticidade
   * As informações do serviço de autenticação também podem ser transmitidas diretamente pelas configuraçãos de rota e, desta maneira,
   * dispensa-se qualquer menção e/ou importação do componente `po-page-change-password` no restante da aplicação. O exemplo abaixo
   * exemplifica a forma dinâmica com a qual o template de tela de troca de senha pode ser gerado ao navegar para rota `/change-password`, e
   * também como ele se comunica com o serviço para efetuação do processo de troca de senha do usuário e solicitação de nova senha.
   * Basta definir nas configurações de rota:
   *
   *
   * ```
   *   import { PoModalPasswordRecoveryType, PoPageChangePasswordComponent } from '@po-ui/ng-templates';
   *
   *   ...
   *   const routes: Routes = [
   *     {
   *       path: 'change-password', component: PoPageChangePasswordComponent, data: {
   *         serviceApi: 'https://po-ui.io/sample/api/new-password',
   *         recovery: {
   *           url: 'https://po-ui.io/sample/api/users',
   *           type: PoModalPasswordRecoveryType.All,
   *           contactMail: 'dev.po@po-ui.com',
   *           phoneMask: '9-999-999-9999'
   *         }
   *       }
   *     }
   *     ...
   *   ];
   *
   *   @NgModule({
   *     imports: [RouterModule.forRoot(routes)],
   *     exports: [RouterModule]
   *   })
   *   export class AppRoutingModule { }
   * ```
   *
   *
   * O metadado `serviceApi` deve ser a **url** para requisição dos recursos de troca de senha. E `recovery` é a interface
   * `PoPageChangePasswordRecovery` responsável pelas especificações contidas na modal de recuperação de senha.
   *
   * > É essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade.
   *
   */
  urlNewPassword;
  /**
   * @optional
   *
   * @description
   *
   * Função executada ao submeter o form pelo botão salvar.
   *
   * Caso definida essa função, a modal de confirmação não aparece, mas pode ser chamada pelo
   * método `openConfirmation`. Exemplo:
   *
   * ```
   * @ViewChild(PoPageChangePasswordComponent) changePassword: PoPageChangePasswordComponent;
   *
   * onSubmit() {
   *  this.changePassword.openConfirmation();
   * }
   *
   * ```
   * > Esta propriedade será ignorada se for definido valor para a propriedade `p-url-new-password`.
   */
  submit = new EventEmitter();
  confirmPassword;
  currentPassword;
  modalAction;
  newPassword;
  recoveryUrlType;
  showRequirements;
  validatorChange;
  _hideCurrentPassword = false;
  _recovery;
  _requirements = [];
  _urlHome = "/";
  /**
   * @optional
   *
   * @description
   *
   * Esconde o campo `Senha atual` para que o template seja para criação de senha.
   *
   * @default `false`
   */
  set hideCurrentPassword(value) {
    this._hideCurrentPassword = convertToBoolean(value);
  }
  get hideCurrentPassword() {
    return this._hideCurrentPassword;
  }
  /**
   * @optional
   *
   * @description
   *
   * URL para a ação do link `Esqueceu a senha`.
   *
   * A propriedade aceita os seguintes tipos:
   *
   * - **String**: informe uma url externa ou uma rota válida;
   * - **Function**: pode-se customizar a ação. Para esta possilidade basta atribuir:
   * ```
   * <po-page-change-password>
   *      [recovery]="this.myFunc.bind(this)";
   * </po-page-change-password>
   * ```
   *
   * - **PoPageChangePasswordRecovery**: cria-se vínculo automático com o template **po-modal-password-recovery**.
   *   O objeto deve conter a **url** para requisição dos recursos e pode-se definir o **tipo** de modal para recuperação de senha,
   *   **email** para contato e **máscara** do campo de telefone.
   *
   * > Caso não tenha valor o link `Esqueceu a senha` desaparece.
   */
  set recovery(value) {
    this._recovery = value;
    if (isTypeof(value, "string")) {
      this.recoveryUrlType = isExternalLink(value) ? "externalLink" : "internalLink";
    }
  }
  get recovery() {
    return this._recovery;
  }
  /**
   * @optional
   *
   * @description
   *
   * Lista de regras para criação e alteração de senha.
   */
  set requirements(value) {
    this._requirements = value || [];
    this.showRequirements = this._requirements.length > 0;
  }
  get requirements() {
    return this._requirements;
  }
  /**
   * @optional
   *
   * @description
   *
   * URL para a ação do botão `Entrar no sistema` da modal de confirmação que aparece após salvar a senha ou se chamada pelo método
   * `openConfirmation`.
   *
   * @default `/`
   */
  set urlHome(value) {
    this._urlHome = value;
    this.modalAction.action = this.navigateTo.bind(this, this.urlHome);
  }
  get urlHome() {
    return this._urlHome;
  }
  static ɵfac = function PoPageChangePasswordBaseComponent_Factory(t) {
    return new (t || _PoPageChangePasswordBaseComponent)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _PoPageChangePasswordBaseComponent,
    inputs: {
      logo: [0, "p-logo", "logo"],
      secondaryLogo: [0, "p-secondary-logo", "secondaryLogo"],
      token: [0, "p-token", "token"],
      urlBack: [0, "p-url-back", "urlBack"],
      urlNewPassword: [0, "p-url-new-password", "urlNewPassword"],
      hideCurrentPassword: [0, "p-hide-current-password", "hideCurrentPassword"],
      recovery: [0, "p-recovery", "recovery"],
      requirements: [0, "p-requirements", "requirements"],
      urlHome: [0, "p-url-home", "urlHome"]
    },
    outputs: {
      submit: "p-submit"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageChangePasswordBaseComponent, [{
    type: Directive
  }], null, {
    logo: [{
      type: Input,
      args: ["p-logo"]
    }],
    secondaryLogo: [{
      type: Input,
      args: ["p-secondary-logo"]
    }],
    token: [{
      type: Input,
      args: ["p-token"]
    }],
    urlBack: [{
      type: Input,
      args: ["p-url-back"]
    }],
    urlNewPassword: [{
      type: Input,
      args: ["p-url-new-password"]
    }],
    submit: [{
      type: Output,
      args: ["p-submit"]
    }],
    hideCurrentPassword: [{
      type: Input,
      args: ["p-hide-current-password"]
    }],
    recovery: [{
      type: Input,
      args: ["p-recovery"]
    }],
    requirements: [{
      type: Input,
      args: ["p-requirements"]
    }],
    urlHome: [{
      type: Input,
      args: ["p-url-home"]
    }]
  });
})();
var poPageChangePasswordLiterals = {
  en: {
    backButton: "Back",
    confirmPassword: "Confirm password",
    createNewPassword: "Create new password",
    createNewPasswordPhrase: "Protect your account with a personal password created by you",
    currentPassword: "Current password",
    enterSystemButton: "Enter the system",
    forgotPassword: "Forgot your password?",
    newPassword: "New password",
    passwordSuccessfullyCreated: "Password successfully created!",
    passwordSuccessfullyUpdated: "Password successfully updated!",
    requirements: "Password requirements",
    safetyTips: "Safety tips!",
    safetyTipsFirst: "is used in other accounts;",
    safetyTipsPhrase: "Avoid a password that:",
    safetyTipsSecond: "has personal information like your name, nickname or family names;",
    safetyTipsThird: 'that uses obvious sequences like "123" or obvious words like "password";',
    saveButton: "Save"
  },
  es: {
    backButton: "Volver",
    confirmPassword: "Confirmar seña",
    createNewPassword: "Crear nueva contraseña",
    createNewPasswordPhrase: "Proteger su cuenta con una contraseña personal creada por usted",
    currentPassword: "Contraseña actual",
    enterSystemButton: "Entrar en el sistema",
    forgotPassword: "¿Olvidaste tu contraseña?",
    newPassword: "Nueva contraseña",
    passwordSuccessfullyCreated: "Contraseña creada correctamente!",
    passwordSuccessfullyUpdated: "Contraseña correctamente actualizada!",
    requirements: "Requisitos de contraseña",
    safetyTips: "Consejos de seguridad!",
    safetyTipsFirst: "se utilice en otras cuentas;",
    safetyTipsPhrase: "Evite una contraseña que:",
    safetyTipsSecond: "utiliza información personal como su nombre, apellido o nombre de familia;",
    safetyTipsThird: 'utilice secuencias muy obvias como "1234" o "abcd" o palabras obvias como "contraseña";',
    saveButton: "Guardar"
  },
  pt: {
    backButton: "Voltar",
    confirmPassword: "Confirmar senha",
    createNewPassword: "Criar nova senha",
    createNewPasswordPhrase: "Proteja sua conta com uma senha pessoal criada por você",
    currentPassword: "Senha atual",
    enterSystemButton: "Entrar no sistema",
    forgotPassword: "Esqueceu sua senha?",
    newPassword: "Nova senha",
    passwordSuccessfullyCreated: "Senha criada com sucesso!",
    passwordSuccessfullyUpdated: "Senha alterada com sucesso!",
    requirements: "Requisitos de senha",
    safetyTips: "Dicas de segurança!",
    safetyTipsFirst: "seja usada em outras contas;",
    safetyTipsPhrase: "Evite uma senha que:",
    safetyTipsSecond: "usa informações pessoais como seu nome, apelido ou nome de familiares;",
    safetyTipsThird: 'use sequências muito óbvias como "1234" ou "abcd" ou palavras óbvias como “senha”;',
    saveButton: "Salvar"
  },
  ru: {
    backButton: "возвращение",
    confirmPassword: "Подтвердите пароль",
    createNewPassword: "Создать новый пароль",
    createNewPasswordPhrase: "Защитите свой аккаунт с помощью личного пароля.",
    currentPassword: "Текущий пароль",
    enterSystemButton: "Вход в систему",
    forgotPassword: "Забыли пароль?",
    newPassword: "Новый пароль",
    passwordSuccessfullyCreated: "Пароль успешно создан!",
    passwordSuccessfullyUpdated: "Пароль успешно изменен!",
    requirements: "Требования к паролю",
    safetyTips: "Советы по безопасности!",
    safetyTipsFirst: "использоваться на других счетах;",
    safetyTipsPhrase: "Избегайте пароля, который:",
    safetyTipsSecond: "использует личную информацию, такую ​​как ваше имя, фамилию или фамилию;",
    safetyTipsThird: 'используйте очень очевидные строки, такие как "1234" или "abcd", или такие очевидные слова, как "пароль";',
    saveButton: "экономить"
  }
};
var PoPageChangePasswordService = class _PoPageChangePasswordService {
  http;
  constructor(http) {
    this.http = http;
  }
  post(url, item) {
    return this.http.post(url, item, {
      observe: "response"
    });
  }
  static ɵfac = function PoPageChangePasswordService_Factory(t) {
    return new (t || _PoPageChangePasswordService)(ɵɵinject(HttpClient));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _PoPageChangePasswordService,
    factory: _PoPageChangePasswordService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageChangePasswordService, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }], null);
})();
var _c0$6 = ["pageChangePassword"];
var _c1$4 = ["passwordForm"];
var _c2$2 = (a0) => ({
  "po-offset-md-3 po-offset-lg-3 po-offset-xl-3": a0
});
function PoPageChangePasswordComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "po-password", 30);
    ɵɵtwoWayListener("ngModelChange", function PoPageChangePasswordComponent_div_13_Template_po_password_ngModelChange_1_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r2.currentPassword, $event) || (ctx_r2.currentPassword = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtwoWayProperty("ngModel", ctx_r2.currentPassword);
    ɵɵproperty("p-label", ctx_r2.literals.currentPassword);
  }
}
function PoPageChangePasswordComponent_div_14_a_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 35);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("routerLink", ctx_r2.recovery);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.literals.forgotPassword, " ");
  }
}
function PoPageChangePasswordComponent_div_14_a_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 36);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("href", ctx_r2.recovery, ɵɵsanitizeUrl);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.literals.forgotPassword, " ");
  }
}
function PoPageChangePasswordComponent_div_14_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 37);
    ɵɵlistener("click", function PoPageChangePasswordComponent_div_14_a_3_Template_a_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onForgotPasswordClick(ctx_r2.recovery));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.literals.forgotPassword, " ");
  }
}
function PoPageChangePasswordComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 31);
    ɵɵtemplate(1, PoPageChangePasswordComponent_div_14_a_1_Template, 2, 2, "a", 32)(2, PoPageChangePasswordComponent_div_14_a_2_Template, 2, 2, "a", 33)(3, PoPageChangePasswordComponent_div_14_a_3_Template, 2, 1, "a", 34);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.recoveryUrlType === "internalLink");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.recoveryUrlType === "externalLink");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.recoveryUrlType);
  }
}
function PoPageChangePasswordComponent_div_19_li_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 40);
    ɵɵelement(1, "po-icon", 43);
    ɵɵelementStart(2, "p", 44);
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const requirement_r5 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("p-icon", ctx_r2.validateRequirement(requirement_r5) ? "ICON_OK po-page-change-password-required-ok" : "ICON_MINUS po-page-change-password-required-minus");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", requirement_r5.requirement, " ");
  }
}
function PoPageChangePasswordComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 38)(1, "po-container")(2, "ul", 39)(3, "li", 40)(4, "p", 41);
    ɵɵtext(5);
    ɵɵelementEnd()();
    ɵɵtemplate(6, PoPageChangePasswordComponent_div_19_li_6_Template, 4, 2, "li", 42);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ctx_r2.literals == null ? null : ctx_r2.literals.requirements, " ");
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.requirements);
  }
}
function PoPageChangePasswordComponent_po_button_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "po-button", 45);
    ɵɵlistener("p-click", function PoPageChangePasswordComponent_po_button_38_Template_po_button_p_click_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.navigateTo(ctx_r2.urlBack));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("p-label", ctx_r2.literals.backButton);
  }
}
var PoPageChangePasswordComponent = class _PoPageChangePasswordComponent extends PoPageChangePasswordBaseComponent {
  activatedRoute;
  route;
  router;
  service;
  poComponentInjector;
  modal;
  pageChangePassword;
  passwordForm;
  literals = poPageChangePasswordLiterals[poLocaleDefault];
  modalAction = {
    action: this.navigateTo.bind(this, this.urlHome),
    label: this.literals.enterSystemButton
  };
  newPasswordSubscription;
  componentRef = null;
  constructor(activatedRoute, route, router, service, poComponentInjector, languageService, viewRef) {
    super();
    this.activatedRoute = activatedRoute;
    this.route = route;
    this.router = router;
    this.service = service;
    this.poComponentInjector = poComponentInjector;
    const language = languageService.getShortLanguage();
    this.literals = __spreadValues(__spreadValues({}, poPageChangePasswordLiterals[poLocaleDefault]), poPageChangePasswordLiterals[language]);
  }
  ngAfterViewInit() {
    if (this.urlNewPassword) {
      this.subscribeToTokenParameter();
    }
  }
  ngOnDestroy() {
    if (this.newPasswordSubscription) {
      this.newPasswordSubscription.unsubscribe();
    }
  }
  ngOnInit() {
    this.checkingForRouteMetadata(this.activatedRoute.snapshot.data);
  }
  navigateTo(url) {
    isExternalLink(url) ? window.open(url) : this.router.navigate([url || "/"]);
  }
  onForgotPasswordClick(recovery) {
    if (isTypeof(recovery, "function")) {
      recovery();
    } else {
      this.createModalPasswordRecoveryComponent(recovery);
    }
  }
  onLoginSubmit() {
    const form = this.getLoginForm();
    if (this.urlNewPassword) {
      this.postUrlNewPassword(form);
    } else if (this.submit && this.submit.observers.length) {
      this.emitSubmit(form);
    }
  }
  /**
   * Abre uma modal de confirmação com texto, imagem e botão que redireciona para o link definido na propriedade `p-url-home`
   */
  openConfirmation() {
    this.modal.open();
  }
  validatePassword() {
    const controls = this.passwordForm.form.controls;
    const controlConfirmPassword = controls["confirmPassword"];
    const controlNewPassword = controls["newPassword"];
    if (!this.newPassword) {
      this.setFormErrors({
        "required": true
      }, [controlNewPassword]);
    } else if (!this.confirmPassword) {
      this.setFormErrors({
        "required": true
      }, [controlConfirmPassword]);
    } else if (this.newPassword && this.confirmPassword && this.newPassword !== this.confirmPassword) {
      this.setFormErrors({
        "equalPassword": true
      }, [controlNewPassword, controlConfirmPassword]);
    } else {
      this.setFormErrors(null, [controlConfirmPassword, controlNewPassword]);
    }
    if (this.requirements.length && this.requirements.find((requirement) => this.validateRequirement(requirement) === false)) {
      this.setFormErrors({
        "requirement": true
      }, [controlNewPassword]);
    }
  }
  validateRequirement(requirement) {
    return typeof requirement.status === "function" ? requirement.status(this.newPassword) : requirement.status;
  }
  checkingForMetadataProperty(object, property) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      return object[property];
    }
  }
  checkingForRouteMetadata(data) {
    if (Object.keys(data).length !== 0) {
      this.urlNewPassword = this.checkingForMetadataProperty(data, "serviceApi") || this.urlNewPassword;
      this.recovery = this.checkingForMetadataProperty(data, "recovery") || this.recovery;
      this.hideCurrentPassword = this.checkingForMetadataProperty(data, "hideCurrentPassword") || this.hideCurrentPassword;
    }
  }
  createModalPasswordRecoveryComponent(recovery) {
    if (this.componentRef) {
      this.poComponentInjector.destroyComponentInApplication(this.componentRef);
    }
    this.componentRef = this.poComponentInjector.createComponentInApplication(PoModalPasswordRecoveryComponent);
    this.componentRef.instance.recovery = recovery.url;
    this.componentRef.instance.contactEmail = recovery.contactMail;
    this.componentRef.instance.phoneMask = recovery.phoneMask;
    this.componentRef.instance.type = recovery.type || PoModalPasswordRecoveryType.Email;
    this.componentRef.changeDetectorRef.detectChanges();
    setTimeout(() => {
      this.componentRef.instance.open();
    });
  }
  emitSubmit(form) {
    this.submit.emit(form);
  }
  getLoginForm() {
    return {
      currentPassword: this.currentPassword,
      newPassword: this.newPassword
    };
  }
  postUrlNewPassword(form) {
    form["token"] = this.token;
    this.service.post(this.urlNewPassword, form).subscribe((response) => {
      if (response.status === 204) {
        this.openConfirmation();
      }
    });
  }
  setFormErrors(error, controls) {
    controls.forEach((control) => {
      control.setErrors(error);
    });
  }
  subscribeToTokenParameter() {
    this.route.queryParams.subscribe((params) => {
      const token = params["token"];
      if (token) {
        this.token = token;
      }
    });
  }
  static ɵfac = function PoPageChangePasswordComponent_Factory(t) {
    return new (t || _PoPageChangePasswordComponent)(ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(PoPageChangePasswordService), ɵɵdirectiveInject(PoComponentInjectorService), ɵɵdirectiveInject(PoLanguageService), ɵɵdirectiveInject(ViewContainerRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PoPageChangePasswordComponent,
    selectors: [["po-page-change-password"]],
    viewQuery: function PoPageChangePasswordComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(PoModalComponent, 7);
        ɵɵviewQuery(_c0$6, 7, ViewContainerRef);
        ɵɵviewQuery(_c1$4, 7, NgForm);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.modal = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.pageChangePassword = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.passwordForm = _t.first);
      }
    },
    features: [ɵɵInheritDefinitionFeature],
    decls: 43,
    vars: 25,
    consts: [["pageChangePassword", ""], ["passwordForm", "ngForm"], [1, "po-page-change-password-wrapper"], [1, "po-page-change-password-container"], [1, "po-page-change-password", 3, "p-logo", "p-secondary-logo"], [1, "po-page-blocked-user-header", "po-row"], [1, "po-md-12"], [1, "po-md-12", "po-text-center", "po-font-text"], [1, "po-row", "po-mt-3", "po-mt-sm-1"], [1, "po-md-6", 3, "ngClass"], [4, "ngIf"], ["class", "po-text-center po-mb-sm-1 po-mb-2", 4, "ngIf"], ["name", "newPassword", "p-required", "", 3, "ngModelChange", "p-change-model", "ngModel", "p-label"], ["name", "confirmPassword", "p-required", "", 3, "ngModelChange", "p-change-model", "ngModel", "p-label"], ["class", "po-md-6 po-page-change-password-required-container", 4, "ngIf"], [1, "po-sm-12"], [1, "po-page-change-password-tips", "po-row"], [1, "po-md-2", "po-mr-3"], ["alt", "Blocked user image", "src", "./assets/images/big-lock.svg", 1, "po-page-change-password-lock-image", "po-mb-3"], [1, "po-md-9", "po-page-change-password-tips-text"], [1, "po-font-text-bold", "po-pb-1"], [1, "po-font-text-small"], [1, "po-row", "po-pb-1"], [1, "po-page-change-password-buttons", "po-row"], [1, "po-sm-12", "po-mobile-only"], ["class", "po-sm-6 po-mb-sm-1", 3, "p-label", "p-click", 4, "ngIf"], ["p-kind", "primary", 3, "p-click", "ngClass", "p-disabled", "p-label"], ["p-hide-close", "", "p-size", "auto", 3, "p-primary-action", "p-title"], [1, "po-text-center"], ["alt", "Blocked user image", "src", "./assets/images/success.svg", 1, "po-page-change-password-lock-image", "po-mb-3"], ["name", "currentPassword", "p-required", "", 3, "ngModelChange", "ngModel", "p-label"], [1, "po-text-center", "po-mb-sm-1", "po-mb-2"], ["class", "po-font-text-bold po-page-change-password-forgot-password", 3, "routerLink", 4, "ngIf"], ["class", "po-font-text-bold po-page-change-password-forgot-password", 3, "href", 4, "ngIf"], ["class", "po-font-text-bold po-page-change-password-forgot-password po-clickable", 3, "click", 4, "ngIf"], [1, "po-font-text-bold", "po-page-change-password-forgot-password", 3, "routerLink"], [1, "po-font-text-bold", "po-page-change-password-forgot-password", 3, "href"], [1, "po-font-text-bold", "po-page-change-password-forgot-password", "po-clickable", 3, "click"], [1, "po-md-6", "po-page-change-password-required-container"], [1, "po-page-change-password-required-list"], [1, "po-page-change-password-required-item"], [1, "po-mb-1", "po-font-text-bold", "po-page-change-password-required-title"], ["class", "po-page-change-password-required-item", 4, "ngFor", "ngForOf"], [1, "po-icon", "po-page-change-password-required-icon", 3, "p-icon"], [1, "po-page-change-password-required-text", "po-font-text"], [1, "po-sm-6", "po-mb-sm-1", 3, "p-click", "p-label"]],
    template: function PoPageChangePasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 2, 0)(2, "div", 3)(3, "po-page-background", 4)(4, "div", 5)(5, "div", 6);
        ɵɵtext(6);
        ɵɵelementEnd();
        ɵɵelementStart(7, "div", 7);
        ɵɵtext(8);
        ɵɵelementEnd()();
        ɵɵelementStart(9, "form", null, 1)(11, "div", 8)(12, "div", 9);
        ɵɵtemplate(13, PoPageChangePasswordComponent_div_13_Template, 2, 2, "div", 10)(14, PoPageChangePasswordComponent_div_14_Template, 4, 3, "div", 11);
        ɵɵelementStart(15, "div")(16, "po-password", 12);
        ɵɵtwoWayListener("ngModelChange", function PoPageChangePasswordComponent_Template_po_password_ngModelChange_16_listener($event) {
          ɵɵrestoreView(_r1);
          ɵɵtwoWayBindingSet(ctx.newPassword, $event) || (ctx.newPassword = $event);
          return ɵɵresetView($event);
        });
        ɵɵlistener("p-change-model", function PoPageChangePasswordComponent_Template_po_password_p_change_model_16_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.validatePassword());
        });
        ɵɵelementEnd()();
        ɵɵelementStart(17, "div")(18, "po-password", 13);
        ɵɵtwoWayListener("ngModelChange", function PoPageChangePasswordComponent_Template_po_password_ngModelChange_18_listener($event) {
          ɵɵrestoreView(_r1);
          ɵɵtwoWayBindingSet(ctx.confirmPassword, $event) || (ctx.confirmPassword = $event);
          return ɵɵresetView($event);
        });
        ɵɵlistener("p-change-model", function PoPageChangePasswordComponent_Template_po_password_p_change_model_18_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.validatePassword());
        });
        ɵɵelementEnd()()();
        ɵɵtemplate(19, PoPageChangePasswordComponent_div_19_Template, 7, 2, "div", 14);
        ɵɵelementEnd()();
        ɵɵelement(20, "po-divider", 15);
        ɵɵelementStart(21, "div", 16)(22, "div", 17);
        ɵɵelement(23, "img", 18);
        ɵɵelementEnd();
        ɵɵelementStart(24, "div", 19)(25, "div", 20);
        ɵɵtext(26);
        ɵɵelementEnd();
        ɵɵelementStart(27, "div", 21)(28, "div", 22);
        ɵɵtext(29);
        ɵɵelementEnd();
        ɵɵelementStart(30, "div", 22);
        ɵɵtext(31);
        ɵɵelementEnd();
        ɵɵelementStart(32, "div", 22);
        ɵɵtext(33);
        ɵɵelementEnd();
        ɵɵelementStart(34, "div", 22);
        ɵɵtext(35);
        ɵɵelementEnd()()()();
        ɵɵelementStart(36, "div", 23);
        ɵɵelement(37, "po-divider", 24);
        ɵɵtemplate(38, PoPageChangePasswordComponent_po_button_38_Template, 1, 1, "po-button", 25);
        ɵɵelementStart(39, "po-button", 26);
        ɵɵlistener("p-click", function PoPageChangePasswordComponent_Template_po_button_p_click_39_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onLoginSubmit());
        });
        ɵɵelementEnd()()()()();
        ɵɵelementStart(40, "po-modal", 27)(41, "div", 28);
        ɵɵelement(42, "img", 29);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        const passwordForm_r7 = ɵɵreference(10);
        ɵɵadvance(3);
        ɵɵproperty("p-logo", ctx.logo)("p-secondary-logo", ctx.secondaryLogo);
        ɵɵadvance(3);
        ɵɵtextInterpolate(ctx.literals.createNewPassword);
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" ", ctx.literals.createNewPasswordPhrase, " ");
        ɵɵadvance(4);
        ɵɵproperty("ngClass", ɵɵpureFunction1(23, _c2$2, !ctx.showRequirements));
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.hideCurrentPassword);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.hideCurrentPassword && ctx.recovery);
        ɵɵadvance(2);
        ɵɵtwoWayProperty("ngModel", ctx.newPassword);
        ɵɵproperty("p-label", ctx.literals.newPassword);
        ɵɵadvance(2);
        ɵɵtwoWayProperty("ngModel", ctx.confirmPassword);
        ɵɵproperty("p-label", ctx.literals.confirmPassword);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.showRequirements);
        ɵɵadvance(7);
        ɵɵtextInterpolate(ctx.literals.safetyTips);
        ɵɵadvance(3);
        ɵɵtextInterpolate(ctx.literals.safetyTipsPhrase);
        ɵɵadvance(2);
        ɵɵtextInterpolate1("• ", ctx.literals.safetyTipsFirst, "");
        ɵɵadvance(2);
        ɵɵtextInterpolate1("• ", ctx.literals.safetyTipsSecond, "");
        ɵɵadvance(2);
        ɵɵtextInterpolate1("• ", ctx.literals.safetyTipsThird, "");
        ɵɵadvance(3);
        ɵɵproperty("ngIf", !ctx.hideCurrentPassword);
        ɵɵadvance();
        ɵɵproperty("ngClass", ctx.hideCurrentPassword ? "po-md-12" : "po-sm-6")("p-disabled", passwordForm_r7.invalid)("p-label", ctx.literals.saveButton);
        ɵɵadvance();
        ɵɵproperty("p-primary-action", ctx.modalAction)("p-title", ctx.hideCurrentPassword ? ctx.literals.passwordSuccessfullyCreated : ctx.literals.passwordSuccessfullyUpdated);
      }
    },
    dependencies: [NgClass, NgForOf, NgIf, ɵNgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink, PoButtonComponent, PoContainerComponent, PoDividerComponent, PoPasswordComponent, PoIconComponent, PoModalComponent, PoPageBackgroundComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageChangePasswordComponent, [{
    type: Component,
    args: [{
      selector: "po-page-change-password",
      template: `<div class="po-page-change-password-wrapper" #pageChangePassword>
  <div class="po-page-change-password-container">
    <po-page-background class="po-page-change-password" [p-logo]="logo" [p-secondary-logo]="secondaryLogo">
      <div class="po-page-blocked-user-header po-row">
        <div class="po-md-12">{{ literals.createNewPassword }}</div>
        <div class="po-md-12 po-text-center po-font-text">
          {{ literals.createNewPasswordPhrase }}
        </div>
      </div>

      <form #passwordForm="ngForm">
        <div class="po-row po-mt-3 po-mt-sm-1">
          <div class="po-md-6" [ngClass]="{ 'po-offset-md-3 po-offset-lg-3 po-offset-xl-3': !showRequirements }">
            <div *ngIf="!hideCurrentPassword">
              <po-password
                name="currentPassword"
                [(ngModel)]="currentPassword"
                p-required
                [p-label]="literals.currentPassword"
              >
              </po-password>
            </div>
            <div *ngIf="!hideCurrentPassword && recovery" class="po-text-center po-mb-sm-1 po-mb-2">
              <a
                *ngIf="recoveryUrlType === 'internalLink'"
                class="po-font-text-bold po-page-change-password-forgot-password"
                [routerLink]="recovery"
              >
                {{ literals.forgotPassword }}
              </a>
              <a
                *ngIf="recoveryUrlType === 'externalLink'"
                class="po-font-text-bold po-page-change-password-forgot-password"
                [href]="recovery"
              >
                {{ literals.forgotPassword }}
              </a>
              <a
                *ngIf="!recoveryUrlType"
                class="po-font-text-bold po-page-change-password-forgot-password po-clickable"
                (click)="onForgotPasswordClick(recovery)"
              >
                {{ literals.forgotPassword }}
              </a>
            </div>
            <div>
              <po-password
                name="newPassword"
                [(ngModel)]="newPassword"
                p-required
                [p-label]="literals.newPassword"
                (p-change-model)="validatePassword()"
              >
              </po-password>
            </div>
            <div>
              <po-password
                name="confirmPassword"
                [(ngModel)]="confirmPassword"
                p-required
                [p-label]="literals.confirmPassword"
                (p-change-model)="validatePassword()"
              >
              </po-password>
            </div>
          </div>
          <div *ngIf="showRequirements" class="po-md-6 po-page-change-password-required-container">
            <po-container>
              <ul class="po-page-change-password-required-list">
                <li class="po-page-change-password-required-item">
                  <p class="po-mb-1 po-font-text-bold po-page-change-password-required-title">
                    {{ literals?.requirements }}
                  </p>
                </li>
                <li *ngFor="let requirement of requirements" class="po-page-change-password-required-item">
                  <po-icon
                    class="po-icon po-page-change-password-required-icon"
                    [p-icon]="
                      validateRequirement(requirement)
                        ? 'ICON_OK po-page-change-password-required-ok'
                        : 'ICON_MINUS po-page-change-password-required-minus'
                    "
                  >
                  </po-icon>
                  <p class="po-page-change-password-required-text po-font-text">
                    {{ requirement.requirement }}
                  </p>
                </li>
              </ul>
            </po-container>
          </div>
        </div>
      </form>

      <po-divider class="po-sm-12"></po-divider>

      <div class="po-page-change-password-tips po-row">
        <div class="po-md-2 po-mr-3">
          <img
            class="po-page-change-password-lock-image po-mb-3"
            alt="Blocked user image"
            src="./assets/images/big-lock.svg"
          />
        </div>
        <div class="po-md-9 po-page-change-password-tips-text">
          <div class="po-font-text-bold po-pb-1">{{ literals.safetyTips }}</div>
          <div class="po-font-text-small">
            <div class="po-row po-pb-1">{{ literals.safetyTipsPhrase }}</div>
            <div class="po-row po-pb-1">• {{ literals.safetyTipsFirst }}</div>
            <div class="po-row po-pb-1">• {{ literals.safetyTipsSecond }}</div>
            <div class="po-row po-pb-1">• {{ literals.safetyTipsThird }}</div>
          </div>
        </div>
      </div>

      <div class="po-page-change-password-buttons po-row">
        <po-divider class="po-sm-12 po-mobile-only"></po-divider>

        <po-button
          *ngIf="!hideCurrentPassword"
          class="po-sm-6 po-mb-sm-1"
          [p-label]="literals.backButton"
          (p-click)="navigateTo(urlBack)"
        >
        </po-button>

        <po-button
          [ngClass]="hideCurrentPassword ? 'po-md-12' : 'po-sm-6'"
          p-kind="primary"
          [p-disabled]="passwordForm.invalid"
          [p-label]="literals.saveButton"
          (p-click)="onLoginSubmit()"
        >
        </po-button>
      </div>
    </po-page-background>
  </div>
</div>

<po-modal
  [p-primary-action]="modalAction"
  p-hide-close
  p-size="auto"
  [p-title]="hideCurrentPassword ? literals.passwordSuccessfullyCreated : literals.passwordSuccessfullyUpdated"
>
  <div class="po-text-center">
    <img
      alt="Blocked user image"
      class="po-page-change-password-lock-image po-mb-3"
      src="./assets/images/success.svg"
    />
  </div>
</po-modal>
`
    }]
  }], () => [{
    type: ActivatedRoute
  }, {
    type: ActivatedRoute
  }, {
    type: Router
  }, {
    type: PoPageChangePasswordService
  }, {
    type: PoComponentInjectorService
  }, {
    type: PoLanguageService
  }, {
    type: ViewContainerRef
  }], {
    modal: [{
      type: ViewChild,
      args: [PoModalComponent, {
        static: true
      }]
    }],
    pageChangePassword: [{
      type: ViewChild,
      args: ["pageChangePassword", {
        read: ViewContainerRef,
        static: true
      }]
    }],
    passwordForm: [{
      type: ViewChild,
      args: ["passwordForm", {
        read: NgForm,
        static: true
      }]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(PoPageChangePasswordComponent, {
    className: "PoPageChangePasswordComponent",
    filePath: "lib/components/po-page-change-password/po-page-change-password.component.ts",
    lineNumber: 60
  });
})();
var PoPageChangePasswordModule = class _PoPageChangePasswordModule {
  static ɵfac = function PoPageChangePasswordModule_Factory(t) {
    return new (t || _PoPageChangePasswordModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _PoPageChangePasswordModule
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [PoPageChangePasswordService],
    imports: [CommonModule, FormsModule, RouterModule, PoModule, PoPageBackgroundModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageChangePasswordModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, RouterModule, PoModule, PoPageBackgroundModule],
      declarations: [PoPageChangePasswordComponent],
      providers: [PoPageChangePasswordService],
      exports: [PoPageChangePasswordComponent]
    }]
  }], null, null);
})();
(function() {
  (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PoPageChangePasswordModule, {
    declarations: [PoPageChangePasswordComponent],
    imports: [CommonModule, FormsModule, RouterModule, PoModule, PoPageBackgroundModule],
    exports: [PoPageChangePasswordComponent]
  });
})();
var poPageDynamicLiterals = {
  en: {
    errorRenderPage: "Error loading page",
    notPossibleLoadMetadataPage: "The page metadata could not be loaded"
  },
  es: {
    errorRenderPage: "Error al cargar la página",
    notPossibleLoadMetadataPage: "No se pudieron cargar los metadatos de la página."
  },
  pt: {
    errorRenderPage: "Erro ao carregar a página",
    notPossibleLoadMetadataPage: "Não foi possível carregar os metadados da página"
  },
  ru: {
    errorRenderPage: "Ошибка загрузки страницы",
    notPossibleLoadMetadataPage: "Не удалось загрузить метаданные страницы"
  }
};
var PoPageDynamicService = class _PoPageDynamicService {
  http;
  notification;
  headers = new HttpHeaders({
    "X-PO-SCREEN-LOCK": "true"
  });
  endpoint = "/";
  language;
  metadata;
  constructor(http, notification, languageService) {
    this.http = http;
    this.notification = notification;
    this.language = languageService.getShortLanguage();
  }
  configServiceApi(config = {}) {
    this.endpoint = config.endpoint;
    this.metadata = config.metadata || this.metadata;
  }
  getMetadata(type = "list") {
    const key = `${this.endpoint}-${type}-metadata`;
    const cache = JSON.parse(localStorage.getItem(key)) || {};
    const metadataUrlBase = this.metadata || `${this.endpoint}/metadata`;
    const url = `${metadataUrlBase}?type=${type}&version=${cache.version || ""}`;
    return this.http.get(url).pipe(map((response) => {
      if (response.version !== void 0 && response.version === cache.version) {
        return cache;
      }
      localStorage.setItem(key, JSON.stringify(response));
      return __spreadValues(__spreadValues({}, cache), response);
    }), catchError((error) => {
      if (Object.keys(cache).length) {
        return of(cache);
      }
      const {
        errorRenderPage,
        notPossibleLoadMetadataPage
      } = poPageDynamicLiterals[this.language];
      this.notification.warning(notPossibleLoadMetadataPage);
      return merge(of({
        title: errorRenderPage
      }), throwError(error));
    }));
  }
  // Deleta um único recurso
  deleteResource(id, endpoint) {
    const localEndPoint = this.getLocalEndPoint(endpoint, true);
    const url = id ? `${localEndPoint}/${id}` : localEndPoint;
    return this.http.delete(url, {
      headers: this.headers
    });
  }
  // Deleta recursos em lote
  deleteResources(ids, endpoint) {
    return this.http.request("delete", `${this.getLocalEndPoint(endpoint)}`, {
      headers: this.headers,
      body: ids
    });
  }
  // Busca uma lista de recursos
  getResources(params, endpoint) {
    return this.http.get(this.getLocalEndPoint(endpoint), {
      headers: this.headers,
      params
    });
  }
  // Busca um único recurso
  getResource(id, endpoint) {
    return this.http.get(`${this.getLocalEndPoint(endpoint, true)}/${id}`, {
      headers: this.headers
    });
  }
  // Cria um recurso
  createResource(resource, endpoint) {
    return this.http.post(`${this.getLocalEndPoint(endpoint)}`, resource, {
      headers: this.headers
    });
  }
  // Atualiza um recurso
  updateResource(id, resource, endpoint) {
    return this.http.put(`${this.getLocalEndPoint(endpoint, true)}/${id}`, resource, {
      headers: this.headers
    });
  }
  getLocalEndPoint(endpoint, checkSingleBar = false) {
    endpoint = endpoint ?? this.endpoint;
    if (checkSingleBar) {
      endpoint = endpoint === "/" ? "" : endpoint;
    }
    return endpoint;
  }
  static ɵfac = function PoPageDynamicService_Factory(t) {
    return new (t || _PoPageDynamicService)(ɵɵinject(HttpClient), ɵɵinject(PoNotificationService), ɵɵinject(PoLanguageService));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _PoPageDynamicService,
    factory: _PoPageDynamicService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageDynamicService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: HttpClient
  }, {
    type: PoNotificationService
  }, {
    type: PoLanguageService
  }], null);
})();
var PoPageDynamicDetailActionsService = class _PoPageDynamicDetailActionsService {
  http;
  headers = new HttpHeaders({
    "X-PO-SCREEN-LOCK": "true"
  });
  constructor(http) {
    this.http = http;
  }
  beforeBack(action) {
    return this.executeAction({
      action
    });
  }
  beforeEdit(action, id, body) {
    const resource = body ?? {};
    return this.executeAction({
      action,
      resource,
      id
    });
  }
  beforeRemove(action, id, body) {
    const resource = body ?? {};
    return this.executeAction({
      action,
      resource,
      id
    });
  }
  executeAction({
    action,
    resource = {},
    id
  }) {
    if (!action) {
      return of({});
    }
    if (typeof action === "string") {
      const url = id ? `${action}/${id}` : action;
      return this.http.post(url, resource, {
        headers: this.headers
      });
    }
    return of(action(id, resource));
  }
  static ɵfac = function PoPageDynamicDetailActionsService_Factory(t) {
    return new (t || _PoPageDynamicDetailActionsService)(ɵɵinject(HttpClient));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _PoPageDynamicDetailActionsService,
    factory: _PoPageDynamicDetailActionsService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageDynamicDetailActionsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: HttpClient
  }], null);
})();
var PoPageCustomizationService = class _PoPageCustomizationService {
  http;
  constructor(http) {
    this.http = http;
  }
  getCustomOptions(origin, originalOption, optionSchema) {
    return this.createObservable(origin).pipe(map((newPageOptions) => this.mergePageOptions(originalOption, newPageOptions, optionSchema)));
  }
  changeOriginalOptionsToNewOptions(objectToChange, newOptions) {
    Object.keys(newOptions).forEach((key) => {
      const value = newOptions[key];
      if (key in objectToChange) {
        if (Array.isArray(value)) {
          objectToChange[key] = [...value];
          return;
        }
        if (typeof value === "number" || typeof value === "string" || typeof value === "boolean") {
          objectToChange[key] = value;
          return;
        }
        if (value !== null && typeof value === "object") {
          objectToChange[key] = __spreadValues({}, value);
        }
      }
    });
  }
  createObservable(origin) {
    if (typeof origin === "string") {
      return this.http.post(origin, {});
    }
    return from(Promise.resolve(origin()));
  }
  mergePageOptions(originalOption, newPageOptions, optionSchema) {
    const mergePageOptions = optionSchema.schema.reduce((objWithNewProp, prop) => __spreadProps(__spreadValues({}, objWithNewProp), {
      [prop.nameProp]: this.createNewProp(prop, originalOption, newPageOptions)
    }), {});
    Object.keys(mergePageOptions).forEach((key) => mergePageOptions[key] === void 0 && delete mergePageOptions[key]);
    return mergePageOptions;
  }
  createNewProp(prop, originalOption, newPageOptions) {
    if (prop.merge) {
      return this.mergeOptions(originalOption[prop.nameProp], newPageOptions[prop.nameProp], prop.keyForMerge);
    } else {
      return newPageOptions[prop.nameProp] ?? originalOption[prop.nameProp];
    }
  }
  mergeOptions(originalOptions, newOptions, filterProp) {
    if (!originalOptions && !newOptions) {
      return;
    }
    if (!newOptions) {
      return originalOptions;
    }
    if (!originalOptions) {
      return newOptions;
    }
    if (originalOptions instanceof Array && newOptions instanceof Array) {
      return this.mergeOptionsArray(originalOptions, newOptions, filterProp);
    }
    return __spreadValues(__spreadValues({}, originalOptions), newOptions);
  }
  mergeOptionsArray(originalOptions, newOptions, filterProp) {
    const deduplicateNewOptions = newOptions.filter((newItem) => !originalOptions.find((originalItem) => originalItem[filterProp] === newItem[filterProp]));
    const mergedOriginalOptions = originalOptions.map((originalItem) => {
      const newItem = newOptions.find((newOptionsItem) => originalItem[filterProp] === newOptionsItem[filterProp]) || originalItem;
      return __spreadValues(__spreadValues({}, originalItem), newItem);
    });
    return [...mergedOriginalOptions, ...deduplicateNewOptions];
  }
  static ɵfac = function PoPageCustomizationService_Factory(t) {
    return new (t || _PoPageCustomizationService)(ɵɵinject(HttpClient));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _PoPageCustomizationService,
    factory: _PoPageCustomizationService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageCustomizationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: HttpClient
  }], null);
})();
function PoPageDynamicDetailComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function PoPageDynamicDetailComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "po-widget");
    ɵɵelement(1, "po-icon", 4);
    ɵɵelementStart(2, "span", 5);
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r0.literals.registerNotFound, " ");
  }
}
function PoPageDynamicDetailComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "po-dynamic-view", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("p-fields", ctx_r0.fields)("p-value", ctx_r0.model);
  }
}
var poPageDynamicDetailLiteralsDefault = {
  en: {
    pageActionEdit: "Edit",
    pageActionRemove: "Delete",
    pageActionBack: "Back",
    confirmRemoveTitle: "Confirm delete",
    confirmRemoveMessage: "Are you sure you want to delete this record? You can not undo this action.",
    removeNotificationSuccess: "Item deleted successfully.",
    registerNotFound: "Register not found."
  },
  es: {
    pageActionEdit: "Editar",
    pageActionRemove: "Borrar",
    pageActionBack: "Regreso",
    confirmRemoveTitle: "Confirmar la exclusión",
    confirmRemoveMessage: "¿Está seguro de que desea eliminar este registro? No puede deshacer esta acción.",
    removeNotificationSuccess: "Elemento eliminado con éxito.",
    registerNotFound: "Registro no encontrado."
  },
  pt: {
    pageActionEdit: "Editar",
    pageActionRemove: "Excluir",
    pageActionBack: "Voltar",
    confirmRemoveTitle: "Confirmar exclusão",
    confirmRemoveMessage: "Tem certeza de que deseja excluir esse registro? Você não poderá desfazer essa ação.",
    removeNotificationSuccess: "Item excluído com sucesso.",
    registerNotFound: "Registro não encontrado."
  },
  ru: {
    pageActionEdit: "Редактировать",
    pageActionRemove: "Удалить",
    pageActionBack: "Назад",
    confirmRemoveTitle: "Подтверждение удаления",
    confirmRemoveMessage: "Вы уверены, что хотите удалить эту запись?  Вы не можете отменить это действие.",
    removeNotificationSuccess: "Элемент успешно удален.",
    registerNotFound: "Запись не найдена."
  }
};
var PoPageDynamicDetailComponent = class _PoPageDynamicDetailComponent {
  router;
  activatedRoute;
  poNotification;
  poDialogService;
  poPageDynamicService;
  poPageDynamicDetailActionsService;
  poPageCustomizationService;
  /** Objeto com propriedades do breadcrumb. */
  breadcrumb = {
    items: []
  };
  /**
   * Função ou serviço que será executado na inicialização do componente.
   *
   * A propriedade aceita os seguintes tipos:
   * - `string`: *Endpoint* usado pelo componente para requisição via `POST`.
   * - `function`: Método que será executado.
   *
   * O retorno desta função deve ser do tipo `PoPageDynamicDetailOptions`,
   * onde o usuário poderá customizar novos campos, breadcrumb, title e actions
   *
   * Por exemplo:
   *
   * ```
   * getPageOptions(): PoPageDynamicDetailOptions {
   * return {
   *   actions:
   *     { new: 'new', edit: 'edit/:id', remove: true },
   *   fields: [
   *     { property: 'idCard', gridColumns: 6 }
   *   ]
   * };
   * }
   *
   * ```
   * Para referenciar a sua função utilize a propriedade `bind`, por exemplo:
   * ```
   *  [p-load]="onLoadOptions.bind(this)"
   * ```
   */
  onLoad;
  /** Título da página. */
  title;
  /**
   * @description
   *
   * Endpoint usado pelo template para requisição do recurso que serão exibido.
   *
   * Caso a ação `remove` estiver configurada, será feito uma requisição de exclusão nesse mesmo endpoint passando os campos
   * setados como `key: true`.
   *
   * > `DELETE {end-point}/{keys}`
   *
   * ```
   *  <po-page-dynamic-detail
   *    [p-actions]="{ remove: '/' }"
   *    [p-fields]="[ { property: 'id', key: true } ]"
   *    p-service="/api/po-samples/v1/people"
   *    ...>
   *  </po-page-dynamic-detail>
   * ```
   *
   * Resquisição disparada, onde a propriedade `id` é igual a 2:
   *
   * ```
   *  DELETE /api/po-samples/v1/people/2 HTTP/1.1
   *  Host: localhost:4000
   *  Connection: keep-alive
   *  Accept: application/json, text/plain
   *  ...
   * ```
   *
   * > Caso esteja usando metadados com o template, será disparado uma requisição na inicialização do template para buscar
   * > os metadados da página passando o tipo do metadado esperado e a versão cacheada pelo browser.
   * >
   * > `GET {end-point}/metadata?type=detail&version={version}`
   */
  serviceApi;
  literals;
  model = {};
  subscriptions = [];
  _actions = {};
  _autoRouter = false;
  _duplicates = [];
  _fields = [];
  _keys = [];
  _pageActions = [];
  /**
   * @optional
   *
   * @description
   *
   * Define as ações da página de acordo com a interface `PoPageDynamicDetailActions`.
   */
  set actions(value) {
    this._actions = this.isObject(value) ? value : {};
    this._pageActions = this.getPageActions(this._actions);
  }
  get actions() {
    return __spreadValues({}, this._actions);
  }
  /**
   * @todo Validar rotas na mão pois se existir uma rota '**' o catch do navigation não funciona.
   *
   * @optional
   *
   * @description
   *
   * Cria automaticamente as rotas de edição (novo/duplicate) e detalhes caso as ações
   * estejam definidas nas ações.
   *
   * > Para o correto funcionamento não pode haver nenhum rota coringa (`**`) especificada.
   *
   * @default false
   */
  set autoRouter(value) {
    this._autoRouter = convertToBoolean(value);
  }
  get autoRouter() {
    return this._autoRouter;
  }
  /** Lista dos campos exibidos na página. */
  set fields(value) {
    this._fields = Array.isArray(value) ? [...value] : [];
    this._keys = this.getKeysByFields(this.fields);
    this._duplicates = this.getDuplicatesByFields(this.fields);
  }
  get fields() {
    return this._fields;
  }
  constructor(router, activatedRoute, poNotification, poDialogService, poPageDynamicService, poPageDynamicDetailActionsService, poPageCustomizationService, languageService) {
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.poNotification = poNotification;
    this.poDialogService = poDialogService;
    this.poPageDynamicService = poPageDynamicService;
    this.poPageDynamicDetailActionsService = poPageDynamicDetailActionsService;
    this.poPageCustomizationService = poPageCustomizationService;
    const language = languageService.getShortLanguage();
    this.literals = __spreadValues(__spreadValues({}, poPageDynamicDetailLiteralsDefault[poLocaleDefault]), poPageDynamicDetailLiteralsDefault[language]);
  }
  ngOnInit() {
    this.loadDataFromAPI();
  }
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.forEach((subscription) => {
        subscription.unsubscribe();
      });
    }
  }
  get duplicates() {
    return [...this._duplicates];
  }
  get keys() {
    return [...this._keys];
  }
  get pageActions() {
    return [...this._pageActions];
  }
  remove(actionRemove, actionBeforeRemove) {
    const uniqueKey = this.formatUniqueKey(this.model);
    this.subscriptions.push(this.poPageDynamicDetailActionsService.beforeRemove(actionBeforeRemove, uniqueKey, __spreadValues({}, this.model)).pipe(switchMap((beforeRemoveResult) => {
      const newRemoveAction = beforeRemoveResult?.newUrl ?? actionRemove;
      const allowAction = beforeRemoveResult?.allowAction ?? true;
      if (!allowAction) {
        return of({});
      }
      if (typeof newRemoveAction === "string") {
        return this.executeRemove(newRemoveAction, uniqueKey);
      } else {
        newRemoveAction(uniqueKey, __spreadValues({}, this.model));
        return EMPTY;
      }
    })).subscribe());
  }
  confirmRemove(actionRemove, actionBeforeRemove) {
    const confirmOptions = {
      title: this.literals.confirmRemoveTitle,
      message: this.literals.confirmRemoveMessage,
      confirm: this.remove.bind(this, actionRemove, actionBeforeRemove)
    };
    this.poDialogService.confirm(confirmOptions);
  }
  executeRemove(path, uniqueKey) {
    return this.poPageDynamicService.deleteResource(uniqueKey).pipe(map(() => {
      this.poNotification.success(this.literals.removeNotificationSuccess);
      this.navigateTo({
        path
      });
    }));
  }
  formatUniqueKey(item) {
    const keys = mapObjectByProperties(item, this.keys);
    return valuesFromObject(keys).join("|");
  }
  goBack(actionBack) {
    this.subscriptions.push(this.poPageDynamicDetailActionsService.beforeBack(this.actions.beforeBack).subscribe((beforeBackResult) => this.executeBackAction(actionBack, beforeBackResult?.allowAction, beforeBackResult?.newUrl)));
  }
  executeBackAction(actionBack, allowAction, newUrl) {
    const isAllowedAction = typeof allowAction === "boolean" ? allowAction : true;
    if (isAllowedAction) {
      if (actionBack === void 0 || typeof actionBack === "boolean") {
        return window.history.back();
      }
      if (typeof actionBack === "string" || newUrl) {
        return this.router.navigate([newUrl || actionBack]);
      }
      return actionBack();
    }
  }
  loadData(id) {
    return this.poPageDynamicService.getResource(id).pipe(tap((response) => {
      if (!response) {
        this.setUndefinedToModelAndActions();
      } else {
        this.model = response;
      }
    }), catchError((error) => {
      this.setUndefinedToModelAndActions();
      return throwError(error);
    }));
  }
  setUndefinedToModelAndActions() {
    this.model = void 0;
    this.actions = void 0;
  }
  getMetadata(serviceApiFromRoute, onLoad) {
    if (serviceApiFromRoute) {
      return this.poPageDynamicService.getMetadata("detail").pipe(tap((response) => {
        this.autoRouter = response.autoRouter || this.autoRouter;
        this.actions = response.actions || this.actions;
        this.breadcrumb = response.breadcrumb || this.breadcrumb;
        this.fields = response.fields || this.fields;
        this.title = response.title || this.title;
      }), switchMap(() => this.loadOptionsOnInitialize(onLoad)));
    }
    return this.loadOptionsOnInitialize(onLoad);
  }
  // @todo Validar rotas na mão pois se existir uma rota '**' o catch do navigation não funciona.
  navigateTo(route, forceStopAutoRouter = false) {
    this.router.navigate([route.url || route.path], {
      queryParams: route.params
    }).catch(() => {
      if (forceStopAutoRouter || !this.autoRouter) {
        return;
      }
      this.router.config.unshift({
        path: route.path,
        component: route.component,
        data: {
          serviceApi: this.serviceApi,
          autoRouter: true
        }
      });
      this.navigateTo(route, true);
    });
  }
  openEdit(action) {
    const id = this.formatUniqueKey(this.model);
    this.subscriptions.push(this.poPageDynamicDetailActionsService.beforeEdit(this.actions.beforeEdit, id, this.model).pipe(switchMap((beforeEditResult) => this.executeEditAction(action, beforeEditResult, id))).subscribe());
  }
  executeEditAction(action, beforeEditResult, id) {
    const newEditAction = beforeEditResult?.newUrl ?? action;
    const allowAction = beforeEditResult?.allowAction ?? true;
    if (!allowAction) {
      return of({});
    }
    if (typeof newEditAction === "string") {
      this.openEditUrl(newEditAction);
    } else {
      newEditAction(id, __spreadValues({}, this.model));
    }
    return EMPTY;
  }
  openEditUrl(path) {
    const url = this.resolveUrl(this.model, path);
    this.navigateTo({
      path,
      url
    });
  }
  resolveUrl(item, path) {
    const uniqueKey = this.formatUniqueKey(item);
    return path.replace(/:id/g, uniqueKey);
  }
  getPageActions(actions = {}) {
    const pageActions = [];
    if (actions.edit) {
      pageActions.push({
        label: this.literals.pageActionEdit,
        action: this.openEdit.bind(this, actions.edit)
      });
    }
    if (actions.remove) {
      pageActions.push({
        label: this.literals.pageActionRemove,
        action: this.confirmRemove.bind(this, actions.remove, this.actions.beforeRemove),
        type: "danger"
      });
    }
    if (actions.back === void 0 || actions.back) {
      pageActions.push({
        label: this.literals.pageActionBack,
        action: this.goBack.bind(this, actions.back)
      });
    }
    return pageActions;
  }
  getKeysByFields(fields = []) {
    return fields.filter((field) => field.key === true).map((field) => field.property);
  }
  getDuplicatesByFields(fields = []) {
    return fields.filter((field) => field.duplicate === true).map((field) => field.property);
  }
  isObject(value) {
    return !!value && typeof value === "object" && !Array.isArray(value);
  }
  loadDataFromAPI() {
    const {
      serviceApi: serviceApiFromRoute,
      serviceMetadataApi,
      serviceLoadApi
    } = this.activatedRoute.snapshot.data;
    const {
      id
    } = this.activatedRoute.snapshot.params;
    const onLoad = serviceLoadApi || this.onLoad;
    this.serviceApi = serviceApiFromRoute || this.serviceApi;
    this.poPageDynamicService.configServiceApi({
      endpoint: this.serviceApi,
      metadata: serviceMetadataApi
    });
    const metadata$ = this.getMetadata(serviceApiFromRoute, onLoad);
    const data$ = this.loadData(id);
    this.subscriptions.push(concat(metadata$, data$).subscribe());
  }
  loadOptionsOnInitialize(onLoad) {
    if (onLoad) {
      return this.getPoDynamicPageOptions(onLoad).pipe(tap((responsePoOption) => this.poPageCustomizationService.changeOriginalOptionsToNewOptions(this, responsePoOption)));
    }
    return EMPTY;
  }
  getPoDynamicPageOptions(onLoad) {
    const originalOption = {
      fields: this.fields,
      actions: this.actions,
      breadcrumb: this.breadcrumb,
      title: this.title
    };
    const pageOptionSchema = {
      schema: [{
        nameProp: "fields",
        merge: true,
        keyForMerge: "property"
      }, {
        nameProp: "actions",
        merge: true
      }, {
        nameProp: "breadcrumb"
      }, {
        nameProp: "title"
      }]
    };
    return this.poPageCustomizationService.getCustomOptions(onLoad, originalOption, pageOptionSchema);
  }
  static ɵfac = function PoPageDynamicDetailComponent_Factory(t) {
    return new (t || _PoPageDynamicDetailComponent)(ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(PoNotificationService), ɵɵdirectiveInject(PoDialogService), ɵɵdirectiveInject(PoPageDynamicService), ɵɵdirectiveInject(PoPageDynamicDetailActionsService), ɵɵdirectiveInject(PoPageCustomizationService), ɵɵdirectiveInject(PoLanguageService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PoPageDynamicDetailComponent,
    selectors: [["po-page-dynamic-detail"]],
    inputs: {
      breadcrumb: [0, "p-breadcrumb", "breadcrumb"],
      onLoad: [0, "p-load", "onLoad"],
      title: [0, "p-title", "title"],
      serviceApi: [0, "p-service-api", "serviceApi"],
      actions: [0, "p-actions", "actions"],
      autoRouter: [0, "p-auto-router", "autoRouter"],
      fields: [0, "p-fields", "fields"]
    },
    features: [ɵɵProvidersFeature([PoPageDynamicService, PoPageDynamicDetailActionsService])],
    decls: 6,
    vars: 6,
    consts: [["registerNotFoundTemplate", ""], ["viewFieldsTemplate", ""], [3, "p-actions", "p-breadcrumb", "p-title"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["p-icon", "ICON_INFO"], [1, "po-font-text-large"], [3, "p-fields", "p-value"]],
    template: function PoPageDynamicDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "po-page-default", 2);
        ɵɵtemplate(1, PoPageDynamicDetailComponent_ng_container_1_Template, 1, 0, "ng-container", 3);
        ɵɵelementEnd();
        ɵɵtemplate(2, PoPageDynamicDetailComponent_ng_template_2_Template, 4, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(4, PoPageDynamicDetailComponent_ng_template_4_Template, 1, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
      }
      if (rf & 2) {
        const registerNotFoundTemplate_r2 = ɵɵreference(3);
        const viewFieldsTemplate_r3 = ɵɵreference(5);
        ɵɵproperty("p-actions", ctx.pageActions)("p-breadcrumb", ctx.breadcrumb)("p-title", ctx.title);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.model)("ngIfThen", viewFieldsTemplate_r3)("ngIfElse", registerNotFoundTemplate_r2);
      }
    },
    dependencies: [NgIf, PoDynamicViewComponent, PoIconComponent, PoPageDefaultComponent, PoWidgetComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageDynamicDetailComponent, [{
    type: Component,
    args: [{
      selector: "po-page-dynamic-detail",
      providers: [PoPageDynamicService, PoPageDynamicDetailActionsService],
      template: '<po-page-default [p-actions]="pageActions" [p-breadcrumb]="breadcrumb" [p-title]="title">\n  <ng-container *ngIf="model; then viewFieldsTemplate; else registerNotFoundTemplate"> </ng-container>\n</po-page-default>\n\n<ng-template #registerNotFoundTemplate>\n  <po-widget>\n    <po-icon p-icon="ICON_INFO"></po-icon>\n    <span class="po-font-text-large">\n      {{ literals.registerNotFound }}\n    </span>\n  </po-widget>\n</ng-template>\n\n<ng-template #viewFieldsTemplate>\n  <po-dynamic-view [p-fields]="fields" [p-value]="model"> </po-dynamic-view>\n</ng-template>\n'
    }]
  }], () => [{
    type: Router
  }, {
    type: ActivatedRoute
  }, {
    type: PoNotificationService
  }, {
    type: PoDialogService
  }, {
    type: PoPageDynamicService
  }, {
    type: PoPageDynamicDetailActionsService
  }, {
    type: PoPageCustomizationService
  }, {
    type: PoLanguageService
  }], {
    breadcrumb: [{
      type: Input,
      args: ["p-breadcrumb"]
    }],
    onLoad: [{
      type: Input,
      args: ["p-load"]
    }],
    title: [{
      type: Input,
      args: ["p-title"]
    }],
    serviceApi: [{
      type: Input,
      args: ["p-service-api"]
    }],
    actions: [{
      type: Input,
      args: ["p-actions"]
    }],
    autoRouter: [{
      type: Input,
      args: ["p-auto-router"]
    }],
    fields: [{
      type: Input,
      args: ["p-fields"]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(PoPageDynamicDetailComponent, {
    className: "PoPageDynamicDetailComponent",
    filePath: "lib/components/po-page-dynamic-detail/po-page-dynamic-detail.component.ts",
    lineNumber: 151
  });
})();
var PoPageDynamicModule = class _PoPageDynamicModule {
  static ɵfac = function PoPageDynamicModule_Factory(t) {
    return new (t || _PoPageDynamicModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _PoPageDynamicModule
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [PoPageDynamicService],
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageDynamicModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [PoPageDynamicService]
    }]
  }], null, null);
})();
(function() {
  (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PoPageDynamicModule, {
    imports: [CommonModule]
  });
})();
var PoPageDynamicDetailModule = class _PoPageDynamicDetailModule {
  static ɵfac = function PoPageDynamicDetailModule_Factory(t) {
    return new (t || _PoPageDynamicDetailModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _PoPageDynamicDetailModule
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, FormsModule, RouterModule, PoDynamicModule, PoIconModule, PoModalModule, PoPageModule, PoWidgetModule, PoPageDynamicModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageDynamicDetailModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, RouterModule, PoDynamicModule, PoIconModule, PoModalModule, PoPageModule, PoWidgetModule, PoPageDynamicModule],
      declarations: [PoPageDynamicDetailComponent],
      exports: [PoPageDynamicDetailComponent]
    }]
  }], null, null);
})();
(function() {
  (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PoPageDynamicDetailModule, {
    declarations: [PoPageDynamicDetailComponent],
    imports: [CommonModule, FormsModule, RouterModule, PoDynamicModule, PoIconModule, PoModalModule, PoPageModule, PoWidgetModule, PoPageDynamicModule],
    exports: [PoPageDynamicDetailComponent]
  });
})();
var PoPageDynamicEditActionsService = class _PoPageDynamicEditActionsService {
  http;
  headers = new HttpHeaders({
    "X-PO-SCREEN-LOCK": "true"
  });
  constructor(http) {
    this.http = http;
  }
  beforeCancel(action) {
    return this.executeAction({
      action
    });
  }
  beforeSave(action, id, body) {
    const resource = body ?? {};
    return this.executeAction({
      action,
      resource,
      id
    });
  }
  beforeSaveNew(action, id, body) {
    const resource = body ?? {};
    return this.executeAction({
      action,
      resource,
      id
    });
  }
  executeAction({
    action,
    resource = {},
    id
  }) {
    if (!action) {
      return of({});
    }
    if (typeof action === "string") {
      const url = id ? `${action}/${id}` : action;
      return this.http.post(url, resource, {
        headers: this.headers
      });
    }
    return of(action(resource, id));
  }
  static ɵfac = function PoPageDynamicEditActionsService_Factory(t) {
    return new (t || _PoPageDynamicEditActionsService)(ɵɵinject(HttpClient));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _PoPageDynamicEditActionsService,
    factory: _PoPageDynamicEditActionsService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageDynamicEditActionsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: HttpClient
  }], null);
})();
var _c0$5 = ["dynamicForm"];
var _c1$3 = ["gridDetail"];
function PoPageDynamicEditComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function PoPageDynamicEditComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "po-widget");
    ɵɵelement(1, "po-icon", 6);
    ɵɵelementStart(2, "span", 7);
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r0.literals.registerNotFound, " ");
  }
}
function PoPageDynamicEditComponent_ng_template_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 10);
    ɵɵelement(1, "po-divider", 11);
    ɵɵelementStart(2, "div", 12)(3, "po-button", 13);
    ɵɵlistener("p-click", function PoPageDynamicEditComponent_ng_template_4_div_2_Template_po_button_p_click_3_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.detailActionNew());
    });
    ɵɵelementEnd()();
    ɵɵelement(4, "po-grid", 14, 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("p-label", ctx_r0.detailFields[0].divider);
    ɵɵadvance(2);
    ɵɵproperty("p-label", ctx_r0.literals.detailActionNew);
    ɵɵadvance();
    ɵɵproperty("p-row-actions", ctx_r0.detailActions)("p-columns", ctx_r0.detailFields[0].detail.columns)("p-data", ctx_r0.model[ctx_r0.detailFields[0].property]);
  }
}
function PoPageDynamicEditComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "po-dynamic-form", 8, 2);
    ɵɵtemplate(2, PoPageDynamicEditComponent_ng_template_4_div_2_Template, 6, 5, "div", 9);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("p-fields", ctx_r0.controlFields)("p-value", ctx_r0.model);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.detailFields.length > 0);
  }
}
var poNotificationType = ["error", "warning"];
var poNotificationTypeDefault = "warning";
var poPageDynamicEditLiteralsDefault = {
  en: {
    cancelConfirmMessage: "Are you sure you want to cancel this operation?",
    detailActionNew: "New",
    pageActionCancel: "Cancel",
    pageActionSave: "Save",
    pageActionSaveNew: "Save and new",
    registerNotFound: "Register not found.",
    saveNotificationError: "Mandatory field(s) not filled.",
    saveNotificationSuccessSave: "Resource successfully saved.",
    saveNotificationSuccessUpdate: "Resource successfully updated.",
    saveNotificationWarning: "Form must be filled out correctly."
  },
  es: {
    cancelConfirmMessage: "Está seguro de que desea cancelar esta operación?",
    detailActionNew: "Nuevo",
    pageActionCancel: "Cancelar",
    pageActionSave: "Guardar",
    pageActionSaveNew: "Guardar y nuevo",
    registerNotFound: "Registro no encontrado.",
    saveNotificationError: "Campo(s) obligatorio(s) no completado(s).",
    saveNotificationSuccessSave: "Recurso salvo con éxito.",
    saveNotificationSuccessUpdate: "Recurso actualizado con éxito.",
    saveNotificationWarning: "El formulario debe llenarse correctamente."
  },
  pt: {
    cancelConfirmMessage: "Tem certeza que deseja cancelar esta operação?",
    detailActionNew: "Novo",
    pageActionCancel: "Cancelar",
    pageActionSave: "Salvar",
    pageActionSaveNew: "Salvar e novo",
    registerNotFound: "Registro não encontrado.",
    saveNotificationError: "Campo(s) obrigatório(s) sem preenchimento.",
    saveNotificationSuccessSave: "Recurso salvo com sucesso.",
    saveNotificationSuccessUpdate: "Recurso atualizado com sucesso.",
    saveNotificationWarning: "Formulário precisa ser preenchido corretamente."
  },
  ru: {
    cancelConfirmMessage: "Вы уверены, что хотите отменить эту операцию?",
    detailActionNew: "Новый",
    pageActionCancel: "Отменить",
    pageActionSave: "Сохранить",
    pageActionSaveNew: "Сохранить и создать",
    registerNotFound: "Запись не найдена.",
    saveNotificationError: "Обязательное поле(я) не заполнено.",
    saveNotificationSuccessSave: "Ресурс успешно сохранен.",
    saveNotificationSuccessUpdate: "Ресурс успешно обновлен.",
    saveNotificationWarning: "Форма должна быть заполнена правильно."
  }
};
var PoPageDynamicEditComponent = class _PoPageDynamicEditComponent {
  router;
  activatedRoute;
  poNotification;
  poDialogService;
  poPageDynamicService;
  poPageCustomizationService;
  poPageDynamicEditActionsService;
  dynamicForm;
  gridDetail;
  /** Objeto com propriedades do breadcrumb. */
  breadcrumb = {
    items: []
  };
  /**
   * @description
   *
   * Endpoint usado pelo template para requisição do recurso que será exibido para edição.
   *
   * Para as ações de `save` e `saveNew`, será feito uma requisição de criação nesse mesmo endpoint passando os valores
   * preenchidos pelo usuário via payload.
   *
   * > `POST {end-point}`
   *
   * ```
   *  <po-page-dynamic-edit
   *    [p-actions]="{ save: '/', saveNew: 'new' }"
   *    [p-fields]="[ { property: 'name' }, { property: 'city' } ]"
   *    p-service="/api/po-samples/v1/people"
   *    ...>
   *  </po-page-dynamic-edit>
   * ```
   *
   * Resquisição disparada, onde a propriedade `name` e `city` foram preenchidas:
   *
   * ```
   *  POST /api/po-samples/v1/people HTTP/1.1
   *  Host: localhost:4000
   *  Connection: keep-alive
   *  Accept: application/json, text/plain
   *  ...
   * ```
   *
   * Request payload:
   *
   * ```
   * { "name": "Fulano", "city": "Smallville" }
   * ```
   *
   * Caso queira que o template carregue um recurso já existente, deve-se ser incluído um parametro na rota chamado `id`.
   *
   * Exemplo de configuração de rota:
   *
   * ```
   *  RouterModule.forRoot([
   *    ...
   *    { path: 'edit/:id', component: PersonEditComponent },
   *    ...
   *  ],
   * ```
   *
   * Baseado nisso, na inicialização do template, será disparado uma requisição para buscar o recurso que será editado.
   *
   * > `GET {end-point}/{id}`
   *
   * Nos métodos de `save` e `saveNew`, ao invés de um `POST`, será disparado um `PUT`.
   *
   * Resquisição disparada, onde a propriedade `name` e `city` foram preenchidas / atualizadas, e o `id` da url é 2:
   *
   * ```
   *  PUT /api/po-samples/v1/people/2 HTTP/1.1
   *  Host: localhost:4000
   *  Connection: keep-alive
   *  Accept: application/json, text/plain
   *  ...
   * ```
   *
   * Request payload:
   *
   * ```
   * { "name": "Fulano", "city": "Metropolis" }
   * ```
   */
  serviceApi;
  /** Título da página. */
  title;
  /**
   * Função ou serviço que será executado na inicialização do componente.
   *
   * A propriedade aceita os seguintes tipos:
   * - `string`: *Endpoint* usado pelo componente para requisição via `POST`.
   * - `function`: Método que será executado.
   *
   * O retorno desta função deve ser do tipo `PoPageDynamicEditOptions`,
   * onde o usuário poderá customizar novos campos, breadcrumb, title e actions
   *
   * Por exemplo:
   *
   * ```
   * getPageOptions(): PoPageDynamicEditOptions {
   * return {
   *   actions:
   *     { cancel: false, save: 'save/:id', saveNew: 'saveNew' },
   *   fields: [
   *     { property: 'idCard', gridColumns: 6 }
   *   ]
   * };
   * }
   *
   * ```
   * Para referenciar a sua função utilize a propriedade `bind`, por exemplo:
   * ```
   *  [p-load]="onLoadOptions.bind(this)"
   * ```
   */
  onLoad;
  /**
   * @optional
   *
   * @description
   *
   * Função que será executada após ser realizada a busca dos dados.
   *
   * A propriedade aceita os seguintes tipos:
   * - `function`: Método que será executado.
   *
   * Esta função passa por parâmetro o model e deve recebê-lo de volta com as alterações.
   * Também aceita o retorno de um Observable com o novo model.
   *
   * Por exemplo:
   *
   * ```
   * onLoadCustom(model) {
   *  return { ...model, customField: 'newValue' };
   * }
   *
   * ```
   * Para referenciar a sua função utilize a propriedade `bind`, por exemplo:
   * ```
   *  [p-load-data]="onLoadCustom.bind(this)"
   * ```
   */
  onLoadData;
  model = {};
  // beforeSave: return boolean
  // afterSave
  // beforeRemove: return boolean
  // afterRemove
  // beforeInsert: : return boolean
  detailActions = {};
  indexFocus = 0;
  language;
  subscriptions = [];
  _actions = {};
  _literals;
  _autoRouter = false;
  _controlFields = [];
  _detailFields = [];
  _duplicates = [];
  _fields = [];
  _keys = [];
  _pageActions = [];
  _notificationType = poNotificationTypeDefault;
  /**
   * @optional
   *
   * @description
   *
   * Ações da página.
   */
  set actions(value) {
    this._actions = this.isObject(value) ? value : {};
    this._pageActions = this.getPageActions(this._actions);
  }
  get actions() {
    return __spreadValues({}, this._actions);
  }
  /**
   * @optional
   *
   * @description
   *
   * Objeto com as literais usadas no `po-page-dynamic-edit`.
   *
   * É possivel customizar passando um objeto com todas as literais disponíveis
   * ou passando apenas as literais que deseja customizar
   *
   * ```
   *  const customLiterals: PoPageDynamicEditLiterals = {
   *    detailActionNew: 'Incluir',
   *    pageActionCancel: 'Descartar',
   *    pageActionSave: 'Gravar',
   *    pageActionSaveNew: 'Gravar e incluir',
   *    registerNotFound: 'Nenhum registro encontrado.',
   *    saveNotificationError: 'Campo(s) obrigatório(s) sem preenchimento.',
   *    saveNotificationSuccessSave: 'Item salvo com sucesso.',
   *    saveNotificationSuccessUpdate: 'Item atualizado com sucesso.',
   *    saveNotificationWarning: 'Necessário preencher o formulário corretamente.'
   *  };
   * ```
   *
   * E para carregar as literais customizadas, basta apenas passar o objeto para o componente.
   *
   * ```
   * <po-page-dynamic-edit
   *   [p-literals]="customLiterals">
   * </po-page-dynamic-edit>
   * ```
   *
   * > O valor padrão será traduzido de acordo com o idioma configurado no [`PoI18nService`](/documentation/po-i18n) ou *browser*.
   */
  set literals(value) {
    if (value instanceof Object && !(value instanceof Array)) {
      this._literals = __spreadValues(__spreadValues(__spreadValues({}, poPageDynamicEditLiteralsDefault[poLocaleDefault]), poPageDynamicEditLiteralsDefault[this.language]), value);
    } else {
      this._literals = poPageDynamicEditLiteralsDefault[this.language];
    }
    this._pageActions = this.getPageActions(this._actions);
  }
  get literals() {
    return this._literals || poPageDynamicEditLiteralsDefault[this.language];
  }
  /**
   * @optional
   *
   * @description
   *
   * Tipo da notificação.
   *
   * É possivel definir o tipo de notificação que será exibido quando houver algum campo inválido no formulário.
   *
   * ```
   * <po-page-dynamic-edit
   *   p-notification-type="warning">
   * </po-page-dynamic-edit>
   * ```
   *
   * > Os valores aceitos são 'warning' e 'error'.
   * @default warning
   */
  set notificationType(value) {
    this._notificationType = poNotificationType.includes(value) ? value : poNotificationTypeDefault;
  }
  get notificationType() {
    return this._notificationType;
  }
  /**
   * @todo Validar rotas na mão pois se existir uma rota '**' o catch do navigation não funciona.
   *
   * @optional
   *
   * @description
   *
   * Cria automaticamente as rotas de edição (novo/duplicate) e detalhes caso as ações
   * estejam definidas nas ações.
   *
   * > Para o correto funcionamento não pode haver nenhum rota coringa (`**`) especificada.
   *
   * @default false
   */
  set autoRouter(value) {
    this._autoRouter = convertToBoolean(value);
  }
  get autoRouter() {
    return this._autoRouter;
  }
  /** Lista dos campos usados na tabela e busca avançada. */
  set fields(value) {
    this._fields = Array.isArray(value) ? [...value] : [];
    this._keys = this.getKeysByFields(this._fields);
    this._duplicates = this.getDuplicatesByFields(this._fields);
    this._controlFields = this.getControlFields(this._fields);
    this._detailFields = this.getDetailFields(this._fields);
  }
  get fields() {
    return this._fields;
  }
  constructor(router, activatedRoute, poNotification, poDialogService, poPageDynamicService, poPageCustomizationService, poPageDynamicEditActionsService, languageService) {
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.poNotification = poNotification;
    this.poDialogService = poDialogService;
    this.poPageDynamicService = poPageDynamicService;
    this.poPageCustomizationService = poPageCustomizationService;
    this.poPageDynamicEditActionsService = poPageDynamicEditActionsService;
    this.language = languageService.getShortLanguage();
  }
  ngOnInit() {
    this.loadDataFromAPI();
  }
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.forEach((subscription) => {
        subscription.unsubscribe();
      });
    }
  }
  detailActionNew() {
    this.gridDetail.insertRow();
  }
  get duplicates() {
    return [...this._duplicates];
  }
  get keys() {
    return [...this._keys];
  }
  get pageActions() {
    return [...this._pageActions];
  }
  get controlFields() {
    return this._controlFields;
  }
  get detailFields() {
    return this._detailFields;
  }
  loadDataFromAPI() {
    const {
      serviceApi: serviceApiFromRoute,
      serviceMetadataApi,
      serviceLoadApi
    } = this.activatedRoute.snapshot.data;
    const {
      id
    } = this.activatedRoute.snapshot.params;
    const {
      duplicate
    } = this.activatedRoute.snapshot.queryParams;
    const onLoad = serviceLoadApi || this.onLoad;
    this.serviceApi = serviceApiFromRoute || this.serviceApi;
    this.poPageDynamicService.configServiceApi({
      endpoint: this.serviceApi,
      metadata: serviceMetadataApi
    });
    const metadata$ = this.getMetadata(serviceApiFromRoute, id, onLoad);
    const data$ = this.loadData(id, duplicate);
    this.subscriptions.push(concat(metadata$, data$).subscribe());
  }
  cancel(actionCancel, actionBeforeCancel) {
    if (this.dynamicForm && this.dynamicForm.form.dirty) {
      this.poDialogService.confirm({
        message: this.literals.cancelConfirmMessage,
        title: this.literals.pageActionCancel,
        confirm: this.goBack.bind(this, actionCancel, actionBeforeCancel)
      });
    } else {
      this.goBack(actionCancel, actionBeforeCancel);
    }
  }
  formatUniqueKey(item) {
    const keys = mapObjectByProperties(item, this.keys);
    return valuesFromObject(keys).join("|");
  }
  goBack(actionCancel, actionBeforeCancel) {
    this.subscriptions.push(this.poPageDynamicEditActionsService.beforeCancel(actionBeforeCancel).subscribe((beforeCancelResult) => {
      this.executeBackAction(actionCancel, beforeCancelResult?.allowAction, beforeCancelResult?.newUrl);
    }));
  }
  executeBackAction(actionCancel, allowAction, newUrl) {
    const isAllowedAction = typeof allowAction === "boolean" ? allowAction : true;
    if (isAllowedAction) {
      if (actionCancel === void 0 || typeof actionCancel === "boolean") {
        return window.history.back();
      }
      if (typeof actionCancel === "string" || newUrl) {
        return this.router.navigate([newUrl || actionCancel]);
      }
      return actionCancel();
    }
  }
  loadData(id, duplicate) {
    if (!id) {
      try {
        this.model = duplicate ? JSON.parse(duplicate) : {};
      } catch {
        this.model = {};
      }
      return EMPTY;
    }
    return this.poPageDynamicService.getResource(id).pipe(tap((response) => {
      this.beforeSetModel(response);
    }), catchError((error) => {
      this.model = void 0;
      this.actions = void 0;
      this._pageActions = [];
      return throwError(error);
    }));
  }
  beforeSetModel(response) {
    if (!this.onLoadData) {
      this.model = response;
      return;
    }
    const onLoadDataExecution = this.onLoadData(response);
    const onLoadData$ = onLoadDataExecution instanceof Observable ? onLoadDataExecution : of(onLoadDataExecution);
    onLoadData$.subscribe({
      next: (customModel) => {
        this.model = customModel;
      },
      error: () => {
        this.model = response;
      }
    });
  }
  loadOptionsOnInitialize(onLoad) {
    if (onLoad) {
      return this.getPoDynamicPageOptions(onLoad).pipe(tap((responsePoOption) => this.poPageCustomizationService.changeOriginalOptionsToNewOptions(this, responsePoOption)));
    }
    return EMPTY;
  }
  focusCheckboxInput(control) {
    const checkboxGroup = document.querySelector(`po-checkbox-group[ng-reflect-name=${control}]`);
    if (checkboxGroup) {
      const checkBoxComponent = checkboxGroup.querySelector("po-checkbox[ng-reflect-disabled=false]");
      const labelInput = checkBoxComponent?.querySelector(".po-checkbox-outline");
      if (labelInput) {
        labelInput.focus();
      } else {
        this.indexFocus--;
      }
    }
  }
  focusControl(control) {
    const inputElement = document.querySelector(`[name=${control}]`);
    if (inputElement) {
      if (inputElement.tagName === "INPUT") {
        inputElement.focus();
      } else {
        this.focusRadioInput(inputElement, control);
      }
    } else {
      this.focusCheckboxInput(control);
    }
  }
  focusRadioInput(inputElement, control) {
    const radioComponent = inputElement.querySelector(`po-radio[ng-reflect-name=${control}][ng-reflect-disabled=false]`);
    if (radioComponent) {
      const radioInput = radioComponent.querySelector("input");
      radioInput.focus();
      radioInput.parentElement.parentElement.classList.add("po-radio-focus");
    } else {
      this.indexFocus--;
    }
  }
  getPoDynamicPageOptions(onLoad) {
    const originalOption = {
      fields: this.fields,
      actions: this.actions,
      breadcrumb: this.breadcrumb,
      title: this.title
    };
    const pageOptionSchema = {
      schema: [{
        nameProp: "fields",
        merge: true,
        keyForMerge: "property"
      }, {
        nameProp: "actions",
        merge: true
      }, {
        nameProp: "breadcrumb"
      }, {
        nameProp: "title"
      }]
    };
    return this.poPageCustomizationService.getCustomOptions(onLoad, originalOption, pageOptionSchema);
  }
  getMetadata(serviceApiFromRoute, paramId, onLoad) {
    const typeMetadata = paramId ? "edit" : "create";
    if (serviceApiFromRoute) {
      return this.poPageDynamicService.getMetadata(typeMetadata).pipe(tap((response) => {
        this.autoRouter = response.autoRouter || this.autoRouter;
        this.actions = response.actions || this.actions;
        this.breadcrumb = response.breadcrumb || this.breadcrumb;
        this.fields = response.fields || this.fields;
        this.title = response.title || this.title;
      }), switchMap(() => this.loadOptionsOnInitialize(onLoad)));
    }
    return this.loadOptionsOnInitialize(onLoad);
  }
  markControlsAsDirtyAndFocusFirstInvalid() {
    this.indexFocus = 0;
    const controls = Object.keys(this.dynamicForm.form.controls);
    controls.forEach((control) => {
      this.dynamicForm.form.controls[control].markAsDirty();
      if (this.dynamicForm.form.controls[control].hasError("required") && this.indexFocus === 0) {
        this.focusControl(control);
        this.indexFocus++;
      }
    });
  }
  navigateTo(path) {
    if (path) {
      const url = this.resolveUrl(this.model, path);
      this.router.navigate([url]);
    } else {
      window.history.back();
    }
  }
  resolveUniqueKey(item) {
    return this.activatedRoute.snapshot.params["id"] ? this.formatUniqueKey(item) : void 0;
  }
  resolveUrl(item, path) {
    const uniqueKey = this.formatUniqueKey(item);
    return path.replace(/:id/g, uniqueKey);
  }
  executeSave(saveRedirectPath) {
    const saveOperation$ = this.saveOperation();
    return saveOperation$.pipe(tap((message) => {
      this.poNotification.success(message);
      this.navigateTo(saveRedirectPath);
    }));
  }
  updateModel(newResource = {}) {
    if (typeof newResource !== "undefined" && Object.keys(newResource).length !== 0) {
      const dynamicNgForm = this.dynamicForm.form;
      removeKeysProperties(this.keys, newResource);
      this.model = __spreadValues(__spreadValues({}, this.model), newResource);
      dynamicNgForm.form.patchValue(this.model);
    }
  }
  showNotification(type) {
    switch (type) {
      case "warning":
        this.poNotification.warning(this.literals.saveNotificationWarning);
        break;
      case "error":
        this.poNotification.error(this.literals.saveNotificationError);
        break;
    }
  }
  saveOperation() {
    if (this.dynamicForm.form.invalid) {
      this.markControlsAsDirtyAndFocusFirstInvalid();
      this.showNotification(this._notificationType);
      return EMPTY;
    }
    const paramId = this.activatedRoute.snapshot.params["id"];
    const successMsg = paramId ? this.literals.saveNotificationSuccessUpdate : this.literals.saveNotificationSuccessSave;
    const saveOperation$ = paramId ? this.poPageDynamicService.updateResource(paramId, this.model) : this.poPageDynamicService.createResource(this.model);
    return saveOperation$.pipe(map(() => successMsg));
  }
  save(action, before = "beforeSave") {
    const executeOperation = {
      beforeSave: this.executeSave.bind(this),
      beforeSaveNew: this.executeSaveNew.bind(this)
    };
    const uniqueKey = this.resolveUniqueKey(this.model);
    this.subscriptions.push(this.poPageDynamicEditActionsService[before](this.actions[before], uniqueKey, __spreadValues({}, this.model)).pipe(switchMap((returnBefore) => {
      const newAction = returnBefore?.newUrl ?? action;
      const allowAction = returnBefore?.allowAction ?? true;
      this.updateModel(returnBefore?.resource);
      if (!allowAction) {
        return of({});
      }
      if (typeof newAction === "string") {
        return executeOperation[before](newAction);
      } else {
        newAction(__spreadValues({}, this.model), uniqueKey);
        return EMPTY;
      }
    })).subscribe());
  }
  executeSaveNew(path) {
    const paramId = this.activatedRoute.snapshot.params["id"];
    const saveOperation$ = this.saveOperation();
    return saveOperation$.pipe(tap((message) => {
      if (paramId) {
        this.poNotification.success(message);
        this.navigateTo(path);
      } else {
        this.poNotification.success(message);
        this.model = {};
        this.dynamicForm.form.reset();
      }
    }));
  }
  getKeysByFields(fields = []) {
    return fields.filter((field) => field.key === true).map((field) => field.property);
  }
  getControlFields(fields = []) {
    return fields.filter((field) => field.type !== "detail");
  }
  getDetailFields(fields = []) {
    return fields.filter((field) => field.type === "detail");
  }
  getDuplicatesByFields(fields = []) {
    return fields.filter((field) => field.duplicate === true).map((field) => field.property);
  }
  getPageActions(actions = {}) {
    const pageActions = [{
      label: this.literals.pageActionSave,
      action: this.save.bind(this, actions.save)
    }];
    if (actions.saveNew) {
      pageActions.push({
        label: this.literals.pageActionSaveNew,
        action: this.save.bind(this, actions.saveNew, "beforeSaveNew")
      });
    }
    if (actions.cancel === void 0 || actions.cancel) {
      pageActions.push({
        label: this.literals.pageActionCancel,
        action: this.cancel.bind(this, actions.cancel, this.actions.beforeCancel)
      });
    }
    return pageActions;
  }
  isObject(value) {
    return !!value && typeof value === "object" && !Array.isArray(value);
  }
  static ɵfac = function PoPageDynamicEditComponent_Factory(t) {
    return new (t || _PoPageDynamicEditComponent)(ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(PoNotificationService), ɵɵdirectiveInject(PoDialogService), ɵɵdirectiveInject(PoPageDynamicService), ɵɵdirectiveInject(PoPageCustomizationService), ɵɵdirectiveInject(PoPageDynamicEditActionsService), ɵɵdirectiveInject(PoLanguageService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PoPageDynamicEditComponent,
    selectors: [["po-page-dynamic-edit"]],
    viewQuery: function PoPageDynamicEditComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0$5, 5);
        ɵɵviewQuery(_c1$3, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dynamicForm = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.gridDetail = _t.first);
      }
    },
    inputs: {
      breadcrumb: [0, "p-breadcrumb", "breadcrumb"],
      serviceApi: [0, "p-service-api", "serviceApi"],
      title: [0, "p-title", "title"],
      onLoad: [0, "p-load", "onLoad"],
      onLoadData: [0, "p-load-data", "onLoadData"],
      actions: [0, "p-actions", "actions"],
      literals: [0, "p-literals", "literals"],
      notificationType: [0, "p-notification-type", "notificationType"],
      autoRouter: [0, "p-auto-router", "autoRouter"],
      fields: [0, "p-fields", "fields"]
    },
    features: [ɵɵProvidersFeature([PoPageDynamicService])],
    decls: 6,
    vars: 6,
    consts: [["registerNotFoundTemplate", ""], ["formFieldsTemplate", ""], ["dynamicForm", ""], ["gridDetail", ""], [3, "p-actions", "p-breadcrumb", "p-title"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["p-icon", "ICON_INFO"], [1, "po-font-text-large"], [3, "p-fields", "p-value"], ["class", "po-sm-12", 4, "ngIf"], [1, "po-sm-12"], [3, "p-label"], [1, "po-row", "po-mb-2"], [3, "p-click", "p-label"], [3, "p-row-actions", "p-columns", "p-data"]],
    template: function PoPageDynamicEditComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "po-page-default", 4);
        ɵɵtemplate(1, PoPageDynamicEditComponent_ng_container_1_Template, 1, 0, "ng-container", 5);
        ɵɵelementEnd();
        ɵɵtemplate(2, PoPageDynamicEditComponent_ng_template_2_Template, 4, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(4, PoPageDynamicEditComponent_ng_template_4_Template, 3, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor);
      }
      if (rf & 2) {
        const registerNotFoundTemplate_r3 = ɵɵreference(3);
        const formFieldsTemplate_r4 = ɵɵreference(5);
        ɵɵproperty("p-actions", ctx.pageActions)("p-breadcrumb", ctx.breadcrumb)("p-title", ctx.title);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.model)("ngIfThen", formFieldsTemplate_r4)("ngIfElse", registerNotFoundTemplate_r3);
      }
    },
    dependencies: [NgIf, PoButtonComponent, PoDividerComponent, PoDynamicFormComponent, PoGridComponent, PoIconComponent, PoPageDefaultComponent, PoWidgetComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageDynamicEditComponent, [{
    type: Component,
    args: [{
      selector: "po-page-dynamic-edit",
      providers: [PoPageDynamicService],
      template: '<po-page-default [p-actions]="pageActions" [p-breadcrumb]="breadcrumb" [p-title]="title">\n  <ng-container *ngIf="model; then formFieldsTemplate; else registerNotFoundTemplate"> </ng-container>\n</po-page-default>\n\n<ng-template #registerNotFoundTemplate>\n  <po-widget>\n    <po-icon p-icon="ICON_INFO"></po-icon>\n    <span class="po-font-text-large">\n      {{ literals.registerNotFound }}\n    </span>\n  </po-widget>\n</ng-template>\n\n<ng-template #formFieldsTemplate>\n  <po-dynamic-form #dynamicForm [p-fields]="controlFields" [p-value]="model"> </po-dynamic-form>\n\n  <div *ngIf="detailFields.length > 0" class="po-sm-12">\n    <po-divider [p-label]="detailFields[0].divider"></po-divider>\n\n    <div class="po-row po-mb-2">\n      <po-button [p-label]="literals.detailActionNew" (p-click)="detailActionNew()"></po-button>\n    </div>\n\n    <po-grid\n      #gridDetail\n      [p-row-actions]="detailActions"\n      [p-columns]="detailFields[0].detail.columns"\n      [p-data]="model[detailFields[0].property]"\n    >\n    </po-grid>\n  </div>\n</ng-template>\n'
    }]
  }], () => [{
    type: Router
  }, {
    type: ActivatedRoute
  }, {
    type: PoNotificationService
  }, {
    type: PoDialogService
  }, {
    type: PoPageDynamicService
  }, {
    type: PoPageCustomizationService
  }, {
    type: PoPageDynamicEditActionsService
  }, {
    type: PoLanguageService
  }], {
    dynamicForm: [{
      type: ViewChild,
      args: ["dynamicForm"]
    }],
    gridDetail: [{
      type: ViewChild,
      args: ["gridDetail"]
    }],
    breadcrumb: [{
      type: Input,
      args: ["p-breadcrumb"]
    }],
    serviceApi: [{
      type: Input,
      args: ["p-service-api"]
    }],
    title: [{
      type: Input,
      args: ["p-title"]
    }],
    onLoad: [{
      type: Input,
      args: ["p-load"]
    }],
    onLoadData: [{
      type: Input,
      args: ["p-load-data"]
    }],
    actions: [{
      type: Input,
      args: ["p-actions"]
    }],
    literals: [{
      type: Input,
      args: ["p-literals"]
    }],
    notificationType: [{
      type: Input,
      args: ["p-notification-type"]
    }],
    autoRouter: [{
      type: Input,
      args: ["p-auto-router"]
    }],
    fields: [{
      type: Input,
      args: ["p-fields"]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(PoPageDynamicEditComponent, {
    className: "PoPageDynamicEditComponent",
    filePath: "lib/components/po-page-dynamic-edit/po-page-dynamic-edit.component.ts",
    lineNumber: 189
  });
})();
var PoPageDynamicEditModule = class _PoPageDynamicEditModule {
  static ɵfac = function PoPageDynamicEditModule_Factory(t) {
    return new (t || _PoPageDynamicEditModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _PoPageDynamicEditModule
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, FormsModule, RouterModule, PoButtonModule, PoDividerModule, PoDynamicModule, PoGridModule, PoIconModule, PoPageModule, PoWidgetModule, PoPageDynamicModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageDynamicEditModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, RouterModule, PoButtonModule, PoDividerModule, PoDynamicModule, PoGridModule, PoIconModule, PoPageModule, PoWidgetModule, PoPageDynamicModule],
      declarations: [PoPageDynamicEditComponent],
      exports: [PoPageDynamicEditComponent]
    }]
  }], null, null);
})();
(function() {
  (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PoPageDynamicEditModule, {
    declarations: [PoPageDynamicEditComponent],
    imports: [CommonModule, FormsModule, RouterModule, PoButtonModule, PoDividerModule, PoDynamicModule, PoGridModule, PoIconModule, PoPageModule, PoWidgetModule, PoPageDynamicModule],
    exports: [PoPageDynamicEditComponent]
  });
})();
var PoPageCustomizationModule = class _PoPageCustomizationModule {
  static ɵfac = function PoPageCustomizationModule_Factory(t) {
    return new (t || _PoPageCustomizationModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _PoPageCustomizationModule
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [PoPageCustomizationService],
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageCustomizationModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [PoPageCustomizationService]
    }]
  }], null, null);
})();
(function() {
  (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PoPageCustomizationModule, {
    imports: [CommonModule]
  });
})();
var poAdvancedFiltersLiteralsDefault = {
  en: {
    title: "Advanced search",
    cancelLabel: "Cancel",
    confirmLabel: "Apply filters"
  },
  es: {
    title: "Búsqueda avanzada",
    cancelLabel: "Cancelar",
    confirmLabel: "Aplicar filtros"
  },
  pt: {
    title: "Busca avançada",
    cancelLabel: "Cancelar",
    confirmLabel: "Aplicar filtros"
  },
  ru: {
    title: "Расширенный поиск",
    cancelLabel: "отменить",
    confirmLabel: "Применить фильтры"
  }
};
var PoAdvancedFilterBaseComponent = class _PoAdvancedFilterBaseComponent {
  poModal;
  /**
   * Mantém na modal de busca avançada os valores preenchidos do último filtro realizado pelo usuário.
   */
  keepFilters = false;
  /** Função que será disparada e receberá os valores do formulário ao ser clicado no botão buscar. */
  searchEvent = new EventEmitter();
  filter = {};
  language = poLocaleDefault;
  primaryAction = {
    action: () => {
      const models = this.getValuesFromForm();
      this.searchEvent.emit(models);
      this.poModal.close();
    },
    label: this.literals.confirmLabel
  };
  secondaryAction = {
    action: () => {
      this.poModal.close();
    },
    label: this.literals.cancelLabel
  };
  optionsServiceChosenOptions = [];
  _filters = [];
  _literals;
  /**
   * Coleção de objetos que implementam a interface PoPageDynamicSearchFilters, para definição dos campos que serão criados
   * dinamicamente.
   */
  set filters(filters) {
    this._filters = Array.isArray(filters) ? [...filters] : [];
  }
  get filters() {
    return this._filters;
  }
  /** Objeto com as literais usadas no `po-advanced-filter`. */
  set literals(value) {
    if (value instanceof Object && !(value instanceof Array)) {
      this._literals = __spreadValues(__spreadValues(__spreadValues({}, poAdvancedFiltersLiteralsDefault[poLocaleDefault]), poAdvancedFiltersLiteralsDefault[this.language]), value);
    } else {
      this._literals = poAdvancedFiltersLiteralsDefault[this.language];
    }
    this.primaryAction.label = this.literals.confirmLabel;
    this.secondaryAction.label = this.literals.cancelLabel;
  }
  get literals() {
    return this._literals || poAdvancedFiltersLiteralsDefault[this.language];
  }
  constructor(languageService) {
    this.language = languageService.getShortLanguage();
  }
  // Retorna os models dos campos preenchidos
  getValuesFromForm() {
    let optionServiceOptions;
    Object.keys(this.filter).forEach((property) => {
      if (this.filter[property] === void 0 || this.filter[property] === "") {
        delete this.filter[property];
      }
    });
    if (this.optionsServiceChosenOptions.length) {
      optionServiceOptions = this.optionsServiceChosenOptions.filter((optionItem) => Object.values(this.filter).includes(optionItem.value));
    }
    return {
      filter: this.filter,
      optionsService: optionServiceOptions
    };
  }
  static ɵfac = function PoAdvancedFilterBaseComponent_Factory(t) {
    return new (t || _PoAdvancedFilterBaseComponent)(ɵɵdirectiveInject(PoLanguageService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _PoAdvancedFilterBaseComponent,
    viewQuery: function PoAdvancedFilterBaseComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(PoModalComponent, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.poModal = _t.first);
      }
    },
    inputs: {
      keepFilters: [2, "p-keep-filters", "keepFilters", convertToBoolean],
      filters: [0, "p-filters", "filters"],
      literals: [0, "p-literals", "literals"]
    },
    outputs: {
      searchEvent: "p-search-event"
    },
    features: [ɵɵInputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoAdvancedFilterBaseComponent, [{
    type: Directive
  }], () => [{
    type: PoLanguageService
  }], {
    poModal: [{
      type: ViewChild,
      args: [PoModalComponent, {
        static: true
      }]
    }],
    keepFilters: [{
      type: Input,
      args: [{
        alias: "p-keep-filters",
        transform: convertToBoolean
      }]
    }],
    searchEvent: [{
      type: Output,
      args: ["p-search-event"]
    }],
    filters: [{
      type: Input,
      args: ["p-filters"]
    }],
    literals: [{
      type: Input,
      args: ["p-literals"]
    }]
  });
})();
var PoAdvancedFilterComponent = class _PoAdvancedFilterComponent extends PoAdvancedFilterBaseComponent {
  poDynamicForm;
  subscription = new Subscription();
  constructor(languageService) {
    super(languageService);
  }
  ngOnInit() {
    this.optionsServiceSubscribe();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  open() {
    this.filter = this.keepFilters ? this.getInitialValuesFromFilter(this.filters) : {};
    this.poModal.open();
  }
  getOptionsServiceItem(optionServiceObject) {
    const objectItem = this.optionsServiceChosenOptions.map((option) => option.value).indexOf(optionServiceObject.value);
    if (objectItem === -1) {
      this.optionsServiceChosenOptions = [...this.optionsServiceChosenOptions, optionServiceObject];
    }
  }
  getInitialValuesFromFilter(filters) {
    return filters.reduce((result, item) => Object.assign(result, {
      [item.property]: item.initValue
    }), {});
  }
  // Se inscreve para receber valores referentes a campos do tipo combo.
  optionsServiceSubscribe() {
    this.subscription.add(this.poDynamicForm.getObjectValue().subscribe((optionServiceObject) => {
      if (optionServiceObject) {
        this.getOptionsServiceItem(optionServiceObject);
      }
    }));
  }
  static ɵfac = function PoAdvancedFilterComponent_Factory(t) {
    return new (t || _PoAdvancedFilterComponent)(ɵɵdirectiveInject(PoLanguageService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PoAdvancedFilterComponent,
    selectors: [["po-advanced-filter"]],
    viewQuery: function PoAdvancedFilterComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(PoDynamicFormComponent, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.poDynamicForm = _t.first);
      }
    },
    features: [ɵɵInheritDefinitionFeature],
    decls: 2,
    vars: 5,
    consts: [["p-hide-close", "", 3, "p-primary-action", "p-secondary-action", "p-title"], [3, "p-fields", "p-value"]],
    template: function PoAdvancedFilterComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "po-modal", 0);
        ɵɵelement(1, "po-dynamic-form", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("p-primary-action", ctx.primaryAction)("p-secondary-action", ctx.secondaryAction)("p-title", ctx.literals.title);
        ɵɵadvance();
        ɵɵproperty("p-fields", ctx.filters)("p-value", ctx.filter);
      }
    },
    dependencies: [PoDynamicFormComponent, PoModalComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoAdvancedFilterComponent, [{
    type: Component,
    args: [{
      selector: "po-advanced-filter",
      template: '<po-modal\n  p-hide-close\n  [p-primary-action]="primaryAction"\n  [p-secondary-action]="secondaryAction"\n  [p-title]="literals.title"\n>\n  <po-dynamic-form [p-fields]="filters" [p-value]="filter"> </po-dynamic-form>\n</po-modal>\n'
    }]
  }], () => [{
    type: PoLanguageService
  }], {
    poDynamicForm: [{
      type: ViewChild,
      args: [PoDynamicFormComponent, {
        static: true
      }]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(PoAdvancedFilterComponent, {
    className: "PoAdvancedFilterComponent",
    filePath: "lib/components/po-page-dynamic-search/po-advanced-filter/po-advanced-filter.component.ts",
    lineNumber: 25
  });
})();
var poPageDynamicSearchLiteralsDefault = {
  en: {
    disclaimerGroupTitle: "Displaying results filtered by:",
    filterTitle: poAdvancedFiltersLiteralsDefault.en.title,
    filterCancelLabel: poAdvancedFiltersLiteralsDefault.en.cancelLabel,
    filterConfirmLabel: poAdvancedFiltersLiteralsDefault.en.confirmLabel,
    quickSearchLabel: "Quick search:",
    searchPlaceholder: "Search"
  },
  es: {
    disclaimerGroupTitle: "Presentando resultados filtrados por:",
    filterTitle: poAdvancedFiltersLiteralsDefault.es.title,
    filterCancelLabel: poAdvancedFiltersLiteralsDefault.es.cancelLabel,
    filterConfirmLabel: poAdvancedFiltersLiteralsDefault.es.confirmLabel,
    quickSearchLabel: "Búsqueda rápida:",
    searchPlaceholder: "Buscar"
  },
  pt: {
    disclaimerGroupTitle: "Apresentando resultados filtrados por:",
    filterTitle: poAdvancedFiltersLiteralsDefault.pt.title,
    filterCancelLabel: poAdvancedFiltersLiteralsDefault.pt.cancelLabel,
    filterConfirmLabel: poAdvancedFiltersLiteralsDefault.pt.confirmLabel,
    quickSearchLabel: "Pesquisa rápida:",
    searchPlaceholder: "Pesquisar"
  },
  ru: {
    disclaimerGroupTitle: "Отображение результатов, отфильтрованных по:",
    filterTitle: poAdvancedFiltersLiteralsDefault.ru.title,
    filterCancelLabel: poAdvancedFiltersLiteralsDefault.ru.cancelLabel,
    filterConfirmLabel: poAdvancedFiltersLiteralsDefault.ru.confirmLabel,
    quickSearchLabel: "Быстрый поиск:",
    searchPlaceholder: "исследование"
  }
};
var PoPageDynamicSearchBaseComponent = class _PoPageDynamicSearchBaseComponent {
  /** Nesta propriedade deve ser definido um array de objetos que implementam a interface `PoPageAction`. */
  actions = [];
  /** Objeto com propriedades do breadcrumb. */
  breadcrumb = {
    items: []
  };
  /**
   * @optional
   *
   * @description
   *
   * Mantém na busca avançada os valores preenchidos do último filtro realizado pelo usuário.
   *
   * @default `false`
   */
  keepFilters = false;
  /**
   * @optional
   *
   * @description
   *
   * Permite a utilização da pesquisa rápida junto com a pesquisa avançada.
   *
   * Desta forma, ao ter uma pesquisa avançada estabelecida e ser
   * preenchido a pesquisa rápida, o filtro será concatenado adicionando a pesquisa
   * rápida também na lista de `disclaimers`.
   *
   * > Os valores que são emitidos no `p-quick-search` e no `p-advanced-search`
   * permanecem separados durante a emissão dos valores alterados. A concatenação
   * é apenas nos `disclaimers`.
   *
   * @default `false`
   */
  concatFilters = false;
  /**
   * @optional
   *
   * @description
   *
   * Oculta o botão para remover todos os *disclaimers* do grupo.
   *
   * > Por padrão, o mesmo é exibido à partir de dois ou mais *disclaimers* com a opção `hideClose` habilitada.
   *
   * @default `false`
   */
  hideRemoveAllDisclaimer = false;
  /**
   * Função ou serviço que será executado na inicialização do componente.
   *
   * A propriedade aceita os seguintes tipos:
   * - `string`: *Endpoint* usado pelo componente para requisição via `POST`.
   * - `function`: Método que será executado.
   *
   * O retorno desta função deve ser do tipo `PoPageDynamicSearchOptions`,
   * onde o usuário poderá customizar novos filtros, breadcrumb, title e actions
   *
   * Por exemplo:
   *
   * ```
   * getPageOptions(): PoPageDynamicSearchOptions {
   * return {
   *   actions: [
   *     { label: 'Find on Google' },
   *   ],
   *   filters: [
   *     { property: 'idCard', gridColumns: 6 }
   *   ]
   * };
   * }
   *
   * ```
   * Para referenciar a sua função utilize a propriedade `bind`, por exemplo:
   * ```
   *  [p-load]="onLoadOptions.bind(this)"
   * ```
   */
  onLoad;
  /** Título da página. */
  title;
  /**
   * @optional
   *
   * @description
   *
   * Valor padrão na busca rápida ao inicializar o componente
   *
   */
  quickSearchValue;
  /**
   * @optional
   *
   * @description
   *
   * Evento disparado ao executar a pesquisa avançada, o mesmo irá repassar um objeto com os valores preenchidos no modal de pesquisa.
   *
   * > Campos não preenchidos não irão aparecer no objeto passado por parâmetro.
   */
  advancedSearch = new EventEmitter();
  /**
   * @optional
   *
   * @description
   *
   * Evento disparado ao remover um ou todos os disclaimers pelo usuário.
   */
  changeDisclaimers = new EventEmitter();
  /**
   * @optional
   *
   * @description
   *
   * Evento disparado ao realizar uma busca pelo campo de pesquisa rápida, o mesmo será chamado repassando o valor digitado.
   */
  quickSearch = new EventEmitter();
  advancedFilterLiterals;
  _filters = [];
  _hideCloseDisclaimers = [];
  _literals;
  _quickSearchWidth;
  previousFilters;
  language;
  /**
   * @optional
   *
   * @description
   *
   * Objeto com as literais usadas no `po-page-dynamic-search`.
   *
   * Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:
   *
   * ```
   *  const customLiterals: PoPageDynamicSearchLiterals = {
   *    disclaimerGroupTitle: 'Filtros aplicados:',
   *    filterTitle: 'Filtro avançado',
   *    filterCancelLabel: 'Fechar',
   *    filterConfirmLabel: 'Aplicar',
   *    quickSearchLabel: 'Valor pesquisado:',
   *    searchPlaceholder: 'Pesquise aqui'
   *  };
   * ```
   *
   * Ou passando apenas as literais que deseja customizar:
   *
   * ```
   *  const customLiterals: PoPageDynamicSearchLiterals = {
   *    filterTitle: 'Filtro avançado'
   *  };
   * ```
   *
   * E para carregar as literais customizadas, basta apenas passar o objeto para o componente.
   *
   * ```
   * <po-page-dynamic-search
   *   [p-literals]="customLiterals">
   * </po-page-dynamic-search>
   * ```
   *
   * > O valor padrão será traduzido de acordo com o idioma configurado no [`PoI18nService`](/documentation/po-i18n) ou *browser*.
   */
  set literals(value) {
    if (value instanceof Object && !(value instanceof Array)) {
      this._literals = __spreadValues(__spreadValues(__spreadValues({}, poPageDynamicSearchLiteralsDefault[poLocaleDefault]), poPageDynamicSearchLiteralsDefault[this.language]), value);
    } else {
      this._literals = poPageDynamicSearchLiteralsDefault[this.language];
    }
    this.setAdvancedFilterLiterals(this.literals);
  }
  get literals() {
    return this._literals || poPageDynamicSearchLiteralsDefault[this.language];
  }
  /**
   * @optional
   *
   * @description
   *
   * Lista dos campos usados na busca avançada. Caso o mesmo não seja passado a busca avançada não será exibida.
   */
  set filters(filters) {
    this._filters = Array.isArray(filters) ? [...filters] : [];
    if (this.stringify(this._filters) !== this.stringify(this.previousFilters)) {
      this.onChangeFilters(this.filters);
      this.previousFilters = [...this._filters];
    }
  }
  get filters() {
    return this._filters;
  }
  /**
   * @optional
   *
   * @description
   *
   * Largura do campo de busca, utilizando o *Grid System*,
   * e limitado ao máximo de 6 colunas. O tamanho mínimo é controlado
   * conforme resolução de tela para manter a consistência do layout.
   */
  set quickSearchWidth(value) {
    this._quickSearchWidth = convertToInt(value);
  }
  get quickSearchWidth() {
    return this._quickSearchWidth;
  }
  /**
   * @optional
   *
   * @description
   *
   * Lista de filtros que terão a opção de fechar ocultada
   * em seu respectivo disclaimer. Utilizar o atributo `property` do filtro.
   *
   * Exemplo de utilização:
   * ```
   * ['city','name'];
   * ```
   */
  set hideCloseDisclaimers(value) {
    this._hideCloseDisclaimers = Array.isArray(value) ? value : [];
  }
  get hideCloseDisclaimers() {
    return this._hideCloseDisclaimers;
  }
  constructor(languageService) {
    this.language = languageService.getShortLanguage();
  }
  setAdvancedFilterLiterals(literals) {
    this.advancedFilterLiterals = {
      cancelLabel: literals.filterCancelLabel,
      confirmLabel: literals.filterConfirmLabel,
      title: literals.filterTitle
    };
  }
  stringify(columns) {
    return JSON.stringify(columns, (key, value) => {
      if (key !== "searchService") {
        return value;
      }
    });
  }
  static ɵfac = function PoPageDynamicSearchBaseComponent_Factory(t) {
    return new (t || _PoPageDynamicSearchBaseComponent)(ɵɵdirectiveInject(PoLanguageService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _PoPageDynamicSearchBaseComponent,
    inputs: {
      actions: [0, "p-actions", "actions"],
      breadcrumb: [0, "p-breadcrumb", "breadcrumb"],
      keepFilters: [2, "p-keep-filters", "keepFilters", convertToBoolean],
      concatFilters: [2, "p-concat-filters", "concatFilters", convertToBoolean],
      hideRemoveAllDisclaimer: [2, "p-hide-remove-all-disclaimer", "hideRemoveAllDisclaimer", convertToBoolean],
      onLoad: [0, "p-load", "onLoad"],
      title: [0, "p-title", "title"],
      quickSearchValue: [0, "p-quick-search-value", "quickSearchValue"],
      literals: [0, "p-literals", "literals"],
      filters: [0, "p-filters", "filters"],
      quickSearchWidth: [0, "p-quick-search-width", "quickSearchWidth"],
      hideCloseDisclaimers: [0, "p-hide-close-disclaimers", "hideCloseDisclaimers"]
    },
    outputs: {
      advancedSearch: "p-advanced-search",
      changeDisclaimers: "p-change-disclaimers",
      quickSearch: "p-quick-search"
    },
    features: [ɵɵInputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageDynamicSearchBaseComponent, [{
    type: Directive
  }], () => [{
    type: PoLanguageService
  }], {
    actions: [{
      type: Input,
      args: ["p-actions"]
    }],
    breadcrumb: [{
      type: Input,
      args: ["p-breadcrumb"]
    }],
    keepFilters: [{
      type: Input,
      args: [{
        alias: "p-keep-filters",
        transform: convertToBoolean
      }]
    }],
    concatFilters: [{
      type: Input,
      args: [{
        alias: "p-concat-filters",
        transform: convertToBoolean
      }]
    }],
    hideRemoveAllDisclaimer: [{
      type: Input,
      args: [{
        alias: "p-hide-remove-all-disclaimer",
        transform: convertToBoolean
      }]
    }],
    onLoad: [{
      type: Input,
      args: ["p-load"]
    }],
    title: [{
      type: Input,
      args: ["p-title"]
    }],
    quickSearchValue: [{
      type: Input,
      args: ["p-quick-search-value"]
    }],
    advancedSearch: [{
      type: Output,
      args: ["p-advanced-search"]
    }],
    changeDisclaimers: [{
      type: Output,
      args: ["p-change-disclaimers"]
    }],
    quickSearch: [{
      type: Output,
      args: ["p-quick-search"]
    }],
    literals: [{
      type: Input,
      args: ["p-literals"]
    }],
    filters: [{
      type: Input,
      args: ["p-filters"]
    }],
    quickSearchWidth: [{
      type: Input,
      args: ["p-quick-search-width"]
    }],
    hideCloseDisclaimers: [{
      type: Input,
      args: ["p-hide-close-disclaimers"]
    }]
  });
})();
var _c0$4 = ["*"];
var PoPageDynamicSearchComponent = class _PoPageDynamicSearchComponent extends PoPageDynamicSearchBaseComponent {
  languageService;
  poPageCustomizationService;
  changeDetector;
  poAdvancedFilter;
  poPageList;
  loadSubscription;
  _disclaimerGroup = {
    remove: this.onRemoveDisclaimer.bind(this),
    removeAll: this.onRemoveAllDisclaimers.bind(this),
    disclaimers: [],
    title: this.literals.disclaimerGroupTitle,
    hideRemoveAll: this.hideRemoveAllDisclaimer
  };
  _filterSettings = {
    action: this.onAction.bind(this),
    advancedAction: this.onAdvancedAction.bind(this),
    placeholder: this.literals.searchPlaceholder,
    width: this.quickSearchWidth
  };
  constructor(languageService, poPageCustomizationService, changeDetector) {
    super(languageService);
    this.languageService = languageService;
    this.poPageCustomizationService = poPageCustomizationService;
    this.changeDetector = changeDetector;
  }
  get disclaimerGroup() {
    return Object.assign({}, this._disclaimerGroup, {
      title: this.literals.disclaimerGroupTitle,
      hideRemoveAll: this.hideRemoveAllDisclaimer
    });
  }
  get filterSettings() {
    const thereAreValidFilters = this.filters.length > 0 && this.filters.some((filter) => filter.visible === true || filter.visible === void 0);
    this._filterSettings.advancedAction = thereAreValidFilters ? this.onAdvancedAction.bind(this) : void 0;
    return Object.assign({}, this._filterSettings, {
      placeholder: this.literals.searchPlaceholder,
      width: this.quickSearchWidth
    });
  }
  ngOnInit() {
    this.setAdvancedFilterLiterals(this.literals);
    if (this.onLoad) {
      this.loadOptionsOnInitialize(this.onLoad);
    }
    if (this.quickSearchValue) {
      this.onAction(this.quickSearchValue, true);
    }
  }
  ngOnDestroy() {
    if (this.loadSubscription) {
      this.loadSubscription.unsubscribe();
    }
  }
  onChangeFilters(filters) {
    const filterObjectWithValue = filters.filter((filter) => filter.initValue).reduce((prev, current) => __spreadValues(__spreadValues({}, prev), {
      [current.property]: current.initValue
    }), {});
    if (Object.keys(filterObjectWithValue).length) {
      this.onAdvancedSearch({
        filter: filterObjectWithValue
      });
    }
  }
  onAction(quickFilter, quickSearchValue) {
    const disclaimerQuickSearchUpdated = {
      property: "search",
      label: `${this.literals.quickSearchLabel} ${quickFilter}`,
      value: quickFilter,
      hideClose: this.hideCloseDisclaimers.some((hideCloseDisclaimer) => hideCloseDisclaimer === "search") || false
    };
    const getDisclaimersWithConcatFilters = () => [...this.getDisclaimersWithoutQuickSearch(), disclaimerQuickSearchUpdated];
    this._disclaimerGroup.disclaimers = this.concatFilters ? getDisclaimersWithConcatFilters() : [disclaimerQuickSearchUpdated];
    if (this.quickSearch.observers && this.quickSearch.observers.length > 0 && !quickSearchValue) {
      this.quickSearch.emit(quickFilter);
    }
    if (this.keepFilters && !this.concatFilters) {
      this.filters.forEach((element) => delete element.initValue);
    }
    this.changeDetector.detectChanges();
  }
  onAdvancedAction() {
    this.poAdvancedFilter.open();
  }
  onAdvancedSearch(filteredItems, isAdvancedSearch) {
    const {
      filter,
      optionsService
    } = filteredItems;
    this._disclaimerGroup.disclaimers = this.setDisclaimers(filter, optionsService);
    this.setFilters(filter);
    this.advancedSearch.emit(filter);
    if (isAdvancedSearch) {
      this.poPageList.clearInputSearch();
    }
  }
  getDisclaimersWithoutQuickSearch() {
    const quickSearchProperty = "search";
    return this._disclaimerGroup.disclaimers.filter((item) => item.property !== quickSearchProperty);
  }
  setFilters(filters) {
    const formattedFilters = this.convertToFilters(filters);
    this.filters.forEach((element) => {
      const compatibleObject = formattedFilters.find((item) => item.property === element.property);
      if (compatibleObject) {
        element.initValue = compatibleObject.value;
      } else {
        delete element.initValue;
      }
    });
  }
  convertToFilters(filters) {
    return Object.entries(filters).map(([property, value]) => ({
      property,
      value
    }));
  }
  optionsServiceDisclaimerLabel(value, optionsServiceObjectsList) {
    const optionServiceMatch = optionsServiceObjectsList.find((option) => option.value === value);
    return optionServiceMatch.label || optionServiceMatch.value;
  }
  applyDisclaimerLabelValue(field, filterValue) {
    const values = Array.isArray(filterValue) ? filterValue : [filterValue];
    const labels = values.map((value) => {
      const filteredField = field.options.find((option) => option.value === value || option === value);
      if (filteredField) {
        return filteredField.label || filteredField.value || filteredField;
      }
    });
    return labels.join(", ");
  }
  formatDate(date) {
    const year = parseInt(date.substr(0, 4), 10);
    const month = parseInt(date.substr(5, 2), 10);
    const day = parseInt(date.substr(8, 2), 10);
    return new Date(year, month - 1, day).toLocaleDateString(getBrowserLanguage());
  }
  formatArrayToObjectKeyValue(filters) {
    const formattedObject = filters.reduce((result, item) => Object.assign(result, {
      [item.property]: item.value || item.initValue
    }), {});
    Object.keys(formattedObject).forEach((key) => {
      if (!formattedObject[key]) {
        delete formattedObject[key];
      }
    });
    return formattedObject;
  }
  formatValueToCurrency(field, value) {
    const language = this.languageService.getLanguage();
    return new Intl.NumberFormat(field.locale ? field.locale : language, {
      minimumFractionDigits: 2
    }).format(value);
  }
  getFieldByProperty(fields, fieldName) {
    return fields.find((field) => field.property === fieldName);
  }
  getFilterValueToDisclaimer(field, value, optionsServiceObjectsList) {
    if (field.optionsService && optionsServiceObjectsList) {
      return this.optionsServiceDisclaimerLabel(value, optionsServiceObjectsList);
    }
    if (field.type === PoDynamicFieldType.Currency && value) {
      return this.formatValueToCurrency(field, value);
    }
    if (field.type === PoDynamicFieldType.Date) {
      return field.range ? this.formatDate(value.start) + " - " + this.formatDate(value.end) : this.formatDate(value);
    }
    if (field.options && value) {
      return this.applyDisclaimerLabelValue(field, value);
    }
    return value;
  }
  onRemoveDisclaimer(removeData) {
    const {
      currentDisclaimers
    } = removeData;
    this.emitChangesDisclaimers(currentDisclaimers);
  }
  emitChangesDisclaimers(currentDisclaimers) {
    this.changeDisclaimers.emit(currentDisclaimers);
    this.setFilters(this.formatArrayToObjectKeyValue(currentDisclaimers));
  }
  onRemoveAllDisclaimers() {
    this.emitChangesDisclaimers([]);
  }
  setDisclaimers(filters, optionsServiceObjects) {
    const disclaimers = [];
    const properties = Object.keys(filters);
    properties.forEach((property) => {
      const field = this.getFieldByProperty(this.filters, property);
      const label = field.label || capitalizeFirstLetter(field.property);
      const value = filters[property];
      const hideClose = this.hideCloseDisclaimers.some((hideCloseDisclaimer) => hideCloseDisclaimer === property) || false;
      const valueDisplayedOnTheDisclaimerLabel = this.getFilterValueToDisclaimer(field, value, optionsServiceObjects);
      if (valueDisplayedOnTheDisclaimerLabel !== "") {
        disclaimers.push({
          label: `${label}: ${valueDisplayedOnTheDisclaimerLabel}`,
          property,
          value,
          hideClose
        });
      }
    });
    return disclaimers;
  }
  loadOptionsOnInitialize(onLoad) {
    this.loadSubscription = this.getPoDynamicPageOptions(onLoad).subscribe((responsePoOption) => this.poPageCustomizationService.changeOriginalOptionsToNewOptions(this, responsePoOption));
  }
  getPoDynamicPageOptions(onLoad) {
    const originalOption = {
      title: this.title,
      actions: this.actions,
      breadcrumb: this.breadcrumb,
      filters: this.filters,
      keepFilters: this.keepFilters,
      concatFilters: this.concatFilters,
      hideRemoveAllDisclaimer: this.hideRemoveAllDisclaimer,
      hideCloseDisclaimers: this.hideCloseDisclaimers,
      quickSearchWidth: this.quickSearchWidth
    };
    const pageOptionSchema = {
      schema: [{
        nameProp: "filters",
        merge: true,
        keyForMerge: "property"
      }, {
        nameProp: "actions",
        merge: true,
        keyForMerge: "label"
      }, {
        nameProp: "breadcrumb"
      }, {
        nameProp: "title"
      }, {
        nameProp: "keepFilters"
      }, {
        nameProp: "concatFilters"
      }, {
        nameProp: "hideRemoveAllDisclaimer"
      }, {
        nameProp: "hideCloseDisclaimers"
      }, {
        nameProp: "quickSearchWidth"
      }]
    };
    return this.poPageCustomizationService.getCustomOptions(onLoad, originalOption, pageOptionSchema);
  }
  static ɵfac = function PoPageDynamicSearchComponent_Factory(t) {
    return new (t || _PoPageDynamicSearchComponent)(ɵɵdirectiveInject(PoLanguageService), ɵɵdirectiveInject(PoPageCustomizationService), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PoPageDynamicSearchComponent,
    selectors: [["po-page-dynamic-search"]],
    viewQuery: function PoPageDynamicSearchComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(PoAdvancedFilterComponent, 7);
        ɵɵviewQuery(PoPageListComponent, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.poAdvancedFilter = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.poPageList = _t.first);
      }
    },
    features: [ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c0$4,
    decls: 4,
    vars: 9,
    consts: [["poPageList", ""], [3, "p-actions", "p-breadcrumb", "p-disclaimer-group", "p-filter", "p-title", "p-quick-search-value"], [3, "p-search-event", "p-filters", "p-keep-filters", "p-literals"]],
    template: function PoPageDynamicSearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵprojectionDef();
        ɵɵelementStart(0, "po-page-list", 1, 0)(2, "po-advanced-filter", 2);
        ɵɵlistener("p-search-event", function PoPageDynamicSearchComponent_Template_po_advanced_filter_p_search_event_2_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onAdvancedSearch($event, true));
        });
        ɵɵelementEnd();
        ɵɵprojection(3);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("p-actions", ctx.actions)("p-breadcrumb", ctx.breadcrumb)("p-disclaimer-group", ctx.disclaimerGroup)("p-filter", ctx.filterSettings)("p-title", ctx.title)("p-quick-search-value", ctx.quickSearchValue);
        ɵɵadvance(2);
        ɵɵproperty("p-filters", ctx.filters)("p-keep-filters", ctx.keepFilters)("p-literals", ctx.advancedFilterLiterals);
      }
    },
    dependencies: [PoPageListComponent, PoAdvancedFilterComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageDynamicSearchComponent, [{
    type: Component,
    args: [{
      selector: "po-page-dynamic-search",
      template: '<po-page-list\n  #poPageList\n  [p-actions]="actions"\n  [p-breadcrumb]="breadcrumb"\n  [p-disclaimer-group]="disclaimerGroup"\n  [p-filter]="filterSettings"\n  [p-title]="title"\n  [p-quick-search-value]="quickSearchValue"\n>\n  <po-advanced-filter\n    [p-filters]="filters"\n    [p-keep-filters]="keepFilters"\n    [p-literals]="advancedFilterLiterals"\n    (p-search-event)="onAdvancedSearch($event, true)"\n  >\n  </po-advanced-filter>\n\n  <ng-content></ng-content>\n</po-page-list>\n'
    }]
  }], () => [{
    type: PoLanguageService
  }, {
    type: PoPageCustomizationService
  }, {
    type: ChangeDetectorRef
  }], {
    poAdvancedFilter: [{
      type: ViewChild,
      args: [PoAdvancedFilterComponent, {
        static: true
      }]
    }],
    poPageList: [{
      type: ViewChild,
      args: [PoPageListComponent, {
        static: true
      }]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(PoPageDynamicSearchComponent, {
    className: "PoPageDynamicSearchComponent",
    filePath: "lib/components/po-page-dynamic-search/po-page-dynamic-search.component.ts",
    lineNumber: 46
  });
})();
var PoPageDynamicSearchModule = class _PoPageDynamicSearchModule {
  static ɵfac = function PoPageDynamicSearchModule_Factory(t) {
    return new (t || _PoPageDynamicSearchModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _PoPageDynamicSearchModule
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, FormsModule, RouterModule, PoDynamicModule, PoLanguageModule, PoModalModule, PoPageModule, PoPageCustomizationModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageDynamicSearchModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, RouterModule, PoDynamicModule, PoLanguageModule, PoModalModule, PoPageModule, PoPageCustomizationModule],
      declarations: [PoAdvancedFilterComponent, PoPageDynamicSearchComponent],
      exports: [PoPageDynamicSearchComponent]
    }]
  }], null, null);
})();
(function() {
  (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PoPageDynamicSearchModule, {
    declarations: [PoAdvancedFilterComponent, PoPageDynamicSearchComponent],
    imports: [CommonModule, FormsModule, RouterModule, PoDynamicModule, PoLanguageModule, PoModalModule, PoPageModule, PoPageCustomizationModule],
    exports: [PoPageDynamicSearchComponent]
  });
})();
var PoPageDynamicListBaseComponent = class _PoPageDynamicListBaseComponent {
  /** Objeto com propriedades do breadcrumb. */
  breadcrumb = {
    items: []
  };
  /** Endpoint da API dos recursos que serão exibidos. */
  /**
   * @description
   *
   * Endpoint usado pelo template para requisição dos recursos que serão exibidos.
   *
   * Ao realizar requisições de busca, podem ser enviados os parâmetros (caso possuam valor): `page`, `pageSize`, `search` e `order`.
   *
   * Caso a coluna estiver ordenada descendentemente será enviada da seguinte forma: `-name`, se for ordenada
   * ascendentemente será enviada apenas com o nome da coluna, por exemplo: `name`.
   *
   * Exemplo de uma requisição de busca:
   *
   * > `GET {end-point}/{resource}?page=1&pageSize=10&search=components&order=-name`
   *
   * Caso a ação `remove` estiver configurada, será feito uma requisição de exclusão nesse mesmo endpoint passando os campos
   * setados como `key: true`.
   *
   * > `DELETE {end-point}/{keys}`
   *
   * ```
   *  <po-page-dynamic-table
   *    [p-actions]="{ remove: true }"
   *    [p-fields]="[ { property: 'id', key: true } ]"
   *    p-service="/api/po-samples/v1/people"
   *    ...>
   *  </po-page-dynamic-table>
   * ```
   *
   * Resquisição disparada, onde a propriedade `id` é igual a 2:
   *
   * ```
   *  DELETE /api/po-samples/v1/people/2 HTTP/1.1
   *  Host: localhost:4000
   *  Connection: keep-alive
   *  Accept: application/json, text/plain
   *  ...
   * ```
   *
   * Para a ação `removeAll`, será feito uma requisição de exclusão em lote para esse mesmo endpoint passando, uma lista
   * de objetos com os campos setados como `key: true` via `payload`.
   *
   * > `DELETE {end-point}`
   *
   * > `Payload: [ {key}, {key} ... {key} ]`
   *
   * ```
   *  <po-page-dynamic-table
   *    [p-actions]="{ removeAll: true }"
   *    [p-fields]="[ { property: 'id', key: true } ]"
   *    p-service="/api/po-samples/v1/people"
   *    ...>
   *  </po-page-dynamic-table>
   * ```
   *
   * Resquisição disparada, onde foram selecionados 3 itens para serem removidos:
   *
   * ```
   *  DELETE /api/po-samples/v1/people HTTP/1.1
   *  Host: localhost:4000
   *  Connection: keep-alive
   *  Accept: application/json, text/plain
   *  ...
   * ```
   *
   * Request payload:
   *
   * ```
   * [{"id":2},{"id":4},{"id":5}]
   * ```
   *
   * > Caso esteja usando metadados com o template, será disparado uma requisição na inicialização do template para buscar
   * > os metadados da página passando o tipo do metadado esperado e a versão cacheada pelo browser.
   * >
   * > `GET {end-point}/metadata?type=list&version={version}`
   */
  serviceApi;
  /** Título da página. */
  title;
  /**
   * @optional
   *
   * @description
   * Evento disparado ao fechar o popover do gerenciador de colunas após alterar as colunas visíveis.
   *
   * O componente envia como parâmetro um array de string com as colunas visíveis atualizadas.
   * Por exemplo: ["idCard", "name", "hireStatus", "age"].
   */
  changeVisibleColumns = new EventEmitter();
  /**
   * @optional
   *
   * @description
   * Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.
   *
   * O componente envia como parâmetro um array de string com as colunas configuradas inicialmente.
   * Por exemplo: ["idCard", "name", "hireStatus", "age"].
   */
  columnRestoreManager = new EventEmitter();
  /**
   * @optional
   *
   * @description
   *
   * Evento executado ao ordenar colunas da tabela.
   *
   * Recebe um objeto `{ column, type }` onde:
   *
   * - column (`PoTableColumn`): objeto da coluna que foi clicada/ordenada.
   * - type (`PoTableColumnSortType`): tipo da ordenação.
   */
  sortBy = new EventEmitter();
  _autoRouter = false;
  _columns = [];
  _duplicates = [];
  _fields = [];
  _filters = [];
  _keys = [];
  /**
   * @optional
   *
   * @description
   *
   * Cria automaticamente as rotas de edição (novo/duplicate) e detalhes caso sejam definidas ações na propriedade `p-actions`
   *
   * As rotas criadas serão baseadas na propriedade `p-actions`.
   *
   * > Para o correto funcionamento não pode haver nenhuma rota coringa (`**`) especificada.
   *
   * @default false
   */
  set autoRouter(value) {
    this._autoRouter = convertToBoolean(value);
  }
  get autoRouter() {
    return this._autoRouter;
  }
  /**
   * @optional
   *
   * @description
   *
   * Lista dos campos usados na tabela e busca avançada.
   *
   *
   * > Caso não seja definido fields a tabela assumirá o comportamento padrão.
   */
  set fields(fields) {
    this._fields = Array.isArray(fields) ? [...fields] : [];
    this.setFieldsProperties(this.fields);
  }
  get fields() {
    return this._fields;
  }
  set columns(value) {
    this._columns = [...this._columns = this.sortColumnsByOrder(value)];
  }
  get columns() {
    return this._columns;
  }
  set duplicates(value) {
    this._duplicates = [...value];
  }
  get duplicates() {
    return this._duplicates;
  }
  set filters(value) {
    this._filters = [...value];
  }
  get filters() {
    return this._filters;
  }
  set keys(value) {
    this._keys = [...value];
  }
  get keys() {
    return this._keys;
  }
  setFieldsProperties(fields) {
    let visibleFilter;
    this.filters = fields.filter((field) => field.filter === true).map((filterField) => {
      visibleFilter = !(filterField.initValue && filterField.fixed);
      return __spreadProps(__spreadValues({}, filterField), {
        visible: visibleFilter
      });
    });
    this.columns = fields.filter((field) => field.visible === void 0 || field.visible === true || field.allowColumnsManager === true);
    this.keys = fields.filter((field) => field.key === true).map((field) => field.property);
    this.duplicates = fields.filter((field) => field.duplicate === true).map((field) => field.property);
  }
  /**
   * Ordena um array de colunas com base na propriedade `order` de cada coluna.
   *
   * Este método é utilizado para organizar as colunas de uma tabela ou qualquer coleção similar
   * que necessite de ordenação baseada em um critério numérico definido pela propriedade `order`.
   * A ordenação segue as seguintes regras:
   *
   * 1. Colunas que possuem a propriedade `order` com um valor numérico válido e maior que zero
   *    são ordenadas em ordem crescente de acordo com este valor.
   *
   * 2. Colunas que não possuem a propriedade `order` ou que possuem um valor inválido ou não numérico
   *    para esta propriedade são consideradas iguais em termos de ordenação e mantêm a ordem original
   *    em que apareceram no array fornecido.
   *
   * 3. No caso de duas colunas com valores de `order` válidos e idênticos, a ordem entre essas duas colunas
   *    é determinada pela sua ordem original no array fornecido.
   *
   * @param columns Array de colunas a ser ordenado. Cada coluna é um objeto que pode conter uma propriedade `order`.
   *                O tipo `Array<any>` é utilizado aqui para permitir flexibilidade nos objetos de coluna que podem ser passados,
   *                mas espera-se que cada objeto tenha pelo menos uma propriedade `order` para a ordenação adequada.
   *
   * @returns Um novo array de colunas ordenado com base na propriedade `order`.
   */
  sortColumnsByOrder(columns) {
    return columns.sort((a, b) => {
      const hasValidOrderA = "order" in a && typeof a.order === "number" && a.order > 0;
      const hasValidOrderB = "order" in b && typeof b.order === "number" && b.order > 0;
      if (hasValidOrderA && hasValidOrderB) {
        return a.order - b.order;
      }
      if (hasValidOrderA) {
        return -1;
      }
      if (hasValidOrderB) {
        return 1;
      }
      return 0;
    });
  }
  static ɵfac = function PoPageDynamicListBaseComponent_Factory(t) {
    return new (t || _PoPageDynamicListBaseComponent)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _PoPageDynamicListBaseComponent,
    inputs: {
      breadcrumb: [0, "p-breadcrumb", "breadcrumb"],
      serviceApi: [0, "p-service-api", "serviceApi"],
      title: [0, "p-title", "title"],
      autoRouter: [0, "p-auto-router", "autoRouter"],
      fields: [0, "p-fields", "fields"]
    },
    outputs: {
      changeVisibleColumns: "p-change-visible-columns",
      columnRestoreManager: "p-restore-column-manager",
      sortBy: "p-sort-by"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageDynamicListBaseComponent, [{
    type: Directive
  }], null, {
    breadcrumb: [{
      type: Input,
      args: ["p-breadcrumb"]
    }],
    serviceApi: [{
      type: Input,
      args: ["p-service-api"]
    }],
    title: [{
      type: Input,
      args: ["p-title"]
    }],
    changeVisibleColumns: [{
      type: Output,
      args: ["p-change-visible-columns"]
    }],
    columnRestoreManager: [{
      type: Output,
      args: ["p-restore-column-manager"]
    }],
    sortBy: [{
      type: Output,
      args: ["p-sort-by"]
    }],
    autoRouter: [{
      type: Input,
      args: ["p-auto-router"]
    }],
    fields: [{
      type: Input,
      args: ["p-fields"]
    }]
  });
})();
var poPageDynamicTableLiteralsDefault = {
  en: {
    pageAction: "New",
    pageActionRemoveAll: "Delete",
    tableActionView: "View",
    tableActionEdit: "Edit",
    tableActionDuplicate: "Duplicate",
    tableActionDelete: "Delete",
    confirmRemoveTitle: "Confirm delete",
    confirmRemoveMessage: "Are you sure you want to delete this record? You can not undo this action.",
    confirmRemoveAllTitle: "Confirm batch deletion",
    confirmRemoveAllMessage: "Are you sure you want to delete all these records? You can not undo this action.",
    loadDataErrorNotification: "Service not found",
    removeSuccessNotification: "Item deleted successfully",
    removeAllSuccessNotification: "Items deleted successfully"
  },
  es: {
    pageAction: "Nuevo",
    pageActionRemoveAll: "Borrar",
    tableActionView: "Visualizar",
    tableActionEdit: "Editar",
    tableActionDuplicate: "Duplicar",
    tableActionDelete: "Borrar",
    confirmRemoveTitle: "Confirmar la exclusión",
    confirmRemoveMessage: "¿Está seguro de que desea eliminar este registro? No puede deshacer esta acción.",
    confirmRemoveAllTitle: "Confirmar la exclusión por lotes",
    confirmRemoveAllMessage: "¿Está seguro de que desea eliminar todos estos registros? No puede deshacer esta acción.",
    loadDataErrorNotification: "Servicio no informado.",
    removeSuccessNotification: "Elemento eliminado con éxito",
    removeAllSuccessNotification: "Elementos eliminados con éxito"
  },
  pt: {
    pageAction: "Novo",
    pageActionRemoveAll: "Excluir",
    tableActionView: "Visualizar",
    tableActionEdit: "Editar",
    tableActionDuplicate: "Duplicar",
    tableActionDelete: "Excluir",
    confirmRemoveTitle: "Confirmar exclusão",
    confirmRemoveMessage: "Tem certeza de que deseja excluir esse registro? Você não poderá desfazer essa ação.",
    confirmRemoveAllTitle: "Confirmar exclusão em lote",
    confirmRemoveAllMessage: "Tem certeza de que deseja excluir todos esses registros? Você não poderá desfazer essa ação.",
    loadDataErrorNotification: "Serviço não informado.",
    removeSuccessNotification: "Item excluido com sucesso",
    removeAllSuccessNotification: "Items excluidos com sucesso"
  },
  ru: {
    pageAction: "Новый",
    pageActionRemoveAll: "Удалить",
    tableActionView: "Просмотр",
    tableActionEdit: "Редактировать",
    tableActionDuplicate: "Дублировать",
    tableActionDelete: "Удалить",
    confirmRemoveTitle: "Подтверждение удаления",
    confirmRemoveMessage: "Вы уверены, что хотите удалить эту запись?  Вы не можете отменить это действие.",
    confirmRemoveAllTitle: "Подтвердите удаление пакета",
    confirmRemoveAllMessage: "Вы уверены, что хотите удалить все эти записи? Вы не можете отменить это действие.",
    loadDataErrorNotification: "Сервис не найден",
    removeSuccessNotification: "Элемент успешно удален",
    removeAllSuccessNotification: "Элементы успешно удалены"
  }
};
var PoPageDynamicTableActionsService = class _PoPageDynamicTableActionsService {
  http;
  headers = new HttpHeaders({
    "X-PO-SCREEN-LOCK": "true"
  });
  constructor(http) {
    this.http = http;
  }
  beforeDuplicate(action, id, body) {
    const resource = body ?? {};
    return this.executeAction({
      action,
      resource,
      id
    });
  }
  beforeEdit(action, id, body) {
    const resource = body ?? {};
    return this.executeAction({
      action,
      resource,
      id
    });
  }
  beforeNew(action) {
    return this.executeAction({
      action
    });
  }
  beforeRemove(action, id, resource) {
    return this.executeAction({
      action,
      id,
      resource
    });
  }
  beforeRemoveAll(action, resources) {
    return this.executeAction({
      action,
      resource: resources
    });
  }
  beforeDetail(action, id, resource) {
    return this.executeAction({
      action,
      id,
      resource
    });
  }
  customAction(action, resource = []) {
    return this.executeAction({
      action,
      resource
    });
  }
  executeAction({
    action,
    resource = {},
    id
  }) {
    if (!action) {
      return of({});
    }
    if (typeof action === "string") {
      const url = id ? `${action}/${id}` : action;
      return this.http.post(url, resource, {
        headers: this.headers
      });
    }
    if (id) {
      return of(action(id, resource));
    }
    return of(action(resource));
  }
  static ɵfac = function PoPageDynamicTableActionsService_Factory(t) {
    return new (t || _PoPageDynamicTableActionsService)(ɵɵinject(HttpClient));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _PoPageDynamicTableActionsService,
    factory: _PoPageDynamicTableActionsService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageDynamicTableActionsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: HttpClient
  }], null);
})();
var PAGE_SIZE_DEFAULT = 10;
var PoPageDynamicTableComponent = class _PoPageDynamicTableComponent extends PoPageDynamicListBaseComponent {
  router;
  activatedRoute;
  poDialogService;
  poNotification;
  poPageDynamicService;
  poPageCustomizationService;
  poPageDynamicTableActionsService;
  /**
   * Função ou serviço que será executado na inicialização do componente.
   *
   * A propriedade aceita os seguintes tipos:
   * - `string`: *Endpoint* usado pelo componente para requisição via `POST`.
   * - `function`: Método que será executado.
   *
   * O retorno desta função deve ser do tipo `PoPageDynamicTableOptions`,
   * onde o usuário poderá customizar novos campos, breadcrumb, title e actions
   *
   * Por exemplo:
   *
   * ```
   * getPageOptions(): PoPageDynamicTableOptions {
   * return {
   *   actions:
   *     { new: 'new', edit: 'edit/:id', remove: true },
   *   fields: [
   *     { property: 'idCard', gridColumns: 6 }
   *   ]
   * };
   * }
   *
   * ```
   * Para referenciar a sua função utilize a propriedade `bind`, por exemplo:
   * ```
   *  [p-load]="onLoadOptions.bind(this)"
   * ```
   */
  onLoad;
  /**
   * @optional
   *
   * @description
   *
   * Mantém na modal de `Busca Avançada` os valores preenchidos do último filtro realizado pelo usuário.
   *
   * @default `false`
   */
  keepFilters = false;
  /**
   * @optional
   *
   * @description
   *
   * Define que a coluna de ações ficará no lado direito da tabela.
   *
   * @default `false`
   */
  actionRight = false;
  /**
   * @optional
   *
   * @description
   *
   * Permite a utilização da pesquisa rápida junto com a pesquisa avançada.
   *
   * Desta forma, ao ter uma pesquisa avançada estabelecida e ser
   * preenchido a pesquisa rápida, o filtro será concatenado adicionando a pesquisa
   * rápida também na lista de `disclaimers` a aplicando uma nova busca com a concatenação.
   *
   * Por exemplo, com os seguintes filtros aplicados:
   *   - filtro avançado: `{ name: 'Mike', age: '12' }`
   *   - filtro rápido: `{ search: 'paper' }`
   *
   * A requisição dos dados na API ficará com os parâmetros:
   * ```
   * page=1&pageSize=10&name=Mike&age=12&search=paper
   * ```
   *
   * @default `false`
   */
  concatFilters = false;
  /**
   * @optional
   *
   * @description
   *
   * Permite que o gerenciador de colunas, responsável pela definição de quais colunas serão exibidas, seja escondido.
   *
   * @default `false`
   */
  hideColumnsManager = false;
  /**
   * @optional
   *
   * @description
   *
   * Oculta o botão para remover todos os *disclaimers* do grupo.
   *
   * > Por padrão, o mesmo é exibido à partir de dois ou mais *disclaimers* com a opção `hideClose` habilitada.
   *
   * @default `false`
   */
  hideRemoveAllDisclaimer = false;
  /**
   * @optional
   *
   * @description
   *
   * Se verdadeiro, ativa a funcionalidade de scroll infinito para a tabela e o botão "Carregar Mais" deixará de ser exibido. Ao chegar no fim da tabela
   * executará a função `p-show-more`.
   *
   * **Regras de utilização:**
   *  - O scroll infinito só funciona para tabelas que utilizam a propriedade `p-height` e que possuem o scroll já na carga inicial dos dados.
   *
   * @default `false`
   */
  infiniteScroll = false;
  hasNext = false;
  items = [];
  literals;
  pageActions = [];
  tableActions = [];
  _actions = {};
  _pageCustomActions = [];
  _height;
  _oldQuickSearchParam;
  _quickSearchParam = "search";
  _quickSearchValue;
  _quickSearchWidth;
  _tableCustomActions = [];
  page = 1;
  currentPage = 1;
  itemSelectedAction;
  params = {};
  sortedColumn;
  subscriptions = new Subscription();
  hasCustomActionWithSelectable = false;
  _customPageListActions = [];
  _customTableActions = [];
  _defaultPageActions = [];
  _defaultTableActions = [];
  _hideCloseDisclaimers = [];
  _draggable = false;
  _spacing = PoTableColumnSpacing.Medium;
  set defaultPageActions(value) {
    this._defaultPageActions = value;
    this.updatePageActions();
  }
  set defaultTableActions(value) {
    this._defaultTableActions = value;
    this.updateTableActions();
  }
  set customPageListActions(value) {
    this._customPageListActions = value;
    this.updatePageActions();
  }
  set customTableActions(value) {
    this._customTableActions = value;
    this.updateTableActions();
  }
  /**
   * @optional
   *
   * @description
   *
   * Ações da página e da tabela.
   * > Caso utilizar a ação padrão de excluir, a mesma será exibida por último na tabela.
   */
  set actions(value) {
    this._actions = value && typeof value === "object" && Object.keys(value).length > 0 ? value : {};
    this.setPageActions(this.actions);
    this.setRemoveAllAction();
    this.setTableActions(this.actions);
  }
  get actions() {
    return this._actions;
  }
  /**
   * @optional
   *
   * @description
   *
   * Lista de ações customizadas da página que serão incorporadas às ações
   * informadas através da propriedade `p-actions`.
   *
   * Essas ações ficam localizadas na parte superior da página em botões com ações.
   *
   * Exemplo de utilização:
   * ```
   * [
   *  { label: 'Export', action: this.export.bind(this) },
   *  { label: 'Print', action: this.print.bind(this) }
   * ];
   * ```
   */
  set pageCustomActions(value) {
    this._pageCustomActions = Array.isArray(value) ? value : [];
    this.customPageListActions = this.transformCustomActionsToPageListAction(this.pageCustomActions);
    this.hasCustomActionWithSelectable = this.pageCustomActions.some((customAction) => customAction.selectable);
  }
  get pageCustomActions() {
    return this._pageCustomActions;
  }
  /**
   * @optional
   *
   * @description
   *
   * Lista de ações customizadas na tabela da página que serão incorporadas às ações
   * informadas através da propriedade `p-actions`.
   *
   * Exemplo de utilização:
   * ```
   * [
   *  { label: 'Apply discount', action: this.applyDiscount.bind(this) },
   *  { label: 'Details', action: this.details.bind(this) }
   * ];
   * ```
   * > Caso utilizar a ação padrão de excluir, a mesma será exibida por último na tabela.
   */
  set tableCustomActions(value) {
    this._tableCustomActions = Array.isArray(value) ? value : [];
    this.customTableActions = this.transformTableCustomActionsToTableActions(this.tableCustomActions);
  }
  get tableCustomActions() {
    return this._tableCustomActions;
  }
  /**
   * @optional
   *
   * @description
   *
   * Largura do campo de busca, utilizando o *Grid System*,
   * e limitado ao máximo de 6 colunas. O tamanho mínimo é controlado
   * conforme resolução de tela para manter a consistência do layout.
   */
  set quickSearchWidth(value) {
    this._quickSearchWidth = convertToInt(value);
  }
  get quickSearchWidth() {
    return this._quickSearchWidth;
  }
  /**
   * @optional
   *
   * @description
   *
   * Define a altura da tabela em *pixels* e fixa o cabeçalho.
   */
  set height(value) {
    this._height = convertToInt(value);
  }
  get height() {
    return this._height;
  }
  /**
   * @optional
   *
   * @description
   *
   * Lista de filtros que terão a opção de fechar ocultada
   * em seu respectivo disclaimer. Utilizar o atributo `property` do campo.
   *
   * Exemplo de utilização:
   * ```
   * ['city','name'];
   * ```
   */
  set hideCloseDisclaimers(value) {
    this._hideCloseDisclaimers = Array.isArray(value) ? value : [];
  }
  get hideCloseDisclaimers() {
    return this._hideCloseDisclaimers;
  }
  /**
   * @optional
   *
   * @description
   *
   * Identificador do parâmetro enviado ao serviço ao realizar uma busca rápida.
   *
   * @default 'search'
   */
  set quickSearchParam(value) {
    this._quickSearchParam = value ?? "search";
  }
  get quickSearchParam() {
    return this._quickSearchParam;
  }
  /**
   * @optional
   *
   * @description
   *
   * Valor padrão na busca rápida ao inicializar o componente
   *
   */
  set quickSearchValue(value) {
    this._quickSearchValue = value;
  }
  get quickSearchValue() {
    return this._quickSearchValue;
  }
  /**
   * @optional
   *
   * @description
   *
   * Objeto com as literais usadas no `po-page-dynamic-table`.
   *
   * Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:
   *
   * ```
   *  const customLiterals: PoPageDynamicSearchLiterals = {
   *    disclaimerGroupTitle: 'Filtros aplicados:',
   *    filterTitle: 'Filtro avançado',
   *    filterCancelLabel: 'Fechar',
   *    filterConfirmLabel: 'Aplicar',
   *    quickSearchLabel: 'Valor pesquisado:',
   *    searchPlaceholder: 'Pesquise aqui'
   *  };
   * ```
   *
   * Ou passando apenas as literais que deseja customizar:
   *
   * ```
   *  const customLiterals: PoPageDynamicSearchLiterals = {
   *    filterTitle: 'Filtro avançado'
   *  };
   * ```
   *
   * E para carregar as literais customizadas, basta apenas passar o objeto para o componente.
   *
   * ```
   * <po-page-dynamic-table
   *   [p-literals]="customLiterals">
   * </po-page-dynamic-table>
   * ```
   *
   * > O valor padrão será traduzido de acordo com o idioma configurado no [`PoI18nService`](/documentation/po-i18n) ou *browser*.
   */
  searchLiterals;
  /**
   * @optional
   *
   * @description
   *
   * Responsável por aplicar espaçamento nas colunas.
   *
   * Deve receber um dos valores do enum `PoTableColumnSpacing`.
   *
   * @default `medium`
   */
  set spacing(value) {
    if (value === "small" || value === "medium" || value === "large") {
      this._spacing = value;
    } else {
      this._spacing = PoTableColumnSpacing.Medium;
    }
  }
  get spacing() {
    return this._spacing;
  }
  /**
   * @optional
   *
   * @description
   *
   * Habilita ou desabilita a quebra automática de texto. Quando ativada, o texto que excede
   * o espaço disponível é transferido para a próxima linha em pontos apropriados para uma
   * leitura clara.
   *
   * @default `false`
   */
  textWrap = false;
  /**
   * @optional
   *
   * @description
   *
   * Habilita o modo drag and drop para as colunas da tabela.
   *
   */
  set draggable(value) {
    this._draggable = value;
  }
  get draggable() {
    return this._draggable;
  }
  constructor(router, activatedRoute, poDialogService, poNotification, poPageDynamicService, poPageCustomizationService, poPageDynamicTableActionsService, languageService) {
    super();
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.poDialogService = poDialogService;
    this.poNotification = poNotification;
    this.poPageDynamicService = poPageDynamicService;
    this.poPageCustomizationService = poPageCustomizationService;
    this.poPageDynamicTableActionsService = poPageDynamicTableActionsService;
    const language = languageService.getShortLanguage();
    this.literals = __spreadValues(__spreadValues({}, poPageDynamicTableLiteralsDefault[poLocaleDefault]), poPageDynamicTableLiteralsDefault[language]);
  }
  ngOnInit() {
    this.loadDataFromAPI();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  onAdvancedSearch(filter) {
    this.subscriptions.add(this.loadData(__spreadValues({
      page: 1
    }, filter)).subscribe());
    this.params = filter;
    if (this.keepFilters) {
      this.updateFilterValue(filter);
    }
  }
  onChangeDisclaimers(disclaimers) {
    const filter = {};
    disclaimers.forEach((disclaimer) => {
      filter[disclaimer.property] = disclaimer.value;
    });
    this.onAdvancedSearch(filter);
  }
  onQuickSearch(termTypedInQuickSearch) {
    const quickSearchParam = termTypedInQuickSearch ? {
      [this.quickSearchParam]: termTypedInQuickSearch
    } : {};
    this.params = this.concatFilters ? __spreadValues(__spreadValues({}, this.params), quickSearchParam) : __spreadValues({}, quickSearchParam);
    if (this._oldQuickSearchParam in this.params && this._oldQuickSearchParam !== this.quickSearchParam) {
      delete this.params[this._oldQuickSearchParam];
    }
    this._oldQuickSearchParam = this.quickSearchParam;
    this.subscriptions.add(this.loadData(termTypedInQuickSearch ? __spreadValues({
      page: 1
    }, this.params) : void 0).subscribe());
  }
  onSort(sortedColumn) {
    if (this.height) {
      const order = sortedColumn.type === "ascending" ? true : false;
      sortArrayOfObjects(this.items, sortedColumn.column.property, order);
    }
    this.sortedColumn = sortedColumn;
  }
  onChangeVisibleColumns(value) {
    this.changeVisibleColumns.emit(value);
  }
  onColumnRestoreManager(value) {
    this.columnRestoreManager.emit(value);
  }
  onSortBy(sortedColumn) {
    this.sortBy.emit(sortedColumn);
  }
  showMore() {
    this.subscriptions.add(this.loadData(__spreadValues({
      page: ++this.page
    }, this.params)).subscribe());
  }
  get enableSelectionTable() {
    return this.hasActionRemoveAll || this.hasCustomActionWithSelectable;
  }
  get hasActionRemoveAll() {
    return !!this.actions.removeAll;
  }
  /**
   * Função que realiza a atualização dos dados da tabela.
   *
   * Para utilizá-la é necessário capturar a instância do `page dynamic table`, como por exemplo:
   *
   * ``` html
   * <po-page-dynamic-table #dynamicTable [p-service-api]="serviceApi"></po-page-dynamic-table>
   * ```
   *
   * ``` javascript
   * import { PoPageDynamicTableComponent, PoDynamicFormField } from '@po-ui/ng-components';
   *
   * ...
   *
   * @ViewChild('dynamicTable', { static: true }) dynamicTable: PoPageDynamicTableComponent;
   *
   * pageCustomActions: Array<PoPageDynamicTableCustomAction> = [
   * {
   *   label: 'Update',
   *   action: this.updateTable.bind(this),
   *   icon: 'ph-arrows-clockwise'
   * }]
   *
   * updateTable() {
   *   this.dynamicTable.updateDataTable();
   * }
   * ```
   *
   *
   * @param {{page: number, key: value }} filter Propriedade para envio de um filtro customizado.
   * Exemplo de envio:
   *
   *```
   * this.dynamicTable.updateDataTable({page: 3, search: 'Brasil'});
   * ```
   * Caso não seja passado um filtro customizado para o método `updateDataTable` a tabela será atualizada conforme a página do ultimo item modificado.
   */
  updateDataTable(filter) {
    const indexItemSelected = this.items.findIndex((item) => item === this.itemSelectedAction);
    const pageNumber = Math.floor(indexItemSelected / PAGE_SIZE_DEFAULT);
    this.currentPage = pageNumber < 0 ? this.currentPage : pageNumber + 1;
    if (this.currentPage === void 0) {
      this.currentPage = 1;
    }
    if (filter) {
      this.subscriptions.add(this.loadData(filter).subscribe());
    } else {
      this.subscriptions.add(this.loadData(__spreadValues({
        page: this.currentPage
      }, this.params)).subscribe());
    }
  }
  confirmRemove(actionRemove, actionBeforeRemove, item) {
    const confirmOptions = {
      title: this.literals.confirmRemoveTitle,
      message: this.literals.confirmRemoveMessage,
      confirm: this.remove.bind(this, item, actionRemove, actionBeforeRemove)
    };
    this.poDialogService.confirm(confirmOptions);
  }
  confirmRemoveAll(actionRemoveAll, actionBeforeRemoveAll) {
    const confirmOptions = {
      title: this.literals.confirmRemoveAllTitle,
      message: this.literals.confirmRemoveAllMessage,
      confirm: this.removeAll.bind(this, actionRemoveAll, actionBeforeRemoveAll)
    };
    this.poDialogService.confirm(confirmOptions);
  }
  formatUniqueKey(item) {
    const keys = mapObjectByProperties(item, this.keys);
    return valuesFromObject(keys).join("|");
  }
  getOrderParam(sortedColumn = {
    type: void 0
  }) {
    const {
      column,
      type
    } = sortedColumn;
    if (!column) {
      return {};
    }
    if (type === PoTableColumnSortType.Descending) {
      return {
        order: `-${column.property}`
      };
    }
    return {
      order: `${column.property}`
    };
  }
  loadData(params = {}) {
    if (!this.serviceApi) {
      this.poNotification.error(this.literals.loadDataErrorNotification);
      return EMPTY;
    }
    const orderParam = this.getOrderParam(this.sortedColumn);
    const defaultParams = {
      page: 1,
      pageSize: PAGE_SIZE_DEFAULT
    };
    const fullParams = __spreadValues(__spreadValues(__spreadValues({}, defaultParams), params), orderParam);
    return this.poPageDynamicService.getResources(fullParams).pipe(tap((response) => {
      let newArray;
      if (fullParams.page === 1) {
        newArray = removeDuplicateItemsWithArrayKey(response.items, response.items, this.keys);
      } else {
        newArray = removeDuplicateItemsWithArrayKey(this.items, response.items, this.keys);
      }
      this.items = newArray ? [...newArray] : this.items;
      this.page = fullParams.page;
      this.hasNext = response.hasNext;
    }));
  }
  getMetadata(serviceApiFromRoute, onLoad) {
    if (serviceApiFromRoute) {
      return this.poPageDynamicService.getMetadata().pipe(tap((response) => {
        this.autoRouter = response.autoRouter || this.autoRouter;
        this.actions = response.actions || this.actions;
        this.breadcrumb = response.breadcrumb || this.breadcrumb;
        this.fields = response.fields || this.fields;
        this.title = response.title || this.title;
        this.pageCustomActions = response.pageCustomActions || this.pageCustomActions;
        this.tableCustomActions = response.tableCustomActions || this.tableCustomActions;
        this.keepFilters = response.keepFilters || this.keepFilters;
        this.concatFilters = response.concatFilters || this.concatFilters;
        this.hideRemoveAllDisclaimer = response.hideRemoveAllDisclaimer || this.hideRemoveAllDisclaimer;
        this.hideCloseDisclaimers = response.hideCloseDisclaimers || this.hideCloseDisclaimers;
        this.quickSearchWidth = response.quickSearchWidth || this.quickSearchWidth;
      }), switchMap(() => this.loadOptionsOnInitialize(onLoad)));
    }
    return this.loadOptionsOnInitialize(onLoad);
  }
  // @todo Validar rotas na mão pois se existir uma rota '**' o catch do navigation não funciona.
  navigateTo(route, forceStopAutoRouter = false) {
    this.router.navigate([route.url || route.path], {
      queryParams: route.params
    }).catch(() => {
      if (forceStopAutoRouter || !this.autoRouter) {
        return;
      }
      this.router.config.unshift({
        path: route.path,
        component: route.component,
        data: {
          serviceApi: this.serviceApi,
          autoRouter: true
        }
      });
      this.navigateTo(route, true);
    });
  }
  createConcatenatedUrl(concatKeys, url, selectedItem) {
    const keys = this.keys.map((key) => encodeURIComponent(selectedItem[key])).join();
    return concatKeys ? `${url}/${keys}` : url;
  }
  openDetail(action, item) {
    const id = this.formatUniqueKey(item);
    this.subscriptions.add(this.poPageDynamicTableActionsService.beforeDetail(this.actions.beforeDetail, id, item).subscribe((beforeDetailResult) => this.executeDetail(action, beforeDetailResult, id, item)));
  }
  executeDetail(action, beforeDetailResult, id, item) {
    const before = beforeDetailResult ?? {};
    const allowAction = typeof before.allowAction === "boolean" ? before.allowAction : true;
    const {
      newUrl
    } = before;
    if (allowAction && action) {
      if (newUrl) {
        const path = this.getPathFromNewUrl(newUrl, id);
        return this.navigateTo({
          path
        });
      }
      if (typeof action === "string") {
        const url = this.resolveUrl(item, action);
        this.navigateTo({
          path: action,
          url,
          component: PoPageDynamicDetailComponent
        });
      } else {
        action(id, item);
      }
    }
  }
  getPathFromNewUrl(newUrl, id) {
    if (newUrl.includes(":id")) {
      return newUrl.replace(/:id/g, id);
    }
    return newUrl;
  }
  openDuplicate(actionDuplicate, item) {
    const id = this.formatUniqueKey(item);
    const duplicates = removeKeysProperties(this.keys, mapObjectByProperties(item, this.duplicates));
    this.subscriptions.add(this.poPageDynamicTableActionsService.beforeDuplicate(this.actions.beforeDuplicate, id, duplicates).subscribe((beforeDuplicateResult) => this.executeDuplicate(actionDuplicate, beforeDuplicateResult, duplicates)));
  }
  executeDuplicate(actionDuplicate, beforeDuplicateResult, duplicates) {
    const before = beforeDuplicateResult ?? {};
    const allowAction = typeof before.allowAction === "boolean" ? before.allowAction : true;
    const beforeDuplicateResource = before.resource;
    const newAction = before.newUrl ?? actionDuplicate;
    if (allowAction && actionDuplicate) {
      if (typeof beforeDuplicateResource === "object" && beforeDuplicateResource !== null) {
        duplicates = removeKeysProperties(this.keys, beforeDuplicateResource);
      }
      if (typeof newAction === "string") {
        return this.navigateTo({
          path: newAction,
          params: {
            duplicate: JSON.stringify(duplicates)
          }
        });
      }
      return newAction(duplicates);
    }
  }
  openEdit(actionEdit, item) {
    const id = this.formatUniqueKey(item);
    this.subscriptions.add(this.poPageDynamicTableActionsService.beforeEdit(this.actions.beforeEdit, id, item).pipe(switchMap((beforeEditResult) => this.executeEditAction(actionEdit, beforeEditResult, item, id))).subscribe());
  }
  executeEditAction(action, beforeEditResult, item, id) {
    const newEditAction = beforeEditResult?.newUrl ?? action;
    const allowAction = beforeEditResult?.allowAction ?? true;
    if (!allowAction) {
      return EMPTY;
    }
    if (typeof newEditAction === "string") {
      this.openEditUrl(newEditAction, item);
    } else {
      const updatedItem = newEditAction(id, item);
      if (typeof updatedItem === "object" && updatedItem !== null) {
        this.modifyUITableItem(item, removeKeysProperties(this.keys, updatedItem));
      }
    }
    return EMPTY;
  }
  openEditUrl(path, item) {
    const url = this.resolveUrl(item, path);
    this.navigateTo({
      path,
      url
    });
  }
  modifyUITableItem(currentItem, newItemValue) {
    const tableItem = this.items.findIndex((item) => item === currentItem);
    this.items[tableItem] = __spreadValues(__spreadValues({}, currentItem), newItemValue);
  }
  openNew(actionNew) {
    this.subscriptions.add(this.poPageDynamicTableActionsService.beforeNew(this.actions.beforeNew).subscribe((beforeNewResult) => this.executeNew(actionNew, beforeNewResult)));
  }
  executeNew(actionNew, beforeNewResult) {
    const before = beforeNewResult ?? {};
    const allowAction = typeof before.allowAction === "boolean" ? before.allowAction : true;
    const {
      newUrl
    } = before;
    if (allowAction && actionNew) {
      if (newUrl) {
        return this.navigateTo({
          path: newUrl
        });
      }
      if (typeof actionNew === "string") {
        return this.navigateTo({
          path: actionNew
        });
      }
      return actionNew();
    }
  }
  /**
   * Caso exista mais de um identificador, será concatenado com '|'.
   *
   * Ex: { id: 1, company: 'po' }
   *
   * Para o endpoint /resources/:id será executada a url /resources/1|po
   */
  remove(item, actionRemove, actionBeforeRemove) {
    const uniqueKey = this.formatUniqueKey(item);
    this.subscriptions.add(this.poPageDynamicTableActionsService.beforeRemove(actionBeforeRemove, uniqueKey, item).pipe(switchMap((beforeRemove) => this.deleteAction(item, actionRemove, beforeRemove))).subscribe());
  }
  deleteAction(item, actionRemove, beforeRemove) {
    const {
      allowAction,
      newUrl
    } = beforeRemove || {};
    const allow = allowAction ?? true;
    if (allow) {
      let uniqueKey = this.formatUniqueKey(item);
      const resourceToRemoveKey = this.returnResourcesKeys([item]);
      if (typeof actionRemove === "boolean" || newUrl) {
        uniqueKey = newUrl ? void 0 : uniqueKey;
        return this.poPageDynamicService.deleteResource(uniqueKey, newUrl).pipe(map(() => this.removeFromUI(resourceToRemoveKey, this.literals.removeSuccessNotification)));
      }
      return of(actionRemove(uniqueKey, item)).pipe(tap((remove) => {
        const removeItem = remove ?? false;
        this.removeFromUI(resourceToRemoveKey, this.literals.removeSuccessNotification, removeItem);
      }));
    }
    return of({});
  }
  removeFromUI(items, message, remove = true) {
    if (remove === true && items?.length) {
      this.removeLocalItems(items);
      this.poNotification.success(message);
    }
  }
  removeAll(actionRemoveAll, actionBeforeRemoveAll) {
    const originalResourcesKeys = this.getSelectedItemsKeys();
    this.subscriptions.add(this.poPageDynamicTableActionsService.beforeRemoveAll(actionBeforeRemoveAll, originalResourcesKeys).pipe(switchMap((beforeRemove) => this.deleteAllAction(actionRemoveAll, beforeRemove, originalResourcesKeys))).subscribe());
  }
  getSelectedItemsKeys() {
    const resources = this.items.filter((item) => item.$selected);
    if (resources.length === 0) {
      return;
    }
    return this.returnResourcesKeys(resources);
  }
  returnResourcesKeys(resources) {
    return mapArrayByProperties(resources, this.keys);
  }
  deleteAllAction(actionRemoveAll, beforeRemoveAll, originalResources) {
    const {
      allowAction,
      newUrl,
      resources
    } = beforeRemoveAll ?? {};
    const allow = allowAction ?? true;
    const resourcestoDelete = resources ?? originalResources;
    if (allow && Array.isArray(resourcestoDelete)) {
      if (typeof actionRemoveAll === "boolean" || newUrl) {
        return this.poPageDynamicService.deleteResources(resourcestoDelete, newUrl).pipe(tap(() => {
          this.removeFromUI(resourcestoDelete, this.literals.removeAllSuccessNotification);
        }));
      }
      return of(actionRemoveAll(resourcestoDelete)).pipe(tap((removeItems) => this.removeFromUI(removeItems, this.literals.removeSuccessNotification)));
    }
    return of({});
  }
  removeLocalItems(itemsKeysToRemove = []) {
    if (itemsKeysToRemove.length) {
      this.items = this.items.filter((item) => {
        const itemKey = this.formatUniqueKey(item);
        return !itemsKeysToRemove.find((itemKeyToRemove) => valuesFromObject(itemKeyToRemove).join("|") === itemKey);
      });
    }
  }
  resolveUrl(item, path) {
    const uniqueKey = this.formatUniqueKey(item);
    return path.replace(/:id/g, uniqueKey);
  }
  setPageActions(actions) {
    if (actions?.new) {
      this.defaultPageActions = [{
        label: this.literals.pageAction,
        action: this.openNew.bind(this, actions.new)
      }];
    }
  }
  transformCustomActionsToPageListAction(customActions) {
    return customActions.map((customAction) => __spreadProps(__spreadValues({
      label: customAction.label,
      action: this.callPageCustomAction.bind(this, customAction),
      disabled: this.isDisablePageCustomAction.bind(this, customAction)
    }, customAction.icon && {
      icon: customAction.icon
    }), {
      visible: customAction.visible
    }));
  }
  transformTableCustomActionsToTableActions(tableCustomActions) {
    return tableCustomActions.map((tableCustomAction) => ({
      label: tableCustomAction.label,
      icon: tableCustomAction.icon,
      action: this.callTableCustomAction.bind(this, tableCustomAction),
      disabled: tableCustomAction.disabled,
      visible: tableCustomAction.visible
    }));
  }
  isDisablePageCustomAction(customAction) {
    return customAction.selectable && !this.getSelectedItemsKeys();
  }
  callPageCustomAction(customAction) {
    if (customAction.action) {
      const selectedItems = customAction.selectable ? this.getSelectedItemsKeys() : void 0;
      const sendCustomActionSubscription = this.poPageDynamicTableActionsService.customAction(customAction.action, selectedItems).subscribe();
      this.subscriptions.add(sendCustomActionSubscription);
    } else if (customAction.url) {
      this.navigateTo({
        path: customAction.url
      });
    }
  }
  callTableCustomAction(customAction, selectedItem) {
    this.itemSelectedAction = selectedItem;
    if (customAction.action) {
      const sendCustomActionSubscription = this.poPageDynamicTableActionsService.customAction(customAction.action, selectedItem).subscribe((updatedItem) => {
        if (typeof updatedItem === "object" && updatedItem !== null) {
          this.modifyUITableItem(selectedItem, removeKeysProperties(this.keys, updatedItem));
        }
      });
      this.subscriptions.add(sendCustomActionSubscription);
    } else if (customAction.url) {
      if (isExternalLink(customAction.url)) {
        openExternalLink(this.createConcatenatedUrl(customAction.concatKeys, customAction.url, selectedItem));
      } else {
        this.navigateTo({
          path: this.createConcatenatedUrl(customAction.concatKeys, customAction.url, selectedItem)
        });
      }
    }
  }
  setRemoveAllAction() {
    const action = this._actions;
    if (this.showRemove(action.removeAll)) {
      this.defaultPageActions = [...this._defaultPageActions, {
        label: this.literals.pageActionRemoveAll,
        action: this.confirmRemoveAll.bind(this, action.removeAll, action.beforeRemoveAll),
        disabled: this.disableRemoveAll.bind(this),
        type: "danger"
      }];
    }
  }
  disableRemoveAll() {
    return !this.getSelectedItemsKeys();
  }
  setTableActions(actions) {
    if (actions) {
      const visibleRemove = this.showRemove(actions.remove);
      this.defaultTableActions = [{
        action: this.openDetail.bind(this, actions.detail),
        label: this.literals.tableActionView,
        visible: !!this._actions.detail
      }, {
        action: this.openEdit.bind(this, actions.edit),
        label: this.literals.tableActionEdit,
        visible: !!this._actions.edit
      }, {
        action: this.openDuplicate.bind(this, actions.duplicate),
        label: this.literals.tableActionDuplicate,
        visible: !!this._actions.duplicate
      }, {
        action: this.confirmRemove.bind(this, actions.remove, actions.beforeRemove),
        label: this.literals.tableActionDelete,
        separator: true,
        type: "danger",
        visible: visibleRemove
      }];
    }
  }
  loadDataFromAPI() {
    const {
      serviceApi: serviceApiFromRoute,
      serviceMetadataApi,
      serviceLoadApi
    } = this.activatedRoute.snapshot.data;
    const onLoad = serviceLoadApi || this.onLoad;
    this.serviceApi = serviceApiFromRoute || this.serviceApi;
    this.poPageDynamicService.configServiceApi({
      endpoint: this.serviceApi,
      metadata: serviceMetadataApi
    });
    const metadata$ = this.getMetadata(serviceApiFromRoute, onLoad);
    let data$;
    if (this.quickSearchValue) {
      const paramsQuickSearchValue = {
        [this.quickSearchParam]: this.quickSearchValue
      };
      data$ = this.loadData(paramsQuickSearchValue);
    } else {
      data$ = this.loadData();
    }
    this.subscriptions.add(metadata$.pipe(switchMap(() => {
      const initialFilters = this.getInitialValuesFromFilter();
      if (!Object.keys(initialFilters).length) {
        return data$;
      }
      return EMPTY;
    })).subscribe());
  }
  getInitialValuesFromFilter() {
    const initialFilters = this.filters.reduce((result, item) => Object.assign(result, {
      [item.property]: item.initValue
    }), {});
    Object.keys(initialFilters).forEach((key) => {
      if (!initialFilters[key]) {
        delete initialFilters[key];
      }
    });
    return initialFilters;
  }
  loadOptionsOnInitialize(onLoad) {
    if (onLoad) {
      return this.getPoDynamicPageOptions(onLoad).pipe(tap((responsePoOption) => this.poPageCustomizationService.changeOriginalOptionsToNewOptions(this, responsePoOption)));
    }
    return of(null);
  }
  getPoDynamicPageOptions(onLoad) {
    const originalOption = {
      fields: this.fields,
      actions: this.actions,
      breadcrumb: this.breadcrumb,
      title: this.title,
      keepFilters: this.keepFilters,
      concatFilters: this.concatFilters,
      hideRemoveAllDisclaimer: this.hideRemoveAllDisclaimer,
      hideCloseDisclaimers: this.hideCloseDisclaimers,
      pageCustomActions: this.pageCustomActions,
      tableCustomActions: this.tableCustomActions,
      quickSearchWidth: this.quickSearchWidth
    };
    const pageOptionSchema = {
      schema: [{
        nameProp: "fields",
        merge: true,
        keyForMerge: "property"
      }, {
        nameProp: "actions",
        merge: true
      }, {
        nameProp: "breadcrumb"
      }, {
        nameProp: "title"
      }, {
        nameProp: "keepFilters"
      }, {
        nameProp: "quickSearchWidth"
      }, {
        nameProp: "concatFilters"
      }, {
        nameProp: "hideRemoveAllDisclaimer"
      }, {
        nameProp: "hideCloseDisclaimers"
      }, {
        nameProp: "pageCustomActions",
        merge: true,
        keyForMerge: "label"
      }, {
        nameProp: "tableCustomActions",
        merge: true,
        keyForMerge: "label"
      }]
    };
    return this.poPageCustomizationService.getCustomOptions(onLoad, originalOption, pageOptionSchema);
  }
  showRemove(actionRemove) {
    const action = actionRemove ?? false;
    if (typeof action === "boolean") {
      return action;
    }
    return true;
  }
  updateFilterValue(filter) {
    return this.fields.map((item) => {
      if (filter.hasOwnProperty(item.property)) {
        item.initValue = filter[item.property];
      }
    });
  }
  updatePageActions() {
    this.pageActions = [...this._defaultPageActions, ...this._customPageListActions];
  }
  updateTableActions() {
    const defaultTableActionsWithoutActionDelete = this._defaultTableActions.filter((tableAction) => tableAction.label !== this.literals.tableActionDelete);
    const tableActionDelete = this._defaultTableActions.find((tableAction) => tableAction.label === this.literals.tableActionDelete);
    const newTableActions = [...defaultTableActionsWithoutActionDelete, ...this._customTableActions];
    if (tableActionDelete) {
      newTableActions.push(tableActionDelete);
    }
    this.tableActions = newTableActions;
  }
  static ɵfac = function PoPageDynamicTableComponent_Factory(t) {
    return new (t || _PoPageDynamicTableComponent)(ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(PoDialogService), ɵɵdirectiveInject(PoNotificationService), ɵɵdirectiveInject(PoPageDynamicService), ɵɵdirectiveInject(PoPageCustomizationService), ɵɵdirectiveInject(PoPageDynamicTableActionsService), ɵɵdirectiveInject(PoLanguageService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PoPageDynamicTableComponent,
    selectors: [["po-page-dynamic-table"]],
    inputs: {
      onLoad: [0, "p-load", "onLoad"],
      keepFilters: [2, "p-keep-filters", "keepFilters", convertToBoolean],
      actionRight: [2, "p-actions-right", "actionRight", convertToBoolean],
      concatFilters: [2, "p-concat-filters", "concatFilters", convertToBoolean],
      hideColumnsManager: [2, "p-hide-columns-manager", "hideColumnsManager", convertToBoolean],
      hideRemoveAllDisclaimer: [2, "p-hide-remove-all-disclaimer", "hideRemoveAllDisclaimer", convertToBoolean],
      infiniteScroll: [2, "p-infinite-scroll", "infiniteScroll", convertToBoolean],
      actions: [0, "p-actions", "actions"],
      pageCustomActions: [0, "p-page-custom-actions", "pageCustomActions"],
      tableCustomActions: [0, "p-table-custom-actions", "tableCustomActions"],
      quickSearchWidth: [0, "p-quick-search-width", "quickSearchWidth"],
      height: [0, "p-height", "height"],
      hideCloseDisclaimers: [0, "p-hide-close-disclaimers", "hideCloseDisclaimers"],
      quickSearchParam: [0, "p-quick-search-param", "quickSearchParam"],
      quickSearchValue: [0, "p-quick-search-value", "quickSearchValue"],
      searchLiterals: [0, "p-literals", "searchLiterals"],
      spacing: [0, "p-spacing", "spacing"],
      textWrap: [2, "p-text-wrap", "textWrap", convertToBoolean],
      draggable: [0, "p-draggable", "draggable"]
    },
    features: [ɵɵProvidersFeature([PoPageDynamicService]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature],
    decls: 2,
    vars: 24,
    consts: [[3, "p-advanced-search", "p-change-disclaimers", "p-quick-search", "p-actions", "p-breadcrumb", "p-hide-close-disclaimers", "p-filters", "p-keep-filters", "p-literals", "p-concat-filters", "p-hide-remove-all-disclaimer", "p-quick-search-width", "p-title", "p-quick-search-value"], [3, "p-show-more", "p-sort-by", "p-change-visible-columns", "p-restore-column-manager", "p-sort", "p-actions", "p-actions-right", "p-selectable", "p-columns", "p-items", "p-height", "p-hide-columns-manager", "p-infinite-scroll", "p-show-more-disabled", "p-text-wrap", "p-draggable", "p-spacing"]],
    template: function PoPageDynamicTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "po-page-dynamic-search", 0);
        ɵɵlistener("p-advanced-search", function PoPageDynamicTableComponent_Template_po_page_dynamic_search_p_advanced_search_0_listener($event) {
          return ctx.onAdvancedSearch($event);
        })("p-change-disclaimers", function PoPageDynamicTableComponent_Template_po_page_dynamic_search_p_change_disclaimers_0_listener($event) {
          return ctx.onChangeDisclaimers($event);
        })("p-quick-search", function PoPageDynamicTableComponent_Template_po_page_dynamic_search_p_quick_search_0_listener($event) {
          return ctx.onQuickSearch($event);
        });
        ɵɵelementStart(1, "po-table", 1);
        ɵɵlistener("p-show-more", function PoPageDynamicTableComponent_Template_po_table_p_show_more_1_listener() {
          return ctx.showMore();
        })("p-sort-by", function PoPageDynamicTableComponent_Template_po_table_p_sort_by_1_listener($event) {
          return ctx.onSort($event);
        })("p-change-visible-columns", function PoPageDynamicTableComponent_Template_po_table_p_change_visible_columns_1_listener($event) {
          return ctx.onChangeVisibleColumns($event);
        })("p-restore-column-manager", function PoPageDynamicTableComponent_Template_po_table_p_restore_column_manager_1_listener($event) {
          return ctx.onColumnRestoreManager($event);
        })("p-sort-by", function PoPageDynamicTableComponent_Template_po_table_p_sort_by_1_listener($event) {
          return ctx.onSortBy($event);
        });
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵproperty("p-actions", ctx.pageActions)("p-breadcrumb", ctx.breadcrumb)("p-hide-close-disclaimers", ctx.hideCloseDisclaimers)("p-filters", ctx.filters)("p-keep-filters", ctx.keepFilters)("p-literals", ctx.searchLiterals)("p-concat-filters", ctx.concatFilters)("p-hide-remove-all-disclaimer", ctx.hideRemoveAllDisclaimer)("p-quick-search-width", ctx.quickSearchWidth)("p-title", ctx.title)("p-quick-search-value", ctx.quickSearchValue || "");
        ɵɵadvance();
        ɵɵproperty("p-sort", true)("p-actions", ctx.tableActions)("p-actions-right", ctx.actionRight)("p-selectable", ctx.enableSelectionTable)("p-columns", ctx.columns)("p-items", ctx.items)("p-height", ctx.height)("p-hide-columns-manager", ctx.hideColumnsManager)("p-infinite-scroll", ctx.infiniteScroll)("p-show-more-disabled", !ctx.hasNext)("p-text-wrap", ctx.textWrap)("p-draggable", ctx.draggable)("p-spacing", ctx.spacing);
      }
    },
    dependencies: [PoTableComponent, PoPageDynamicSearchComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageDynamicTableComponent, [{
    type: Component,
    args: [{
      selector: "po-page-dynamic-table",
      providers: [PoPageDynamicService],
      template: `<po-page-dynamic-search
  [p-actions]="pageActions"
  [p-breadcrumb]="breadcrumb"
  [p-hide-close-disclaimers]="hideCloseDisclaimers"
  [p-filters]="filters"
  [p-keep-filters]="keepFilters"
  [p-literals]="searchLiterals"
  [p-concat-filters]="concatFilters"
  [p-hide-remove-all-disclaimer]="hideRemoveAllDisclaimer"
  [p-quick-search-width]="quickSearchWidth"
  [p-title]="title"
  (p-advanced-search)="onAdvancedSearch($event)"
  (p-change-disclaimers)="onChangeDisclaimers($event)"
  (p-quick-search)="onQuickSearch($event)"
  [p-quick-search-value]="quickSearchValue || ''"
>
  <po-table
    [p-sort]="true"
    [p-actions]="tableActions"
    [p-actions-right]="actionRight"
    [p-selectable]="enableSelectionTable"
    [p-columns]="columns"
    [p-items]="items"
    [p-height]="height"
    [p-hide-columns-manager]="hideColumnsManager"
    [p-infinite-scroll]="infiniteScroll"
    [p-show-more-disabled]="!hasNext"
    (p-show-more)="showMore()"
    (p-sort-by)="onSort($event)"
    (p-change-visible-columns)="onChangeVisibleColumns($event)"
    (p-restore-column-manager)="onColumnRestoreManager($event)"
    (p-sort-by)="onSortBy($event)"
    [p-text-wrap]="textWrap"
    [p-draggable]="draggable"
    [p-spacing]="spacing"
  >
  </po-table>
</po-page-dynamic-search>
`
    }]
  }], () => [{
    type: Router
  }, {
    type: ActivatedRoute
  }, {
    type: PoDialogService
  }, {
    type: PoNotificationService
  }, {
    type: PoPageDynamicService
  }, {
    type: PoPageCustomizationService
  }, {
    type: PoPageDynamicTableActionsService
  }, {
    type: PoLanguageService
  }], {
    onLoad: [{
      type: Input,
      args: ["p-load"]
    }],
    keepFilters: [{
      type: Input,
      args: [{
        alias: "p-keep-filters",
        transform: convertToBoolean
      }]
    }],
    actionRight: [{
      type: Input,
      args: [{
        alias: "p-actions-right",
        transform: convertToBoolean
      }]
    }],
    concatFilters: [{
      type: Input,
      args: [{
        alias: "p-concat-filters",
        transform: convertToBoolean
      }]
    }],
    hideColumnsManager: [{
      type: Input,
      args: [{
        alias: "p-hide-columns-manager",
        transform: convertToBoolean
      }]
    }],
    hideRemoveAllDisclaimer: [{
      type: Input,
      args: [{
        alias: "p-hide-remove-all-disclaimer",
        transform: convertToBoolean
      }]
    }],
    infiniteScroll: [{
      type: Input,
      args: [{
        alias: "p-infinite-scroll",
        transform: convertToBoolean
      }]
    }],
    actions: [{
      type: Input,
      args: ["p-actions"]
    }],
    pageCustomActions: [{
      type: Input,
      args: ["p-page-custom-actions"]
    }],
    tableCustomActions: [{
      type: Input,
      args: ["p-table-custom-actions"]
    }],
    quickSearchWidth: [{
      type: Input,
      args: ["p-quick-search-width"]
    }],
    height: [{
      type: Input,
      args: ["p-height"]
    }],
    hideCloseDisclaimers: [{
      type: Input,
      args: ["p-hide-close-disclaimers"]
    }],
    quickSearchParam: [{
      type: Input,
      args: ["p-quick-search-param"]
    }],
    quickSearchValue: [{
      type: Input,
      args: ["p-quick-search-value"]
    }],
    searchLiterals: [{
      type: Input,
      args: ["p-literals"]
    }],
    spacing: [{
      type: Input,
      args: ["p-spacing"]
    }],
    textWrap: [{
      type: Input,
      args: [{
        alias: "p-text-wrap",
        transform: convertToBoolean
      }]
    }],
    draggable: [{
      type: Input,
      args: ["p-draggable"]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(PoPageDynamicTableComponent, {
    className: "PoPageDynamicTableComponent",
    filePath: "lib/components/po-page-dynamic-table/po-page-dynamic-table.component.ts",
    lineNumber: 151
  });
})();
var PoPageDynamicTableModule = class _PoPageDynamicTableModule {
  static ɵfac = function PoPageDynamicTableModule_Factory(t) {
    return new (t || _PoPageDynamicTableModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _PoPageDynamicTableModule
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, FormsModule, RouterModule, PoTableModule, PoPageDynamicSearchModule, PoPageCustomizationModule, PoPageDynamicModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageDynamicTableModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, RouterModule, PoTableModule, PoPageDynamicSearchModule, PoPageCustomizationModule, PoPageDynamicModule],
      declarations: [PoPageDynamicTableComponent],
      exports: [PoPageDynamicTableComponent]
    }]
  }], null, null);
})();
(function() {
  (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PoPageDynamicTableModule, {
    declarations: [PoPageDynamicTableComponent],
    imports: [CommonModule, FormsModule, RouterModule, PoTableModule, PoPageDynamicSearchModule, PoPageCustomizationModule, PoPageDynamicModule],
    exports: [PoPageDynamicTableComponent]
  });
})();
var PoPageJobSchedulerInternal = class {
  periodicity = "single";
  firstExecution = /* @__PURE__ */ new Date();
  firstExecutionHour = this.getCurrentHour(this.firstExecution);
  recurrent = true;
  frequency = {};
  getCurrentHour(date) {
    const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    return `${hours}:${minutes}`;
  }
};
var PoPageJobSchedulerService = class _PoPageJobSchedulerService {
  http;
  headers = new HttpHeaders({
    "X-PO-SCREEN-LOCK": "true"
  });
  endpoint = "/";
  constructor(http) {
    this.http = http;
  }
  configServiceApi(config = {}) {
    this.endpoint = config.endpoint;
  }
  // Cria um recurso
  createResource(resource) {
    const newResouce = this.convertToJobScheduler(resource);
    return this.http.post(`${this.endpoint}`, newResouce, {
      headers: this.headers
    });
  }
  getHeadProcesses() {
    const headers = {
      "X-PO-No-Error": "true"
    };
    return this.http.head(`${this.endpoint}/processes`, {
      headers
    });
  }
  // Busca parametros pelo processo id
  getParametersByProcess(processId) {
    return this.http.get(`${this.endpoint}/processes/${processId}/parameters`, {
      headers: this.headers
    }).pipe(map((resource) => resource.items));
  }
  // Busca um único recurso
  getProcess(id) {
    return this.http.get(`${this.endpoint}/processes/${id}`, {
      headers: this.headers
    });
  }
  // Busca uma lista de processos
  getProcesses(params = {}) {
    return this.http.get(`${this.endpoint}/processes`, {
      params
    });
  }
  // Busca um único recurso
  getResource(id) {
    return this.http.get(`${this.endpoint}/${id}`, {
      headers: this.headers
    }).pipe(map((resource) => this.convertToJobSchedulerInternal(resource)));
  }
  // Atualiza um recurso
  updateResource(id, resource) {
    const newResouce = this.convertToJobScheduler(resource);
    return this.http.put(`${this.endpoint}/${id}`, newResouce, {
      headers: this.headers
    });
  }
  convertToJobScheduler(jobSchedulerInternal) {
    const jobScheduler = __spreadValues({}, jobSchedulerInternal);
    if (jobSchedulerInternal.periodicity) {
      if (jobSchedulerInternal.periodicity === "single") {
        jobScheduler.recurrent = false;
      } else {
        Object.assign(jobScheduler, this.convertToPeriodicity(jobSchedulerInternal));
      }
    }
    if (jobSchedulerInternal.firstExecutionHour) {
      jobScheduler.firstExecution = this.replaceHourFirstExecution(jobSchedulerInternal.firstExecution, jobSchedulerInternal.firstExecutionHour);
    }
    if (jobSchedulerInternal.frequency && jobSchedulerInternal.frequency.type) {
      jobScheduler.rangeExecutions = {
        frequency: __spreadValues({}, jobSchedulerInternal.frequency)
      };
      if (jobSchedulerInternal.rangeLimitHour) {
        const splitRangeLimitHour = jobSchedulerInternal.rangeLimitHour.split(":");
        jobScheduler.rangeExecutions.rangeLimit = {
          hour: parseInt(splitRangeLimitHour[0], 10),
          minute: parseInt(splitRangeLimitHour[1], 10)
        };
      }
      if (jobSchedulerInternal.rangeLimitDay) {
        jobScheduler.rangeExecutions.rangeLimit = __spreadProps(__spreadValues({}, jobScheduler.rangeExecutions.rangeLimit), {
          day: jobSchedulerInternal.rangeLimitDay
        });
      }
    }
    if (!Object.keys(this.returnValidExecutionParameter(jobScheduler.executionParameter)).length) {
      delete jobScheduler.executionParameter;
    }
    this.removeInvalidKeys(jobScheduler);
    return jobScheduler;
  }
  convertToJobSchedulerInternal(jobScheduler = {}) {
    const jobSchedulerInternal = __spreadValues({}, jobScheduler);
    if (jobScheduler.firstExecution) {
      jobSchedulerInternal.firstExecutionHour = this.getHourFirstExecution(jobScheduler.firstExecution);
    }
    Object.assign(jobSchedulerInternal, this.convertToPeriodicityInternal(jobScheduler));
    if (jobScheduler.rangeExecutions) {
      jobSchedulerInternal.rangeLimitHour = `${jobScheduler.rangeExecutions.rangeLimit.hour < 10 ? "0" + jobScheduler.rangeExecutions.rangeLimit.hour : jobScheduler.rangeExecutions.rangeLimit.hour}:${jobScheduler.rangeExecutions.rangeLimit.minute < 10 ? "0" + jobScheduler.rangeExecutions.rangeLimit.minute : jobScheduler.rangeExecutions.rangeLimit.minute}`;
      jobSchedulerInternal.rangeLimitDay = jobScheduler.rangeExecutions.rangeLimit.day;
      jobSchedulerInternal.frequency = {
        type: jobScheduler.rangeExecutions.frequency.type,
        value: jobScheduler.rangeExecutions.frequency.value
      };
    }
    this.removeInvalidKeys(jobSchedulerInternal, ["weekly", "monthly", "daily"]);
    return jobSchedulerInternal;
  }
  convertToPeriodicity(value) {
    const newValue = {};
    const valuePeriodicity = value.periodicity;
    if (valuePeriodicity) {
      newValue[valuePeriodicity] = {};
      if (valuePeriodicity === "monthly") {
        newValue[valuePeriodicity].day = value.dayOfMonth ? parseInt(value.dayOfMonth, 10) : 0;
      } else if (valuePeriodicity === "weekly") {
        newValue[valuePeriodicity].daysOfWeek = value.daysOfWeek;
      }
      newValue[valuePeriodicity].hour = value.hour ? parseInt(value.hour.split(":")[0], 10) : 0;
      newValue[valuePeriodicity].minute = value.hour ? parseInt(value.hour.split(":")[1], 10) : 0;
    }
    return newValue;
  }
  convertToPeriodicityInternal(value = {}) {
    if (value.monthly) {
      return {
        periodicity: "monthly",
        hour: `${addZero(value.monthly.hour)}:${addZero(value.monthly.minute)}`,
        dayOfMonth: value.monthly.day
      };
    } else if (value.daily) {
      return {
        periodicity: "daily",
        hour: `${addZero(value.daily.hour)}:${addZero(value.daily.minute)}`
      };
    } else if (value.weekly) {
      return {
        periodicity: "weekly",
        hour: `${addZero(value.weekly.hour)}:${addZero(value.weekly.minute)}`,
        daysOfWeek: [...value.weekly.daysOfWeek]
      };
    } else {
      return {
        periodicity: "single"
      };
    }
  }
  getCurrentHour(date) {
    const hours = addZero(date.getHours());
    const minutes = addZero(date.getMinutes());
    return `${hours}:${minutes}`;
  }
  getHourFirstExecution(firstExecutionDate) {
    return this.getCurrentHour(new Date(firstExecutionDate));
  }
  removeInvalidKeys(value, keys) {
    const invalidKeys = keys || ["periodicity", "hour", "minute", "day", "daysOfWeek", "dayOfMonth", "firstExecutionHour", "frequency", "rangeLimitHour", "rangeLimitDay"];
    Object.keys(value).forEach((key) => {
      if (invalidKeys.includes(key)) {
        delete value[key];
      } else if (key === "rangeExecutions" && value["periodicity"] === "single") {
        delete value[key];
      }
    });
  }
  replaceHourFirstExecution(date, time) {
    const firstExecutionDate = new Date(date);
    const timeSplited = time.split(":");
    const hours = parseInt(timeSplited[0], 10);
    const minutes = parseInt(timeSplited[1], 10);
    firstExecutionDate.setHours(hours, minutes);
    return convertDateToISOExtended(firstExecutionDate);
  }
  returnValidExecutionParameter(parameter) {
    const newParameter = __spreadValues({}, parameter);
    for (const key in newParameter) {
      if (newParameter.hasOwnProperty(key) && newParameter[key] === void 0) {
        delete newParameter[key];
      }
    }
    return newParameter;
  }
  static ɵfac = function PoPageJobSchedulerService_Factory(t) {
    return new (t || _PoPageJobSchedulerService)(ɵɵinject(HttpClient));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _PoPageJobSchedulerService,
    factory: _PoPageJobSchedulerService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageJobSchedulerService, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }], null);
})();
var PoPageJobSchedulerBaseComponent = class _PoPageJobSchedulerBaseComponent {
  poPageJobSchedulerService;
  /** Objeto com as propriedades do breadcrumb. */
  breadcrumb = {
    items: []
  };
  /**
   * Endpoint usado pelo componente para busca dos processos e parâmetros que serão utilizados para criação e edição dos agendamentos.
   *
   * #### Processos
   *
   * Os processos são as tarefas que estarão disponíveis para o usuário poder fazer os agendamentos.
   * Ao inicializar o componente, será feito uma requisição `GET` para o endpoint `{service-api}/processes`, para buscar
   * essa lista de processos.
   *
   * Este endpoint `{service-api}/processes` deve retornar uma lista de objetos que seguem a definição de dados abaixo:
   *
   * ```
   * GET {service-api}/processes
   * ```
   *
   * ```
   * {
   *   items: [
   *     { "processID": "ac4f", "description": "Gerar folha de pagamento" },
   *     { "processID": "df6l", "description": "Relatório de imposto a recolher" },
   *     { "processID": "dk3p", "description": "Títulos em aberto" },
   *   ]
   * }
   * ```
   *
   * Desta forma será renderizado um componente para selecionar o processo e/ou filtrá-los.
   *
   * Para realizar o filtro de busca do processo, será feita uma requisição enviando o conteúdo digitado na busca através do
   * parâmetro `search`. Da seguinte forma:
   *
   * ```
   * GET {service-api}/processes?search=relatorio
   * ```
   *
   * > Veja mais sobre paginação e filtros no [Guia de implementação de APIs](guides/api).
   * Caso seja informada a propriedade `p-parameters` não serão realizadas as requisições de processos e nem de parametros automaticamente.
   *
   * Também é possível fazer um agendamento de um processo específico, sem que seja necessário um endpoint para busca desses
   * processos. Então, caso o endpoint `{service-api}/processes` não seja válido, será apresentado um campo de entrada de
   * texto para o usuário informar diretamente
   * o **identificador do processo - `processID`** e ao salvar será enviado um `POST` para o endpoint difinido `serviceApi` conforme abaixo:
   *
   * ```
   * POST {service-api}
   * ```
   *
   * *Request payload* - estrutura de dados enviada no corpo da requisição conforme interface `PoJobScheduler`:
   *
   * ```
   * {
   *   "daily": { "hour": 10, "minute": 12 },
   *   "firstExecution": "2018-12-07T00:00:01-00:00",
   *   "recurrent": true,
   *   "processID": "ac0405"
   *   ...
   * }
   * ```
   *
   * Caso seja necessário informar parâmetros e adicionar configurações no processo selecionado, será realizado um `GET`
   * como exemplificado abaixo. Os parâmetros devem retornar uma lista de objetos que seguem a interface
   * [PoDynamicFormField](/documentation/po-dynamic-form). Porém, caso utilizar a propriedade `p-parameters` o componente não
   * realizará a busca automática e o campo de processos não será exibido.
   *
   * ```
   * GET {service-api}/processes/:id/parameters
   * ...
   * {
   *   items: [
   *     { "property": "vencimento", type: "date" },
   *     { "property": "imposto-retido", "label": "Imposto Retido", type: "boolean" }
   *   ]
   * }
   * ```
   *
   * #### Salvar e Atualizar
   *
   * Para salvar o agendamento, será feita uma requisição de criação, passando os valores preenchidos pelo usuário via *payload*.
   * Abaixo uma requisição `POST` disparada, onde as propriedades do *Job Scheduler* foram preenchidas:
   *
   * ```
   *  POST {service-api}
   * ```
   *
   * *Request payload* - estrutura de dados enviada no corpo da requisição conforme interface `PoJobScheduler`:
   *
   * ```
   * {
   *   "firstExecution": "2018-12-07T00:00:01-00:00",
   *   "recurrent": true,
   *   "monthly": { "day": 1, "hour": 10, "minute": 0 },
   *   "processID": "ac0405",
   *   "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
   * }
   * ```
   *
   * Caso queira que o componente carregue um agendamento já existente, deve ser incluído um parâmetro na rota chamado `id`.
   *
   * Exemplo de configuração de rota:
   *
   * ```
   *  RouterModule.forRoot([
   *    ...
   *    { path: 'edit/:id', component: ExampleJobSchedulerComponent },
   *    ...
   *  ],
   * ```
   *
   * Baseado nisso, na inicialização do template será disparado uma requisição para buscar o recurso que será editado.
   *
   * ```
   * GET {service-api}/{id}
   * ```
   *
   * Ao atualizar o agendamento, será disparado um `PUT` com os dados preenchidos.
   * Veja abaixo uma requisição `PUT` disparada, onde a propriedade *recurrent* e *daily* foram atualizadas:
   *
   * ```
   *  PUT {service-api}/{id}
   * ```
   *
   * *Request payload* - estrutura de dados enviada no corpo da requisição conforme interface `PoJobScheduler`:
   *
   * ```
   * {
   *   "firstExecution": "2018-12-07T00:00:01-00:00",
   *   "recurrent": true,
   *   "processID": "ac0405",
   *   "monthly": { "day": 1, "hour": 10, "minute": 0 },
   *   "processID": "ac0405",
   *   "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
   * }
   * ```
   */
  serviceApi;
  /** Título da página. */
  title;
  /**
   * Parâmetros que serão utilizados para criação e edição dos agendamentos.
   *
   * Ao utilizar esta propriedade, o componente não buscará automaticamente os parâmetros da API e o campo para preenchimento do processo não será exibido.
   *
   */
  parameters = [];
  set value(value) {
    this.model = this.poPageJobSchedulerService.convertToJobSchedulerInternal(value);
  }
  /**
   * @optional
   *
   * @description
   *
   * Define a orientação de exibição do `po-stepper`.
   *
   * > Quando não utilizada, segue o comportamento com base nas dimensões da tela.
   *
   * > Veja os valores válidos no *enum* [PoStepperOrientation](documentation/po-stepper#stepperOrientation).
   *
   */
  set stepperDefaultOrientation(value) {
    this._orientation = Object.values(PoStepperOrientation).includes(value) ? value : void 0;
  }
  get stepperDefaultOrientation() {
    return this._orientation;
  }
  /**
   * @optional
   *
   * @description
   *
   * Função chamada após realizar a confirmação da execução no PoPageJobScheduler.
   * Permite alterar os valores do model do PoPageJobScheduler antes de realizar o envio para a Api.
   *
   * > Deve retornar um objeto do tipo `PoPageJobScheduler` para ser adicionado ao model do PoPageJobScheduler.
   *
   * > Ao ser disparada, a mesma receberá por parâmetro o model do PoPageJobScheduler de interface `PoJobSchedulerInternal`.
   *
   * O contexto da função que será chamada, será o mesmo que o do `PoPageJobScheduler`, então para poder alterar
   * para o contexto do componente que o está utilizando, pode ser utilizado a propriedade `bind` do Javascript.
   * Por exemplo, para a função `beforeSend`:
   *
   * ```
   * <po-page-job-scheduler [p-service-api]="serviceApi" [p-parameters]="params" [p-before-send]="beforeSend.bind(this)">
   * ...
   * </po-page-job-scheduler>
   * ```
   */
  beforeSendAction;
  /**
   * @optional
   *
   * @description
   *
   * Define se o step `Agendamento` deve ser exibido como o último na sequência de steps
   *
   * > Aplicável apenas quando utilizado `PoJobSchedulerParametersTemplateDirective`
   */
  stepExecutionLast;
  /**
   * @optional
   *
   * @description
   *
   * Evento disparado ao concluir o processo de agendamento com sucesso.
   */
  success = new EventEmitter();
  /**
   * @optional
   *
   * @description
   *
   * Evento disparado ao ocorrer um erro impossibilitando a conclusão do agendamento.
   * Para este evento será passado como parâmetro os detalhes do erro.
   */
  error = new EventEmitter();
  model = new PoPageJobSchedulerInternal();
  _subscription = new Subscription();
  _orientation;
  constructor(poPageJobSchedulerService) {
    this.poPageJobSchedulerService = poPageJobSchedulerService;
  }
  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
  loadData(id) {
    if (!id) {
      this.model = this.model || new PoPageJobSchedulerInternal();
      return;
    }
    this._subscription.add(this.poPageJobSchedulerService.getResource(id).subscribe((response) => {
      this.model = response;
    }, () => {
      this.model = new PoPageJobSchedulerInternal();
    }));
  }
  markAsDirtyInvalidControls(controls) {
    for (const key in controls) {
      if (controls.hasOwnProperty(key)) {
        const control = controls[key];
        if (control.invalid) {
          control.markAsDirty();
        }
      }
    }
  }
  static ɵfac = function PoPageJobSchedulerBaseComponent_Factory(t) {
    return new (t || _PoPageJobSchedulerBaseComponent)(ɵɵdirectiveInject(PoPageJobSchedulerService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _PoPageJobSchedulerBaseComponent,
    inputs: {
      breadcrumb: [0, "p-breadcrumb", "breadcrumb"],
      serviceApi: [0, "p-service-api", "serviceApi"],
      title: [0, "p-title", "title"],
      parameters: [0, "p-parameters", "parameters"],
      value: [0, "p-value", "value"],
      stepperDefaultOrientation: [0, "p-orientation", "stepperDefaultOrientation"],
      beforeSendAction: [0, "p-before-send", "beforeSendAction"],
      stepExecutionLast: [0, "p-step-execution-last", "stepExecutionLast"]
    },
    outputs: {
      success: "p-success",
      error: "p-error"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageJobSchedulerBaseComponent, [{
    type: Directive
  }], () => [{
    type: PoPageJobSchedulerService
  }], {
    breadcrumb: [{
      type: Input,
      args: ["p-breadcrumb"]
    }],
    serviceApi: [{
      type: Input,
      args: ["p-service-api"]
    }],
    title: [{
      type: Input,
      args: ["p-title"]
    }],
    parameters: [{
      type: Input,
      args: ["p-parameters"]
    }],
    value: [{
      type: Input,
      args: ["p-value"]
    }],
    stepperDefaultOrientation: [{
      type: Input,
      args: ["p-orientation"]
    }],
    beforeSendAction: [{
      type: Input,
      args: ["p-before-send"]
    }],
    stepExecutionLast: [{
      type: Input,
      args: ["p-step-execution-last"]
    }],
    success: [{
      type: Output,
      args: ["p-success"]
    }],
    error: [{
      type: Output,
      args: ["p-error"]
    }]
  });
})();
var poPageJobSchedulerLiteralsDefault = {
  en: {
    at: "at",
    back: "Back",
    next: "Next",
    periodicity: "Periodicity",
    execution: "Execution",
    process: "Process",
    enterProcess: "Enter a process",
    recurrent: "Recurrent",
    single: "Single",
    daily: "Daily",
    weekly: "Weekly",
    monthly: "Monthly",
    scheduling: "Scheduling",
    parameterization: "Parameterization",
    conclude: "Conclude",
    firstExecution: "First Execution",
    startTime: "Start time",
    endTime: "End time",
    time: "Time",
    hour: "Hour",
    minute: "Minute",
    day: "Day",
    endDay: "End day",
    startDay: "Start day",
    weekDays: "Week days",
    sunday: "Sunday",
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    parameters: "Parameters",
    yes: "Yes",
    no: "No",
    notReported: "Not reported",
    periodicityData: "Periodicity data",
    confirmation: "Confirmation",
    confirmSaveMessage: "Are you sure you want to complete this schedule?",
    confirmUpdateMessage: "Are you sure you want to update this schedule?",
    saveNotificationSuccessUpdate: "Successfully updated scheduling",
    saveNotificationSuccessSave: "Successfully saved scheduling",
    parametersNotFound: "Parameters not found.",
    frequency: "Frequency",
    to: "to",
    from: "from"
  },
  es: {
    at: "a las",
    back: "Volver",
    next: "Avanzar",
    periodicity: "Periodicidad",
    execution: "Ejecución",
    process: "Proceso",
    enterProcess: "Informe un proceso",
    recurrent: "Recurrente",
    single: "Única",
    daily: "Diaria",
    weekly: "Semanal",
    monthly: "Mensual",
    scheduling: "Programación",
    parameterization: "Parametrización",
    conclude: "Completar",
    firstExecution: "Primera ejecución",
    startTime: "Hora de inicio",
    endTime: "Hora de finalización",
    time: "Horário",
    hour: "Hora",
    minute: "Minute",
    day: "Día",
    endDay: "Último Día",
    startDay: "Día de inicio",
    weekDays: "Dias de la semana",
    sunday: "Domingo",
    monday: "Lunes",
    tuesday: "Martes",
    wednesday: "Miércoles",
    thursday: "Jueves",
    friday: "Viernes",
    saturday: "Sábado",
    parameters: "Parámetros",
    yes: "Sí",
    no: "No",
    notReported: "No informado",
    periodicityData: "Dados da periodicidade",
    confirmation: "Confirmación",
    confirmSaveMessage: "¿Está seguro de que desea completar esta programación de proceso?",
    confirmUpdateMessage: "¿Está seguro de que desea cambiar esta programación de proceso?",
    saveNotificationSuccessUpdate: "Programación de proceso actualizada con éxito.",
    saveNotificationSuccessSave: "Programación de proceso salvo con éxito.",
    parametersNotFound: "No se encontraron parámetros.",
    frequency: "Frecuencia",
    to: "de",
    from: "a"
  },
  pt: {
    at: "às",
    back: "Voltar",
    next: "Avançar",
    periodicity: "Periodicidade",
    execution: "Execução",
    process: "Processo",
    enterProcess: "Informe um processo",
    recurrent: "Recorrente",
    single: "Única",
    daily: "Diária",
    weekly: "Semanal",
    monthly: "Mensal",
    scheduling: "Agendamento",
    parameterization: "Parametrização",
    conclude: "Concluir",
    firstExecution: "Primeira execução",
    startTime: "Horário inicial",
    endTime: "Horário final",
    time: "Horário",
    hour: "Hora",
    minute: "Minuto",
    day: "Dia",
    endDay: "Dia final",
    startDay: "Dia inicial",
    weekDays: "Dias de semana",
    sunday: "Domingo",
    monday: "Segunda-feira",
    tuesday: "Terça-feira",
    wednesday: "Quarta-feira",
    thursday: "Quinta-feira",
    friday: "Sexta-feira",
    saturday: "Sábado",
    parameters: "Parâmetros",
    yes: "Sim",
    no: "Não",
    notReported: "Não informado",
    periodicityData: "Dados da periodicidade",
    confirmation: "Confirmação",
    confirmSaveMessage: "Tem certeza que deseja concluir este agendamento de processo?",
    confirmUpdateMessage: "Tem certeza que deseja alterar este agendamento de processo?",
    saveNotificationSuccessUpdate: "Agendamento de processo atualizado com sucesso.",
    saveNotificationSuccessSave: "Agendamento de processo salvo com sucesso.",
    parametersNotFound: "Parâmetros não foram encontrados.",
    frequency: "Frequência",
    to: "das",
    from: "até"
  },
  ru: {
    at: "в",
    back: "Назад",
    next: "Следующий",
    periodicity: "Периодичность",
    execution: "Выполнение",
    process: "Процесс",
    enterProcess: "Укажите процесс",
    recurrent: "Периодически",
    single: "Одиночный",
    daily: "Ежедневно",
    weekly: "Еженедельно",
    monthly: "Ежемесячно",
    scheduling: "Планирование",
    parameterization: "Параметризация",
    conclude: "Завершить",
    firstExecution: "Первичное выполнение",
    startTime: "начальное время",
    endTime: "время окончания",
    time: "расписание",
    hour: "Час",
    day: "День",
    minute: "минута",
    endDay: "последний день",
    startDay: "день начала",
    weekDays: "Рабочие дни",
    sunday: "Воскресенье",
    monday: "Понедельник",
    tuesday: "Вторник",
    wednesday: "Среда",
    thursday: "Четверг",
    friday: "Пятница",
    saturday: "Суббота",
    parameters: "Параметры",
    yes: "Да",
    no: "Нет",
    notReported: "Не сообщается",
    periodicityData: "Данные о периодичности",
    confirmation: "Подтверждение",
    confirmSaveMessage: "Вы уверены, что хотите завершить это расписание?",
    confirmUpdateMessage: "Вы уверены, что хотите обновить это расписание?",
    saveNotificationSuccessUpdate: "Расписание успешно обновлено",
    saveNotificationSuccessSave: "Расписание успешно сохранено ",
    parametersNotFound: "Параметры не найдены",
    frequency: "Частота",
    to: "с",
    from: "до"
  }
};
var PoJobSchedulerParametersTemplateDirective = class _PoJobSchedulerParametersTemplateDirective {
  templateRef;
  /**
   * @optional
   *
   * @description
   *
   * Objeto que deve conter as alterações feitas pelo componente de template que serão repassadas dentro do atributo
   * `executionParameter` para envio na api.
   *
   * > O componente deve manter essa propriedade atualizada. É chamada após o avançar da etapa de parametrização.
   */
  executionParameter;
  /**
   * @optional
   *
   * @default false
   *
   * @description
   *
   * Determina se deve desabilitar o botão de avançar para a próxima etapa
   *
   * > Pode ser utilizado para validar campos antes de avançar.
   */
  disabledAdvance = false;
  /**
   * @optional
   *
   * @description
   *
   * Determina o label do step
   */
  title;
  // Necessário manter templateRef para o funcionamento do row template.
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function PoJobSchedulerParametersTemplateDirective_Factory(t) {
    return new (t || _PoJobSchedulerParametersTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _PoJobSchedulerParametersTemplateDirective,
    selectors: [["", "p-job-scheduler-parameters-template", ""]],
    inputs: {
      executionParameter: [0, "p-execution-parameter", "executionParameter"],
      disabledAdvance: [0, "p-disable-advance", "disabledAdvance"],
      title: [0, "p-label-step", "title"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoJobSchedulerParametersTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[p-job-scheduler-parameters-template]"
    }]
  }], () => [{
    type: TemplateRef
  }], {
    executionParameter: [{
      type: Input,
      args: ["p-execution-parameter"]
    }],
    disabledAdvance: [{
      type: Input,
      args: ["p-disable-advance"]
    }],
    title: [{
      type: Input,
      args: ["p-label-step"]
    }]
  });
})();
var PoJobSchedulerSummaryTemplateDirective = class _PoJobSchedulerSummaryTemplateDirective {
  templateRef;
  // Necessário manter templateRef para o funcionamento do row template.
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function PoJobSchedulerSummaryTemplateDirective_Factory(t) {
    return new (t || _PoJobSchedulerSummaryTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _PoJobSchedulerSummaryTemplateDirective,
    selectors: [["", "p-job-scheduler-summary-template", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoJobSchedulerSummaryTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[p-job-scheduler-summary-template]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var PoPageJobSchedulerLookupService = class _PoPageJobSchedulerLookupService {
  poPageJobSchedulerService;
  constructor(poPageJobSchedulerService) {
    this.poPageJobSchedulerService = poPageJobSchedulerService;
  }
  getFilteredItems({
    filter,
    page,
    pageSize
  }) {
    const params = {
      page,
      pageSize,
      search: filter
    };
    return this.poPageJobSchedulerService.getProcesses(params);
  }
  getObjectByValue(processId) {
    return this.poPageJobSchedulerService.getProcess(processId);
  }
  static ɵfac = function PoPageJobSchedulerLookupService_Factory(t) {
    return new (t || _PoPageJobSchedulerLookupService)(ɵɵinject(PoPageJobSchedulerService));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _PoPageJobSchedulerLookupService,
    factory: _PoPageJobSchedulerLookupService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageJobSchedulerLookupService, [{
    type: Injectable
  }], () => [{
    type: PoPageJobSchedulerService
  }], null);
})();
var _c0$3 = ["formExecution"];
var _c1$2 = ["dailyTemplate"];
var _c2$1 = ["monthlyTemplate"];
var _c3 = ["weeklyTemplate"];
function PoPageJobSchedulerExecutionComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function PoPageJobSchedulerExecutionComponent_ng_container_11_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "po-radio-group", 17);
    ɵɵtwoWayListener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_container_11_ng_container_3_Template_po_radio_group_ngModelChange_1_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(2);
      ɵɵtwoWayBindingSet(ctx_r2.value.frequency.type, $event) || (ctx_r2.value.frequency.type = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("p-change", function PoPageJobSchedulerExecutionComponent_ng_container_11_ng_container_3_Template_po_radio_group_p_change_1_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onChangeFrequencyOptions());
    });
    ɵɵelementEnd();
    ɵɵelementStart(2, "po-number", 18);
    ɵɵtwoWayListener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_container_11_ng_container_3_Template_po_number_ngModelChange_2_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(2);
      ɵɵtwoWayBindingSet(ctx_r2.value.frequency.value, $event) || (ctx_r2.value.frequency.value = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtwoWayProperty("ngModel", ctx_r2.value.frequency.type);
    ɵɵproperty("p-columns", 3)("p-options", ctx_r2.frequencyOptions);
    ɵɵadvance();
    ɵɵtwoWayProperty("ngModel", ctx_r2.value.frequency.value);
  }
}
function PoPageJobSchedulerExecutionComponent_ng_container_11_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function PoPageJobSchedulerExecutionComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 7)(2, "po-switch", 14);
    ɵɵtwoWayListener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_container_11_Template_po_switch_ngModelChange_2_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r2.containsFrequency, $event) || (ctx_r2.containsFrequency = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("p-change", function PoPageJobSchedulerExecutionComponent_ng_container_11_Template_po_switch_p_change_2_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onChangeContainsFrequency($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(3, PoPageJobSchedulerExecutionComponent_ng_container_11_ng_container_3_Template, 3, 4, "ng-container", 13);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 7);
    ɵɵelement(5, "po-divider", 9);
    ɵɵtemplate(6, PoPageJobSchedulerExecutionComponent_ng_container_11_ng_container_6_Template, 1, 0, "ng-container", 15);
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 7)(8, "po-switch", 16);
    ɵɵtwoWayListener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_container_11_Template_po_switch_ngModelChange_8_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r2.value.recurrent, $event) || (ctx_r2.value.recurrent = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtwoWayProperty("ngModel", ctx_r2.containsFrequency);
    ɵɵproperty("p-label", ctx_r2.literals.frequency)("p-label-off", ctx_r2.literals.no)("p-label-on", ctx_r2.literals.yes);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.containsFrequency);
    ɵɵadvance(2);
    ɵɵproperty("p-label", ctx_r2.literals.periodicityData);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.periodicityTemplates[ctx_r2.value.periodicity]);
    ɵɵadvance(2);
    ɵɵtwoWayProperty("ngModel", ctx_r2.value.recurrent);
    ɵɵproperty("p-label", ctx_r2.literals.recurrent)("p-label-off", ctx_r2.literals.no)("p-label-on", ctx_r2.literals.yes);
  }
}
function PoPageJobSchedulerExecutionComponent_ng_template_12_po_lookup_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "po-lookup", 20);
    ɵɵtwoWayListener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_template_12_po_lookup_0_Template_po_lookup_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext(2);
      ɵɵtwoWayBindingSet(ctx_r2.value.processID, $event) || (ctx_r2.value.processID = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵtwoWayProperty("ngModel", ctx_r2.value.processID);
    ɵɵproperty("p-disabled", ctx_r2.isEdit)("p-filter-service", ctx_r2.poPageJobSchedulerLookup)("p-label", ctx_r2.literals.process)("p-placeholder", ctx_r2.literals.enterProcess);
  }
}
function PoPageJobSchedulerExecutionComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PoPageJobSchedulerExecutionComponent_ng_template_12_po_lookup_0_Template, 1, 5, "po-lookup", 19);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r2.noParameters && ctx_r2.noCustomParamsComponent);
  }
}
function PoPageJobSchedulerExecutionComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "po-input", 21);
    ɵɵtwoWayListener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_template_14_Template_po_input_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r2.value.processID, $event) || (ctx_r2.value.processID = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵtwoWayProperty("ngModel", ctx_r2.value.processID);
    ɵɵproperty("p-disabled", ctx_r2.isEdit)("p-label", ctx_r2.literals.process)("p-placeholder", ctx_r2.literals.enterProcess);
  }
}
function PoPageJobSchedulerExecutionComponent_ng_template_16_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function PoPageJobSchedulerExecutionComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PoPageJobSchedulerExecutionComponent_ng_template_16_ng_container_0_Template, 1, 0, "ng-container", 15);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const inputHourTemplate_r7 = ɵɵreference(23);
    ɵɵproperty("ngTemplateOutlet", inputHourTemplate_r7);
  }
}
function PoPageJobSchedulerExecutionComponent_ng_template_18_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function PoPageJobSchedulerExecutionComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, PoPageJobSchedulerExecutionComponent_ng_template_18_ng_container_1_Template, 1, 0, "ng-container", 15);
    ɵɵelementEnd();
    ɵɵelementStart(2, "po-checkbox-group", 22);
    ɵɵtwoWayListener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_template_18_Template_po_checkbox_group_ngModelChange_2_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r2 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r2.value.daysOfWeek, $event) || (ctx_r2.value.daysOfWeek = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const inputHourTemplate_r7 = ɵɵreference(23);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", inputHourTemplate_r7);
    ɵɵadvance();
    ɵɵtwoWayProperty("ngModel", ctx_r2.value.daysOfWeek);
    ɵɵproperty("p-label", ctx_r2.literals.weekDays)("p-options", ctx_r2.weekDays);
  }
}
function PoPageJobSchedulerExecutionComponent_ng_template_20_po_number_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "po-number", 25);
    ɵɵtwoWayListener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_template_20_po_number_1_Template_po_number_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r2 = ɵɵnextContext(2);
      ɵɵtwoWayBindingSet(ctx_r2.value.rangeLimitDay, $event) || (ctx_r2.value.rangeLimitDay = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵtwoWayProperty("ngModel", ctx_r2.value.rangeLimitDay);
    ɵɵproperty("p-error-pattern", "Dia inválido")("p-label", ctx_r2.literals.endDay)("p-max", 31)("p-pattern", ctx_r2.dayPattern);
  }
}
function PoPageJobSchedulerExecutionComponent_ng_template_20_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function PoPageJobSchedulerExecutionComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "po-number", 23);
    ɵɵtwoWayListener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_template_20_Template_po_number_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r2 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r2.value.dayOfMonth, $event) || (ctx_r2.value.dayOfMonth = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd();
    ɵɵtemplate(1, PoPageJobSchedulerExecutionComponent_ng_template_20_po_number_1_Template, 1, 5, "po-number", 24)(2, PoPageJobSchedulerExecutionComponent_ng_template_20_ng_container_2_Template, 1, 0, "ng-container", 15);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const inputHourTemplate_r7 = ɵɵreference(23);
    ɵɵtwoWayProperty("ngModel", ctx_r2.value.dayOfMonth);
    ɵɵproperty("p-error-pattern", "Dia inválido")("p-label", ctx_r2.dayLabel)("p-max", 31)("p-pattern", ctx_r2.dayPattern);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.containsFrequency);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", inputHourTemplate_r7);
  }
}
function PoPageJobSchedulerExecutionComponent_ng_template_22_po_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "po-input", 28);
    ɵɵtwoWayListener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_template_22_po_input_1_Template_po_input_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r2 = ɵɵnextContext(2);
      ɵɵtwoWayBindingSet(ctx_r2.value.rangeLimitHour, $event) || (ctx_r2.value.rangeLimitHour = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵtwoWayProperty("ngModel", ctx_r2.value.rangeLimitHour);
    ɵɵproperty("p-label", ctx_r2.literals.endTime)("p-pattern", ctx_r2.timePattern);
  }
}
function PoPageJobSchedulerExecutionComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "po-input", 26);
    ɵɵtwoWayListener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_template_22_Template_po_input_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r2 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r2.value.hour, $event) || (ctx_r2.value.hour = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd();
    ɵɵtemplate(1, PoPageJobSchedulerExecutionComponent_ng_template_22_po_input_1_Template, 1, 3, "po-input", 27);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵtwoWayProperty("ngModel", ctx_r2.value.hour);
    ɵɵproperty("p-label", ctx_r2.hourLabel)("p-pattern", ctx_r2.timePattern);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.containsFrequency && ctx_r2.value.frequency.type !== "day");
  }
}
var PoPageJobSchedulerExecutionComponent = class _PoPageJobSchedulerExecutionComponent {
  poPageJobSchedulerService;
  poPageJobSchedulerLookup;
  form;
  // templates
  dailyTemplate;
  monthlyTemplate;
  weeklyTempalte;
  isEdit = false;
  literals = {};
  noParameters = true;
  noCustomParamsComponent = true;
  changeProcess = new EventEmitter();
  dayPattern = "^(3[0-1]|[0-2][0-9]|[1-9]|0[1-9])$";
  existProcessAPI = true;
  minDateFirstExecution = /* @__PURE__ */ new Date();
  periodicityOptions = [];
  periodicityTemplates;
  timePattern = "^(2[0-3]|[01][0-9]):?([0-5][0-9])$";
  weekDays = [];
  frequencyOptions = [];
  containsFrequency = false;
  frequency = "hour";
  rangeLimitHour;
  _value = {};
  set value(value) {
    this._value = value && isTypeof(value, "object") ? value : {};
    this.containsFrequency = this._value.frequency && this._value.frequency.value ? true : false;
  }
  get value() {
    return this._value;
  }
  constructor(poPageJobSchedulerService, poPageJobSchedulerLookup) {
    this.poPageJobSchedulerService = poPageJobSchedulerService;
    this.poPageJobSchedulerLookup = poPageJobSchedulerLookup;
  }
  get startDateFirstExecution() {
    return this.isEdit ? void 0 : this.minDateFirstExecution;
  }
  get hourLabel() {
    return this.containsFrequency ? this.literals.startTime : this.literals.time;
  }
  get dayLabel() {
    return this.containsFrequency ? this.literals.startDay : this.literals.day;
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.subscribeProcessIdValueChanges();
      if (this.value.periodicity) {
        this.frequencyOptions = this.frequencyOptions.map((frequencyOption) => __spreadProps(__spreadValues({}, frequencyOption), {
          disabled: frequencyOption.value === "day" && this.value.periodicity !== "monthly"
        }));
      }
    });
  }
  ngOnInit() {
    this.periodicityTemplates = {
      daily: this.dailyTemplate,
      monthly: this.monthlyTemplate,
      weekly: this.weeklyTempalte
    };
    if (this.noParameters && this.noCustomParamsComponent) {
      this.checkExistsProcessesAPI();
    }
    this.periodicityOptions = this.getPeriodicityOptions();
    this.weekDays = this.getWeekDays();
    this.frequencyOptions = this.getFrequencyOptions();
  }
  onChangeContainsFrequency(containsFrequency) {
    if (containsFrequency) {
      this.value.frequency = {
        type: "hour",
        value: null
      };
    } else {
      this.value.frequency = {};
    }
    this.value.rangeLimitHour = null;
    this.value.rangeLimitDay = null;
    this.value.dayOfMonth = null;
  }
  onChangePeriodicityOptions(periodicity) {
    this.frequencyOptions = this.frequencyOptions.map((frequencyOption) => __spreadProps(__spreadValues({}, frequencyOption), {
      disabled: frequencyOption.value === "day" && periodicity !== "monthly"
    }));
    this.value.frequency.type = null;
  }
  onChangeFrequencyOptions() {
    this.value.rangeLimitHour = null;
  }
  checkExistsProcessesAPI() {
    this.poPageJobSchedulerService.getHeadProcesses().subscribe(void 0, (error) => {
      this.existProcessAPI = false;
    });
  }
  getPeriodicityOptions() {
    return [{
      label: this.literals.single,
      value: "single"
    }, {
      label: this.literals.daily,
      value: "daily"
    }, {
      label: this.literals.weekly,
      value: "weekly"
    }, {
      label: this.literals.monthly,
      value: "monthly"
    }];
  }
  getFrequencyOptions() {
    return [{
      label: this.literals.day,
      value: "day"
    }, {
      label: this.literals.hour,
      value: "hour"
    }, {
      label: this.literals.minute,
      value: "minute"
    }];
  }
  getWeekDays() {
    return [{
      label: this.literals.sunday,
      value: "Sunday"
    }, {
      label: this.literals.monday,
      value: "Monday"
    }, {
      label: this.literals.tuesday,
      value: "Tuesday"
    }, {
      label: this.literals.wednesday,
      value: "Wednesday"
    }, {
      label: this.literals.thursday,
      value: "Thursday"
    }, {
      label: this.literals.friday,
      value: "Friday"
    }, {
      label: this.literals.saturday,
      value: "Saturday"
    }];
  }
  subscribeProcessIdValueChanges() {
    this.form.controls["processID"]?.valueChanges.subscribe((processId) => {
      this.changeProcess.emit({
        processId,
        existAPI: this.existProcessAPI
      });
    });
  }
  static ɵfac = function PoPageJobSchedulerExecutionComponent_Factory(t) {
    return new (t || _PoPageJobSchedulerExecutionComponent)(ɵɵdirectiveInject(PoPageJobSchedulerService), ɵɵdirectiveInject(PoPageJobSchedulerLookupService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PoPageJobSchedulerExecutionComponent,
    selectors: [["po-page-job-scheduler-execution"]],
    viewQuery: function PoPageJobSchedulerExecutionComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0$3, 7);
        ɵɵviewQuery(_c1$2, 7);
        ɵɵviewQuery(_c2$1, 7);
        ɵɵviewQuery(_c3, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.form = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dailyTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.monthlyTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.weeklyTempalte = _t.first);
      }
    },
    inputs: {
      isEdit: [0, "p-is-edit", "isEdit"],
      literals: [0, "p-literals", "literals"],
      noParameters: [0, "p-no-parameters", "noParameters"],
      noCustomParamsComponent: [0, "p-no-custom-params-component", "noCustomParamsComponent"],
      value: [0, "p-value", "value"]
    },
    outputs: {
      changeProcess: "p-change-process"
    },
    decls: 24,
    vars: 16,
    consts: [["formExecution", "ngForm"], ["lookupProcessesID", ""], ["inputProcessesID", ""], ["dailyTemplate", ""], ["weeklyTemplate", ""], ["monthlyTemplate", ""], ["inputHourTemplate", ""], [1, "po-row"], [4, "ngIf", "ngIfThen", "ngIfElse"], [1, "po-md-12", 3, "p-label"], ["name", "firstExecution", "p-placeholder", "dd/mm/aaaa", "p-required", "", 1, "po-md-4", 3, "ngModelChange", "ngModel", "p-disabled", "p-label", "p-min-date"], ["name", "firstExecutionHour", "p-mask", "99:99", "p-mask-format-model", "", "p-placeholder", "HH:mm", "p-required", "", 1, "po-md-2", 3, "ngModelChange", "ngModel", "p-disabled", "p-label", "p-pattern"], ["name", "periodicity", "p-columns", "4", "p-required", "", 1, "po-sm-12", 3, "ngModelChange", "p-change", "ngModel", "p-label", "p-options"], [4, "ngIf"], ["name", "containsFrequency", 1, "po-md-12", 3, "ngModelChange", "p-change", "ngModel", "p-label", "p-label-off", "p-label-on"], [4, "ngTemplateOutlet"], ["name", "recurrent", 1, "po-md-3", 3, "ngModelChange", "ngModel", "p-label", "p-label-off", "p-label-on"], ["name", "frequencyType", "p-required", "", 1, "po-md-10", 3, "ngModelChange", "p-change", "ngModel", "p-columns", "p-options"], ["name", "frequencyValue", "p-required", "", 1, "po-md-2", 3, "ngModelChange", "ngModel"], ["class", "po-md-12", "name", "processID", "p-field-label", "description", "p-field-value", "processID", "p-required", "", 3, "ngModel", "p-disabled", "p-filter-service", "p-label", "p-placeholder", "ngModelChange", 4, "ngIf"], ["name", "processID", "p-field-label", "description", "p-field-value", "processID", "p-required", "", 1, "po-md-12", 3, "ngModelChange", "ngModel", "p-disabled", "p-filter-service", "p-label", "p-placeholder"], ["name", "processID", "p-required", "", 1, "po-md-12", 3, "ngModelChange", "ngModel", "p-disabled", "p-label", "p-placeholder"], ["name", "daysOfWeek", "p-columns", "4", "p-required", "", 1, "po-md-12", 3, "ngModelChange", "ngModel", "p-label", "p-options"], ["name", "dayOfMonth", "p-required", "", 1, "po-md-3", 3, "ngModelChange", "ngModel", "p-error-pattern", "p-label", "p-max", "p-pattern"], ["class", "po-md-3", "name", "rangeLimitDay", "p-required", "", 3, "ngModel", "p-error-pattern", "p-label", "p-max", "p-pattern", "ngModelChange", 4, "ngIf"], ["name", "rangeLimitDay", "p-required", "", 1, "po-md-3", 3, "ngModelChange", "ngModel", "p-error-pattern", "p-label", "p-max", "p-pattern"], ["name", "hour", "p-mask", "99:99", "p-mask-format-model", "", "p-placeholder", "HH:mm", "p-required", "", 1, "po-md-2", 3, "ngModelChange", "ngModel", "p-label", "p-pattern"], ["class", "po-md-2", "name", "rangeLimitHour", "p-mask", "99:99", "p-mask-format-model", "", "p-placeholder", "HH:mm", "p-required", "", 3, "ngModel", "p-label", "p-pattern", "ngModelChange", 4, "ngIf"], ["name", "rangeLimitHour", "p-mask", "99:99", "p-mask-format-model", "", "p-placeholder", "HH:mm", "p-required", "", 1, "po-md-2", 3, "ngModelChange", "ngModel", "p-label", "p-pattern"]],
    template: function PoPageJobSchedulerExecutionComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "form", null, 0)(2, "div", 7);
        ɵɵtemplate(3, PoPageJobSchedulerExecutionComponent_ng_container_3_Template, 1, 0, "ng-container", 8);
        ɵɵelementEnd();
        ɵɵelementStart(4, "div", 7);
        ɵɵelement(5, "po-divider", 9);
        ɵɵelementStart(6, "po-datepicker", 10);
        ɵɵtwoWayListener("ngModelChange", function PoPageJobSchedulerExecutionComponent_Template_po_datepicker_ngModelChange_6_listener($event) {
          ɵɵrestoreView(_r1);
          ɵɵtwoWayBindingSet(ctx.value.firstExecution, $event) || (ctx.value.firstExecution = $event);
          return ɵɵresetView($event);
        });
        ɵɵelementEnd();
        ɵɵelementStart(7, "po-input", 11);
        ɵɵtwoWayListener("ngModelChange", function PoPageJobSchedulerExecutionComponent_Template_po_input_ngModelChange_7_listener($event) {
          ɵɵrestoreView(_r1);
          ɵɵtwoWayBindingSet(ctx.value.firstExecutionHour, $event) || (ctx.value.firstExecutionHour = $event);
          return ɵɵresetView($event);
        });
        ɵɵelementEnd()();
        ɵɵelement(8, "hr");
        ɵɵelementStart(9, "div", 7)(10, "po-radio-group", 12);
        ɵɵtwoWayListener("ngModelChange", function PoPageJobSchedulerExecutionComponent_Template_po_radio_group_ngModelChange_10_listener($event) {
          ɵɵrestoreView(_r1);
          ɵɵtwoWayBindingSet(ctx.value.periodicity, $event) || (ctx.value.periodicity = $event);
          return ɵɵresetView($event);
        });
        ɵɵlistener("p-change", function PoPageJobSchedulerExecutionComponent_Template_po_radio_group_p_change_10_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onChangePeriodicityOptions($event));
        });
        ɵɵelementEnd();
        ɵɵtemplate(11, PoPageJobSchedulerExecutionComponent_ng_container_11_Template, 9, 11, "ng-container", 13);
        ɵɵelementEnd();
        ɵɵtemplate(12, PoPageJobSchedulerExecutionComponent_ng_template_12_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor)(14, PoPageJobSchedulerExecutionComponent_ng_template_14_Template, 1, 4, "ng-template", null, 2, ɵɵtemplateRefExtractor)(16, PoPageJobSchedulerExecutionComponent_ng_template_16_Template, 1, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor)(18, PoPageJobSchedulerExecutionComponent_ng_template_18_Template, 3, 4, "ng-template", null, 4, ɵɵtemplateRefExtractor)(20, PoPageJobSchedulerExecutionComponent_ng_template_20_Template, 3, 7, "ng-template", null, 5, ɵɵtemplateRefExtractor)(22, PoPageJobSchedulerExecutionComponent_ng_template_22_Template, 2, 4, "ng-template", null, 6, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        const lookupProcessesID_r13 = ɵɵreference(13);
        const inputProcessesID_r14 = ɵɵreference(15);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.existProcessAPI)("ngIfThen", lookupProcessesID_r13)("ngIfElse", inputProcessesID_r14);
        ɵɵadvance(2);
        ɵɵproperty("p-label", ctx.literals.firstExecution);
        ɵɵadvance();
        ɵɵtwoWayProperty("ngModel", ctx.value.firstExecution);
        ɵɵproperty("p-disabled", ctx.isEdit)("p-label", ctx.literals.day)("p-min-date", ctx.startDateFirstExecution);
        ɵɵadvance();
        ɵɵtwoWayProperty("ngModel", ctx.value.firstExecutionHour);
        ɵɵproperty("p-disabled", ctx.isEdit)("p-label", ctx.literals.time)("p-pattern", ctx.timePattern);
        ɵɵadvance(3);
        ɵɵtwoWayProperty("ngModel", ctx.value.periodicity);
        ɵɵproperty("p-label", ctx.literals.periodicity)("p-options", ctx.periodicityOptions);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.value.periodicity !== "single");
      }
    },
    dependencies: [NgIf, NgTemplateOutlet, ɵNgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, PoDividerComponent, PoCheckboxGroupComponent, PoRadioGroupComponent, PoDatepickerComponent, PoInputComponent, PoLookupComponent, PoNumberComponent, PoSwitchComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageJobSchedulerExecutionComponent, [{
    type: Component,
    args: [{
      selector: "po-page-job-scheduler-execution",
      template: `<form #formExecution="ngForm">
  <div class="po-row">
    <ng-container *ngIf="existProcessAPI; then lookupProcessesID; else inputProcessesID"></ng-container>
  </div>

  <div class="po-row">
    <po-divider class="po-md-12" [p-label]="literals.firstExecution"></po-divider>

    <po-datepicker
      class="po-md-4"
      name="firstExecution"
      [(ngModel)]="value.firstExecution"
      p-placeholder="dd/mm/aaaa"
      p-required
      [p-disabled]="isEdit"
      [p-label]="literals.day"
      [p-min-date]="startDateFirstExecution"
    >
    </po-datepicker>

    <po-input
      class="po-md-2"
      name="firstExecutionHour"
      [(ngModel)]="value.firstExecutionHour"
      p-mask="99:99"
      p-mask-format-model
      p-placeholder="HH:mm"
      p-required
      [p-disabled]="isEdit"
      [p-label]="literals.time"
      [p-pattern]="timePattern"
    >
    </po-input>
  </div>

  <hr />

  <div class="po-row">
    <po-radio-group
      class="po-sm-12"
      name="periodicity"
      [(ngModel)]="value.periodicity"
      p-columns="4"
      p-required
      [p-label]="literals.periodicity"
      [p-options]="periodicityOptions"
      (p-change)="onChangePeriodicityOptions($event)"
    >
    </po-radio-group>

    <ng-container *ngIf="value.periodicity !== 'single'">
      <div class="po-row">
        <po-switch
          class="po-md-12"
          name="containsFrequency"
          [(ngModel)]="containsFrequency"
          [p-label]="literals.frequency"
          [p-label-off]="literals.no"
          [p-label-on]="literals.yes"
          (p-change)="onChangeContainsFrequency($event)"
        >
        </po-switch>
        <ng-container *ngIf="containsFrequency">
          <po-radio-group
            class="po-md-10"
            name="frequencyType"
            p-required
            [(ngModel)]="value.frequency.type"
            [p-columns]="3"
            [p-options]="frequencyOptions"
            (p-change)="onChangeFrequencyOptions()"
          >
          </po-radio-group>

          <po-number class="po-md-2" name="frequencyValue" p-required [(ngModel)]="value.frequency.value"> </po-number>
        </ng-container>
      </div>

      <div class="po-row">
        <po-divider class="po-md-12" [p-label]="literals.periodicityData"> </po-divider>

        <ng-container *ngTemplateOutlet="periodicityTemplates[value.periodicity]"> </ng-container>
      </div>

      <div class="po-row">
        <po-switch
          class="po-md-3"
          name="recurrent"
          [(ngModel)]="value.recurrent"
          [p-label]="literals.recurrent"
          [p-label-off]="literals.no"
          [p-label-on]="literals.yes"
        >
        </po-switch>
      </div>
    </ng-container>
  </div>

  <ng-template #lookupProcessesID>
    <po-lookup
      *ngIf="noParameters && noCustomParamsComponent"
      class="po-md-12"
      name="processID"
      [(ngModel)]="value.processID"
      p-field-label="description"
      p-field-value="processID"
      p-required
      [p-disabled]="isEdit"
      [p-filter-service]="poPageJobSchedulerLookup"
      [p-label]="literals.process"
      [p-placeholder]="literals.enterProcess"
    >
    </po-lookup>
  </ng-template>

  <ng-template #inputProcessesID>
    <po-input
      class="po-md-12"
      name="processID"
      [(ngModel)]="value.processID"
      p-required
      [p-disabled]="isEdit"
      [p-label]="literals.process"
      [p-placeholder]="literals.enterProcess"
    >
    </po-input>
  </ng-template>

  <ng-template #dailyTemplate>
    <ng-container *ngTemplateOutlet="inputHourTemplate"> </ng-container>
  </ng-template>

  <ng-template #weeklyTemplate>
    <div class="po-row">
      <ng-container *ngTemplateOutlet="inputHourTemplate"> </ng-container>
    </div>

    <po-checkbox-group
      class="po-md-12"
      name="daysOfWeek"
      [(ngModel)]="value.daysOfWeek"
      p-columns="4"
      p-required
      [p-label]="literals.weekDays"
      [p-options]="weekDays"
    >
    </po-checkbox-group>
  </ng-template>

  <ng-template #monthlyTemplate>
    <po-number
      class="po-md-3"
      name="dayOfMonth"
      [(ngModel)]="value.dayOfMonth"
      p-required
      [p-error-pattern]="'Dia inválido'"
      [p-label]="dayLabel"
      [p-max]="31"
      [p-pattern]="dayPattern"
    >
    </po-number>

    <po-number
      *ngIf="containsFrequency"
      class="po-md-3"
      name="rangeLimitDay"
      [(ngModel)]="value.rangeLimitDay"
      p-required
      [p-error-pattern]="'Dia inválido'"
      [p-label]="literals.endDay"
      [p-max]="31"
      [p-pattern]="dayPattern"
    >
    </po-number>

    <ng-container *ngTemplateOutlet="inputHourTemplate"> </ng-container>
  </ng-template>

  <ng-template #inputHourTemplate>
    <po-input
      class="po-md-2"
      name="hour"
      [(ngModel)]="value.hour"
      p-mask="99:99"
      p-mask-format-model
      p-placeholder="HH:mm"
      p-required
      [p-label]="hourLabel"
      [p-pattern]="timePattern"
    >
    </po-input>

    <po-input
      *ngIf="containsFrequency && value.frequency.type !== 'day'"
      class="po-md-2"
      name="rangeLimitHour"
      [(ngModel)]="value.rangeLimitHour"
      p-mask="99:99"
      p-mask-format-model
      p-placeholder="HH:mm"
      p-required
      [p-label]="literals.endTime"
      [p-pattern]="timePattern"
    >
    </po-input>
  </ng-template>
</form>
`
    }]
  }], () => [{
    type: PoPageJobSchedulerService
  }, {
    type: PoPageJobSchedulerLookupService
  }], {
    form: [{
      type: ViewChild,
      args: ["formExecution", {
        static: true
      }]
    }],
    dailyTemplate: [{
      type: ViewChild,
      args: ["dailyTemplate", {
        static: true
      }]
    }],
    monthlyTemplate: [{
      type: ViewChild,
      args: ["monthlyTemplate", {
        static: true
      }]
    }],
    weeklyTempalte: [{
      type: ViewChild,
      args: ["weeklyTemplate", {
        static: true
      }]
    }],
    isEdit: [{
      type: Input,
      args: ["p-is-edit"]
    }],
    literals: [{
      type: Input,
      args: ["p-literals"]
    }],
    noParameters: [{
      type: Input,
      args: ["p-no-parameters"]
    }],
    noCustomParamsComponent: [{
      type: Input,
      args: ["p-no-custom-params-component"]
    }],
    changeProcess: [{
      type: Output,
      args: ["p-change-process"]
    }],
    value: [{
      type: Input,
      args: ["p-value"]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(PoPageJobSchedulerExecutionComponent, {
    className: "PoPageJobSchedulerExecutionComponent",
    filePath: "lib/components/po-page-job-scheduler/po-page-job-scheduler-execution/po-page-job-scheduler-execution.component.ts",
    lineNumber: 15
  });
})();
var _c0$2 = ["parametersForm"];
function PoPageJobSchedulerParametersComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function PoPageJobSchedulerParametersComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵelement(1, "po-icon", 5);
    ɵɵelementStart(2, "span", 6);
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r0.literals.parametersNotFound, " ");
  }
}
function PoPageJobSchedulerParametersComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "form", null, 2);
    ɵɵelement(2, "po-dynamic-form", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("p-fields", ctx_r0.parameters)("p-value", ctx_r0.value);
  }
}
var PoPageJobSchedulerParametersComponent = class _PoPageJobSchedulerParametersComponent {
  form;
  literals = {};
  parameters = [];
  value;
  valueChange = new EventEmitter();
  ngAfterViewInit() {
    if (this.form) {
      setTimeout(() => {
        this.form.valueChanges.subscribe((value) => {
          this.valueChange.emit(value);
        });
      });
    }
  }
  static ɵfac = function PoPageJobSchedulerParametersComponent_Factory(t) {
    return new (t || _PoPageJobSchedulerParametersComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PoPageJobSchedulerParametersComponent,
    selectors: [["po-page-job-scheduler-parameters"]],
    viewQuery: function PoPageJobSchedulerParametersComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0$2, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.form = _t.first);
      }
    },
    inputs: {
      literals: [0, "p-literals", "literals"],
      parameters: [0, "p-parameters", "parameters"],
      value: [0, "p-value", "value"]
    },
    outputs: {
      valueChange: "p-valueChange"
    },
    decls: 5,
    vars: 3,
    consts: [["parametersNotFoundTemplate", ""], ["formFieldsTemplate", ""], ["parametersForm", "ngForm"], [4, "ngIf", "ngIfThen", "ngIfElse"], [1, "po-text-center"], ["p-icon", "ICON_INFO"], [1, "po-font-text-large"], ["p-group-form", "", 3, "p-fields", "p-value"]],
    template: function PoPageJobSchedulerParametersComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, PoPageJobSchedulerParametersComponent_ng_container_0_Template, 1, 0, "ng-container", 3)(1, PoPageJobSchedulerParametersComponent_ng_template_1_Template, 4, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(3, PoPageJobSchedulerParametersComponent_ng_template_3_Template, 3, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
      }
      if (rf & 2) {
        const parametersNotFoundTemplate_r2 = ɵɵreference(2);
        const formFieldsTemplate_r3 = ɵɵreference(4);
        ɵɵproperty("ngIf", ctx.parameters && ctx.parameters.length)("ngIfThen", formFieldsTemplate_r3)("ngIfElse", parametersNotFoundTemplate_r2);
      }
    },
    dependencies: [NgIf, ɵNgNoValidate, NgControlStatusGroup, NgForm, PoDynamicFormComponent, PoIconComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageJobSchedulerParametersComponent, [{
    type: Component,
    args: [{
      selector: "po-page-job-scheduler-parameters",
      template: '<ng-container *ngIf="parameters && parameters.length; then formFieldsTemplate; else parametersNotFoundTemplate">\n</ng-container>\n\n<ng-template #parametersNotFoundTemplate>\n  <div class="po-text-center">\n    <po-icon p-icon="ICON_INFO"></po-icon>\n    <span class="po-font-text-large">\n      {{ literals.parametersNotFound }}\n    </span>\n  </div>\n</ng-template>\n\n<ng-template #formFieldsTemplate>\n  <form #parametersForm="ngForm">\n    <po-dynamic-form p-group-form [p-fields]="parameters" [p-value]="value"> </po-dynamic-form>\n  </form>\n</ng-template>\n'
    }]
  }], null, {
    form: [{
      type: ViewChild,
      args: ["parametersForm"]
    }],
    literals: [{
      type: Input,
      args: ["p-literals"]
    }],
    parameters: [{
      type: Input,
      args: ["p-parameters"]
    }],
    value: [{
      type: Input,
      args: ["p-value"]
    }],
    valueChange: [{
      type: Output,
      args: ["p-valueChange"]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(PoPageJobSchedulerParametersComponent, {
    className: "PoPageJobSchedulerParametersComponent",
    filePath: "lib/components/po-page-job-scheduler/po-page-job-scheduler-parameters/po-page-job-scheduler-parameters.component.ts",
    lineNumber: 10
  });
})();
function PoPageJobSchedulerSummaryComponent_po_info_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "po-info", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("p-label", ctx_r0.literals.process)("p-orientation", ctx_r0.infoOrientation)("p-value", ctx_r0.value.processID);
  }
}
function PoPageJobSchedulerSummaryComponent_po_info_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "po-info", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("p-label", ctx_r0.literals.frequency)("p-orientation", ctx_r0.infoOrientation)("p-value", ctx_r0.frequencyValue);
  }
}
function PoPageJobSchedulerSummaryComponent_po_info_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "po-info", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("p-label", ctx_r0.literals.execution)("p-orientation", ctx_r0.infoOrientation)("p-value", ctx_r0.executionValue);
  }
}
function PoPageJobSchedulerSummaryComponent_po_widget_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "po-widget", 5);
    ɵɵelement(1, "po-dynamic-view", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("p-title", ctx_r0.literals.parameters);
    ɵɵadvance();
    ɵɵproperty("p-fields", ctx_r0.parameters)("p-value", ctx_r0.value.executionParameter);
  }
}
function PoPageJobSchedulerSummaryComponent_div_8_ng_template_1_Template(rf, ctx) {
}
function PoPageJobSchedulerSummaryComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, PoPageJobSchedulerSummaryComponent_div_8_ng_template_1_Template, 0, 0, "ng-template", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.jobSchedulerSummaryTemplate == null ? null : ctx_r0.jobSchedulerSummaryTemplate.templateRef);
  }
}
var PoPageJobSchedulerSummaryComponent = class _PoPageJobSchedulerSummaryComponent {
  datePipe;
  literals = {};
  parameters = [];
  value = {};
  noParameters = true;
  jobSchedulerSummaryTemplate;
  executionValue = "";
  firstExecutionValue = "";
  infoOrientation = PoInfoOrientation.Horizontal;
  periodicityValue = "";
  frequencyValue = "";
  rangeLimitHour = "";
  rangeLimitDay = "";
  recurrentValue = "";
  constructor(datePipe) {
    this.datePipe = datePipe;
  }
  ngOnInit() {
    const {
      periodicity,
      hour,
      dayOfMonth,
      daysOfWeek,
      recurrent,
      firstExecution,
      firstExecutionHour,
      frequency,
      rangeLimitHour,
      rangeLimitDay
    } = this.value;
    this.periodicityValue = this.getPeriodicityLabel(periodicity);
    if (frequency) {
      this.frequencyValue = this.getFrequencyValue(frequency, periodicity);
    }
    this.executionValue = this.getExecutionValue(periodicity, hour, daysOfWeek, dayOfMonth, rangeLimitHour, rangeLimitDay);
    this.firstExecutionValue = this.getFirstExecutionLabel(firstExecution, firstExecutionHour);
    this.recurrentValue = this.getRecurrentValue(recurrent);
  }
  getFrequencyValue(frequency, periodicity) {
    return frequency["value"] && frequency["type"] && periodicity !== "single" ? `${frequency["value"]} - ${frequency["type"]}` : "";
  }
  getExecutionValue(periodicity, hour, daysOfWeek, dayOfMonth, rangeLimitHour, rangeLimitDay) {
    switch (periodicity) {
      case "daily":
        return this.getHourLabel(hour, rangeLimitHour);
      case "monthly":
        return this.getMonthlyLabelExecution(dayOfMonth, hour, rangeLimitHour, rangeLimitDay);
      case "weekly":
        return this.getWeeklyLabelExecution(daysOfWeek, hour, rangeLimitHour);
      default:
        return this.literals.notReported;
    }
  }
  getFirstExecutionLabel(firstExecution, firstExecutionHour) {
    if (firstExecution) {
      const date = this.datePipe.transform(firstExecution, "dd/MM/yyyy", "-0200");
      return `${date} ${this.getHourLabel(firstExecutionHour)}`;
    } else {
      return this.literals.notReported;
    }
  }
  getHourLabel(hour, rangeLimitHour) {
    return `${rangeLimitHour ? this.literals.from : this.literals.at} ${hour || "00:00"} ${rangeLimitHour ? this.literals.to + " " + rangeLimitHour : ""}`;
  }
  getMonthlyLabelExecution(dayOfMonth, hour, rangeLimitHour, rangeLimitDay) {
    const hourLabel = this.getHourLabel(hour, rangeLimitHour);
    return `${rangeLimitDay ? this.literals.from : ""} ${dayOfMonth} ${rangeLimitDay ? this.literals.to : ""} ${rangeLimitDay ? rangeLimitDay : ""} ${hourLabel}`;
  }
  getPeriodicityLabel(periodicity) {
    switch (periodicity) {
      case "daily":
        return this.literals.daily;
      case "monthly":
        return this.literals.monthly;
      case "weekly":
        return this.literals.weekly;
      default:
        return this.literals.single;
    }
  }
  getRecurrentValue(recurrent) {
    return recurrent ? this.literals.yes : this.literals.no;
  }
  getSorterWeekDays() {
    return {
      "sunday": 0,
      "monday": 1,
      "tuesday": 2,
      "wednesday": 3,
      "thursday": 4,
      "friday": 5,
      "saturday": 6
    };
  }
  getTranslateWeekDay(day) {
    const days = {
      Sunday: this.literals.sunday,
      Monday: this.literals.monday,
      Tuesday: this.literals.tuesday,
      Wednesday: this.literals.wednesday,
      Thursday: this.literals.thursday,
      Friday: this.literals.friday,
      Saturday: this.literals.saturday
    };
    return days[day] || "";
  }
  getWeekDaysLabel(days = []) {
    const weekDaysSorted = this.sortWeekDays(days);
    return weekDaysSorted.map((day) => this.getTranslateWeekDay(day)).join(", ");
  }
  getWeeklyLabelExecution(daysOfWeek, hour, rangeLimitHour) {
    if (daysOfWeek && Array.isArray(daysOfWeek)) {
      return `${this.getWeekDaysLabel(daysOfWeek)} ${this.getHourLabel(hour, rangeLimitHour)}`;
    } else {
      return this.literals.notReported;
    }
  }
  sortWeekDays(days = []) {
    const sorterWeekDays = this.getSorterWeekDays();
    return days.sort((a, b) => {
      const currDay = a.toLowerCase();
      const nextDay = b.toLowerCase();
      return sorterWeekDays[currDay] > sorterWeekDays[nextDay] ? 1 : -1;
    });
  }
  static ɵfac = function PoPageJobSchedulerSummaryComponent_Factory(t) {
    return new (t || _PoPageJobSchedulerSummaryComponent)(ɵɵdirectiveInject(DatePipe));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PoPageJobSchedulerSummaryComponent,
    selectors: [["po-page-job-scheduler-summary"]],
    inputs: {
      literals: [0, "p-literals", "literals"],
      parameters: [0, "p-parameters", "parameters"],
      value: [0, "p-value", "value"],
      noParameters: [0, "p-no-parameters", "noParameters"],
      jobSchedulerSummaryTemplate: [0, "p-summary-template", "jobSchedulerSummaryTemplate"]
    },
    decls: 9,
    vars: 14,
    consts: [[1, "po-md-12"], [3, "p-label", "p-orientation", "p-value", 4, "ngIf"], [3, "p-label", "p-orientation", "p-value"], ["class", "po-pt-1 po-pb-1 po-md-12", 3, "p-title", 4, "ngIf"], ["class", "po-pt-1 po-pb-1 po-md-12", 4, "ngIf"], [1, "po-pt-1", "po-pb-1", "po-md-12", 3, "p-title"], [3, "p-fields", "p-value"], [1, "po-pt-1", "po-pb-1", "po-md-12"], [3, "ngTemplateOutlet"]],
    template: function PoPageJobSchedulerSummaryComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, PoPageJobSchedulerSummaryComponent_po_info_1_Template, 1, 3, "po-info", 1);
        ɵɵelement(2, "po-info", 2);
        ɵɵtemplate(3, PoPageJobSchedulerSummaryComponent_po_info_3_Template, 1, 3, "po-info", 1)(4, PoPageJobSchedulerSummaryComponent_po_info_4_Template, 1, 3, "po-info", 1);
        ɵɵelement(5, "po-info", 2)(6, "po-info", 2);
        ɵɵelementEnd();
        ɵɵtemplate(7, PoPageJobSchedulerSummaryComponent_po_widget_7_Template, 2, 3, "po-widget", 3)(8, PoPageJobSchedulerSummaryComponent_div_8_Template, 2, 1, "div", 4);
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.noParameters);
        ɵɵadvance();
        ɵɵproperty("p-label", ctx.literals.periodicity)("p-orientation", ctx.infoOrientation)("p-value", ctx.periodicityValue);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.frequencyValue !== "");
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.value.periodicity !== "single");
        ɵɵadvance();
        ɵɵproperty("p-label", ctx.literals.recurrent)("p-orientation", ctx.infoOrientation)("p-value", ctx.recurrentValue);
        ɵɵadvance();
        ɵɵproperty("p-label", ctx.literals.firstExecution)("p-orientation", ctx.infoOrientation)("p-value", ctx.firstExecutionValue);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.parameters && ctx.parameters.length && !ctx.jobSchedulerSummaryTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.jobSchedulerSummaryTemplate);
      }
    },
    dependencies: [NgIf, NgTemplateOutlet, PoDynamicViewComponent, PoInfoComponent, PoWidgetComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageJobSchedulerSummaryComponent, [{
    type: Component,
    args: [{
      selector: "po-page-job-scheduler-summary",
      template: `<div class="po-md-12">
  <po-info
    *ngIf="!noParameters"
    [p-label]="literals.process"
    [p-orientation]="infoOrientation"
    [p-value]="value.processID"
  >
  </po-info>

  <po-info [p-label]="literals.periodicity" [p-orientation]="infoOrientation" [p-value]="periodicityValue"> </po-info>

  <po-info
    *ngIf="frequencyValue !== ''"
    [p-label]="literals.frequency"
    [p-orientation]="infoOrientation"
    [p-value]="frequencyValue"
  >
  </po-info>

  <po-info
    *ngIf="value.periodicity !== 'single'"
    [p-label]="literals.execution"
    [p-orientation]="infoOrientation"
    [p-value]="executionValue"
  >
  </po-info>

  <po-info [p-label]="literals.recurrent" [p-orientation]="infoOrientation" [p-value]="recurrentValue"> </po-info>

  <po-info [p-label]="literals.firstExecution" [p-orientation]="infoOrientation" [p-value]="firstExecutionValue">
  </po-info>
</div>
<po-widget
  *ngIf="parameters && parameters.length && !jobSchedulerSummaryTemplate"
  class="po-pt-1 po-pb-1 po-md-12"
  [p-title]="literals.parameters"
>
  <po-dynamic-view [p-fields]="parameters" [p-value]="value.executionParameter"> </po-dynamic-view>
</po-widget>
<div *ngIf="jobSchedulerSummaryTemplate" class="po-pt-1 po-pb-1 po-md-12">
  <ng-template [ngTemplateOutlet]="jobSchedulerSummaryTemplate?.templateRef"></ng-template>
</div>
`
    }]
  }], () => [{
    type: DatePipe
  }], {
    literals: [{
      type: Input,
      args: ["p-literals"]
    }],
    parameters: [{
      type: Input,
      args: ["p-parameters"]
    }],
    value: [{
      type: Input,
      args: ["p-value"]
    }],
    noParameters: [{
      type: Input,
      args: ["p-no-parameters"]
    }],
    jobSchedulerSummaryTemplate: [{
      type: Input,
      args: ["p-summary-template"]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(PoPageJobSchedulerSummaryComponent, {
    className: "PoPageJobSchedulerSummaryComponent",
    filePath: "lib/components/po-page-job-scheduler/po-page-job-scheduler-summary/po-page-job-scheduler-summary.component.ts",
    lineNumber: 12
  });
})();
var _c0$1 = ["schedulerExecution"];
var _c1$1 = ["schedulerParameters"];
var _c2 = () => [];
function PoPageJobSchedulerComponent_po_page_job_scheduler_parameters_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "po-page-job-scheduler-parameters", 11, 2);
    ɵɵtwoWayListener("p-valueChange", function PoPageJobSchedulerComponent_po_page_job_scheduler_parameters_9_Template_po_page_job_scheduler_parameters_p_valueChange_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r2.model.executionParameter, $event) || (ctx_r2.model.executionParameter = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("hidden", ctx_r2.step !== ctx_r2.stepParameters)("p-literals", ctx_r2.literals)("p-parameters", ctx_r2.parameters || ɵɵpureFunction0(4, _c2));
    ɵɵtwoWayProperty("p-value", ctx_r2.model.executionParameter);
  }
}
function PoPageJobSchedulerComponent_po_page_job_scheduler_summary_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "po-page-job-scheduler-summary", 12);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("p-no-parameters", !ctx_r2.parameters.length)("p-summary-template", ctx_r2.jobSchedulerSummaryTemplate)("p-literals", ctx_r2.literals)("p-parameters", ctx_r2.parameters)("p-value", ctx_r2.publicValues);
  }
}
function PoPageJobSchedulerComponent_ng_container_11_ng_template_2_Template(rf, ctx) {
}
function PoPageJobSchedulerComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 13);
    ɵɵtemplate(2, PoPageJobSchedulerComponent_ng_container_11_ng_template_2_Template, 0, 0, "ng-template", 14);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const template_r4 = ctx.$implicit;
    const index_r5 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("hidden", ctx_r2.step !== index_r5 + (ctx_r2._stepExecutionLast ? 1 : 2));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", template_r4 == null ? null : template_r4.templateRef);
  }
}
var PoPageJobSchedulerComponent = class _PoPageJobSchedulerComponent extends PoPageJobSchedulerBaseComponent {
  poPageDynamicLookupService;
  activatedRoute;
  poDialogService;
  poNotification;
  poPageJobSchedulerService;
  schedulerExecution;
  schedulerParameters;
  parametersTemplate;
  jobSchedulerSummaryTemplate;
  isEdit = false;
  literals = __spreadValues({}, poPageJobSchedulerLiteralsDefault[poLocaleDefault]);
  publicValues;
  saveOperation;
  step = 1;
  parametersEmpty = true;
  stepParametersInitialized = false;
  steps = [];
  backPageAction = {
    label: this.literals.back,
    action: this.nextStepOperation.bind(this, "back"),
    disabled: this.isDisabledBack.bind(this)
  };
  concludePageAction = {
    label: this.literals.conclude,
    action: this.confirmJobScheduler.bind(this)
  };
  nextPageAction = {
    label: this.literals.next,
    action: this.nextStepOperation.bind(this, "next"),
    disabled: this.isDisabledAdvance.bind(this)
  };
  concludePageActions = [this.concludePageAction, this.backPageAction];
  nextPageActions = [this.nextPageAction, this.backPageAction];
  // eslint-disable-next-line @typescript-eslint/member-ordering
  jobSchedulerActions = [...this.nextPageActions];
  stepExecution = 1;
  stepParameters = 2;
  stepSummary = 3;
  _stepExecutionLast;
  constructor(poPageDynamicLookupService, activatedRoute, poDialogService, poNotification, poPageJobSchedulerService, languageService) {
    super(poPageJobSchedulerService);
    this.poPageDynamicLookupService = poPageDynamicLookupService;
    this.activatedRoute = activatedRoute;
    this.poDialogService = poDialogService;
    this.poNotification = poNotification;
    this.poPageJobSchedulerService = poPageJobSchedulerService;
    const language = languageService.getShortLanguage();
    this.literals = __spreadValues(__spreadValues({}, this.literals), poPageJobSchedulerLiteralsDefault[language]);
    this.backPageAction.label = this.literals.back;
    this.concludePageAction.label = this.literals.conclude;
    this.nextPageAction.label = this.literals.next;
  }
  get stepperOrientation() {
    return this.stepperDefaultOrientation || (window.innerWidth > 481 && window.innerWidth < 960 ? "horizontal" : "vertical");
  }
  ngOnInit() {
    const paramId = this.activatedRoute.snapshot.params["id"];
    this.isEdit = !!paramId;
    this.poPageJobSchedulerService.configServiceApi({
      endpoint: this.serviceApi
    });
    if (this.parameters.length) {
      this.parametersEmpty = false;
    }
    this.loadData(paramId);
  }
  ngAfterContentInit() {
    this.checkStepExecutionLast();
    this.getSteps();
  }
  changePageActionsBySteps(currentStep, nextStep) {
    const stepsLength = this.steps.length;
    if (nextStep === stepsLength) {
      this.jobSchedulerActions = [...this.concludePageActions];
    } else if (currentStep === stepsLength && nextStep < currentStep) {
      this.jobSchedulerActions = [...this.nextPageActions];
    }
  }
  nextStep(stepNumber) {
    const operation = stepNumber > this.step ? "next" : "back";
    const jumpStep = (stepNumber - this.step) * (operation === "back" ? -1 : 1);
    if (jumpStep > 1) {
      return;
    }
    if (!this.validateStepExecution()) {
      return;
    }
    if (operation === "next" && !this.validateStepSchedulerParameters()) {
      return;
    }
    if (operation === "next" && !this.validateStepTemplateParameters()) {
      return;
    }
    if (this.step === this.stepExecution) {
      this.setModelRecurrent();
    }
    this.setPropertiesFromTemplate();
    if (stepNumber === this.steps.length) {
      const model = JSON.parse(JSON.stringify(this.model));
      this.publicValues = this.hidesSecretValues(model);
    }
    this.steps[this.step - 1].status = operation === "next" ? PoStepperStatus.Done : PoStepperStatus.Default;
    this.changePageActionsBySteps(this.step, stepNumber);
    this.step = stepNumber;
    this.stepParametersInitialized = this.stepParametersInitialized || stepNumber === this.stepParameters;
  }
  onChangeProcess(process) {
    if (process.existAPI && process.processId && this.parametersEmpty && !this.parametersTemplate.length) {
      this.getParametersByProcess(process.processId);
      if (!this.isEdit) {
        this.model.executionParameter = {};
      }
    }
  }
  checkStepExecutionLast() {
    if (!this.parametersTemplate.length) {
      this._stepExecutionLast = false;
      return;
    }
    this._stepExecutionLast = this.stepExecutionLast;
  }
  confirmJobScheduler() {
    const paramId = this.activatedRoute.snapshot.params["id"];
    const confirmMessage = paramId ? this.literals.confirmUpdateMessage : this.literals.confirmSaveMessage;
    this.poDialogService.confirm({
      title: this.literals.confirmation,
      message: confirmMessage,
      confirm: () => {
        const beforeSendModel = this.beforeSendAction ? this.beforeSendAction(this.model) : void 0;
        const model = __spreadValues({}, beforeSendModel || this.model);
        this.save(model, paramId);
      }
    });
  }
  emitSuccessMessage(msgSuccess, saveOperation) {
    saveOperation.subscribe({
      next: () => {
        this.success.emit();
        this.poNotification.success(msgSuccess);
        this.resetJobSchedulerForm();
      },
      error: (e) => this.error.emit(e)
    });
  }
  getParametersByProcess(process) {
    this.poPageJobSchedulerService.getParametersByProcess(process).subscribe((parameters) => {
      this.parameters = parameters;
    });
  }
  hidesSecretValues(model) {
    const hiddenSecretValue = "**********";
    this.parameters.forEach((parameter) => {
      if (this.isSecretParameter(model, parameter)) {
        model.executionParameter[parameter.property] = hiddenSecretValue;
      }
    });
    return model;
  }
  getSteps() {
    const templateArray = [];
    this.parametersTemplate.toArray().forEach((value, index, array) => {
      templateArray.push({
        label: value.title || `${this.literals.parameterization} ${array.length > 1 ? index + 1 : ""}`
      });
    });
    let _steps = [];
    if (!this._stepExecutionLast) {
      _steps.push({
        label: this.literals.scheduling
      });
    }
    if (!templateArray.length) {
      _steps.push({
        label: this.literals.parameterization
      });
    } else {
      _steps = [..._steps, ...templateArray];
    }
    if (this._stepExecutionLast) {
      _steps.push({
        label: this.literals.scheduling
      });
    }
    _steps.push({
      label: this.literals.conclude
    });
    this.steps = _steps;
    this.stepSummary = this.steps.length;
    if (this._stepExecutionLast) {
      this.stepExecution = this.stepSummary - 1;
    }
  }
  getTemplateCurrent() {
    const indexTemplate = this.step - (this.stepExecutionLast ? 1 : 2);
    return this.parametersTemplate.toArray()[indexTemplate];
  }
  templateHasDisable() {
    const template = this.getTemplateCurrent();
    return !template?.disabledAdvance;
  }
  isDisabledAdvance() {
    if (this.step === this.stepExecution) {
      return this.schedulerExecution?.form?.invalid;
    }
    if (this.schedulerParameters) {
      return this.schedulerParameters?.form?.invalid;
    }
    const templateCurrent = this.getTemplateCurrent();
    if (templateCurrent) {
      return templateCurrent.disabledAdvance;
    }
    return false;
  }
  isDisabledBack() {
    return this.step === 1;
  }
  isSecretParameter(model, parameter) {
    return model.executionParameter && parameter.hasOwnProperty("secret") && parameter["secret"] === true && model.executionParameter.hasOwnProperty(parameter.property);
  }
  nextStepOperation(operation) {
    const stepNumber = operation === "back" ? this.step - 1 : this.step + 1;
    this.nextStep(stepNumber);
  }
  resetJobSchedulerForm() {
    this.schedulerExecution.form.reset();
    setTimeout(() => {
      this.model = new PoPageJobSchedulerInternal();
      this.step = 1;
      this.steps.forEach((step) => {
        step.status = PoStepperStatus.Default;
      });
      this.jobSchedulerActions = [...this.nextPageActions];
    });
  }
  save(model, paramId) {
    const saveOperation = paramId ? this.poPageJobSchedulerService.updateResource(paramId, model) : this.poPageJobSchedulerService.createResource(model);
    const msgSuccess = paramId ? this.literals.saveNotificationSuccessUpdate : this.literals.saveNotificationSuccessSave;
    this.emitSuccessMessage(msgSuccess, saveOperation);
  }
  setModelRecurrent() {
    this.model.recurrent = this.model.periodicity === "single" ? false : this.model.recurrent;
  }
  setPropertiesFromTemplate() {
    const templateCurrent = this.getTemplateCurrent();
    if (!templateCurrent) {
      return;
    }
    this.model = __spreadProps(__spreadValues({}, this.model), {
      executionParameter: __spreadValues(__spreadValues({}, this.model.executionParameter), templateCurrent.executionParameter)
    });
  }
  validateStepExecution() {
    const stepCurrent = this.step;
    if (stepCurrent == this.stepExecution && this.schedulerExecution.form.invalid) {
      this.markAsDirtyInvalidControls(this.schedulerExecution.form.controls);
      return false;
    }
    return true;
  }
  validateStepSchedulerParameters() {
    if (this.step === this.stepExecution || this.step === this.stepSummary) {
      return true;
    }
    if (this.schedulerParameters && this.schedulerParameters.form && this.schedulerParameters.form.invalid) {
      this.markAsDirtyInvalidControls(this.schedulerParameters.form.controls);
      return false;
    }
    return true;
  }
  validateStepTemplateParameters() {
    if (this.step === this.stepExecution || this.step === this.stepSummary) {
      return true;
    }
    if (!this.parametersTemplate.length) {
      return true;
    }
    return this.templateHasDisable();
  }
  static ɵfac = function PoPageJobSchedulerComponent_Factory(t) {
    return new (t || _PoPageJobSchedulerComponent)(ɵɵdirectiveInject(PoPageJobSchedulerLookupService), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(PoDialogService), ɵɵdirectiveInject(PoNotificationService), ɵɵdirectiveInject(PoPageJobSchedulerService), ɵɵdirectiveInject(PoLanguageService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PoPageJobSchedulerComponent,
    selectors: [["po-page-job-scheduler"]],
    contentQueries: function PoPageJobSchedulerComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PoJobSchedulerSummaryTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, PoJobSchedulerParametersTemplateDirective, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.jobSchedulerSummaryTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.parametersTemplate = _t);
      }
    },
    viewQuery: function PoPageJobSchedulerComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0$1, 7);
        ɵɵviewQuery(_c1$1, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.schedulerExecution = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.schedulerParameters = _t.first);
      }
    },
    features: [ɵɵInheritDefinitionFeature],
    decls: 12,
    vars: 17,
    consts: [["formScheduler", "ngForm"], ["schedulerExecution", ""], ["schedulerParameters", ""], [3, "p-actions", "p-breadcrumb", "p-title"], [1, "po-row"], ["p-sequential", "true", 3, "p-change-step", "ngClass", "p-orientation", "p-step", "p-steps"], [3, "ngClass"], [1, "po-md-12", 3, "p-change-process", "p-no-parameters", "p-no-custom-params-component", "hidden", "p-is-edit", "p-literals", "p-value"], ["class", "po-md-12", 3, "hidden", "p-literals", "p-parameters", "p-value", "p-valueChange", 4, "ngIf"], ["class", "po-md-12", 3, "p-no-parameters", "p-summary-template", "p-literals", "p-parameters", "p-value", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "po-md-12", 3, "p-valueChange", "hidden", "p-literals", "p-parameters", "p-value"], [1, "po-md-12", 3, "p-no-parameters", "p-summary-template", "p-literals", "p-parameters", "p-value"], [3, "hidden"], [3, "ngTemplateOutlet"]],
    template: function PoPageJobSchedulerComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "po-page-default", 3)(1, "div", 4)(2, "po-stepper", 5);
        ɵɵlistener("p-change-step", function PoPageJobSchedulerComponent_Template_po_stepper_p_change_step_2_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.nextStep($event));
        });
        ɵɵelementEnd();
        ɵɵelementStart(3, "po-container", 6)(4, "form", null, 0)(6, "div", 4)(7, "po-page-job-scheduler-execution", 7, 1);
        ɵɵlistener("p-change-process", function PoPageJobSchedulerComponent_Template_po_page_job_scheduler_execution_p_change_process_7_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onChangeProcess($event));
        });
        ɵɵelementEnd();
        ɵɵtemplate(9, PoPageJobSchedulerComponent_po_page_job_scheduler_parameters_9_Template, 2, 5, "po-page-job-scheduler-parameters", 8)(10, PoPageJobSchedulerComponent_po_page_job_scheduler_summary_10_Template, 1, 5, "po-page-job-scheduler-summary", 9);
        ɵɵelementEnd()();
        ɵɵtemplate(11, PoPageJobSchedulerComponent_ng_container_11_Template, 3, 2, "ng-container", 10);
        ɵɵelementEnd()()();
      }
      if (rf & 2) {
        ɵɵproperty("p-actions", ctx.jobSchedulerActions)("p-breadcrumb", ctx.breadcrumb)("p-title", ctx.title);
        ɵɵadvance(2);
        ɵɵproperty("ngClass", ctx.stepperDefaultOrientation === "horizontal" ? "po-lg-12 po-xl-12" : "po-lg-3 po-xl-2")("p-orientation", ctx.stepperOrientation)("p-step", ctx.step)("p-steps", ctx.steps);
        ɵɵadvance();
        ɵɵproperty("ngClass", ctx.stepperDefaultOrientation === "horizontal" ? "po-lg-12 po-xl-12" : "po-lg-8 po-xl-6");
        ɵɵadvance(4);
        ɵɵproperty("p-no-parameters", ctx.parametersEmpty)("p-no-custom-params-component", !ctx.parametersTemplate.length)("hidden", ctx.step !== ctx.stepExecution)("p-is-edit", ctx.isEdit)("p-literals", ctx.literals)("p-value", ctx.model);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.stepParametersInitialized && !ctx.parametersTemplate.length);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.step === ctx.stepSummary);
        ɵɵadvance();
        ɵɵproperty("ngForOf", ctx.parametersTemplate);
      }
    },
    dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, ɵNgNoValidate, NgControlStatusGroup, NgForm, PoContainerComponent, PoPageDefaultComponent, PoStepperComponent, PoPageJobSchedulerExecutionComponent, PoPageJobSchedulerParametersComponent, PoPageJobSchedulerSummaryComponent],
    styles: ["po-container .po-container{overflow-y:unset}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageJobSchedulerComponent, [{
    type: Component,
    args: [{
      selector: "po-page-job-scheduler",
      encapsulation: ViewEncapsulation$1.None,
      template: `<po-page-default [p-actions]="jobSchedulerActions" [p-breadcrumb]="breadcrumb" [p-title]="title">
  <div class="po-row">
    <po-stepper
      [ngClass]="stepperDefaultOrientation === 'horizontal' ? 'po-lg-12 po-xl-12' : 'po-lg-3 po-xl-2'"
      p-sequential="true"
      [p-orientation]="stepperOrientation"
      [p-step]="step"
      [p-steps]="steps"
      (p-change-step)="nextStep($event)"
    >
    </po-stepper>

    <po-container [ngClass]="stepperDefaultOrientation === 'horizontal' ? 'po-lg-12 po-xl-12' : 'po-lg-8 po-xl-6'">
      <form #formScheduler="ngForm">
        <div class="po-row">
          <po-page-job-scheduler-execution
            [p-no-parameters]="parametersEmpty"
            [p-no-custom-params-component]="!parametersTemplate.length"
            [hidden]="step !== stepExecution"
            #schedulerExecution
            class="po-md-12"
            [p-is-edit]="isEdit"
            [p-literals]="literals"
            [p-value]="model"
            (p-change-process)="onChangeProcess($event)"
          >
          </po-page-job-scheduler-execution>

          <po-page-job-scheduler-parameters
            *ngIf="stepParametersInitialized && !parametersTemplate.length"
            [hidden]="step !== stepParameters"
            #schedulerParameters
            class="po-md-12"
            [p-literals]="literals"
            [p-parameters]="parameters || []"
            [(p-value)]="model.executionParameter"
          >
          </po-page-job-scheduler-parameters>

          <po-page-job-scheduler-summary
            *ngIf="step === stepSummary"
            [p-no-parameters]="!parameters.length"
            [p-summary-template]="jobSchedulerSummaryTemplate"
            class="po-md-12"
            [p-literals]="literals"
            [p-parameters]="parameters"
            [p-value]="publicValues"
          >
          </po-page-job-scheduler-summary>
        </div>
      </form>

      <ng-container *ngFor="let template of parametersTemplate; index as index">
        <div [hidden]="step !== index + (_stepExecutionLast ? 1 : 2)">
          <ng-template [ngTemplateOutlet]="template?.templateRef"></ng-template>
        </div>
      </ng-container>
    </po-container>
  </div>
</po-page-default>
`,
      styles: ["po-container .po-container{overflow-y:unset}\n"]
    }]
  }], () => [{
    type: PoPageJobSchedulerLookupService
  }, {
    type: ActivatedRoute
  }, {
    type: PoDialogService
  }, {
    type: PoNotificationService
  }, {
    type: PoPageJobSchedulerService
  }, {
    type: PoLanguageService
  }], {
    schedulerExecution: [{
      type: ViewChild,
      args: ["schedulerExecution", {
        static: true
      }]
    }],
    schedulerParameters: [{
      type: ViewChild,
      args: ["schedulerParameters"]
    }],
    parametersTemplate: [{
      type: ContentChildren,
      args: [PoJobSchedulerParametersTemplateDirective]
    }],
    jobSchedulerSummaryTemplate: [{
      type: ContentChild,
      args: [PoJobSchedulerSummaryTemplateDirective]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(PoPageJobSchedulerComponent, {
    className: "PoPageJobSchedulerComponent",
    filePath: "lib/components/po-page-job-scheduler/po-page-job-scheduler.component.ts",
    lineNumber: 64
  });
})();
var PoPageJobSchedulerModule = class _PoPageJobSchedulerModule {
  static ɵfac = function PoPageJobSchedulerModule_Factory(t) {
    return new (t || _PoPageJobSchedulerModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _PoPageJobSchedulerModule
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [PoPageJobSchedulerService, PoPageJobSchedulerLookupService],
    imports: [CommonModule, FormsModule, PoButtonModule, PoContainerModule, PoDialogModule, PoDividerModule, PoDynamicModule, PoFieldModule, PoIconModule, PoInfoModule, PoPageModule, PoStepperModule, PoWidgetModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageJobSchedulerModule, [{
    type: NgModule,
    args: [{
      declarations: [PoPageJobSchedulerComponent, PoPageJobSchedulerExecutionComponent, PoPageJobSchedulerParametersComponent, PoPageJobSchedulerSummaryComponent, PoJobSchedulerParametersTemplateDirective, PoJobSchedulerSummaryTemplateDirective],
      exports: [PoPageJobSchedulerComponent, PoJobSchedulerParametersTemplateDirective, PoJobSchedulerSummaryTemplateDirective],
      imports: [CommonModule, FormsModule, PoButtonModule, PoContainerModule, PoDialogModule, PoDividerModule, PoDynamicModule, PoFieldModule, PoIconModule, PoInfoModule, PoPageModule, PoStepperModule, PoWidgetModule],
      providers: [PoPageJobSchedulerService, PoPageJobSchedulerLookupService]
    }]
  }], null, null);
})();
(function() {
  (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PoPageJobSchedulerModule, {
    declarations: [PoPageJobSchedulerComponent, PoPageJobSchedulerExecutionComponent, PoPageJobSchedulerParametersComponent, PoPageJobSchedulerSummaryComponent, PoJobSchedulerParametersTemplateDirective, PoJobSchedulerSummaryTemplateDirective],
    imports: [CommonModule, FormsModule, PoButtonModule, PoContainerModule, PoDialogModule, PoDividerModule, PoDynamicModule, PoFieldModule, PoIconModule, PoInfoModule, PoPageModule, PoStepperModule, PoWidgetModule],
    exports: [PoPageJobSchedulerComponent, PoJobSchedulerParametersTemplateDirective, PoJobSchedulerSummaryTemplateDirective]
  });
})();
var PoPageLoginAuthenticationType;
(function(PoPageLoginAuthenticationType2) {
  PoPageLoginAuthenticationType2["Basic"] = "Basic";
  PoPageLoginAuthenticationType2["Bearer"] = "Bearer";
})(PoPageLoginAuthenticationType || (PoPageLoginAuthenticationType = {}));
var PoPageLoginService = class _PoPageLoginService {
  http;
  constructor(http) {
    this.http = http;
  }
  onLogin(url, type, loginForm) {
    if (type === PoPageLoginAuthenticationType.Bearer) {
      loginForm.password = btoa(loginForm.password);
      return this.http.post(url, loginForm);
    } else {
      const user = `(${loginForm.login}:${loginForm.password})`;
      const headers = new HttpHeaders({
        "Authorization": `${type} ` + btoa(user)
      });
      delete loginForm.login;
      delete loginForm.password;
      return this.http.post(url, loginForm, {
        headers
      });
    }
  }
  static ɵfac = function PoPageLoginService_Factory(t) {
    return new (t || _PoPageLoginService)(ɵɵinject(HttpClient));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _PoPageLoginService,
    factory: _PoPageLoginService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageLoginService, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }], null);
})();
var poPageLoginContentMaxLength = 40;
var poPageLoginLiteralsDefault = {
  en: {
    title: "Welcome",
    loginErrorPattern: "Invalid Login",
    loginHint: `Your login user was given to you at your first day.
    If you don't have this information contact support`,
    loginPlaceholder: "Insert your e-mail",
    passwordErrorPattern: "Invalid Password",
    passwordPlaceholder: "Insert your password",
    customFieldErrorPattern: "Invalid value",
    customFieldPlaceholder: "Please enter a value",
    rememberUser: "Automatic login",
    rememberUserHint: "You can disable this option in system configuration",
    submitLabel: "Enter",
    submittedLabel: "Loading...",
    forgotPassword: "Forgot your Password?",
    highlightInfo: "",
    registerUrl: "New register",
    titlePopover: "Oops!",
    forgotYourPassword: "Forgot your password?",
    ifYouTryHarder: "If you try ",
    attempts: "{0} more time(s) ",
    yourUserWillBeBlocked: "without success your user will be blocked and you will be left 24 hours without being able to access :(",
    createANewPasswordNow: "Better create a new password now! You will be able to log into the system right away.",
    iForgotMyPassword: "I forgot my password",
    welcome: "Welcome",
    support: "Support"
  },
  es: {
    title: "Bienvenido",
    loginErrorPattern: "Login inválido",
    loginHint: `Su usuario ha sido entregado para usted en su primer día.
    Si no tiene esta información, póngase en contacto con el soporte técnico`,
    loginPlaceholder: "Inserte su e-mail",
    passwordErrorPattern: "Contraseña inválida",
    passwordPlaceholder: "Inserte su contraseña",
    customFieldErrorPattern: "Valor no válido.",
    customFieldPlaceholder: "Por favor introduzca un valor",
    rememberUser: "Inicio de sesión automáticamente",
    rememberUserHint: "Puede deshabilitar esta opción en el menú del sistema.",
    submitLabel: "Entrar",
    submittedLabel: "Cargando...",
    forgotPassword: "Olvidaste tu contraseña?",
    highlightInfo: "",
    registerUrl: "Nuevo registro",
    titlePopover: "Opa!",
    forgotYourPassword: "Olvidaste tu contraseña?",
    ifYouTryHarder: "Si intenta más ",
    attempts: "{0} vez/veces ",
    yourUserWillBeBlocked: "sin éxito su usuario sera bloqueado y usted vás permanecer 24 horas sin poder acceder a :(",
    createANewPasswordNow: "¡Mejor crear una nueva contraseña ahora! Usted podrá entrar en el sistema inmediatamente después.",
    iForgotMyPassword: "Olvide mi contraseña",
    welcome: "Bienvenido",
    support: "Soporte"
  },
  pt: {
    title: "Bem-vindo",
    loginErrorPattern: "Login inválido",
    loginHint: `Seu usuário foi entregue a você no seu primeiro dia.
    Caso não tenha mais essa informação contacte o suporte`,
    loginPlaceholder: "Insira seu e-mail",
    passwordErrorPattern: "Senha inválida",
    passwordPlaceholder: "Insira sua senha",
    customFieldErrorPattern: "Valor inválido.",
    customFieldPlaceholder: "Por favor insira um valor",
    rememberUser: "Logar automaticamente",
    rememberUserHint: "Você pode desabilitar essa opção no menu do sistema",
    submitLabel: "Entrar",
    submittedLabel: "Carregando...",
    forgotPassword: "Esqueceu sua senha?",
    highlightInfo: "",
    registerUrl: "Novo registro",
    titlePopover: "Opa!",
    forgotYourPassword: "Esqueceu sua senha?",
    ifYouTryHarder: "Se tentar mais ",
    attempts: "{0} vez(es) ",
    yourUserWillBeBlocked: "sem sucesso seu usuário será bloqueado e você fica 24 horas sem poder acessar :(",
    createANewPasswordNow: "Melhor criar uma senha nova agora! Você vai poder entrar no sistema logo em seguida.",
    iForgotMyPassword: "Esqueci minha senha",
    welcome: "Boas-vindas",
    support: "Suporte"
  },
  ru: {
    title: "Добро пожаловать!",
    loginErrorPattern: "Неверный логин",
    loginHint: `Ваш логин был предоставлен вам в первый день.
    Если у вас нет этой информации, обратитесь в службу поддержки`,
    loginPlaceholder: "Вставьте свой адрес электронной почты",
    passwordErrorPattern: "Неверный пароль",
    passwordPlaceholder: "Введите свой пароль",
    customFieldErrorPattern: "Неверное значение.",
    customFieldPlaceholder: "Пожалуйста, введите значение",
    rememberUser: "Автоматический вход",
    rememberUserHint: "Вы можете отключить эту опцию в конфигурации системы",
    submitLabel: "Войти",
    submittedLabel: "3агрузка...",
    forgotPassword: "Забыли пароль?",
    highlightInfo: "",
    registerUrl: "Новый регистр",
    titlePopover: "Ой!",
    forgotYourPassword: "Забыли пароль?",
    ifYouTryHarder: "Если вы безуспешно попытаетесь войти еще ",
    attempts: "{0} раз(а) ",
    yourUserWillBeBlocked: "Ваш пользователь будет заблокирован, и Вы останетесь на 24 часа без возможности доступа :(",
    createANewPasswordNow: "Лучше создайте новый пароль сейчас! Вы сможете сразу войти в систему.",
    iForgotMyPassword: "Я забыл свой пароль",
    welcome: "добро пожаловать",
    support: "Поддержка"
  }
};
var poPageLoginLiteralIn = {
  en: "in",
  es: "en",
  pt: "em",
  ru: "в"
};
var PoPageLoginBaseComponent = class _PoPageLoginBaseComponent {
  loginService;
  router;
  poLanguageService;
  /**
   * O `p-background` permite inserir uma imagem de destaque ao lado direito do formulário de login, caso a propriedade
   * não seja preenchida o formulário será centralizado no espaço disponível.
   *
   * A fonte da imagem pode ser de um caminho local ou uma url de um servidor externo.
   *
   * Além da imagem, é possível adicionar um texto informativo por cima da imagem da imagem de destaque, para isso informe
   * um valor para a literal `highlightInfo`.
   *
   * > Veja mais sobre as literais na propriedade `p-literals`.
   *
   * Exemplos de valores válidos:
   * - **local**: `./assets/images/login-background.png`
   * - **url externa**: `https://po-ui.io/assets/images/login-background.png`
   *
   * > Essa propriedade é ignorada para aplicações mobile.
   */
  background;
  /**
   * @optional
   *
   * @description
   *
   * Caminho para a logomarca localizada na parte superior.
   *
   * > Caso seja indefinida o espaço se mantém preservado porém vazio.
   */
  logo;
  /**
   * @optional
   *
   * @description
   *
   * Expressão regular para validar o campo de login, caso a expressão não seja atentida, a literal `loginErrorPattern`
   * será exibida.
   *
   * Exemplos de valores válidos:
   * - email: `[expressao-regular-email]`
   * - cpf: `[expressao-regular-cpf]`
   *
   * > Veja a propriedade `p-literals` para customizar a literal `loginErrorPattern`.
   */
  loginPattern;
  /**
   * @optional
   *
   * @description
   *
   * Expressão regular para validar o campo de password, caso a expressão não seja atentida, a literal `passwordErrorPattern`
   * será exibida.
   *
   * Exemplos de valores válidos:
   * - Apenas números: `\d?`
   * - Letras mínusculas: `\z?`
   *
   * > Veja a propriedade `p-literals` para customizar a literal `passwordErrorPattern`.
   */
  passwordPattern;
  /**
   * @optional
   *
   * @description
   *
   * Caminho para a logomarca localizada no rodapé.
   */
  secondaryLogo;
  /**
   * @optional
   *
   * @description
   *
   * Evento disparado quando o usuário alterar o input do campo login.
   *
   * Esse evento receberá como parâmetro uma variável do tipo `string` com o texto informado no campo.
   *
   * > Esta propriedade será ignorada se for definido valor para a propriedade `p-authentication-url`.
   */
  loginChange = new EventEmitter();
  /**
   * Evento disparado ao submeter o formulário de login (apertando `Enter` dentro dos campos ou pressionando o botão de confirmação).
   *
   * Esse evento receberá como parâmetro um objeto do tipo `PoPageLogin` com os dados informados no formulário.
   *
   * > Esta propriedade será ignorada se for definido valor para a propriedade `p-url-recovery`.
   *
   * > Para mais detalhes consulte a documentação sobre a interface `PoPageLogin` mais abaixo.
   */
  loginSubmit = new EventEmitter();
  /**
   * @optional
   *
   * @description
   *
   * Evento disparado quando o usuário alterar o input do campo password.
   *
   * Esse evento receberá como parâmetro uma variável do tipo `string` com o texto informado no campo.
   *
   * > Esta propriedade será ignorada se for definido valor para a propriedade `p-authentication-url`.
   */
  passwordChange = new EventEmitter();
  /**
   * @optional
   *
   * @description
   *
   * Evento disparado quando o usuário alterar o idioma da página.
   *
   * Esse evento receberá como parâmetro um objeto do tipo `PoLanguage` com a linguagem selecionada.
   *
   */
  languageChange = new EventEmitter();
  /**
   * @optional
   *
   * @description
   *
   * Define a propriedade nativa `autocomplete` do campo como `off`.
   *
   * @default `false`
   */
  noAutocompleteLogin;
  /**
   * @optional
   *
   * @description
   *
   * Define a propriedade nativa `autocomplete` do campo como `off`.
   *
   * > No componente `po-password` será definido como `new-password`.
   *
   * @default `false`
   */
  noAutocompletePassword;
  /**
   * @optional
   *
   * @description
   *
   * Permite esconder a função de espiar a senha digitada.
   *
   * @default `false`
   */
  hidePasswordPeek;
  allLoginErrors = [];
  allPasswordErrors = [];
  customFieldObject;
  customFieldType;
  loginSubscription;
  password;
  rememberUser = false;
  selectedLanguage;
  showExceededAttemptsWarning = false;
  _authenticationType = PoPageLoginAuthenticationType.Basic;
  _authenticationUrl;
  _blockedUrl;
  _contactEmail;
  _customField;
  _environment;
  _exceededAttemptsWarning;
  _hideRememberUser = false;
  _literals;
  _loading = false;
  _login;
  _loginErrors = [];
  _passwordErrors = [];
  _productName;
  _recovery;
  _registerUrl;
  _support;
  _languagesList;
  /**
   * @optional
   *
   * @description
   *
   * Ao informar um valor do tipo `string`, o mesmo será aplicado como a chave do campo customizado e utilizará
   * os valores padrões contidos na propriedade `literals` como `customFieldErrorPattern` e `customFieldPlaceholder`.
   *
   * Existe a possibilidade de informar um objeto que segue a definição da interface `PoPageLoginCustomField`, onde
   * através dos parâmetros enviados pode gerar um `po-input`, `po-combo` especificamente para serviços
   * ou `po-select` para valores fixos.
   *
   * Abaixo seguem os exemplos de cada tipo de campo.
   *
   * `po-input`:
   *
   * ```
   * {
   *   property: 'domain',
   *   value: 'jv01',
   *   placeholder: 'Enter your domain',
   *   pattern: '[a-z]',
   *   errorPattern: 'Invalid value'
   * }
   * ```
   *
   * `po-combo`:
   *
   * ```
   * {
   *   property: 'domain',
   *   value: 'jv01',
   *   placeholder: 'Enter your domain',
   *   url: 'https://po-ui.io/sample/api/comboOption/domains',
   *   fieldValue: 'nickname'
   * }
   * ```
   *
   * `po-select`:
   *
   * ```
   * {
   *   property: 'domain',
   *   value: 'jv01',
   *   placeholder: 'Enter your domain',
   *   options: [{label: 'Domain 1', value: '1'}, {label: 'Domain 2', value: '2'}]
   * }
   * ```
   *
   * Caso o customField possua options, url e fieldValue preenchidos, será priorizado o po-select
   * utilizando o options.
   *
   */
  set customField(value) {
    if (value) {
      if (isTypeof(value, "string")) {
        this.customFieldType = "input";
        this._customField = value;
        this.customFieldObject = this.getDefaultCustomFieldObject(value);
        return;
      }
      if (isTypeof(value, "object") && !Array.isArray(value) && value["property"]) {
        this._customField = value;
        this.customFieldObject = value;
        if (!this.customFieldObject.options && !this.customFieldObject.url) {
          this.customFieldType = "input";
        } else {
          this.customFieldType = this.customFieldObject.options ? "select" : "combo";
        }
        return;
      }
    }
    this._customField = void 0;
    this.customFieldObject = void 0;
  }
  get customField() {
    return this._customField;
  }
  /**
   * @optional
   *
   * @description
   *
   * Personaliza o e-mail que é exibido na mensagem de dica de login padrão para contato de suporte.
   */
  set contactEmail(value) {
    this._contactEmail = value;
  }
  get contactEmail() {
    return this._contactEmail;
  }
  /**
   * @optional
   *
   * @description
   *
   * Texto customizado que fica entre a logo e a mensagem de boas-vindas.
   */
  set productName(value) {
    this._productName = value;
  }
  get productName() {
    return this._productName;
  }
  /**
   * @optional
   *
   * @description
   * Adiciona uma `tag` abaixo do título que especifica o ambiente que o usuário está fazendo o login.
   *
   * > Essa propriedade limita o texto em 40 caracteres.
   */
  set environment(environment) {
    if (environment && environment.length > poPageLoginContentMaxLength) {
      this._environment = environment.substring(0, poPageLoginContentMaxLength);
    } else {
      this._environment = environment;
    }
  }
  get environment() {
    return this._environment;
  }
  /**
   * @optional
   *
   * @description
   * Exibe um aviso de bloqueio de acordo com a quantidade restante de tentativas.
   * O aviso será exibido somente se a quantidade for maior que zero.
   *
   * > Caso tenha algum valor atribuído para o atributo `p-authentication-url` e o retorno da requisição estiver atribuindo valor
   * para o `p-exceeded-attempts-warning`, o valor considerado será o do retorno da requisição.
   *
   * @default `0`
   */
  set exceededAttemptsWarning(value) {
    this._exceededAttemptsWarning = convertToInt(value);
    this.showExceededAttemptsWarning = this.exceededAttemptsWarning > 0;
  }
  get exceededAttemptsWarning() {
    return this._exceededAttemptsWarning;
  }
  /**
   * @optional
   *
   * @description
   *
   * Esconde a função "Lembrar usuário" do formulário de login.
   *
   * Quando essa propriedade é setada com `true` a propriedade `rememberUser` enviada no evento `p-login-submit` será sempre
   * `false`.
   *
   * > Veja a propriedade `p-literals` para customizar a literal `rememberUser`.
   *
   * @default `false`
   */
  set hideRememberUser(value) {
    this._hideRememberUser = value === "" ? true : convertToBoolean(value);
    if (this._hideRememberUser) {
      this.rememberUser = false;
    }
  }
  get hideRememberUser() {
    return this._hideRememberUser;
  }
  /**
   * @optional
   *
   * @description
   *
   * Objeto com as literais usadas no `po-page-login`.
   *
   * Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:
   *
   * ```
   *  const customLiterals: PoPageLoginLiterals = {
   *    attempts: '{0} vez(es) ',
   *    createANewPasswordNow: 'Melhor criar uma senha nova agora! Você vai poder entrar no sistema logo em seguida.',
   *    forgotPassword: 'Esqueceu sua senha?',
   *    forgotYourPassword: 'Esqueceu sua senha?',
   *    highlightInfo: '',
   *    iForgotMyPassword: 'Esqueci minha senha',
   *    ifYouTryHarder: 'Se tentar mais ',
   *    welcome: 'Boas-vindas',
   *    loginErrorPattern: 'Login obrigatório',
   *    loginHint: 'Caso não possua usuário entre em contato com o suporte',
   *    loginLabel: 'Insira seu usuário',
   *    loginPlaceholder: 'Insira seu usuário de acesso',
   *    passwordErrorPattern: 'Senha obrigatória',
   *    passwordLabel: 'Insira sua senha',
   *    passwordPlaceholder: 'Insira sua senha de acesso',
   *    customFieldErrorPattern: 'Campo customizado inválido',
   *    customFieldPlaceholder: 'Por favor insira um valor',
   *    registerUrl: 'Novo registro',
   *    rememberUser: 'Lembrar usuário',
   *    rememberUserHint: 'Esta opção pode ser desabilitada nas configurações do sistema',
   *    submitLabel: 'Acessar sistema',
   *    submittedLabel: 'Carregando...',
   *    titlePopover: 'Opa!',
   *    yourUserWillBeBlocked: 'sem sucesso seu usuário será bloqueado e você fica 24 horas sem poder acessar :('
   *  };
   * ```
   *
   * Ou passando apenas as literais que deseja customizar:
   *
   * ```
   *  const customLiterals: PoPageLoginLiterals = {
   *    loginPlaceholder: 'Insira seu usuário de acesso',
   *    passwordPlaceholder: 'Insira sua senha de acesso',
   *    submitLabel: 'Acessar sistema'
   *  };
   * ```
   *
   * E para carregar as literais customizadas, basta apenas passar o objeto para o componente.
   *
   * ```
   * <po-page-login
   *   [p-literals]="customLiterals">
   * </po-page-login>
   * ```
   *
   *  > O objeto padrão de literais será traduzido de acordo com o idioma do browser (pt, en, es).
   *  > É também possível alternar o objeto padrão de literais através do seletor de idiomas localizado na parte inferior do template,
   * nesse caso, há também a opção do idioma russo.
   */
  set literals(value) {
    this._literals = value;
  }
  get literals() {
    return this._literals;
  }
  /**
   * @optional
   *
   * @description
   *
   * Habilita um estado de carregamento ao botão de *login*.
   *
   * > É necessário atribuir `true` à esta propriedade na função definida em `p-login-submit`.
   *
   * @default `false`
   */
  set loading(value) {
    this._loading = convertToBoolean(value);
  }
  get loading() {
    return this._loading;
  }
  /**
   * @optional
   *
   * @description
   *
   * Valor do modelo do campo de login.
   */
  set login(value) {
    this._login = value;
    if (!this.authenticationUrl) {
      this.loginChange.emit(this._login);
    }
  }
  get login() {
    return this._login;
  }
  /**
   * @optional
   *
   * @description
   *
   * Atributo que recebe uma lista de erros e exibe abaixo do campo de login.
   */
  set loginErrors(value) {
    this._loginErrors = value || [];
    this.setLoginErrors(this._loginErrors);
  }
  get loginErrors() {
    return this._loginErrors;
  }
  /**
   * @optional
   *
   * @description
   *
   * Atributo que recebe uma lista de erros e exibe abaixo do campo de password.
   */
  set passwordErrors(value) {
    this._passwordErrors = value || [];
    this.setPasswordErrors(this._passwordErrors);
  }
  get passwordErrors() {
    return this._passwordErrors;
  }
  /**
   * @optional
   *
   * @description
   *
   * Exibe um link abaixo do formulário de login para que os usuários da aplicação façam a recuperação dos dados de autenticação.
   *
   * A propriedade aceita os seguintes tipos:
   *
   * - **String**: informe uma url externa ou uma rota válida;
   * - **Function**: pode-se customizar a ação. Para esta possilidade basta atribuir:
   * ```
   * <po-page-login>
   *   [recovery]="this.myRecovery.bind(this)">
   * </po-page-login>
   * ```
   *
   * - **PoPageLoginRecovery**: cria-se vínculo automático com o template **po-modal-password-recovery**.
   *   O objeto deve conter a **url** para requisição dos recursos e pode-se definir o **tipo** de modal para recuperação de senha,
   *   **email** para contato e **máscara** do campo de telefone.
   */
  set recovery(value) {
    this._recovery = value;
  }
  get recovery() {
    return this._recovery;
  }
  /**
   * @optional
   *
   * @description
   *
   * Caso a aplicação tenha um link para novos cadastros, informe uma url externa ou uma rota válida, dessa
   * forma será exibido um link abaixo do formulário de login para os usuários da aplicação.
   *
   * Exemplos de valores válidos:
   * - **local**: `/home`
   * - **url externa**: `https://po-ui.io`
   *
   * > Veja a propriedade `p-literals` para customizar a literal `registerUrl`.
   */
  set registerUrl(value) {
    this._registerUrl = isTypeof(value, "string") ? value : void 0;
  }
  get registerUrl() {
    return this._registerUrl;
  }
  /**
   * @optional
   *
   * @description
   *
   * Atributo que recebe o tipo de esquema da autenticação, sendo suportados apenas os valores `Basic` e `Bearer`.
   *
   * > Caso o tipo definido seja `Basic`, o componente fará uma requisição `POST` contendo:
   *
   * ```
   * headers {
   *  Authorization: Basic base64(login:password)
   * }
   *
   * body {
   *  rememberUser: rememberUser
   * }
   * ```
   *
   * > Caso o tipo definido seja `Bearer`, o componente fará uma requisição `POST` contendo:
   *
   * ```
   * body {
   *  login: login,
   *  password: base64(password),
   *  rememberUser: rememberUser
   * }
   * ```
   *
   * @default `PoPageLoginAuthenticationType.Basic`
   */
  set authenticationType(value) {
    this._authenticationType = Object.values(PoPageLoginAuthenticationType).includes(value) ? value : PoPageLoginAuthenticationType.Basic;
  }
  get authenticationType() {
    return this._authenticationType;
  }
  /**
   * @optional
   *
   * @description
   *
   * Endpoint usado pelo template para requisição do recurso. Quando preenchido, o método `p-login-submit` será ignorado e o
   * componente adquirirá automatização para o processo de autenticação.
   *
   * ### Processos
   * Ao digitar um valor válido no campo de login/password e pressionar **Enter**, o componente fará uma requisição `POST`
   * na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usuário:
   *
   * ```
   * headers {
   *  Authorization: Basic base64(login:password)
   * }
   *
   * body {
   *  rememberUser: rememberUser
   * }
   * ```
   *
   * Em caso de **sucesso**, o objeto de retorno é armazenado no `sessionStorage` e o usuário é redirecionado para a página inicial da
   * aplicação `/`.
   *
   * ```
   * 200:
   *  {
   *    user: user
   *  }
   * ```
   *
   * Em caso de **erro** na autenticação, espera-se o seguinte retorno:
   *
   * ```
   * 400/401
   *  {
   *    code: 400/401,
   *    message: message,
   *    detailedMessage: detailedMessage,
   *    helpUrl?: helpUrl
   *  }
   * ```
   *
   * > Pode-se atribuir uma quantidade máxima de tentativas restantes (maxAttemptsRemaining) para o atributo `p-exceeded-attempts-warning`,
   * assim como os avisos relacionados aos campos login e password (loginWarnings, passwordWarnings) para os atributos `p-login-errors` e
   * `p-password-errors` conforme retorno abaixo:
   *
   * ```
   * 400
   *  {
   *    code: 400/401,
   *    message: message,
   *    detailedMessage: detailedMessage,
   *    helpUrl?: helpUrl,
   *    maxAttemptsRemaining?: maxAttemptsRemaining,
   *    loginWarnings?: [loginWarnings],
   *    passwordWarnings?: [passwordWarnings]
   *  }
   * ```
   *
   * > Caso o valor atribuído para `p-exceeded-attempts-warning` seja igual a 0(zero), poderá ser passado um valor para o
   * atributo `p-blocked-url` e o usuário será redirecionado para uma tela de bloqueio.
   *
   * *Processo finalizado.*
   *
   * _______________
   *
   * #### Praticidade
   * As informações do serviço de autenticação também podem ser transmitidas diretamente pelas configuraçãos de rota e, desta maneira,
   * dispensa-se qualquer menção e/ou importação do componente `po-page-login` no restante da aplicação. O exemplo abaixo exemplifica
   * a forma dinâmica com a qual o template de tela de login pode ser gerado ao navegar para rota `/login`, e também como ele se comunica
   * com o serviço para efetuação do processo de autenticação do usuário e solicitação de nova senha.
   * Basta definir nas configurações de rota:
   *
   *
   * ```
   *   import { PoPageLoginComponent, PoPageLoginAthenticationType } from '@po-ui/ng-templates';
   *
   *   ...
   *   const routes: Routes = [
   *     {
   *       path: 'login', component: PoPageLoginComponent, data: {
   *         serviceApi: 'https://po-ui.io/sample/api/users/authentication',
   *         environment: 'development',
   *         recovery: {
   *           url: 'https://po-ui.io/sample/api/users',
   *           type: PoModalPasswordRecoveryType.All,
   *           contactMail: 'dev.po@po-ui.com',
   *           phoneMask: '9-999-999-9999'
   *         },
   *         registerUrl: '/new-password',
   *         authenticationType: PoPageLoginAthenticationType.Basic
   *       }
   *     }
   *     ...
   *   ];
   *
   *   @NgModule({
   *     imports: [RouterModule.forRoot(routes)],
   *     exports: [RouterModule]
   *   })
   *   export class AppRoutingModule { }
   * ```
   *
   *
   * O metadado `serviceApi` deve ser a **url** para requisição dos recursos de autenticação, o `environment` alimenta a propriedade
   * `p-environment`, `recovery` é a interface `PoPageLoginRecovery` responsável pelas especificações contidas na modal de recuperação de
   * senha, `registerUrl` alimenta a propriedade `p-register-url` e `authenticationType` que define a propriedade `p-authentication-type`.
   *
   * > É essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade.
   *
   */
  set authenticationUrl(value) {
    this._authenticationUrl = isTypeof(value, "string") ? value : void 0;
  }
  get authenticationUrl() {
    return this._authenticationUrl;
  }
  /**
   * @optional
   *
   * @description
   *
   * Caso o valor atribuído para `p-exceeded-attempts-warning` seja igual a 0(zero) e a aplicação tenha um link de bloqueio de usuário,
   * informe uma url externa ou uma rota válida, dessa forma em caso de bloqueio o usuário será redirecionado.
   */
  set blockedUrl(value) {
    this._blockedUrl = isTypeof(value, "string") ? value : void 0;
  }
  get blockedUrl() {
    return this._blockedUrl;
  }
  /**
   * @optional
   *
   * @description
   *
   * Exibe um botão para suporte.
   *
   * A propriedade aceita os seguintes tipos:
   *
   * - **String**: URL externa ou uma rota válida;
   * - **Function**: Função a ser disparada ao clicar no botão de suporte;
   * ```
   * <po-page-login>
   *   [p-support]="this.mySupport.bind(this)">
   * </po-page-login>
   * ```
   *
   */
  set support(value) {
    this._support = value;
  }
  get support() {
    return this._support;
  }
  /**
   * @optional
   *
   * @description
   *
   * Coleção de idiomas que o componente irá tratar e disponibilizará para o usuário escolher.
   *
   * Caso essa propriedade não seja utilizada o componente mostrará no combo os idiomas que ele suporta por padrão.
   *
   * Caso a coleção tenha um idioma, a página estará nesse idioma e não mostrará o combo.
   *
   * Caso seja passado um array vazio, a página terá o idioma configurado no `i18n` e não mostrará o combo de seleção.
   *
   * > Se for passado um idioma não suportado, será preciso passar as literais pela propriedade `p-literals`.
   *
   *
   */
  set languagesList(languagesList) {
    if (languagesList) {
      if (languagesList.length) {
        this._languagesList = languagesList;
      } else {
        this._languagesList = poLanguageDefault.filter((language) => language.language === this.language);
      }
    }
  }
  get languagesList() {
    if (this._languagesList) {
      return this._languagesList;
    }
    return poLanguageDefault;
  }
  get showLanguage() {
    return this.languagesList.length > 1;
  }
  get language() {
    return this.selectedLanguage || getShortBrowserLanguage();
  }
  get pageLoginLiterals() {
    const loginHintWithContactEmail = this.contactEmail ? this.concatenateLoginHintWithContactEmail(this.contactEmail) : void 0;
    return __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, poPageLoginLiteralsDefault[poLocaleDefault]), poPageLoginLiteralsDefault[this.language]), loginHintWithContactEmail), this.literals);
  }
  constructor(loginService, router, poLanguageService) {
    this.loginService = loginService;
    this.router = router;
    this.poLanguageService = poLanguageService;
    this.selectedLanguage = this.poLanguageService.getShortLanguage();
  }
  ngOnDestroy() {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }
  closePopover() {
    this.showExceededAttemptsWarning = false;
  }
  onLoginSubmit() {
    const loginForm = {
      login: this.login,
      password: this.password,
      rememberUser: this.rememberUser
    };
    if (this.customField) {
      loginForm[this.customFieldObject.property] = this.customFieldObject.value;
    }
    if (this.authenticationUrl) {
      this.loading = true;
      this.loginSubscription = this.loginService.onLogin(this.authenticationUrl, this.authenticationType, loginForm).subscribe((data) => {
        this.setValuesToProperties();
        sessionStorage.setItem("PO_USER_LOGIN", JSON.stringify(data));
        this.openInternalLink("/");
        this.loading = false;
      }, (error) => {
        if (error.error.code === "400" || error.error.code === "401") {
          this.setValuesToProperties(error);
          this.redirectBlockedUrl(this.exceededAttemptsWarning, this.blockedUrl);
        }
        this.loading = false;
      });
    } else {
      this.loginSubmit.emit(loginForm);
      this.showExceededAttemptsWarning = this.exceededAttemptsWarning > 0;
    }
  }
  getDefaultCustomFieldObject(property) {
    return {
      property
    };
  }
  openExternalLink(url) {
    window.open(url, "_blank");
  }
  openInternalLink(url) {
    this.router.navigate([url]);
  }
  redirectBlockedUrl(attempts, blockedUrl) {
    if (attempts === 0 && blockedUrl) {
      this.showExceededAttemptsWarning = false;
      isExternalLink(blockedUrl) ? this.openExternalLink(blockedUrl) : this.openInternalLink(blockedUrl);
    }
  }
  setValuesToProperties(result) {
    if (result) {
      this.exceededAttemptsWarning = result.error.maxAttemptsRemaining;
      this.loginErrors = result.error.loginWarnings;
      this.passwordErrors = result.error.passwordWarnings;
      this.blockedUrl = result.error.blockedUrl;
    } else {
      this.exceededAttemptsWarning = 0;
      this.loginErrors = [];
      this.passwordErrors = [];
      this.blockedUrl = "";
    }
  }
  static ɵfac = function PoPageLoginBaseComponent_Factory(t) {
    return new (t || _PoPageLoginBaseComponent)(ɵɵdirectiveInject(PoPageLoginService), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(PoLanguageService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _PoPageLoginBaseComponent,
    inputs: {
      background: [0, "p-background", "background"],
      logo: [0, "p-logo", "logo"],
      loginPattern: [0, "p-login-pattern", "loginPattern"],
      passwordPattern: [0, "p-password-pattern", "passwordPattern"],
      secondaryLogo: [0, "p-secondary-logo", "secondaryLogo"],
      noAutocompleteLogin: [0, "p-no-autocomplete-login", "noAutocompleteLogin"],
      noAutocompletePassword: [0, "p-no-autocomplete-password", "noAutocompletePassword"],
      hidePasswordPeek: [0, "p-hide-password-peek", "hidePasswordPeek"],
      customField: [0, "p-custom-field", "customField"],
      contactEmail: [0, "p-contact-email", "contactEmail"],
      productName: [0, "p-product-name", "productName"],
      environment: [0, "p-environment", "environment"],
      exceededAttemptsWarning: [0, "p-exceeded-attempts-warning", "exceededAttemptsWarning"],
      hideRememberUser: [0, "p-hide-remember-user", "hideRememberUser"],
      literals: [0, "p-literals", "literals"],
      loading: [0, "p-loading", "loading"],
      login: [0, "p-login", "login"],
      loginErrors: [0, "p-login-errors", "loginErrors"],
      passwordErrors: [0, "p-password-errors", "passwordErrors"],
      recovery: [0, "p-recovery", "recovery"],
      registerUrl: [0, "p-register-url", "registerUrl"],
      authenticationType: [0, "p-authentication-type", "authenticationType"],
      authenticationUrl: [0, "p-authentication-url", "authenticationUrl"],
      blockedUrl: [0, "p-blocked-url", "blockedUrl"],
      support: [0, "p-support", "support"],
      languagesList: [0, "p-languages", "languagesList"]
    },
    outputs: {
      loginChange: "p-login-change",
      loginSubmit: "p-login-submit",
      passwordChange: "p-password-change",
      languageChange: "p-language-change"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageLoginBaseComponent, [{
    type: Directive
  }], () => [{
    type: PoPageLoginService
  }, {
    type: Router
  }, {
    type: PoLanguageService
  }], {
    background: [{
      type: Input,
      args: ["p-background"]
    }],
    logo: [{
      type: Input,
      args: ["p-logo"]
    }],
    loginPattern: [{
      type: Input,
      args: ["p-login-pattern"]
    }],
    passwordPattern: [{
      type: Input,
      args: ["p-password-pattern"]
    }],
    secondaryLogo: [{
      type: Input,
      args: ["p-secondary-logo"]
    }],
    loginChange: [{
      type: Output,
      args: ["p-login-change"]
    }],
    loginSubmit: [{
      type: Output,
      args: ["p-login-submit"]
    }],
    passwordChange: [{
      type: Output,
      args: ["p-password-change"]
    }],
    languageChange: [{
      type: Output,
      args: ["p-language-change"]
    }],
    noAutocompleteLogin: [{
      type: Input,
      args: ["p-no-autocomplete-login"]
    }],
    noAutocompletePassword: [{
      type: Input,
      args: ["p-no-autocomplete-password"]
    }],
    hidePasswordPeek: [{
      type: Input,
      args: ["p-hide-password-peek"]
    }],
    customField: [{
      type: Input,
      args: ["p-custom-field"]
    }],
    contactEmail: [{
      type: Input,
      args: ["p-contact-email"]
    }],
    productName: [{
      type: Input,
      args: ["p-product-name"]
    }],
    environment: [{
      type: Input,
      args: ["p-environment"]
    }],
    exceededAttemptsWarning: [{
      type: Input,
      args: ["p-exceeded-attempts-warning"]
    }],
    hideRememberUser: [{
      type: Input,
      args: ["p-hide-remember-user"]
    }],
    literals: [{
      type: Input,
      args: ["p-literals"]
    }],
    loading: [{
      type: Input,
      args: ["p-loading"]
    }],
    login: [{
      type: Input,
      args: ["p-login"]
    }],
    loginErrors: [{
      type: Input,
      args: ["p-login-errors"]
    }],
    passwordErrors: [{
      type: Input,
      args: ["p-password-errors"]
    }],
    recovery: [{
      type: Input,
      args: ["p-recovery"]
    }],
    registerUrl: [{
      type: Input,
      args: ["p-register-url"]
    }],
    authenticationType: [{
      type: Input,
      args: ["p-authentication-type"]
    }],
    authenticationUrl: [{
      type: Input,
      args: ["p-authentication-url"]
    }],
    blockedUrl: [{
      type: Input,
      args: ["p-blocked-url"]
    }],
    support: [{
      type: Input,
      args: ["p-support"]
    }],
    languagesList: [{
      type: Input,
      args: ["p-languages"]
    }]
  });
})();
function PoPageLoginPopoverComponent_div_17_a_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("routerLink", ctx_r0.recovery);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.literals == null ? null : ctx_r0.literals.iForgotMyPassword, " ");
  }
}
function PoPageLoginPopoverComponent_div_17_a_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("href", ctx_r0.recovery, ɵɵsanitizeUrl);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.literals == null ? null : ctx_r0.literals.iForgotMyPassword, " ");
  }
}
function PoPageLoginPopoverComponent_div_17_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 14);
    ɵɵlistener("click", function PoPageLoginPopoverComponent_div_17_a_3_Template_a_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onForgotPasswordClick(ctx_r0.recovery));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.literals == null ? null : ctx_r0.literals.iForgotMyPassword, " ");
  }
}
function PoPageLoginPopoverComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtemplate(1, PoPageLoginPopoverComponent_div_17_a_1_Template, 2, 2, "a", 9)(2, PoPageLoginPopoverComponent_div_17_a_2_Template, 2, 2, "a", 10)(3, PoPageLoginPopoverComponent_div_17_a_3_Template, 2, 1, "a", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.recoveryType === "internalLink");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.recoveryType === "externalLink");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.recoveryType);
  }
}
var PoPageLoginPopoverComponent = class _PoPageLoginPopoverComponent {
  literals;
  /** exibe o link de 'esqueci minha senha' e verifica se o valor é um link interno ou externo */
  set recovery(value) {
    this._recovery = value;
    if (isTypeof(value, "string")) {
      this.recoveryType = isExternalLink(value) ? "externalLink" : "internalLink";
    }
  }
  get recovery() {
    return this._recovery;
  }
  /** define se a mensagem deverá ser exibida caso seja maior que 0(zero) */
  remainingAttempts;
  /** se 'p-recovery' for do tipo Function ou PoPageLoginRecovery, emite para o método 'openUrl' do componente 'po-page-login' */
  forgotPassword = new EventEmitter();
  recoveryType;
  _recovery;
  onForgotPasswordClick(recovery) {
    this.forgotPassword.emit(recovery);
  }
  static ɵfac = function PoPageLoginPopoverComponent_Factory(t) {
    return new (t || _PoPageLoginPopoverComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PoPageLoginPopoverComponent,
    selectors: [["po-page-login-popover"]],
    inputs: {
      literals: [0, "p-literals", "literals"],
      recovery: [0, "p-recovery", "recovery"],
      remainingAttempts: [0, "p-remaining-attempts", "remainingAttempts"]
    },
    outputs: {
      forgotPassword: "p-forgot-password"
    },
    decls: 18,
    vars: 10,
    consts: [[1, "po-page-login-popover-container"], [1, "po-page-login-popover"], [1, "po-page-login-popover-arrow"], [1, "po-page-login-popover-content"], [1, "po-font-text-bold", "po-page-login-popover-title"], [1, "po-font-text"], [1, "po-font-text-bold", "po-page-login-popover-attempts"], ["class", "po-font-text-bold po-mt-1 po-page-login-popover-link-container", 4, "ngIf"], [1, "po-font-text-bold", "po-mt-1", "po-page-login-popover-link-container"], ["class", "po-page-login-popover-link", 3, "routerLink", 4, "ngIf"], ["class", "po-page-login-popover-link", "target", "_blank", 3, "href", 4, "ngIf"], ["class", "po-page-login-popover-link", 3, "click", 4, "ngIf"], [1, "po-page-login-popover-link", 3, "routerLink"], ["target", "_blank", 1, "po-page-login-popover-link", 3, "href"], [1, "po-page-login-popover-link", 3, "click"]],
    template: function PoPageLoginPopoverComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0)(1, "div", 1);
        ɵɵelement(2, "div", 2);
        ɵɵelementStart(3, "div", 3)(4, "p", 4);
        ɵɵtext(5);
        ɵɵelementEnd();
        ɵɵelementStart(6, "p", 5);
        ɵɵtext(7);
        ɵɵelementEnd();
        ɵɵelementStart(8, "p", 5);
        ɵɵtext(9);
        ɵɵelementStart(10, "span", 6);
        ɵɵtext(11);
        ɵɵpipe(12, "poI18n");
        ɵɵelementEnd();
        ɵɵtext(13);
        ɵɵelementEnd();
        ɵɵelement(14, "br");
        ɵɵelementStart(15, "p", 5);
        ɵɵtext(16);
        ɵɵelementEnd();
        ɵɵtemplate(17, PoPageLoginPopoverComponent_div_17_Template, 4, 3, "div", 7);
        ɵɵelementEnd()()();
      }
      if (rf & 2) {
        ɵɵadvance(5);
        ɵɵtextInterpolate1(" ", ctx.literals == null ? null : ctx.literals.titlePopover, " ");
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" ", ctx.literals == null ? null : ctx.literals.forgotYourPassword, " ");
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" ", ctx.literals == null ? null : ctx.literals.ifYouTryHarder, " ");
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind2(12, 7, ctx.literals == null ? null : ctx.literals.attempts, ctx.remainingAttempts), " ");
        ɵɵadvance(2);
        ɵɵtextInterpolate1("", ctx.literals == null ? null : ctx.literals.yourUserWillBeBlocked, " ");
        ɵɵadvance(3);
        ɵɵtextInterpolate1(" ", ctx.literals == null ? null : ctx.literals.createANewPasswordNow, " ");
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.recovery);
      }
    },
    dependencies: [NgIf, RouterLink, PoI18nPipe],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageLoginPopoverComponent, [{
    type: Component,
    args: [{
      selector: "po-page-login-popover",
      template: `<div class="po-page-login-popover-container">
  <div class="po-page-login-popover">
    <div class="po-page-login-popover-arrow"></div>
    <div class="po-page-login-popover-content">
      <p class="po-font-text-bold po-page-login-popover-title">
        {{ literals?.titlePopover }}
      </p>
      <p class="po-font-text">
        {{ literals?.forgotYourPassword }}
      </p>
      <p class="po-font-text">
        {{ literals?.ifYouTryHarder }}
        <span class="po-font-text-bold po-page-login-popover-attempts">
          {{ literals?.attempts | poI18n: remainingAttempts }} </span
        >{{ literals?.yourUserWillBeBlocked }}
      </p>
      <br />
      <p class="po-font-text">
        {{ literals?.createANewPasswordNow }}
      </p>
      <div *ngIf="recovery" class="po-font-text-bold po-mt-1 po-page-login-popover-link-container">
        <a *ngIf="recoveryType === 'internalLink'" class="po-page-login-popover-link" [routerLink]="recovery">
          {{ literals?.iForgotMyPassword }}
        </a>
        <a *ngIf="recoveryType === 'externalLink'" class="po-page-login-popover-link" [href]="recovery" target="_blank">
          {{ literals?.iForgotMyPassword }}
        </a>
        <a *ngIf="!recoveryType" class="po-page-login-popover-link" (click)="onForgotPasswordClick(recovery)">
          {{ literals?.iForgotMyPassword }}
        </a>
      </div>
    </div>
  </div>
</div>
`
    }]
  }], null, {
    literals: [{
      type: Input,
      args: ["p-literals"]
    }],
    recovery: [{
      type: Input,
      args: ["p-recovery"]
    }],
    remainingAttempts: [{
      type: Input,
      args: ["p-remaining-attempts"]
    }],
    forgotPassword: [{
      type: Output,
      args: ["p-forgot-password"]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(PoPageLoginPopoverComponent, {
    className: "PoPageLoginPopoverComponent",
    filePath: "lib/components/po-page-login/po-page-login-popover/po-page-login-popover.component.ts",
    lineNumber: 20
  });
})();
var _c0 = ["loginForm"];
var _c1 = ["pageLogin"];
function PoPageLoginComponent_po_tag_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "po-tag", 28);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("p-value", ctx_r1.environment);
  }
}
function PoPageLoginComponent_div_19_po_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "po-icon", 31);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("p-tooltip", ctx_r1.pageLoginLiterals.loginHint);
  }
}
function PoPageLoginComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 29);
    ɵɵtemplate(1, PoPageLoginComponent_div_19_po_icon_1_Template, 1, 1, "po-icon", 30);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("po-page-login-info-icon-container-dynamic", !ctx_r1.pageLoginLiterals.loginHint && !ctx_r1.pageLoginLiterals.rememberUserHint);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.pageLoginLiterals.loginHint);
  }
}
function PoPageLoginComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 32);
    ɵɵelement(1, "po-icon", 33);
    ɵɵelementStart(2, "span", 34);
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const error_r4 = ctx.$implicit;
    ɵɵadvance(3);
    ɵɵtextInterpolate(error_r4);
  }
}
function PoPageLoginComponent_div_25_po_page_login_popover_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "po-page-login-popover", 37);
    ɵɵlistener("p-forgot-password", function PoPageLoginComponent_div_25_po_page_login_popover_1_Template_po_page_login_popover_p_forgot_password_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.openUrl($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("p-literals", ctx_r1.pageLoginLiterals)("p-recovery", ctx_r1.recovery)("p-remaining-attempts", ctx_r1.exceededAttemptsWarning);
  }
}
function PoPageLoginComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 35);
    ɵɵtemplate(1, PoPageLoginComponent_div_25_po_page_login_popover_1_Template, 1, 3, "po-page-login-popover", 36);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showExceededAttemptsWarning && ctx_r1.exceededAttemptsWarning);
  }
}
function PoPageLoginComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 32);
    ɵɵelement(1, "po-icon", 33);
    ɵɵelementStart(2, "span", 34);
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const error_r6 = ctx.$implicit;
    ɵɵadvance(3);
    ɵɵtextInterpolate(error_r6);
  }
}
function PoPageLoginComponent_po_input_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "po-input", 38);
    ɵɵtwoWayListener("ngModelChange", function PoPageLoginComponent_po_input_28_Template_po_input_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.customFieldObject.value, $event) || (ctx_r1.customFieldObject.value = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("keyup.enter", function PoPageLoginComponent_po_input_28_Template_po_input_keyup_enter_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      const loginForm_r3 = ɵɵreference(14);
      return ɵɵresetView(loginForm_r3.valid && ctx_r1.onLoginSubmit());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("po-page-login-field-size-dynamic", !ctx_r1.pageLoginLiterals.loginHint && !ctx_r1.pageLoginLiterals.rememberUserHint);
    ɵɵtwoWayProperty("ngModel", ctx_r1.customFieldObject.value);
    ɵɵproperty("p-error-pattern", ctx_r1.customFieldObject.errorPattern || ctx_r1.pageLoginLiterals.customFieldErrorPattern)("p-pattern", ctx_r1.customFieldObject.pattern)("p-placeholder", ctx_r1.customFieldObject.placeholder || ctx_r1.pageLoginLiterals.customFieldPlaceholder);
  }
}
function PoPageLoginComponent_po_combo_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "po-combo", 39);
    ɵɵtwoWayListener("ngModelChange", function PoPageLoginComponent_po_combo_29_Template_po_combo_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.customFieldObject.value, $event) || (ctx_r1.customFieldObject.value = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("po-page-login-field-size-dynamic", !ctx_r1.pageLoginLiterals.loginHint && !ctx_r1.pageLoginLiterals.rememberUserHint);
    ɵɵtwoWayProperty("ngModel", ctx_r1.customFieldObject.value);
    ɵɵproperty("p-field-value", ctx_r1.customFieldObject.fieldValue)("p-filter-service", ctx_r1.customFieldObject.url)("p-placeholder", ctx_r1.customFieldObject.placeholder || ctx_r1.pageLoginLiterals.customFieldPlaceholder);
  }
}
function PoPageLoginComponent_po_select_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "po-select", 40);
    ɵɵtwoWayListener("ngModelChange", function PoPageLoginComponent_po_select_30_Template_po_select_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.customFieldObject.value, $event) || (ctx_r1.customFieldObject.value = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("po-page-login-field-size-dynamic", !ctx_r1.pageLoginLiterals.loginHint && !ctx_r1.pageLoginLiterals.rememberUserHint);
    ɵɵtwoWayProperty("ngModel", ctx_r1.customFieldObject.value);
    ɵɵproperty("p-placeholder", ctx_r1.customFieldObject.placeholder || ctx_r1.pageLoginLiterals.customFieldPlaceholder)("p-options", ctx_r1.customFieldObject.options);
  }
}
function PoPageLoginComponent_div_32_div_2_po_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "po-icon", 31);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("p-tooltip", ctx_r1.pageLoginLiterals.rememberUserHint);
  }
}
function PoPageLoginComponent_div_32_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 43);
    ɵɵtemplate(1, PoPageLoginComponent_div_32_div_2_po_icon_1_Template, 1, 1, "po-icon", 30);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassProp("po-page-login-info-icon-container-dynamic", !ctx_r1.pageLoginLiterals.rememberUserHint);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.pageLoginLiterals.rememberUserHint);
  }
}
function PoPageLoginComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 13)(1, "po-switch", 41);
    ɵɵtwoWayListener("ngModelChange", function PoPageLoginComponent_div_32_Template_po_switch_ngModelChange_1_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.rememberUser, $event) || (ctx_r1.rememberUser = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("keyup.enter", function PoPageLoginComponent_div_32_Template_po_switch_keyup_enter_1_listener() {
      ɵɵrestoreView(_r10);
      const ctx_r1 = ɵɵnextContext();
      const loginForm_r3 = ɵɵreference(14);
      return ɵɵresetView(loginForm_r3.valid && ctx_r1.onLoginSubmit());
    });
    ɵɵelementEnd();
    ɵɵtemplate(2, PoPageLoginComponent_div_32_div_2_Template, 2, 3, "div", 42);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtwoWayProperty("ngModel", ctx_r1.rememberUser);
    ɵɵproperty("p-label-off", ctx_r1.pageLoginLiterals.rememberUser)("p-label-on", ctx_r1.pageLoginLiterals.rememberUser);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.pageLoginLiterals.loginHint || ctx_r1.pageLoginLiterals.rememberUserHint);
  }
}
function PoPageLoginComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 44)(1, "a", 45);
    ɵɵlistener("click", function PoPageLoginComponent_div_34_Template_a_click_1_listener() {
      ɵɵrestoreView(_r11);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.openUrl(ctx_r1.recovery));
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.pageLoginLiterals.forgotPassword);
  }
}
function PoPageLoginComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 46)(1, "a", 45);
    ɵɵlistener("click", function PoPageLoginComponent_div_35_Template_a_click_1_listener() {
      ɵɵrestoreView(_r12);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.openUrl(ctx_r1.registerUrl));
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.pageLoginLiterals.registerUrl);
  }
}
var PoPageLoginComponent = class _PoPageLoginComponent extends PoPageLoginBaseComponent {
  changeDetector;
  activatedRoute;
  poComponentInjector;
  loginForm;
  pageLogin;
  initialSelectLanguage;
  componentRef = null;
  differ;
  customPasswordError = {
    custom: false
  };
  constructor(changeDetector, activatedRoute, poComponentInjector, differs, loginService, router, poLanguageService) {
    super(loginService, router, poLanguageService);
    this.changeDetector = changeDetector;
    this.activatedRoute = activatedRoute;
    this.poComponentInjector = poComponentInjector;
    this.differ = differs.find([]).create(null);
  }
  ngAfterViewChecked() {
    if (this.differ) {
      this.validateArrayChanges(this.differ, [{
        array: this.loginErrors,
        callback: this.generateLoginError.bind(this)
      }, {
        array: this.passwordErrors,
        callback: this.generatePasswordError.bind(this)
      }]);
    }
  }
  ngOnInit() {
    this.checkingForRouteMetadata(this.activatedRoute.snapshot.data);
    this.selectedLanguage = this.initializeLanguage();
    this.initialSelectLanguage = this.selectedLanguage;
  }
  activateSupport() {
    switch (typeof this.support) {
      case "string": {
        this.setUrlRedirect(this.support);
        break;
      }
      case "function": {
        this.support();
        break;
      }
    }
  }
  changeLoginModel() {
    if (this.authenticationUrl) {
      this.loginErrors = [];
    } else {
      this.setLoginErrors(this.loginErrors);
      this.loginChange.emit(this.login);
    }
  }
  changePasswordModel() {
    if (this.authenticationUrl) {
      this.passwordErrors = [];
    } else {
      this.setPasswordErrors(this.passwordErrors);
      this.passwordChange.emit(this.password);
    }
  }
  onSelectedLanguage(language) {
    this.languageChange.emit(this.languagesList.find((languageItem) => languageItem.language === language));
    this.selectedLanguage = language;
  }
  openUrl(recovery) {
    switch (typeof recovery) {
      case "string": {
        this.setUrlRedirect(recovery);
        break;
      }
      case "function": {
        recovery();
        break;
      }
      case "object": {
        this.createModalPasswordRecoveryComponent(recovery);
        break;
      }
    }
  }
  concatenateLoginHintWithContactEmail(contactEmail) {
    const defaultLoginHintLiteral = poPageLoginLiteralsDefault[this.language].loginHint;
    const prepositionLiteral = poPageLoginLiteralIn[this.language];
    return this.concatenateLiteral(contactEmail, "loginHint", defaultLoginHintLiteral, prepositionLiteral);
  }
  setLoginErrors(errors) {
    const control = this.loginForm.form.controls["login"];
    this.setControlErrors("allLoginErrors", control, errors, this.pageLoginLiterals.loginErrorPattern);
  }
  setPasswordErrors(errors) {
    const control = this.loginForm.form.controls["password"];
    this.setControlErrors("allPasswordErrors", control, errors, this.pageLoginLiterals.passwordErrorPattern);
  }
  checkingForMetadataProperty(object, property) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      return object[property];
    }
  }
  checkingForRouteMetadata(data) {
    if (Object.keys(data).length !== 0) {
      this.authenticationUrl = this.checkingForMetadataProperty(data, "serviceApi") || this.authenticationUrl;
      this.authenticationType = this.checkingForMetadataProperty(data, "authenticationType") || this.authenticationType;
      this.environment = this.checkingForMetadataProperty(data, "environment") || this.environment;
      this.recovery = this.checkingForMetadataProperty(data, "recovery") || this.recovery;
      this.registerUrl = this.checkingForMetadataProperty(data, "registerUrl") || this.registerUrl;
    }
  }
  concatenate(defaultLiteral, prefixLiteral, value) {
    return `${defaultLiteral} ${prefixLiteral} ${value}`;
  }
  concatenateLiteral(value, literal, defaultLiteral, prepositionLiteral) {
    return {
      [literal]: this.concatenate(defaultLiteral, prepositionLiteral, value)
    };
  }
  createModalPasswordRecoveryComponent(poPageLoginRecovery) {
    if (this.componentRef) {
      this.poComponentInjector.destroyComponentInApplication(this.componentRef);
    }
    this.componentRef = this.poComponentInjector.createComponentInApplication(PoModalPasswordRecoveryComponent);
    this.componentRef.instance.urlRecovery = poPageLoginRecovery.url;
    this.componentRef.instance.contactEmail = poPageLoginRecovery.contactMail;
    this.componentRef.instance.phoneMask = poPageLoginRecovery.phoneMask;
    this.componentRef.instance.type = poPageLoginRecovery.type || PoModalPasswordRecoveryType.Email;
    this.componentRef.changeDetectorRef.detectChanges();
    setTimeout(() => {
      this.componentRef.instance.open();
    });
  }
  generateLoginError() {
    if (this.loginErrors && this.loginErrors.length) {
      this.setLoginErrors(this.loginErrors);
    } else {
      const control = this.loginForm.form.controls["login"];
      if (control) {
        this.resetControl(control);
      }
    }
  }
  generatePasswordError() {
    if (this.passwordErrors && this.passwordErrors.length) {
      this.setPasswordErrors(this.passwordErrors);
    } else {
      const control = this.loginForm.form.controls["password"];
      if (control) {
        this.resetControl(control);
      }
    }
  }
  resetControl(control) {
    control.markAsPristine();
    control.markAsUntouched();
    control.updateValueAndValidity();
  }
  setControlErrors(allErrors, control, errors, patternError) {
    if (control) {
      this[allErrors] = control.hasError("pattern") ? [...errors, ...[patternError]] : [...errors];
      if (errors && errors.length && (control.valid || control.pristine)) {
        control.markAsTouched();
        control.markAsDirty();
        control.setErrors(this.customPasswordError);
      }
    }
  }
  setUrlRedirect(url) {
    isExternalLink(url) ? window.open(url, "_blank") : this.router.navigate([url]);
  }
  validateArrayChanges(differ, array) {
    array.forEach((element) => {
      const changes = differ.diff(element.array);
      if (changes) {
        element.callback();
        this.changeDetector.detectChanges();
      }
    });
  }
  initializeLanguage() {
    const language = this.languagesList.find((languageItem) => languageItem.language === this.language);
    return language?.language || this.languagesList[0].language;
  }
  static ɵfac = function PoPageLoginComponent_Factory(t) {
    return new (t || _PoPageLoginComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(PoComponentInjectorService), ɵɵdirectiveInject(IterableDiffers), ɵɵdirectiveInject(PoPageLoginService), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(PoLanguageService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PoPageLoginComponent,
    selectors: [["po-page-login"]],
    viewQuery: function PoPageLoginComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 7, NgForm);
        ɵɵviewQuery(_c1, 7, ViewContainerRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.loginForm = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.pageLogin = _t.first);
      }
    },
    features: [ɵɵInheritDefinitionFeature],
    decls: 36,
    vars: 42,
    consts: [["pageLogin", ""], ["loginForm", "ngForm"], [1, "po-page-login-support", 3, "click", "hidden"], ["p-icon", "ICON_HELP"], [3, "p-selected-language", "p-show-select-language", "p-languages", "p-initial-language", "p-background", "p-highlight-info", "p-logo", "p-secondary-logo"], [1, "po-page-login-header"], [1, "po-page-login-header-product-name"], [1, "po-page-login-header-product-environment", "po-mb-md-4", "po-mb-sm-1"], ["p-type", "warning", 3, "p-value", 4, "ngIf"], [1, "po-page-login-header-welcome", "po-mb-md-4", "po-mb-sm-2"], [1, "po-page-login-form"], [1, "po-row"], [1, "po-lg-12"], [1, "po-page-login-hint", "po-page-login-info-container"], ["name", "login", "p-auto-focus", "", "p-required", "", 1, "po-page-login-info-field", 3, "ngModelChange", "click", "keyup.enter", "p-change-model", "ngModel", "p-label", "p-no-autocomplete", "p-pattern", "p-placeholder"], ["class", "po-page-login-info-icon-container", 3, "po-page-login-info-icon-container-dynamic", 4, "ngIf"], [1, "po-field-container-bottom", "po-field-container-error-container"], ["class", "po-field-container-bottom-text-error po-field-container-error-item", 4, "ngFor", "ngForOf"], [1, "po-page-login-password-container"], ["name", "password", "p-required", "", 1, "po-page-login-field-size", "po-page-login-password-item", 3, "ngModelChange", "click", "keyup.enter", "p-change-model", "ngModel", "p-hide-password-peek", "p-label", "p-no-autocomplete", "p-pattern", "p-placeholder"], ["class", "po-page-login-password-item po-page-login-password-popover-container", 4, "ngIf"], ["class", "po-page-login-field-size po-lg-12", "name", "customFieldInput", "p-required", "", 3, "po-page-login-field-size-dynamic", "ngModel", "p-error-pattern", "p-pattern", "p-placeholder", "ngModelChange", "keyup.enter", 4, "ngIf"], ["class", "po-page-login-field-size po-lg-12", "name", "customFieldCombo", "p-required", "", 3, "po-page-login-field-size-dynamic", "ngModel", "p-field-value", "p-filter-service", "p-placeholder", "ngModelChange", 4, "ngIf"], ["class", "po-page-login-field-size po-lg-12", "name", "customFieldSelect", "p-required", "", 3, "po-page-login-field-size-dynamic", "ngModel", "p-placeholder", "p-options", "ngModelChange", 4, "ngIf"], ["class", "po-page-login-hint po-page-login-info-container", 4, "ngIf"], ["p-kind", "primary", 1, "po-lg-12", "po-page-login-button", "po-page-login-field-size", 3, "p-click", "p-disabled", "p-label", "p-loading"], ["class", "po-page-login-recovery-link", 4, "ngIf"], ["class", "po-page-login-register-link", 4, "ngIf"], ["p-type", "warning", 3, "p-value"], [1, "po-page-login-info-icon-container"], ["p-icon", "ICON_INFO po-field-icon", "p-tooltip-position", "right", 3, "p-tooltip", 4, "ngIf"], ["p-icon", "ICON_INFO po-field-icon", "p-tooltip-position", "right", 3, "p-tooltip"], [1, "po-field-container-bottom-text-error", "po-field-container-error-item"], ["p-icon", "ICON_EXCLAMATION"], [1, "po-field-container-error-text"], [1, "po-page-login-password-item", "po-page-login-password-popover-container"], [3, "p-literals", "p-recovery", "p-remaining-attempts", "p-forgot-password", 4, "ngIf"], [3, "p-forgot-password", "p-literals", "p-recovery", "p-remaining-attempts"], ["name", "customFieldInput", "p-required", "", 1, "po-page-login-field-size", "po-lg-12", 3, "ngModelChange", "keyup.enter", "ngModel", "p-error-pattern", "p-pattern", "p-placeholder"], ["name", "customFieldCombo", "p-required", "", 1, "po-page-login-field-size", "po-lg-12", 3, "ngModelChange", "ngModel", "p-field-value", "p-filter-service", "p-placeholder"], ["name", "customFieldSelect", "p-required", "", 1, "po-page-login-field-size", "po-lg-12", 3, "ngModelChange", "ngModel", "p-placeholder", "p-options"], ["name", "rememberUser", "p-label-position", "1", 1, "po-page-login-info-field", "po-lg-7", "po-offset-lg-5", "po-offset-xl-5", 3, "ngModelChange", "keyup.enter", "ngModel", "p-label-off", "p-label-on"], ["class", "po-page-login-info-icon-container po-page-login-info-icon-remember-user", 3, "po-page-login-info-icon-container-dynamic", 4, "ngIf"], [1, "po-page-login-info-icon-container", "po-page-login-info-icon-remember-user"], [1, "po-page-login-recovery-link"], [1, "po-font-text-large-bold", 3, "click"], [1, "po-page-login-register-link"]],
    template: function PoPageLoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "button", 2);
        ɵɵlistener("click", function PoPageLoginComponent_Template_button_click_0_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.activateSupport());
        });
        ɵɵelement(1, "po-icon", 3);
        ɵɵtext(2);
        ɵɵelementEnd();
        ɵɵelementStart(3, "po-page-background", 4, 0);
        ɵɵlistener("p-selected-language", function PoPageLoginComponent_Template_po_page_background_p_selected_language_3_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onSelectedLanguage($event));
        });
        ɵɵelementStart(5, "header", 5)(6, "div", 6)(7, "h1");
        ɵɵtext(8);
        ɵɵelementEnd()();
        ɵɵelementStart(9, "div", 7);
        ɵɵtemplate(10, PoPageLoginComponent_po_tag_10_Template, 1, 1, "po-tag", 8);
        ɵɵelementEnd();
        ɵɵelementStart(11, "div", 9);
        ɵɵtext(12);
        ɵɵelementEnd()();
        ɵɵelementStart(13, "form", 10, 1)(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "po-login", 14);
        ɵɵtwoWayListener("ngModelChange", function PoPageLoginComponent_Template_po_login_ngModelChange_18_listener($event) {
          ɵɵrestoreView(_r1);
          ɵɵtwoWayBindingSet(ctx.login, $event) || (ctx.login = $event);
          return ɵɵresetView($event);
        });
        ɵɵlistener("click", function PoPageLoginComponent_Template_po_login_click_18_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.closePopover());
        })("keyup.enter", function PoPageLoginComponent_Template_po_login_keyup_enter_18_listener() {
          ɵɵrestoreView(_r1);
          const loginForm_r3 = ɵɵreference(14);
          return ɵɵresetView(loginForm_r3.valid && ctx.onLoginSubmit());
        })("p-change-model", function PoPageLoginComponent_Template_po_login_p_change_model_18_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.changeLoginModel());
        });
        ɵɵelementEnd();
        ɵɵtemplate(19, PoPageLoginComponent_div_19_Template, 2, 3, "div", 15);
        ɵɵelementEnd();
        ɵɵelementStart(20, "div", 16);
        ɵɵtemplate(21, PoPageLoginComponent_div_21_Template, 4, 1, "div", 17);
        ɵɵelementEnd()();
        ɵɵelementStart(22, "div", 12)(23, "div", 18)(24, "po-password", 19);
        ɵɵtwoWayListener("ngModelChange", function PoPageLoginComponent_Template_po_password_ngModelChange_24_listener($event) {
          ɵɵrestoreView(_r1);
          ɵɵtwoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
          return ɵɵresetView($event);
        });
        ɵɵlistener("click", function PoPageLoginComponent_Template_po_password_click_24_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.closePopover());
        })("keyup.enter", function PoPageLoginComponent_Template_po_password_keyup_enter_24_listener() {
          ɵɵrestoreView(_r1);
          const loginForm_r3 = ɵɵreference(14);
          return ɵɵresetView(loginForm_r3.valid && ctx.onLoginSubmit());
        })("p-change-model", function PoPageLoginComponent_Template_po_password_p_change_model_24_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.changePasswordModel());
        });
        ɵɵelementEnd();
        ɵɵtemplate(25, PoPageLoginComponent_div_25_Template, 2, 1, "div", 20);
        ɵɵelementEnd();
        ɵɵelementStart(26, "div", 16);
        ɵɵtemplate(27, PoPageLoginComponent_div_27_Template, 4, 1, "div", 17);
        ɵɵelementEnd()();
        ɵɵtemplate(28, PoPageLoginComponent_po_input_28_Template, 1, 6, "po-input", 21)(29, PoPageLoginComponent_po_combo_29_Template, 1, 6, "po-combo", 22)(30, PoPageLoginComponent_po_select_30_Template, 1, 5, "po-select", 23);
        ɵɵelementStart(31, "div", 12);
        ɵɵtemplate(32, PoPageLoginComponent_div_32_Template, 3, 4, "div", 24);
        ɵɵelementEnd();
        ɵɵelementStart(33, "po-button", 25);
        ɵɵlistener("p-click", function PoPageLoginComponent_Template_po_button_p_click_33_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onLoginSubmit());
        });
        ɵɵelementEnd();
        ɵɵtemplate(34, PoPageLoginComponent_div_34_Template, 3, 1, "div", 26)(35, PoPageLoginComponent_div_35_Template, 3, 1, "div", 27);
        ɵɵelementEnd()()();
      }
      if (rf & 2) {
        const loginForm_r3 = ɵɵreference(14);
        ɵɵproperty("hidden", !ctx.support);
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" ", ctx.pageLoginLiterals == null ? null : ctx.pageLoginLiterals.support, "\n");
        ɵɵadvance();
        ɵɵproperty("p-show-select-language", ctx.showLanguage)("p-languages", ctx.languagesList)("p-initial-language", ctx.initialSelectLanguage)("p-background", ctx.background)("p-highlight-info", ctx.pageLoginLiterals.highlightInfo)("p-logo", ctx.logo)("p-secondary-logo", ctx.secondaryLogo);
        ɵɵadvance(5);
        ɵɵtextInterpolate(ctx.productName);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.environment);
        ɵɵadvance(2);
        ɵɵtextInterpolate(ctx.pageLoginLiterals.welcome);
        ɵɵadvance(6);
        ɵɵclassProp("po-page-login-info-field-dynamic", !ctx.pageLoginLiterals.loginHint && !ctx.pageLoginLiterals.rememberUserHint);
        ɵɵtwoWayProperty("ngModel", ctx.login);
        ɵɵproperty("p-label", ctx.pageLoginLiterals.loginLabel)("p-no-autocomplete", ctx.noAutocompleteLogin)("p-pattern", ctx.loginPattern)("p-placeholder", ctx.pageLoginLiterals.loginPlaceholder);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.pageLoginLiterals.loginHint || ctx.pageLoginLiterals.rememberUserHint);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.allLoginErrors);
        ɵɵadvance(3);
        ɵɵclassProp("po-page-login-field-size-dynamic", !ctx.pageLoginLiterals.loginHint && !ctx.pageLoginLiterals.rememberUserHint);
        ɵɵtwoWayProperty("ngModel", ctx.password);
        ɵɵproperty("p-hide-password-peek", ctx.hidePasswordPeek)("p-label", ctx.pageLoginLiterals.passwordLabel)("p-no-autocomplete", ctx.noAutocompletePassword)("p-pattern", ctx.passwordPattern)("p-placeholder", ctx.pageLoginLiterals.passwordPlaceholder);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.pageLoginLiterals.loginHint || ctx.pageLoginLiterals.rememberUserHint);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.allPasswordErrors);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.customField && ctx.customFieldType === "input");
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.customField && ctx.customFieldType === "combo");
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.customField && ctx.customFieldType === "select");
        ɵɵadvance(2);
        ɵɵproperty("ngIf", !ctx.hideRememberUser);
        ɵɵadvance();
        ɵɵclassProp("po-page-login-button-dynamic", !ctx.pageLoginLiterals.loginHint && !ctx.pageLoginLiterals.rememberUserHint);
        ɵɵproperty("p-disabled", loginForm_r3.invalid)("p-label", ctx.loading ? ctx.pageLoginLiterals.submittedLabel : ctx.pageLoginLiterals.submitLabel)("p-loading", ctx.loading);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.recovery);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.registerUrl);
      }
    },
    dependencies: [NgForOf, NgIf, ɵNgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, PoPageBackgroundComponent, PoButtonComponent, PoComboComponent, PoInputComponent, PoLoginComponent, PoPasswordComponent, PoSelectComponent, PoSwitchComponent, PoTagComponent, PoIconComponent, PoTooltipDirective, PoPageLoginPopoverComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageLoginComponent, [{
    type: Component,
    args: [{
      selector: "po-page-login",
      template: `<button class="po-page-login-support" (click)="activateSupport()" [hidden]="!support">
  <po-icon p-icon="ICON_HELP"></po-icon>
  {{ pageLoginLiterals?.support }}
</button>

<po-page-background
  #pageLogin
  [p-show-select-language]="showLanguage"
  [p-languages]="languagesList"
  [p-initial-language]="initialSelectLanguage"
  [p-background]="background"
  [p-highlight-info]="pageLoginLiterals.highlightInfo"
  [p-logo]="logo"
  [p-secondary-logo]="secondaryLogo"
  (p-selected-language)="onSelectedLanguage($event)"
>
  <header class="po-page-login-header">
    <div class="po-page-login-header-product-name">
      <h1>{{ productName }}</h1>
    </div>

    <div class="po-page-login-header-product-environment po-mb-md-4 po-mb-sm-1">
      <po-tag *ngIf="environment" p-type="warning" [p-value]="environment"> </po-tag>
    </div>
    <div class="po-page-login-header-welcome po-mb-md-4 po-mb-sm-2">{{ pageLoginLiterals.welcome }}</div>
  </header>

  <form #loginForm="ngForm" class="po-page-login-form">
    <div class="po-row">
      <div class="po-lg-12">
        <div class="po-page-login-hint po-page-login-info-container">
          <po-login
            class="po-page-login-info-field"
            [class.po-page-login-info-field-dynamic]="
              !pageLoginLiterals.loginHint && !pageLoginLiterals.rememberUserHint
            "
            name="login"
            [(ngModel)]="login"
            p-auto-focus
            p-required
            [p-label]="pageLoginLiterals.loginLabel"
            [p-no-autocomplete]="noAutocompleteLogin"
            [p-pattern]="loginPattern"
            [p-placeholder]="pageLoginLiterals.loginPlaceholder"
            (click)="closePopover()"
            (keyup.enter)="loginForm.valid && onLoginSubmit()"
            (p-change-model)="changeLoginModel()"
          >
          </po-login>

          <div
            *ngIf="pageLoginLiterals.loginHint || pageLoginLiterals.rememberUserHint"
            class="po-page-login-info-icon-container"
            [class.po-page-login-info-icon-container-dynamic]="
              !pageLoginLiterals.loginHint && !pageLoginLiterals.rememberUserHint
            "
          >
            <po-icon
              p-icon="ICON_INFO po-field-icon"
              *ngIf="pageLoginLiterals.loginHint"
              p-tooltip-position="right"
              [p-tooltip]="pageLoginLiterals.loginHint"
            >
            </po-icon>
          </div>
        </div>

        <div class="po-field-container-bottom po-field-container-error-container">
          <div
            *ngFor="let error of allLoginErrors"
            class="po-field-container-bottom-text-error po-field-container-error-item"
          >
            <po-icon p-icon="ICON_EXCLAMATION"></po-icon>
            <span class="po-field-container-error-text">{{ error }}</span>
          </div>
        </div>
      </div>

      <div class="po-lg-12">
        <div class="po-page-login-password-container">
          <po-password
            class="po-page-login-field-size po-page-login-password-item"
            [class.po-page-login-field-size-dynamic]="
              !pageLoginLiterals.loginHint && !pageLoginLiterals.rememberUserHint
            "
            name="password"
            [(ngModel)]="password"
            p-required
            [p-hide-password-peek]="hidePasswordPeek"
            [p-label]="pageLoginLiterals.passwordLabel"
            [p-no-autocomplete]="noAutocompletePassword"
            [p-pattern]="passwordPattern"
            [p-placeholder]="pageLoginLiterals.passwordPlaceholder"
            (click)="closePopover()"
            (keyup.enter)="loginForm.valid && onLoginSubmit()"
            (p-change-model)="changePasswordModel()"
          >
          </po-password>
          <div
            *ngIf="pageLoginLiterals.loginHint || pageLoginLiterals.rememberUserHint"
            class="po-page-login-password-item po-page-login-password-popover-container"
          >
            <po-page-login-popover
              *ngIf="showExceededAttemptsWarning && exceededAttemptsWarning"
              [p-literals]="pageLoginLiterals"
              [p-recovery]="recovery"
              [p-remaining-attempts]="exceededAttemptsWarning"
              (p-forgot-password)="openUrl($event)"
            >
            </po-page-login-popover>
          </div>
        </div>
        <div class="po-field-container-bottom po-field-container-error-container">
          <div
            *ngFor="let error of allPasswordErrors"
            class="po-field-container-bottom-text-error po-field-container-error-item"
          >
            <po-icon p-icon="ICON_EXCLAMATION"></po-icon>
            <span class="po-field-container-error-text">{{ error }}</span>
          </div>
        </div>
      </div>

      <po-input
        *ngIf="customField && customFieldType === 'input'"
        [class.po-page-login-field-size-dynamic]="!pageLoginLiterals.loginHint && !pageLoginLiterals.rememberUserHint"
        class="po-page-login-field-size po-lg-12"
        name="customFieldInput"
        [(ngModel)]="customFieldObject.value"
        p-required
        [p-error-pattern]="customFieldObject.errorPattern || pageLoginLiterals.customFieldErrorPattern"
        [p-pattern]="customFieldObject.pattern"
        [p-placeholder]="customFieldObject.placeholder || pageLoginLiterals.customFieldPlaceholder"
        (keyup.enter)="loginForm.valid && onLoginSubmit()"
      >
      </po-input>

      <po-combo
        *ngIf="customField && customFieldType === 'combo'"
        [class.po-page-login-field-size-dynamic]="!pageLoginLiterals.loginHint && !pageLoginLiterals.rememberUserHint"
        class="po-page-login-field-size po-lg-12"
        name="customFieldCombo"
        [(ngModel)]="customFieldObject.value"
        p-required
        [p-field-value]="customFieldObject.fieldValue"
        [p-filter-service]="customFieldObject.url"
        [p-placeholder]="customFieldObject.placeholder || pageLoginLiterals.customFieldPlaceholder"
      >
      </po-combo>

      <po-select
        *ngIf="customField && customFieldType === 'select'"
        [class.po-page-login-field-size-dynamic]="!pageLoginLiterals.loginHint && !pageLoginLiterals.rememberUserHint"
        class="po-page-login-field-size po-lg-12"
        name="customFieldSelect"
        [(ngModel)]="customFieldObject.value"
        p-required
        [p-placeholder]="customFieldObject.placeholder || pageLoginLiterals.customFieldPlaceholder"
        [p-options]="customFieldObject.options"
      >
      </po-select>

      <div class="po-lg-12">
        <div *ngIf="!hideRememberUser" class="po-page-login-hint po-page-login-info-container">
          <po-switch
            class="po-page-login-info-field po-lg-7 po-offset-lg-5 po-offset-xl-5"
            name="rememberUser"
            [(ngModel)]="rememberUser"
            p-label-position="1"
            [p-label-off]="pageLoginLiterals.rememberUser"
            [p-label-on]="pageLoginLiterals.rememberUser"
            (keyup.enter)="loginForm.valid && onLoginSubmit()"
          >
          </po-switch>

          <div
            *ngIf="pageLoginLiterals.loginHint || pageLoginLiterals.rememberUserHint"
            class="po-page-login-info-icon-container po-page-login-info-icon-remember-user"
            [class.po-page-login-info-icon-container-dynamic]="!pageLoginLiterals.rememberUserHint"
          >
            <po-icon
              p-icon="ICON_INFO po-field-icon"
              *ngIf="pageLoginLiterals.rememberUserHint"
              p-tooltip-position="right"
              [p-tooltip]="pageLoginLiterals.rememberUserHint"
            >
            </po-icon>
          </div>
        </div>
      </div>

      <po-button
        [class.po-page-login-button-dynamic]="!pageLoginLiterals.loginHint && !pageLoginLiterals.rememberUserHint"
        class="po-lg-12 po-page-login-button po-page-login-field-size"
        p-kind="primary"
        [p-disabled]="loginForm.invalid"
        [p-label]="loading ? pageLoginLiterals.submittedLabel : pageLoginLiterals.submitLabel"
        [p-loading]="loading"
        (p-click)="onLoginSubmit()"
      >
      </po-button>

      <div *ngIf="recovery" class="po-page-login-recovery-link">
        <a class="po-font-text-large-bold" (click)="openUrl(recovery)">{{ pageLoginLiterals.forgotPassword }}</a>
      </div>

      <div *ngIf="registerUrl" class="po-page-login-register-link">
        <a class="po-font-text-large-bold" (click)="openUrl(registerUrl)">{{ pageLoginLiterals.registerUrl }}</a>
      </div>
    </div>
  </form>
</po-page-background>
`
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ActivatedRoute
  }, {
    type: PoComponentInjectorService
  }, {
    type: IterableDiffers
  }, {
    type: PoPageLoginService
  }, {
    type: Router
  }, {
    type: PoLanguageService
  }], {
    loginForm: [{
      type: ViewChild,
      args: ["loginForm", {
        read: NgForm,
        static: true
      }]
    }],
    pageLogin: [{
      type: ViewChild,
      args: ["pageLogin", {
        read: ViewContainerRef,
        static: true
      }]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(PoPageLoginComponent, {
    className: "PoPageLoginComponent",
    filePath: "lib/components/po-page-login/po-page-login.component.ts",
    lineNumber: 60
  });
})();
var PoPageLoginModule = class _PoPageLoginModule {
  static ɵfac = function PoPageLoginModule_Factory(t) {
    return new (t || _PoPageLoginModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _PoPageLoginModule
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [PoPageLoginService],
    imports: [CommonModule, FormsModule, RouterModule, PoPageBackgroundModule, PoModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageLoginModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, RouterModule, PoPageBackgroundModule, PoModule],
      declarations: [PoPageLoginComponent, PoPageLoginPopoverComponent],
      exports: [PoPageLoginComponent],
      providers: [PoPageLoginService]
    }]
  }], null, null);
})();
(function() {
  (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PoPageLoginModule, {
    declarations: [PoPageLoginComponent, PoPageLoginPopoverComponent],
    imports: [CommonModule, FormsModule, RouterModule, PoPageBackgroundModule, PoModule],
    exports: [PoPageLoginComponent]
  });
})();
var PoComponentsModule = class _PoComponentsModule {
  static ɵfac = function PoComponentsModule_Factory(t) {
    return new (t || _PoComponentsModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _PoComponentsModule
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [PoModalPasswordRecoveryModule, PoPageBackgroundModule, PoPageBlockedUserModule, PoPageChangePasswordModule, PoPageDynamicDetailModule, PoPageDynamicEditModule, PoPageDynamicSearchModule, PoPageDynamicTableModule, PoPageJobSchedulerModule, PoPageLoginModule, PoModalPasswordRecoveryModule, PoPageBackgroundModule, PoPageBlockedUserModule, PoPageChangePasswordModule, PoPageDynamicDetailModule, PoPageDynamicEditModule, PoPageDynamicSearchModule, PoPageDynamicTableModule, PoPageJobSchedulerModule, PoPageLoginModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [PoModalPasswordRecoveryModule, PoPageBackgroundModule, PoPageBlockedUserModule, PoPageChangePasswordModule, PoPageDynamicDetailModule, PoPageDynamicEditModule, PoPageDynamicSearchModule, PoPageDynamicTableModule, PoPageJobSchedulerModule, PoPageLoginModule],
      exports: [PoModalPasswordRecoveryModule, PoPageBackgroundModule, PoPageBlockedUserModule, PoPageChangePasswordModule, PoPageDynamicDetailModule, PoPageDynamicEditModule, PoPageDynamicSearchModule, PoPageDynamicTableModule, PoPageJobSchedulerModule, PoPageLoginModule]
    }]
  }], null, null);
})();
(function() {
  (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PoComponentsModule, {
    imports: [PoModalPasswordRecoveryModule, PoPageBackgroundModule, PoPageBlockedUserModule, PoPageChangePasswordModule, PoPageDynamicDetailModule, PoPageDynamicEditModule, PoPageDynamicSearchModule, PoPageDynamicTableModule, PoPageJobSchedulerModule, PoPageLoginModule],
    exports: [PoModalPasswordRecoveryModule, PoPageBackgroundModule, PoPageBlockedUserModule, PoPageChangePasswordModule, PoPageDynamicDetailModule, PoPageDynamicEditModule, PoPageDynamicSearchModule, PoPageDynamicTableModule, PoPageJobSchedulerModule, PoPageLoginModule]
  });
})();
var PoServicesModule = class _PoServicesModule {
  static ɵfac = function PoServicesModule_Factory(t) {
    return new (t || _PoServicesModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _PoServicesModule
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [PoPageCustomizationModule, PoPageDynamicModule, PoPageCustomizationModule, PoPageDynamicModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoServicesModule, [{
    type: NgModule,
    args: [{
      imports: [PoPageCustomizationModule, PoPageDynamicModule],
      exports: [PoPageCustomizationModule, PoPageDynamicModule]
    }]
  }], null, null);
})();
(function() {
  (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PoServicesModule, {
    imports: [PoPageCustomizationModule, PoPageDynamicModule],
    exports: [PoPageCustomizationModule, PoPageDynamicModule]
  });
})();
var PoTemplatesModule = class _PoTemplatesModule {
  static ɵfac = function PoTemplatesModule_Factory(t) {
    return new (t || _PoTemplatesModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _PoTemplatesModule
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [PoComponentsModule, PoServicesModule, PoComponentsModule, PoServicesModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoTemplatesModule, [{
    type: NgModule,
    args: [{
      imports: [PoComponentsModule, PoServicesModule],
      exports: [PoComponentsModule, PoServicesModule]
    }]
  }], null, null);
})();
(function() {
  (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PoTemplatesModule, {
    imports: [PoComponentsModule, PoServicesModule],
    exports: [PoComponentsModule, PoServicesModule]
  });
})();
export {
  PoComponentsModule,
  PoJobSchedulerParametersTemplateDirective,
  PoJobSchedulerSummaryTemplateDirective,
  PoModalPasswordRecoveryComponent,
  PoModalPasswordRecoveryErrorMessageComponent,
  PoModalPasswordRecoveryModalContent,
  PoModalPasswordRecoveryModule,
  PoModalPasswordRecoveryType,
  PoPageBackgroundComponent,
  PoPageBackgroundModule,
  PoPageBlockedUserComponent,
  PoPageBlockedUserContactsComponent,
  PoPageBlockedUserModule,
  PoPageBlockedUserReason,
  PoPageBlockedUserReasonComponent,
  PoPageChangePasswordComponent,
  PoPageChangePasswordModule,
  PoPageCustomizationModule,
  PoPageCustomizationService,
  PoPageDynamicDetailComponent,
  PoPageDynamicDetailModule,
  PoPageDynamicEditComponent,
  PoPageDynamicEditModule,
  PoPageDynamicModule,
  PoPageDynamicSearchComponent,
  PoPageDynamicSearchModule,
  PoPageDynamicService,
  PoPageDynamicTableComponent,
  PoPageDynamicTableModule,
  PoPageJobSchedulerComponent,
  PoPageJobSchedulerModule,
  PoPageLoginAuthenticationType,
  PoPageLoginComponent,
  PoPageLoginModule,
  PoServicesModule,
  PoTemplatesModule,
  poModalPasswordRecoveryLiterals,
  poNotificationType,
  poNotificationTypeDefault,
  poPageBlockedUserButtonLiterals,
  poPageBlockedUserLiterals,
  poPageChangePasswordLiterals,
  poPageDynamicDetailLiteralsDefault,
  poPageDynamicEditLiteralsDefault,
  poPageDynamicLiterals
};
//# sourceMappingURL=@po-ui_ng-templates.js.map
