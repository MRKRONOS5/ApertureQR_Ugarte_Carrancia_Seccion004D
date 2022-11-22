import { AppPage } from './app.po';

describe('Testings', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Prueba 1 comprobar titulo menu', async () => {
    await page.navegarInicio();
    expect(await page.ObtenerTituloH1()).toEqual('Aperture QR Conocenos');
  });

  it('Prueba 2 texto empresa', async () => {
    await page.navegarInicio();
    expect(await page.ValidarCss1()).toContain('somos una empresa informatica que crea aplicaciones moviles que ayudan a establecimientos a crear asistencias mediante codigo QR');
  });

  it('Prueba 3 siguenos', async () => {
    await page.navegarInicio();
    expect(await page.ValidarCss2()).toContain('siguenos');
  });

  it('Prueba 4 comprobar formulario docente', async () => {
    await page.navegarLoginDocente();
    expect(await page.ValidarFormularioDocente()).toEqual('inicio sesion docente');
  });

  it('Prueba 5 comprobar login estudiante', async () => {
    await page.navegarLoginEstudiante();
    expect(await page.ValidarFormularioEstudiante()).toEqual('inicio sesion estudiante');
  });

});
