import React from 'react';
// import { NavLink } from 'react-router-dom';
import date from './img/date.jpg';
import perfil3 from './img/perfil3.png';
import './mecanico.css';

const Mecanico = () => (
  <div>
    <div className="d-flex mx-auto" style={{ width: '1000px' }}>
      <img src={perfil3} alt="" width="100" height="" />
      <div>
        <h1>Fulano de Juana</h1>
      </div>
    </div>
    <main className="container justify-content-center d-flex align-items-center alto-100">
      <div className="row">
        <div className="col-12 col-lg-7 bg-danger p-3 rounded-3">
          <h3 className="text-white">TODAS LAS ASIGNACIONES</h3>
          <article className="card">
            <div className="card-body">
              <div>
                <img src={date} alt="" className="align-items-center" />
              </div>
              <h4>Asignaciones para: 27/11/2021</h4>
              <div className="container">
                <div className="row">
                  <div className="col-md-20">
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Revisión de frenos
                          </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <strong>Nombre:</strong>Victor Ortega
                            <strong>Hora:</strong>8:00AM
                            <strong>Comentario:</strong>Ninguno
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Patillas
                          </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <strong>Nombre:</strong>Fulanita de tal
                            <strong>Hora:</strong>11:00AM
                            <strong>Comentario:</strong>Ninguno
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Discos
                          </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <strong>Nombre:</strong>Fulanita de tal
                            <strong>Hora:</strong>1:00PM
                            <strong>Comentario:</strong>Ninguno
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Suspensión
                          </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <strong>Nombre:</strong>Fulanita de tal
                            <strong>Hora:</strong>3:00PM
                            <strong>Comentario:</strong>Ninguno
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Amortiguadores
                          </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <strong>Nombre:</strong>Fulanita de tal
                            <strong>Hora:</strong>6:00PM
                            <strong>Comentario:</strong>Ninguno
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="col-12 col-lg-5 p-5">
          <div className="row ">
            <div className="p-3">
              <div className="col-12 bg-danger p-3 rounded-3">
                <h4 className="text-white">TAREAS PARA HOY</h4>
                <article className="card">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-15">
                        <div className="accordion" id="accordionExample">
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOneUp">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneUp" aria-expanded="false" aria-controls="collapseOneUp">
                                Discos
                              </button>
                            </h2>
                            <div id="collapseOneUp" className="accordion-collapse collapse" aria-labelledby="headingOneUp" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                <strong>Nombre:</strong>Fulanito de tal
                                <strong>Hora:</strong>9:00AM
                                <strong>Comentario:</strong>Ninguno
                                <button type="button" className="btn btn-warning btn-sm">En reparación</button>
                                <button type="button" className="btn btn-success btn-sm">Reparado</button>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwoUp">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoUp" aria-expanded="false" aria-controls="collapseTwoUp">
                                Patillas
                              </button>
                            </h2>
                            <div id="collapseTwoUp" className="accordion-collapse collapse" aria-labelledby="headingTwoUp" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                <strong>Nombre:</strong>Fulanita de tal
                                <strong>Hora:</strong>11:00AM
                                <strong>Comentario:</strong>Ninguno
                                <button type="button" className="btn btn-warning btn-sm">En reparación</button>
                                <button type="button" className="btn btn-success btn-sm">Reparado</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="p-3">
              <div className="col-12 bg-danger p-3 rounded-3">
                <h4 className="text-white">TAREAS PARA MAÑANA</h4>
                <article className="card">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-15">
                        <div className="accordion" id="accordionExample">
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOneDown">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneDown" aria-expanded="false" aria-controls="collapseOneDown">
                                Discos
                              </button>
                            </h2>
                            <div id="collapseOneDown" className="accordion-collapse collapse" aria-labelledby="headingOneDown" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                <strong>Nombre:</strong>Fulanita de tal
                                <strong>Hora:</strong>11:00AM
                                <strong>Comentario:</strong>Ninguno
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwoDown">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoDown" aria-expanded="false" aria-controls="collapseTwoDown">
                                Suspension
                              </button>
                            </h2>
                            <div id="collapseTwoDown" className="accordion-collapse collapse" aria-labelledby="headingTwoDown" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                <strong>Nombre:</strong>Fulanita de tal
                                <strong>Hora:</strong>3:00PM
                                <strong>Comentario:</strong>Ninguno
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default Mecanico;
