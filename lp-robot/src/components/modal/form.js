import React, { useState } from "react";
import { Radio } from 'antd';
import robotsvg from "../../assets/robotsvg.svg";
import { Progress, DatePicker, Rate } from "antd";

function Form() {
  const [count, setCount] = useState(1);
  const [value, setValue] = useState(3);
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };



  return (
    <>
      <div className="App ">
        <form className="col-4 form"  >
          {count === 1 ? (
            <>
              <Progress percent={1} status="active" />
              <img src={robotsvg} alt="" className="w-50 h-60 ml-20" />
              <h1 className="text-center font-bold">TESTE DE VISÃO DE ÓTICA</h1>
              <p className="text-center">
                Inicie seu teste conosco e tenha seu resultado
              </p>
               <div className="mb-20  ml-5">

              <button className="w-20 h-10 text-white rounded bg-green-600 ml-40 "
              
                onClick={() => setCount(count + 1)}
                disabled={count > 11}
              >INCIAR</button>
             </div>
            </>
          ) : null}
          {count === 2 ? (
            <div className="form-group" required>
              <Progress percent={10} status="active" />

              <label class="uppercase text-sm font-bold opacity-70">Qual é seu nome ?</label>
              <input
                type="text"
                placeholder="seu nome"
                class="p-3 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
                required
              />
              <label class="uppercase text-sm font-bold opacity-70">
                Informe seu Melhor E-mail!
              </label>
              <input
                type="text"
                placeholder="seu email"
                class="p-3 mt-2 mb-4 w-full bg-slate-200 rounded"
                required
              />
             
             <button className="w-20 h-10 text-white rounded bg-green-600 ml-40 "
             required
                onClick={() => setCount(count + 1)}
                disabled={count > 11}
              >CONTINUAR</button>
            </div>
          ) : null}
          {count === 3 ? (
            <div className="form-group">
              <Progress percent={20} status="active" />
              <div className="text-center">
                <h1 className="text-2xl font-bold">Saude Geral</h1>
              </div>
              <h1>1- Como você está se sentindo hoje?</h1>
              <Radio.Group name="radiogroup" defaultValue={0} className="flex-row flex ">
                <div className="content w-70 m-2">
                  <div className="flex flex-nowrap  mb-5 pr-20">
                    <div className="flex-row mr-12">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-1-feliz.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={1} >Feliz</Radio>
                      </label>
                    </div>
                    <div className="flex-row mr-10">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-1-triste.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={2}>Triste</Radio>
                      </label>
                    </div>
                    <div className="flex-row ">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-1-estressado.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={3}>Estressado</Radio>

                      </label>

                    </div>

                  </div>

                  <div className="flex flex-nowrap pr-20">
                    <div className="flex-row mr-5">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-1-medo.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={4}>Com medo</Radio>
                      </label>
                    </div>
                    <div className="flex-row mr-5">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-1-ansioso.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={5}>Ansioso</Radio>
                      </label>
                    </div>
                    <div className="flex-row ">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-depressivo.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={6}>Depressivo</Radio>

                      </label>

                    </div>

                  </div>

                </div>
              </Radio.Group>

              <hr />
              <br />

              <h1>2- Você sente algum desses sintomas?</h1>
              <Radio.Group name="radiogroup" defaultValue={0} className="flex-row flex">
                <div className="content w-70 m-2">

                  <div className="flex flex-nowrap mb-5 pr-20">


                    <div className="flex-row mr-5">

                      <label htmlFor="happy">

                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-2-dorcabeca.svg" width="50" height="30" alt="" />
                        <br />

                        <Radio value={1}>Dor de Cabeça</Radio>
                      </label>
                    </div>
                    <div className="flex-row mr-5">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-tontura.svg" width="50" height="30" alt="" />
                        <br />
                        <Radio value={2}>Tontura</Radio>
                      </label>
                    </div>
                    <div className="flex-row ">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-desmaio.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={3}>Desmaios</Radio>

                      </label>

                    </div>



                  </div>

                  <div className="flex flex-nowrap pr-20">

                    <div className="flex-row ">
                      <label htmlFor="happy">
                        <img src="	https://adamrobo.com.br/lp/img/game/green_none.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={4}>Nenhum</Radio>
                      </label>
                    </div>


                  </div>

                </div>
              </Radio.Group>

              <br />
              <hr />
              <br />

              <h1>3- Como está sua pressão atualmente?</h1>
              <Radio.Group name="radiogroup" defaultValue={0} className="flex-row flex">
                <div className="content w-70  ">

                  <div className="flex flex-nowrap mb-5 pr-20">


                    <div className="flex-row mr-5">

                      <label htmlFor="happy">


                        <br />

                        <Radio value={1}>Normal (120/80)</Radio>
                      </label>
                    </div>
                    <div className="flex-row mr-5">
                      <label htmlFor="happy">

                        <br />
                        <Radio value={2}> Alta + (Acima de 130/90)</Radio>
                      </label>
                    </div>
                    <div className="flex-row ">
                      <label htmlFor="happy">

                        <br />
                        <Radio value={3}> Baixa - (Abaixo de 110/70)</Radio>

                      </label>

                    </div>

                  </div>


                </div>
              </Radio.Group>

              <button className="w-20 h-10 text-white rounded bg-green-600 ml-40 "
                onClick={() => setCount(count + 1)}
                disabled={count > 11}
              >CONTINUAR</button>
            </div>

          ) : null}
          {count === 4 ? (
            <div className="form-group">

              <Progress percent={25} status="active" />

              <h1>4- Você possui algum destes problemas </h1>

              <Radio.Group name="radiogroup" defaultValue={0} className="flex-row flex">
                <div className="content w-70 m-2">

                  <div className="flex flex-nowrap mb-5 pr-20">


                    <div className="flex-row mr-5">

                      <label htmlFor="happy">

                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-2-coracao.svg" width="50" height="30" alt="" />
                        <br />

                        <Radio value={1}>Cardíacos</Radio>
                      </label>
                    </div>
                    <div className="flex-row mr-5">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-2-diabetes.svg" width="50" height="30" alt="" />
                        <br />
                        <Radio value={2}>Diabetico</Radio>
                      </label>
                    </div>
                    <div className="flex-row ">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-depressao.png" width="70" height="30" alt="" />
                        <br />
                        <Radio value={3}>Ansioso</Radio>

                      </label>

                    </div>



                  </div>

                  <div className="flex flex-nowrap pr-20">

                    <div className="flex-row ">
                      <label htmlFor="happy">
                        <img src="	https://adamrobo.com.br/lp/img/game/green_none.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={4}>Nenhum</Radio>
                      </label>
                    </div>


                  </div>

                </div>
              </Radio.Group>

              <hr />
              <br />
              <h1>5- Você faz uso de:</h1>
              <Radio.Group name="radiogroup" defaultValue={0} className="flex-row flex">
                <div className="content w-70 m-2">

                  <div className="flex flex-nowrap mb-5 pr-20">


                    <div className="flex-row mr-5">

                      <label htmlFor="happy">

                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-medicamentos.svg" width="50" height="30" alt="" />
                        <br />

                        <Radio value={1}>Cardíacos</Radio>
                      </label>
                    </div>
                    <div className="flex-row mr-5">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-tratamentos-especiais.png" width="55" height="30" alt="" />
                        <br />
                        <Radio value={2}>Diabetico</Radio>
                      </label>
                    </div>
                    <div className="flex-row ">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/green_none.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={3}>Ansioso</Radio>

                      </label>

                    </div>



                  </div>



                </div>
              </Radio.Group>
              <div className="text-center">
                <h1 className="text-2xl font-bold">Saúde Geral dos Olhos </h1>
              </div>
              <h1>1- Você faz uso de:</h1>
              <Radio.Group name="radiogroup" defaultValue={0} className="flex-row flex">
                <div className="content w-70 m-2">

                  <div className="flex flex-nowrap mb-5 pr-20">


                    <div className="flex-row mr-5">

                      <label htmlFor="happy">

                        <img src="	https://adamrobo.com.br/lp/img/game/icon-anm-oftal-dor-olho2.svg" width="50" height="30" alt="" />
                        <br />

                        <Radio value={1}>Dor nos Olhos</Radio>
                      </label>
                    </div>
                    <div className="flex-row mr-5">
                      <label htmlFor="happy">
                        <img src="	https://adamrobo.com.br/lp/img/game/icon-anm-oftal-coceira.png" width="55" height="30" alt="" />
                        <br />
                        <Radio value={2}>Coceira</Radio>
                      </label>
                    </div>
                    <div className="flex-row ">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/green_none.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={3}>Ardência</Radio>
                      </label>
                    </div>

                  </div>
                </div>
              </Radio.Group>
              <div className="flex flex-nowrap pr-20">

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/game/icon-anm-oftal-vermelhidao2.svg" width="50" height="30" alt="" />
                    <br />
                    <Radio value={4}>Vermelhidão</Radio>
                  </label>
                </div>
                <div className="flex-row ml-8">
                  <label htmlFor="happy">
                    <img src="		https://adamrobo.com.br/lp/img/game/icon-anm-oftal-ardencia2.svg" width="50" height="30" alt="" />
                    <br />
                    <Radio value={4}>Lacrimação</Radio>
                  </label>
                </div>
              </div>
              <button className="w-20 h-10 text-white rounded bg-green-600 ml-40 "
                onClick={() => setCount(count + 1)}
                disabled={count > 11}
              >CONTINUAR</button>
            </div>
          ) : null}
          {count === 5 ? (
            <div className="form-group">
              <Progress percent={32} status="active" />
              <h1>1- Como você está se sentindo hoje?</h1>
              <Radio.Group name="radiogroup" defaultValue={0} className="flex-row flex ">
                <div className="content w-70 m-2">
                  <div className="flex flex-nowrap  mb-5 pr-20">
                    <div className="flex-row mr-12">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-1-feliz.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={1} >Sensação olho seco</Radio>
                      </label>
                    </div>
                    <div className="flex-row mr-10">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-1-triste.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={2}>Secreção</Radio>
                      </label>
                    </div>
                    <div className="flex-row ">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-1-estressado.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={3} className="text-xs">Flashes de Luz ao enxergar</Radio>

                      </label>

                    </div>

                  </div>

                  <div className="flex flex-nowrap pr-20">
                    <div className="flex-row mr-5">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-1-medo.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={4}>Manchas ao enxergar</Radio>
                      </label>
                    </div>
                    <div className="flex-row mr-5">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-1-ansioso.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={5}>Moscas Volantes ao enxergar</Radio>
                      </label>
                    </div>
                    <div className="flex-row ">
                      <label htmlFor="happy">
                        <img src="	https://adamrobo.com.br/lp/img/game/green_none.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={2}>Nenhum</Radio>

                      </label>
                    </div>

                  </div>

                </div>
              </Radio.Group>

              <hr />
              <br />
              <div className="text-center">
                <h1 className="text-2xl font-bold">Sua visão no dia e a noite</h1>
              </div>
              <h1>3- Você tem sensibilidade ao Sol ? </h1>
              <Radio.Group name="radiogroup" defaultValue={0} className="flex-row flex">
                <div className="content w-70 m-2">

                  <div className="flex flex-nowrap mb-5 pr-20">


                    <div className="flex-row mr-5">

                      <label htmlFor="happy">



                        <Radio value={1}>Sim</Radio>
                      </label>
                    </div>
                    <div className="flex-row mr-5">
                      <label htmlFor="happy">

                        <Radio value={2}>Não</Radio>
                      </label>
                    </div>
                    <div className="flex-row ">
                      <label htmlFor="happy">

                        <Radio value={3}>Às vezes</Radio>

                      </label>

                    </div>

                  </div>

                </div>
              </Radio.Group>

              <br />
              <hr />
              <br />

              <h1>4- Usa Óculos de Sol ? </h1>
              <Radio.Group name="radiogroup" defaultValue={0} className="flex-row flex">
                <div className="content w-70 m-2">

                  <div className="flex flex-nowrap mb-5 pr-20">


                    <div className="flex-row mr-5">

                      <label htmlFor="happy">



                        <Radio value={1}>Sim</Radio>
                      </label>
                    </div>
                    <div className="flex-row mr-5">
                      <label htmlFor="happy">

                        <Radio value={2}>Não</Radio>
                      </label>
                    </div>
                    <div className="flex-row ">
                      <label htmlFor="happy">

                        <Radio value={3}>Às vezes</Radio>

                      </label>

                    </div>

                  </div>

                </div>
              </Radio.Group>

              <h1>5- Você sente incômodo na visão noturna com:</h1>
              <Radio.Group name="radiogroup" defaultValue={0} className="flex-row flex ">
                <div className="content w-70 m-2">
                  <div className="flex flex-nowrap  mb-5 pr-20">
                    <div className="flex-row mr-12">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-oftal-luzes.svg" width="50" height="30" alt="" />
                        <br />
                        <Radio value={1} >Luzes</Radio>
                      </label>
                    </div>
                    <div className="flex-row mr-10">
                      <label htmlFor="happy">
                        <img src="	https://adamrobo.com.br/lp/img/game/icon-anm-oftal-farol-veiculos.svg" width="50" height="30" alt="" />
                        <br />
                        <Radio value={2}>Faróis de Veículos</Radio>
                      </label>
                    </div>
                    <div className="flex-row ">
                      <label htmlFor="happy">
                        <img src="	https://adamrobo.com.br/lp/img/game/icon-anm-oftal-brilho-tela.svg" width="50" height="30" alt="" />
                        <br />
                        <Radio value={3} className="text-xs">Brilho das Telas</Radio>

                      </label>

                    </div>

                  </div>


                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="	https://adamrobo.com.br/lp/img/game/green_none.png" width="50" height="30" alt="" />
                      <br />
                      <Radio value={2}>Nenhum</Radio>

                    </label>


                  </div>

                </div>
              </Radio.Group>
              <button className="w-20 h-10 text-white rounded bg-green-600 ml-40 "
                onClick={() => setCount(count + 1)}
                disabled={count > 11}
              >CONTINUAR</button>

            </div>
          ) : null}
          {count === 6 ? (
            <div className="form-group">
              <Progress percent={60} status="active" />

              <div className="text-center">
                <h1 className="text-2xl font-bold">Teste de Visão </h1>
              </div>

              <div className="flex flex-nowrap p-5 pr-20">

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/game/green_none.png" width="50" height="30" alt="" />
                    <br />
                    <Radio value={1}>Teste Digital</Radio>

                  </label>
                </div>

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/game/green_none.png" width="50" height="30" alt="" />
                    <br />
                    <Radio value={2}>Fui ao consultório</Radio>
                  </label>
                </div>

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/game/green_none.png" width="50" height="30" alt="" />
                    <br />
                    <Radio value={2}>Desejo ir ao consultório</Radio>
                  </label>
                </div>

              </div>
              <h1>6- Como está realizando seu Teste de Visão Digital ? </h1>
              <div className="flex flex-nowrap p-5 pr-20">

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/game/green_none.png" width="50" height="30" alt="" />
                    <br />
                    <Radio value={1}>Sem óculos</Radio>

                  </label>
                </div>

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/game/green_none.png" width="50" height="30" alt="" />
                    <br />
                    <Radio value={2}>Com Óculos</Radio>
                  </label>
                </div>

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/game/green_none.png" width="50" height="30" alt="" />
                    <br />
                    <Radio value={3}>Com lentes de contato</Radio>
                  </label>
                </div>


              </div>

              <div className="flex-row ml-5 ">
                <label htmlFor="happy">
                  <img src="	https://adamrobo.com.br/lp/img/game/green_none.png" width="50" height="30" alt="" />
                  <br />
                  <Radio value={4}>ja fiz Cirurgia</Radio>

                </label>


              </div>
              <br />
              <hr />

              <h1>7- Como é sua visão para longe ? </h1>
              <p className="font-bold">Marque as opções em que sente dificuldades :</p>
              <Radio.Group name="radiogroup" defaultValue={0} className="flex-row flex ">
                <div className="content w-70 m-2">
                  <div className="flex flex-nowrap  mb-5 pr-20">
                    <div className="flex-row mr-12">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-1-feliz.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={1} >Cinema</Radio>
                      </label>
                    </div>
                    <div className="flex-row mr-10">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-1-triste.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={2}>Televisão</Radio>
                      </label>
                    </div>
                    <div className="flex-row ">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-1-estressado.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={3}>Outdoor</Radio>

                      </label>

                    </div>

                  </div>

                  <div className="flex flex-nowrap pr-20">
                    <div className="flex-row mr-5">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-1-medo.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={4}>Não reconheco as pessoas na rua</Radio>
                      </label>
                    </div>
                    <div className="flex-row mr-5">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-1-ansioso.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={5}>Dificuldade identificar ônibus</Radio>
                      </label>
                    </div>
                    <div className="flex-row ">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-depressivo.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={6}>Nenhum</Radio>

                      </label>

                    </div>

                  </div>

                </div>
              </Radio.Group>
              <button className="w-20 h-10 text-white rounded bg-green-600 ml-40 "
                onClick={() => setCount(count + 1)}
                disabled={count > 11}
              >CONTINUAR</button>
            </div>

          ) : null}
          {count === 7 ? (
            <div className="form-group">
              <Progress percent={72} status="active" />

              <div className="text-center">
                <h1 className="text-2xl font-bold">Teste de Visão </h1>
              </div>
              <h1>6- Qual sua data de nascimento ?  </h1>
              <div className="flex flex-nowrap p-5 pr-20">

                <DatePicker onChange={onChange} />

              </div>

              <h1>7- Ao enxergar para longe, como é sua visão ?   ?  </h1>
              <div className="flex flex-wrap p-5 pr-20 ml-20">

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/game/icon-testevisao-normal.jpg" width="120" height="50" alt="" />
                    <br />
                    <Radio value={1}>Nítida</Radio>

                  </label>
                </div>

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/game/icon-testevisao-pequena.png" width="120" height="30" alt="" />
                    <br />
                    <Radio value={2}>Boa</Radio>
                  </label>
                </div>

              </div>

              <div className="flex flex-wrap p-5 pr-20 ml-20">

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/game/icon-testevisao-media.png" width="120" height="30" alt="" />
                    <br />
                    <Radio value={1}>Ruim</Radio>

                  </label>
                </div>

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/game/icon-testevisao-media.png" width="120" height="30" alt="" />
                    <br />
                    <Radio value={2}>Péssima</Radio>
                  </label>
                </div>

              </div>

              <br />
              <hr />

              <h1>8- Como é sua visão para longe ? </h1>
              <p className="font-bold">Marque as opções em que sente dificuldades :</p>
              <Radio.Group name="radiogroup" defaultValue={0} className="flex-row flex ">
                <div className="content w-70 m-2">
                  <div className="flex flex-nowrap  mb-5 pr-20">
                    <div className="flex-row mr-12">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-1-feliz.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={1} >leitura</Radio>
                      </label>
                    </div>
                    <div className="flex-row mr-10">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-1-triste.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={2}>Celular ou Computador ? </Radio>
                      </label>
                    </div>
                    <div className="flex-row ">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-1-estressado.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={3}>TV</Radio>

                      </label>

                    </div>

                  </div>

                  <div className="flex flex-nowrap pr-20">
                    <div className="flex-row mr-5">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-1-medo.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={4}>Estico o braço</Radio>
                      </label>
                    </div>
                    <div className="flex-row mr-5">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-1-ansioso.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={5}>Peso ao redor dos olhos</Radio>
                      </label>
                    </div>
                    <div className="flex-row ">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-depressivo.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={6}>Nenhum</Radio>

                      </label>

                    </div>



                  </div>

                </div>
              </Radio.Group>

              <h1>9- Ao enxergar para perto, como é sua visão ?    </h1>
              <div className="flex flex-wrap p-5 pr-20 ml-20">

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="		https://adamrobo.com.br/lp/img/game/icon-vt-jaeger-nitida.png" width="120" height="50" alt="" />
                    <br />
                    <Radio value={1}>Nítida</Radio>

                  </label>
                </div>

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/game/icon-vt-jaeger-boa.png" width="120" height="30" alt="" />
                    <br />
                    <Radio value={2}>Boa</Radio>
                  </label>
                </div>

              </div>

              <div className="flex flex-wrap p-5 pr-20 ml-20">

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/game/icon-vt-jaeger-ruim.png" width="120" height="30" alt="" />
                    <br />
                    <Radio value={1}>Ruim</Radio>

                  </label>
                </div>

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="https://adamrobo.com.br/lp/img/game/icon-vt-jaeger-pessima.png" width="120" height="30" alt="" />
                    <br />
                    <Radio value={2}>Péssima</Radio>
                  </label>
                </div>

              </div>

              <h1>10- Ao enxergar para e perto ao mesmo tempo, como é sua visão?   </h1>
              <div className="flex flex-wrap p-5 pr-20 ml-20">

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/game/icon-testevisao-normal.jpg" width="120" height="50" alt="" />
                    <br />
                    <Radio value={1}>Nítida</Radio>

                  </label>
                </div>

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/game/icon-testevisao-pequena.png" width="120" height="30" alt="" />
                    <br />
                    <Radio value={2}>Pouco borrada</Radio>
                  </label>
                </div>

              </div>

              <div className="flex flex-wrap p-5 pr-20 ml-20">

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/game/icon-testevisao-media.png" width="120" height="30" alt="" />
                    <br />
                    <Radio value={1}>Borrada</Radio>

                  </label>
                </div>

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/game/icon-testevisao-media.png" width="120" height="30" alt="" />
                    <br />
                    <Radio value={2}>Muito borrada</Radio>
                  </label>
                </div>

              </div>

              <h1>11- Quais dos fundos coloridos é mais confortável para você ?   </h1>
              <div className=" ml-20 mx-auto p-10">
                <img src="	https://adamrobo.com.br/lp/img/game/icon-teste-visao-bicromatico.svg" width="200" height="90" alt="" />


                <div className="flex-row ">
                </div>

              </div>

              <div className="flex flex-wrap p-5 pr-20 ml-20">

                <Radio.Group name="radiogroup" defaultValue={0} className="flex-row flex">
                  <div className="content w-70 m-2">

                    <div className="flex flex-nowrap mb-5 pr-20">


                      <div className="flex-row mr-5">

                        <label htmlFor="happy">



                          <Radio value={1}>Verde</Radio>
                        </label>
                      </div>
                      <div className="flex-row mr-5">
                        <label htmlFor="happy">

                          <Radio value={2}>Vermelho</Radio>
                        </label>
                      </div>
                      <div className="flex-row ">
                        <label htmlFor="happy">

                          <Radio value={3} >Os dois lados</Radio>

                        </label>

                      </div>

                    </div>

                  </div>
                </Radio.Group>


              </div>
              <button className="w-20 h-10 text-white rounded bg-green-600 ml-40 "
                onClick={() => setCount(count + 1)}
                disabled={count > 11}
              >CONTINUAR</button>
            </div>
          ) : null}
          {count === 8 ? (
            <div className="form-group">
              <Progress percent={78} status="active" />

              <div className="text-center">
                <h1 className="text-2xl font-bold">Teste de Cores (Daltonismo)</h1>
              </div>

              <h1>7- Ao enxergar para longe, como é sua visão ?  </h1>
              <div className="flex flex-wrap p-5 pr-20 ml-20">

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="https://adamrobo.com.br/lp/img/1_placa12.png" width="120" height="50" alt="" />
                    <br />
                    <input type="text" name="daltonismo" placeholder="numero" class="p-3 mt-2 mb-4 w-20 bg-slate-200 rounded border-2 border-slate-200 
                    focus:border-slate-600 focus:outline-none"/>

                  </label>
                </div>

                <div className="flex-row ml-10">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/2_placa8.png" width="120" height="30" alt="" />
                    <br />
                    <input type="text" name="daltonismo" placeholder="numero" class="p-3 mt-2 mb-4 w-20 bg-slate-200 rounded border-2 border-slate-200 
                    focus:border-slate-600 focus:outline-none"/>
                  </label>
                </div>

              </div>

              <div className="flex flex-wrap p-5 pr-20 ml-20">

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/3_placa15.png" width="120" height="30" alt="" />
                    <br />
                    <input type="text" name="daltonismo" placeholder="numero" class="p-3 mt-2 mb-4 w-20 bg-slate-200 rounded border-2 border-slate-200 
                    focus:border-slate-600 focus:outline-none"/>

                  </label>
                </div>

                <div className="flex-row ml-5">
                  <label htmlFor="happy">
                    <img src="https://adamrobo.com.br/lp/img/4_placa6.png" width="120" height="30" alt="" />
                    <br />
                    <input type="text" name="daltonismo" placeholder="numero" class="p-3 mt-2 mb-4 w-20 bg-slate-200 rounded border-2 border-slate-200 
                    focus:border-slate-600 focus:outline-none"/>
                  </label>
                </div>

              </div>

              <div className="flex flex-wrap p-5 pr-20 ml-20">

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/5_placa73.png" width="120" height="30" alt="" />
                    <br />
                    <input type="text" name="daltonismo" placeholder="numero" class="p-3 mt-2 mb-4 w-20 bg-slate-200 rounded border-2 border-slate-200 
    focus:border-slate-600 focus:outline-none"/>

                  </label>
                </div>

                <div className="flex-row ml-5">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/6_placa42.png" width="120" height="30" alt="" />
                    <br />
                    <input type="text" name="daltonismo" placeholder="numero" class="p-3 mt-2 mb-4 w-20 bg-slate-200 rounded border-2 border-slate-200 
    focus:border-slate-600 focus:outline-none"/>
                  </label>
                </div>

              </div>

              <br />
              <hr />

              <button className="w-20 h-10 text-white rounded bg-green-600 ml-40 "
                onClick={() => setCount(count + 1)}
                disabled={count > 11}
              >CONTINUAR</button>
            </div>
          ) : null}
          {count === 9 ? (
            <div className="form-group">
              <Progress percent={82} status="active" />
              <div className="text-center">
                <h1 className="text-2xl font-bold">Sintomas Especiais</h1>
              </div>

              <h1>1- Como está alinhando  </h1>
              <div className="flex flex-wrap p-5 pr-20 ml-20">

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="https://adamrobo.com.br/lp/img/1_placa12.png" width="120" height="50" alt="" />
                    <br />
                    <input type="text" name="daltonismo" placeholder="numero" class="p-3 mt-2 mb-4 w-20 bg-slate-200 rounded border-2 border-slate-200 
                    focus:border-slate-600 focus:outline-none"/>

                  </label>
                </div>

                <div className="flex-row ml-10">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/2_placa8.png" width="120" height="30" alt="" />
                    <br />
                    <input type="text" name="daltonismo" placeholder="numero" class="p-3 mt-2 mb-4 w-20 bg-slate-200 rounded border-2 border-slate-200 
                    focus:border-slate-600 focus:outline-none"/>
                  </label>
                </div>

              </div>

              <div className="flex flex-wrap p-5 pr-20 ml-20">

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/3_placa15.png" width="120" height="30" alt="" />
                    <br />
                    <input type="text" name="daltonismo" placeholder="numero" class="p-3 mt-2 mb-4 w-20 bg-slate-200 rounded border-2 border-slate-200 
                    focus:border-slate-600 focus:outline-none"/>

                  </label>
                </div>

                <div className="flex-row ml-5">
                  <label htmlFor="happy">
                    <img src="https://adamrobo.com.br/lp/img/4_placa6.png" width="120" height="30" alt="" />
                    <br />
                    <input type="text" name="daltonismo" placeholder="numero" class="p-3 mt-2 mb-4 w-20 bg-slate-200 rounded border-2 border-slate-200 
                    focus:border-slate-600 focus:outline-none"/>
                  </label>
                </div>

              </div>

              <div className="flex flex-wrap p-5 pr-20 ml-20">

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/5_placa73.png" width="120" height="30" alt="" />
                    <br />
                    <input type="text" name="daltonismo" placeholder="numero" class="p-3 mt-2 mb-4 w-20 bg-slate-200 rounded border-2 border-slate-200 
    focus:border-slate-600 focus:outline-none"/>

                  </label>
                </div>

                <div className="flex-row ml-5">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/6_placa42.png" width="120" height="30" alt="" />
                    <br />
                    <input type="text" name="daltonismo" placeholder="numero" class="p-3 mt-2 mb-4 w-20 bg-slate-200 rounded border-2 border-slate-200 
    focus:border-slate-600 focus:outline-none"/>
                  </label>
                </div>
              </div>
              <br />
              <hr />
              <button className="w-20 h-10 text-white rounded bg-green-600 ml-40 "
                onClick={() => setCount(count + 1)}
                disabled={count > 11}
              >CONTINUAR</button>
            </div>
          ) : null}
          {count === 10 ? (
            <div className="form-group">
              <Progress percent={92} status="active" />

              <div className="text-center">
                <h1 className="text-2xl font-bold">Sintomas Especiais</h1>
              </div>

              <h1>1- Como está Alinhamento dos olhos ? </h1>
              <div className="flex flex-wrap p-5 pr-20 ml-20">

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="https://adamrobo.com.br/lp/img/game/icon-teste-visao-estrabismo1.svg" width="120" height="50" alt="" />
                    <br />
                    <Radio value={1}>Alinhado</Radio>
                  </label>
                </div>

                <div className="flex-row ml-10">
                  <label htmlFor="happy">
                    <img src="https://adamrobo.com.br/lp/img/game/icon-teste-visao-estrabismo1.svg" width="120" height="30" alt="" />
                    <br />
                    <Radio value={2}>Desalinhado</Radio>
                  </label>
                </div>

              </div>

              <div className="flex flex-wrap p-5 pr-20 ml-20">

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="https://adamrobo.com.br/lp/img/game/icon-teste-visao-estrabismo3.svg" width="120" height="50" alt="" />
                    <br />
                    <Radio value={3}>Desalinhado</Radio>
                  </label>
                </div>

                <div className="flex-row ml-10">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/game/icon-teste-visao-estrabismo4.svg" width="120" height="30" alt="" />
                    <br />
                    <Radio value={4}>Desalinhado</Radio>
                  </label>
                </div>

              </div>



              <h1>2- Sente alguns destes sintomas ?  </h1>
              <div className="flex flex-wrap p-5 pr-20 ">

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/game/icon-patologia-nebulosa.svg" width="50" height="30" alt="" />
                    <br />
                    <Radio value={1}>Visão Nebulosa</Radio>
                  </label>
                </div>

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="https://adamrobo.com.br/lp/img/game/icon-patologia-troca-receita.svg" width="50" height="30" alt="" />
                    <br />
                    <Radio value={2}>Troca constante de receita</Radio>
                  </label>
                </div>

              </div>

              <div className="flex flex-wrap p-5 pr-20 ">

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/game/icon-teste-visao-melhora-piora-visao.png" width="50" height="30" alt="" />
                    <br />
                    <Radio value={3}>Melhora e piora a constante de visão</Radio>
                  </label>
                </div>

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/game/green_none.png" width="50" height="30" alt="" />
                    <br />
                    <Radio value={4}>Nenhum</Radio>
                  </label>
                </div>

              </div>

              <h1>3- Sente alguns destes sintomas?  </h1>
              <div className="flex flex-wrap p-5 pr-20 ">

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/game/icon-patologia-noite.svg" width="50" height="30" alt="" />
                    <br />
                    <Radio value={1}>Não enxergar bem a noite</Radio>
                  </label>
                </div>

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="https://adamrobo.com.br/lp/img/game/icon-patologia-nausea.svg" width="50" height="30" alt="" />
                    <br />
                    <Radio value={2}>Náusea e vômito</Radio>
                  </label>
                </div>

              </div>

              <div className="flex flex-wrap p-5 pr-20 ">

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/game/green_none.png" width="50" height="30" alt="" />
                    <br />
                    <Radio value={4}>Nenhum</Radio>
                  </label>
                </div>

              </div>

              <h1>4- Sente alguns destes sintomas?  </h1>
              <div className="flex flex-wrap p-5 pr-20 ">

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/game/icon-patologia-sensivel-sol.svg" width="50" height="30" alt="" />
                    <br />
                    <Radio value={1}>Hipersenbilidade a Luz</Radio>
                  </label>
                </div>

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="https://adamrobo.com.br/lp/img/game/icon-patologia-fantasma.svg" width="50" height="30" alt="" />
                    <br />
                    <Radio value={2}>imagens fantasma</Radio>
                  </label>
                </div>

              </div>

              <div className="flex flex-wrap p-5 pr-20 ">

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/game/green_none.png" width="50" height="30" alt="" />
                    <br />
                    <Radio value={4}>Nenhum</Radio>
                  </label>
                </div>

              </div>

              <h1>5- Sente alguns destes sintomas ou caracteristicas ?  </h1>
              <div className="flex flex-wrap p-5 pr-2 ">

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="https://adamrobo.com.br/lp/img/game/icon-patologia-corpo-estranho.svg" width="50" height="30" alt="" />
                    <br />
                    <Radio value={1}>Sensação de corpo ruim</Radio>
                  </label>
                </div>

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/game/icon-patologia-litoral.svg" width="50" height="30" alt="" />
                    <br />
                    <Radio value={2}>viveu Longos períodos no Litoral</Radio>
                  </label>
                </div>

              </div>

              <div className="flex flex-wrap p-5 pr-2 ">

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/game/icon-patologia-zona-rural.svg" width="50" height="30" alt="" />
                    <br />
                    <Radio value={4}>Viveu longos períodos na Zona Rural</Radio>
                  </label>
                </div>

                <div className="flex-row ml-5">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/game/green_none.png" width="50" height="30" alt="" />
                    <br />
                    <Radio value={4}>Nenhum</Radio>
                  </label>
                </div>

              </div>
              <button className="w-20 h-10 text-white rounded bg-green-600 ml-40 "
                onClick={() => setCount(count + 1)}
                disabled={count > 11}
              >CONTINUAR</button>
            </div>
          ) : null}
          {count === 11 ? (
            <div className="form-group">
              <Progress percent={100} status="active" />

              <div className="text-center">
                <h1 className="text-2xl font-bold">Dúvidas, Sugestões e Elogios</h1>
              </div>


              <label class="uppercase text-sm font-bold opacity-70">Ok ! Qual seu número de celular ?  </label>
              <input
                type="text"
                placeholder="DDD + Celular com Whatsapp"
                class="p-3 mt-2 mb-4 w-full h-10 bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
                required
              />

              <input
                type="text"
                placeholder="Sua mensagem aqui"
                class="p-3 mt-2 mb-4 w-full h-10 bg-slate-200 rounded"
                required
              />

              <span className="ml-40">
                <Rate onChange={setValue} value={value} />
              </span>

             <div className="mb-20  ml-5">

              <button type="submit" className="w-20 h-10 text-white rounded bg-green-600 ml-40 ">Resultado</button>
             </div>
            </div>
           
            
            
          ) : null}
        </form>

      </div>
    </>
  );
}

export default Form;
