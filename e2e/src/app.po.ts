import { browser, by, element } from 'protractor';

export class AppPage {

  getParagraphText() {
    return element(by.deepCss('app-root ion-content')).getText();
  }

  //Metodos navegacion

  navegarInicio() {
    return browser.get('/inicio');
  }

  navegarLoginDocente() {
    return browser.get('/inicio-d');
  }

  navegarLoginEstudiante() {
    return browser.get('/inicio-a');
  }

  //Metodos get

  async ObtenerTituloH1():Promise<string> {
    return element(by.css('ion-card-title')).getText();
  }
  
  async ValidarCss1():Promise<string>{
    return element(by.css('.parrafo')).getText();
  }

  async ValidarCss2():Promise<string>{
    return element(by.css('.siguenos')).getText();
  }

  async ValidarFormularioEstudiante():Promise<string>{
    return element(by.css('.mapache')).getText();
  }

  async ValidarFormularioDocente():Promise<string>{
    return element(by.css('.gato')).getText();
  }

}




