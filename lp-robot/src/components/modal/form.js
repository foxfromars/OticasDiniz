import React, { useEffect, useState } from "react";
import { DatePicker, Checkbox } from 'antd';
import 'flowbite';
import 'tw-elements';
import { Radio } from 'antd';
import robotsvg from "../../assets/robotsvg.svg";
import { Progress, Rate } from "antd";
import { api } from "../../services/api";
import Result from "./result";


function Form() {

  const [count, setCount] = useState(1);
  const [openResult, setOpenResult] = useState(false);

  const [buttonDisable, setButtonDisable] = useState(true)

  const [id, setId] = useState('')
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')

  const [feeling, setFeeling] = useState('')
  const [symptoms, setSymptoms] = useState('')
  const [pression, setPression] = useState('')

  const [problem, setProblem] = useState('')
  const [medicine, setMedicine] = useState('')
  const [eyePain, setEyePain] = useState('')

  const [feelingToday, setfeelingToday] = useState('')
  const [vision, setvision] = useState('')
  const [glass, setglass] = useState('')
  const [nightVision, setnightVision] = useState('')

  const [testVision, settestVision] = useState('')
  const [testVision2, settestVision2] = useState('')
  const [testDigital, settestDigital] = useState('')
  const [farVision, setfarVision] = useState('')

  const [birthDay, setbirthDay] = useState('')
  const [farVision2, setfarVision2] = useState('')
  const [farVision3, setfarVision3] = useState('')
  const [nearVision, setnearVision] = useState('')
  const [nearVision2, setnearVision2] = useState('')
  const [confort, setconfort] = useState('')

  const [doze, setdoze] = useState('')
  const [oito, setoito] = useState('')
  const [quinze, setquinze] = useState('')
  const [seis, setseis] = useState('')
  const [treze, settreze] = useState('')
  const [quatrodois, setquatrodois] = useState('')

  const [doze2, setdoze2] = useState('')
  const [oito2, setoito2] = useState('')
  const [quinze2, setquinze2] = useState('')
  const [seis2, setseis2] = useState('')
  const [treze2, settreze2] = useState('')
  const [quatrodois2, setquatrodois2] = useState('')

  const [alignEye, setalignEye] = useState('')
  const [sysmptoms2, setsysmptoms2] = useState('')
  const [sysmptoms3, setsysmptoms3] = useState('')
  const [sysmptoms4, setsysmptoms4] = useState('')
  const [sysmptoms5, setsysmptoms5] = useState('')

  const [phone, setphone] = useState('')
  const [message, setmessage] = useState('')
  const [value, setValue] = useState(3);

  const onChange = (date, dateString) => {
    setbirthDay(dateString);
  };

  const handleEyePain = (checkedValues) => {
    setEyePain(checkedValues.join(', '))
  };

  const handleTestDigital = (checkedValues) => {
    settestDigital(checkedValues.join(', '))
  };

  const handleNightVision = (checkedValues) => {
    setnightVision(checkedValues.join(', '))
  };

  const handleFarVision = (checkedValues) => {
    setfarVision(checkedValues.join(', '))
  };

  const handleFarVision3 = (checkedValues) => {
    setfarVision3(checkedValues.join(', '))
  };

  const handleSymptoms2 = (checkedValues) => {
    setsysmptoms2(checkedValues.join(', '))
  };

  const handleSymptoms3 = (checkedValues) => {
    setsysmptoms3(checkedValues.join(', '))
  };

  const handleSymptoms4 = (checkedValues) => {
    setsysmptoms4(checkedValues.join(', '))
  };

  const handleSymptoms5 = (checkedValues) => {
    setsysmptoms5(checkedValues.join(', '))
  };

  const handleFeelingToday = (checkedValues) => {
    setfeelingToday(checkedValues.join(', '))
  }


  async function handleNextStep(e) {
    e.preventDefault()
    if (count === 2) {
      if (!nome || !email) setButtonDisable(true)
    }

    if (count === 3) {
      if (!feeling || !symptoms || !pression) setButtonDisable(true)
    }

    if (count === 4) {
      if (!problem || !medicine || !eyePain) setButtonDisable(true)
    }

    if (count === 5) {
      if (!feelingToday || !vision || !glass || !nightVision) setButtonDisable(true)
    }

    if (count === 6) {
      if (!testVision || !testDigital || !farVision) setButtonDisable(true)
    }

    if (count === 7) {
      if (!birthDay ||
        !farVision2 ||
        !farVision3 ||
        !nearVision ||
        !nearVision2 ||
        !confort)
        setButtonDisable(true)
    }

    if (count === 8) {
      if (!doze ||
        !oito ||
        !quinze ||
        !seis ||
        !treze ||
        !quatrodois) setButtonDisable(true)
    }

    if (count === 9) {
      if (!doze2 ||
        !oito2 ||
        !quinze2 ||
        !seis2 ||
        !treze2 ||
        !quatrodois2) setButtonDisable(true)
    }

    if (count === 10) {
      if (!alignEye ||
        !sysmptoms2 ||
        !sysmptoms3 ||
        !sysmptoms4 ||
        !sysmptoms5) setButtonDisable(true)
    }

    setButtonDisable(true)
    setCount(count + 1)
  }

  const sendData = async () => {
    const data = {
      nome,
      email,
      feeling,
      symptoms,
      pression,
      problem,
      medicine,
      eyePain,
      feelingToday,
      vision,
      glass,
      nightVision,
      testVision,
      testVision2,
      testDigital,
      farVision,
      birthDay,
      farVision2,
      farVision3,
      nearVision,
      nearVision2,
      confort,
      doze,
      oito,
      quinze,
      seis,
      treze,
      quatrodois,
      doze2,
      oito2,
      quinze2,
      seis2,
      treze2,
      quatrodois2,
      alignEye,
      sysmptoms2,
      sysmptoms3,
      sysmptoms4,
      sysmptoms5,
      phone,
      message
    }
    const response = await api.post('/api/criarpergunta', data)
    setId(response.data._id)
    setOpenResult(true)
  }


  useEffect(() => {
    if (count === 2) {
      if (nome && email) setButtonDisable(false)
    }
  }, [nome, email])

  useEffect(() => {
    if (count === 3) {
      if (feeling && symptoms && pression) setButtonDisable(false)
    }
  }, [feeling, symptoms, pression])

  useEffect(() => {
    if (count === 4) {
      if (problem && medicine && eyePain) setButtonDisable(false)
    }
  }, [problem, medicine, eyePain])

  useEffect(() => {
    if (count === 5) {
      if (feelingToday && vision && glass && nightVision) setButtonDisable(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [feelingToday, vision, glass, nightVision])

  useEffect(() => {
    if (count === 6) {
      if (testVision && testDigital && farVision) setButtonDisable(false)
    }
  }, [testVision, testDigital, farVision])

  useEffect(() => {
    if (count === 7) {
      if (birthDay &&
        farVision2 &&
        farVision3 &&
        nearVision &&
        nearVision2 &&
        confort) setButtonDisable(false)
    }
  }, [birthDay,
    farVision2,
    farVision3,
    nearVision,
    nearVision2,
    confort])

  useEffect(() => {
    if (count === 8) {
      if (doze &&
        oito &&
        quinze &&
        seis &&
        treze &&
        quatrodois) {
        if (doze != '12' ||
          oito != '8' ||
          quinze != '15' ||
          seis != '6' ||
          treze != '73' ||
          quatrodois != '42') {
          setButtonDisable(true)
        } else {
          setButtonDisable(false)
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doze,
    oito,
    quinze,
    seis,
    treze,
    quatrodois])

  useEffect(() => {
    if (count === 9) {
      if (doze2 &&
        oito2 &&
        quinze2 &&
        seis2 &&
        treze2 &&
        quatrodois2) {
        if (doze2 != '12' ||
          oito2 != '8' ||
          quinze2 != '15' ||
          seis2 != '6' ||
          treze2 != '73' ||
          quatrodois2 != '42') {
          setButtonDisable(true)
        } else {
          setButtonDisable(false)
        }
      }
    }
  }, [doze2,
    oito2,
    quinze2,
    seis2,
    treze2,
    quatrodois2])

  useEffect(() => {
    if (count === 10) {
      if (alignEye &&
        sysmptoms2 &&
        sysmptoms3 &&
        sysmptoms4 &&
        sysmptoms5) setButtonDisable(false)
    }
  }, [alignEye,
    sysmptoms2,
    sysmptoms3,
    sysmptoms4,
    sysmptoms5])

  return (
    <>
      {!openResult ? <div className="App ">
        <form className="col-4 form">
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
                value={nome}
                onChange={e => setNome(e.target.value)}
              />
              <label class="uppercase text-sm font-bold opacity-70">
                Informe seu Melhor E-mail!
              </label>
              <input
                type="text"
                placeholder="seu email"
                class="p-3 mt-2 mb-4 w-full bg-slate-200 rounded"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />

              <button className={`w-40 h-10 text-white rounded ${buttonDisable ? 'bg-gray-500' : 'bg-green-600'} ml-40`}
                type="button"
                onClick={handleNextStep}
                disabled={count > 11 || buttonDisable}
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
              <Radio.Group name="radiogroup" className="flex-row flex " value={feeling} onChange={e => setFeeling(e.target.value)}>
                <div className="content w-70 m-2">
                  <div className="flex flex-nowrap  mb-5 pr-20">
                    <div className="flex-row mr-12">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-1-feliz.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={'Feliz'}>Feliz</Radio>
                      </label>
                    </div>
                    <div className="flex-row mr-10">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-1-triste.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={'Triste'}>Triste</Radio>
                      </label>
                    </div>
                    <div className="flex-row ">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-1-estressado.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={'Estressado'}>Estressado</Radio>

                      </label>

                    </div>

                  </div>

                  <div className="flex flex-nowrap pr-20">
                    <div className="flex-row mr-5">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-1-medo.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={'Com medo'}>Com medo</Radio>
                      </label>
                    </div>
                    <div className="flex-row mr-5">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-1-ansioso.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={'Ansioso'}>Ansioso</Radio>
                      </label>
                    </div>
                    <div className="flex-row ">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-depressivo.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={'Depressivo'}>Depressivo</Radio>

                      </label>

                    </div>

                  </div>

                </div>
              </Radio.Group>

              <hr />
              <br />

              <h1>2- Você sente algum desses sintomas?</h1>
              <Radio.Group name="radiogroup" defaultValue={0} className="flex-row flex" value={symptoms} onChange={e => setSymptoms(e.target.value)}>
                <div className="content w-70 m-2">

                  <div className="flex flex-nowrap mb-5 pr-20">


                    <div className="flex-row mr-5">

                      <label htmlFor="happy">

                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-2-dorcabeca.svg" width="50" height="30" alt="" />
                        <br />

                        <Radio value={'Dor de Cabeça'}>Dor de Cabeça</Radio>
                      </label>
                    </div>
                    <div className="flex-row mr-5">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-tontura.svg" width="50" height="30" alt="" />
                        <br />
                        <Radio value={'Tontura'}>Tontura</Radio>
                      </label>
                    </div>
                    <div className="flex-row ">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-desmaio.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={'Desmaios'}>Desmaios</Radio>

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
              <Radio.Group name="radiogroup" defaultValue={0} className="flex-row flex" value={pression} onChange={e => setPression(e.target.value)}>
                <div className="content w-70  ">

                  <div className="flex flex-nowrap mb-5 pr-20">


                    <div className="flex-row mr-5">

                      <label htmlFor="happy">


                        <br />

                        <Radio value={'Normal (120/80)'}>Normal (120/80)</Radio>
                      </label>
                    </div>
                    <div className="flex-row mr-5">
                      <label htmlFor="happy">

                        <br />
                        <Radio value={'Alta + (Acima de 130/90)'}> Alta + (Acima de 130/90)</Radio>
                      </label>
                    </div>
                    <div className="flex-row ">
                      <label htmlFor="happy">

                        <br />
                        <Radio value={'Baixa - (Abaixo de 110/70)'}> Baixa - (Abaixo de 110/70)</Radio>

                      </label>

                    </div>

                  </div>


                </div>
              </Radio.Group>

              <button className={`w-40 h-10 text-white rounded ${buttonDisable ? 'bg-gray-500' : 'bg-green-600'} ml-40`}
                type="button"
                onClick={handleNextStep}
                disabled={count > 11 || buttonDisable}
              >CONTINUAR</button>
            </div>

          ) : null}
          {count === 4 ? (
            <div className="form-group">

              <Progress percent={25} status="active" />

              <h1>4- Você possui algum destes problemas </h1>

              <Radio.Group name="radiogroup" defaultValue={0} className="flex-row flex" value={problem} onChange={e => setProblem(e.target.value)}>
                <div className="content w-70 m-2">
                  <div className="flex flex-nowrap mb-5 pr-20">
                    <div className="flex-row mr-5">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-2-coracao.svg" width="50" height="30" alt="" />
                        <br />
                        <Radio value={'Cardíacos'}>Cardíacos</Radio>
                      </label>
                    </div>
                    <div className="flex-row mr-5">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-2-diabetes.svg" width="50" height="30" alt="" />
                        <br />
                        <Radio value={'Diabetico'}>Diabetico</Radio>
                      </label>
                    </div>
                    <div className="flex-row ">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-depressao.png" width="70" height="30" alt="" />
                        <br />
                        <Radio value={'Ansioso'}>Ansioso</Radio>
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-nowrap pr-20">
                    <div className="flex-row ">
                      <label htmlFor="happy">
                        <img src="	https://adamrobo.com.br/lp/img/game/green_none.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={'Nenhum'}>Nenhum</Radio>
                      </label>
                    </div>
                  </div>
                </div>
              </Radio.Group>

              <hr />
              <br />
              <h1>5- Você faz uso de:</h1>
              <Radio.Group name="radiogroup" defaultValue={0} className="flex-row flex" value={medicine} onChange={e => setMedicine(e.target.value)}>
                <div className="content w-70 m-2">

                  <div className="flex flex-nowrap mb-5 pr-20">


                    <div className="flex-row mr-5">

                      <label htmlFor="happy">

                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-medicamentos.svg" width="50" height="30" alt="" />
                        <br />

                        <Radio value={'Medicações Contínuas'}>Medicações Contínuas</Radio>
                      </label>
                    </div>
                    <div className="flex-row mr-5">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-tratamentos-especiais.png" width="55" height="30" alt="" />
                        <br />
                        <Radio value={'tratamentos especiais'}>tratamentos especiais</Radio>
                      </label>
                    </div>
                    <div className="flex-row ">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/green_none.png" width="50" height="30" alt="" />
                        <br />
                        <Radio value={'Nenhum'}>Nenhum</Radio>

                      </label>

                    </div>



                  </div>



                </div>
              </Radio.Group>
              <div className="text-center">
                <h1 className="text-2xl font-bold">Saúde Geral dos Olhos </h1>
              </div>
              <h1>1- Você tem ou sente algum destes sintomas?:</h1>
              <Checkbox.Group name="radiogroup" defaultValue={0} className="flex-row flex" onChange={handleEyePain}>
                <div className="content w-70 m-2">
                  <div className="flex flex-nowrap mb-5 pr-20">
                    <div className="flex-row mr-5">
                      <label htmlFor="happy">
                        <img src="	https://adamrobo.com.br/lp/img/game/icon-anm-oftal-dor-olho2.svg" width="50" height="30" alt="" />
                        <br />
                        <Checkbox value={'Dor nos Olhos'}>Dor nos Olhos</Checkbox>
                      </label>
                    </div>
                    <div className="flex-row mr-5">
                      <label htmlFor="happy">
                        <img src="	https://adamrobo.com.br/lp/img/game/icon-anm-oftal-coceira.png" width="55" height="30" alt="" />
                        <br />
                        <Checkbox value={'Coceira'}>Coceira</Checkbox>
                      </label>
                    </div>
                    <div className="flex-row ">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-oftal-ardencia2.svg" width="50" height="30" alt="" />
                        <br />
                        <Checkbox value={'Ardência'}>Ardência</Checkbox>
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-nowrap pr-20">
                    <div className="flex-row ">
                      <label htmlFor="happy">
                        <img src="	https://adamrobo.com.br/lp/img/game/icon-anm-oftal-vermelhidao2.svg" width="50" height="30" alt="" />
                        <br />
                        <Checkbox value={'Vermelhidão'}>Vermelhidão</Checkbox>
                      </label>
                    </div>
                    <div className="flex-row ">
                      <label htmlFor="happy">
                        <img src="	https://adamrobo.com.br/lp/img/game/icon-anm-oftal-lacrimacao2.svg" width="50" height="30" alt="" />
                        <br />
                        <Checkbox value={'Lacrimação'}>Lacrimação</Checkbox>
                      </label>
                    </div>
                  </div>
                </div>
              </Checkbox.Group>
              <button className={`w-40 h-10 text-white rounded ${buttonDisable ? 'bg-gray-500' : 'bg-green-600'} ml-40`}
                type="button"
                onClick={handleNextStep}
                disabled={count > 11 || buttonDisable}
              >CONTINUAR</button>
            </div>

          ) : null}
          {count === 5 ? (
            <div className="form-group">
              <Progress percent={32} status="active" />
              <h1>1- E estes outros sintomas você tem?</h1>
              <Checkbox.Group name="radiogroup" defaultValue={0} className="flex-row flex " onChange={handleFeelingToday}>
                <div className="content w-70 m-2">
                  <div className="flex flex-nowrap  mb-5 pr-20">
                    <div className="flex-row mr-12">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-oftal-olho-seco2.svg" width="50" height="30" alt="" />
                        <br />
                        <Checkbox value={'Sensação olho seco'} >Sensação olho seco</Checkbox>
                      </label>
                    </div>
                    <div className="flex-row mr-10">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-oftal-secrecao.svg" width="50" height="30" alt="" />
                        <br />
                        <Checkbox value={'Secreção'}>Secreção</Checkbox>
                      </label>
                    </div>
                    <div className="flex-row ">
                      <label htmlFor="happy">
                        <img src="	https://adamrobo.com.br/lp/img/game/icon-anm-oftal-flashesluz.svg" width="50" height="30" alt="" />
                        <br />
                        <Checkbox value={'Flashes de Luz ao enxergar'} className="text-xs">Flashes de Luz ao enxergar</Checkbox>
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-nowrap pr-20">
                    <div className="flex-row mr-5">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-oftal-manchas.svg" width="50" height="30" alt="" />
                        <br />
                        <Checkbox value={'Manchas ao enxergar'}>Manchas ao enxergar</Checkbox>
                      </label>
                    </div>
                    <div className="flex-row mr-5">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-oftal-moscas.svg" width="50" height="30" alt="" />
                        <br />
                        <Checkbox value={'Moscas Volantes ao enxergar'}>Moscas Volantes ao enxergar</Checkbox>
                      </label>
                    </div>
                    <div className="flex-row ">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/green_none.png" width="50" height="30" alt="" />
                        <br />
                        <Checkbox value={'Nenhum'}>Nenhum</Checkbox>
                      </label>
                    </div>
                  </div>
                </div>
              </Checkbox.Group>

              <hr />
              <br />
              <div className="text-center">
                <h1 className="text-2xl font-bold">Sua visão no dia e a noite</h1>
              </div>
              <h1>3- Você tem sensibilidade ao Sol ? </h1>
              <Radio.Group name="radiogroup" defaultValue={0} className="flex-row flex" value={vision} onChange={e => setvision(e.target.value)}>
                <div className="content w-70 m-2">

                  <div className="flex flex-nowrap mb-5 pr-20">


                    <div className="flex-row mr-5">

                      <label htmlFor="happy">



                        <Radio value={'Sim'}>Sim</Radio>
                      </label>
                    </div>
                    <div className="flex-row mr-5">
                      <label htmlFor="happy">

                        <Radio value={'Não'}>Não</Radio>
                      </label>
                    </div>
                    <div className="flex-row ">
                      <label htmlFor="happy">

                        <Radio value={'Às vezes'}>Às vezes</Radio>

                      </label>

                    </div>

                  </div>

                </div>
              </Radio.Group>

              <br />
              <hr />
              <br />

              <h1>4- Usa Óculos de Sol ? </h1>
              <Radio.Group name="radiogroup" defaultValue={0} className="flex-row flex" value={glass} onChange={e => setglass(e.target.value)}>
                <div className="content w-70 m-2">

                  <div className="flex flex-nowrap mb-5 pr-20">


                    <div className="flex-row mr-5">

                      <label htmlFor="happy">



                        <Radio value={'Sim'}>Sim</Radio>
                      </label>
                    </div>
                    <div className="flex-row mr-5">
                      <label htmlFor="happy">

                        <Radio value={'Não'}>Não</Radio>
                      </label>
                    </div>
                    <div className="flex-row ">
                      <label htmlFor="happy">

                        <Radio value={'Às vezes'}>Às vezes</Radio>

                      </label>

                    </div>

                  </div>

                </div>
              </Radio.Group>

              <h1>5- Você sente incômodo na visão noturna com:</h1>
              <Checkbox.Group name="radiogroup" defaultValue={0} className="flex-row flex " onChange={handleNightVision}>
                <div className="content w-70 m-2">
                  <div className="flex flex-nowrap  mb-5 pr-20">
                    <div className="flex-row mr-12">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-anm-oftal-luzes.svg" width="50" height="30" alt="" />
                        <br />
                        <Checkbox value={'Luzes'}>Luzes</Checkbox>
                      </label>
                    </div>
                    <div className="flex-row mr-10">
                      <label htmlFor="happy">
                        <img src="	https://adamrobo.com.br/lp/img/game/icon-anm-oftal-farol-veiculos.svg" width="50" height="30" alt="" />
                        <br />
                        <Checkbox value={'Faróis de Veículos'}>Faróis de Veículos</Checkbox>
                      </label>
                    </div>
                    <div className="flex-row ">
                      <label htmlFor="happy">
                        <img src="	https://adamrobo.com.br/lp/img/game/icon-anm-oftal-brilho-tela.svg" width="50" height="30" alt="" />
                        <br />
                        <Checkbox value={'Brilho das Telas'} className="text-xs">Brilho das Telas</Checkbox>

                      </label>

                    </div>

                  </div>


                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="	https://adamrobo.com.br/lp/img/game/green_none.png" width="50" height="30" alt="" />
                      <br />
                      <Checkbox value={'Nenhum'}>Nenhum</Checkbox>

                    </label>


                  </div>

                </div>
              </Checkbox.Group>
              <button className={`w-40 h-10 text-white rounded ${buttonDisable ? 'bg-gray-500' : 'bg-green-600'} ml-40`}
                type="button"
                onClick={handleNextStep}
                disabled={count > 11 || buttonDisable}
              >CONTINUAR</button>

            </div>
          ) : null}
          {count === 6 ? (
            <div className="form-group">
              <Progress percent={60} status="active" />

              <div className="text-center">
                <h1 className="text-2xl font-bold">Teste de Visão </h1>
              </div>

              <h1>1 - Já Fez algum teste de Visão antes ?</h1>
              <Radio.Group name="radiogroup" defaultValue={0} className="flex-row flex " value={testVision2} onChange={e => settestVision2(e.target.value)}>
                <div className="flex flex-nowrap p-5 pr-20">


                  <div className="flex-row ">
                    <label htmlFor="happy">

                      <Radio value={'Sim'}>Sim</Radio>

                    </label>
                  </div>

                  <div className="flex-row ">
                    <label htmlFor="happy">

                      <Radio value={'Não'}>Não</Radio>
                    </label>
                  </div>

                  <div className="flex-row ">
                    <label htmlFor="happy">

                      <Radio value={'Desejo ir ao consultório'}>É a 1º vez</Radio>
                    </label>
                  </div>

                </div>
              </Radio.Group>

              <hr />
              <br />

              <Radio.Group name="radiogroup" defaultValue={0} className="flex-row flex " value={testVision} onChange={e => settestVision(e.target.value)}>
                <div className="flex flex-nowrap p-5 pr-20">


                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="https://adamrobo.com.br/lp/img/game/icon-anm-oftal-teste-digital.svg" width="50" height="30" alt="" />
                      <br />
                      <Radio value={'Teste Digital'}>Teste Digital</Radio>

                    </label>
                  </div>

                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="https://adamrobo.com.br/lp/img/game/icon-anm-oftal-consultorio.svg" width="50" height="30" alt="" />
                      <br />
                      <Radio value={'Fui ao consultório'}>Fui ao consultório</Radio>
                    </label>
                  </div>

                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="https://adamrobo.com.br/lp/img/game/icon-anm-oftal-gostaria-consultorio.svg" width="50" height="30" alt="" />
                      <br />
                      <Radio value={'Desejo ir ao consultório'}>Desejo ir ao consultório</Radio>
                    </label>
                  </div>

                </div>
              </Radio.Group>

              <h1>2- Como está realizando seu Teste de Visão Digital ? </h1>
              <Checkbox.Group name="radiogroup" defaultValue={0} className="flex-row flex " onChange={handleTestDigital}>

                <div className="flex flex-nowrap p-5 pr-20">

                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="https://adamrobo.com.br/lp/img/game/icon-testevisao-natural.svg" width="50" height="30" alt="" />
                      <br />
                      <Checkbox value={'Sem óculos'}>Sem óculos</Checkbox>

                    </label>
                  </div>

                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="https://adamrobo.com.br/lp/img/game/icon-testevisao-oculos.svg" width="50" height="30" alt="" />
                      <br />
                      <Checkbox value={'Com Óculos'}>Com Óculos</Checkbox>
                    </label>
                  </div>

                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="https://adamrobo.com.br/lp/img/game/icon-testevisao-lentes.svg" width="50" height="30" alt="" />
                      <br />
                      <Checkbox value={'Com lentes de contato'}>Com lentes de contato</Checkbox>
                    </label>
                  </div>
                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="https://adamrobo.com.br/lp/img/game/icon-testevisao-cirurgia.svg" width="50" height="30" alt="" />
                      <br />
                      <Checkbox value={'ja fiz Cirurgia'}>ja fiz Cirurgia</Checkbox>
                    </label>
                  </div>
                </div>


              </Checkbox.Group>

              <br />
              <hr />

              <h1>3- Como é sua visão para longe ? </h1>
              <p className="font-bold">Marque as opções em que sente dificuldades :</p>
              <Checkbox.Group name="radiogroup" defaultValue={0} className="flex-row flex " onChange={handleFarVision}>
                <div className="content w-70 m-2">
                  <div className="flex flex-nowrap  mb-5 pr-20">
                    <div className="flex-row mr-12">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-testevisao-cinema.svg" width="50" height="30" alt="" />
                        <br />
                        <Checkbox value={'Cinema'} >Cinema</Checkbox>
                      </label>
                    </div>
                    <div className="flex-row mr-10">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-testevisao-tv.svg" width="50" height="30" alt="" />
                        <br />
                        <Checkbox value={'Televisão'}>Televisão</Checkbox>
                      </label>
                    </div>
                    <div className="flex-row ">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-testevisao-outdoor.svg" width="50" height="30" alt="" />
                        <br />
                        <Checkbox value={'Outdoor'}>Outdoor</Checkbox>
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-nowrap pr-20">
                    <div className="flex-row mr-5">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-testevisao-reconhecerpessoa.svg" width="50" height="30" alt="" />
                        <br />
                        <Checkbox value={'Não reconheco as pessoas na rua'}>Não reconheco as pessoas na rua</Checkbox>
                      </label>
                    </div>
                    <div className="flex-row mr-5">
                      <label htmlFor="happy">
                        <img src="	https://adamrobo.com.br/lp/img/game/icon-testevisao-onibus.svg" width="50" height="30" alt="" />
                        <br />
                        <Checkbox value={'Dificuldade identificar ônibus'}>Dificuldade identificar ônibus</Checkbox>
                      </label>
                    </div>
                    <div className="flex-row ">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/green_none.png" width="50" height="30" alt="" />
                        <br />
                        <Checkbox value={'Nenhum'}>Nenhum</Checkbox>

                      </label>

                    </div>

                  </div>

                </div>
              </Checkbox.Group>
              <button className={`w-40 h-10 text-white rounded ${buttonDisable ? 'bg-gray-500' : 'bg-green-600'} ml-40`}
                type="button"
                onClick={handleNextStep}
                disabled={count > 11 || buttonDisable}
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

              <Radio.Group name="radiogroup" defaultValue={0} className="flex-row flex " value={farVision2} onChange={e => setfarVision2(e.target.value)}>

                <div className="flex flex-wrap p-5 pr-20 ">

                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="	https://adamrobo.com.br/lp/img/game/icon-testevisao-normal.jpg" width="120" height="30" alt="" />
                      <br />
                      <Radio value={'Nítida'}>Nítida</Radio>

                    </label>
                  </div>

                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="	https://adamrobo.com.br/lp/img/game/icon-testevisao-pequena.png" width="120" height="30" alt="" />
                      <br />
                      <Radio value={'Boa'}>Boa</Radio>
                    </label>
                  </div>

                </div>

                <div className="flex flex-wrap ">

                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="	https://adamrobo.com.br/lp/img/game/icon-testevisao-media.png" width="120" height="30" alt="" />
                      <br />
                      <Radio value={'Ruim'}>Ruim</Radio>

                    </label>
                  </div>

                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="	https://adamrobo.com.br/lp/img/game/icon-testevisao-media.png" width="120" height="30" alt="" />
                      <br />
                      <Radio value={'Péssima'}>Péssima</Radio>
                    </label>
                  </div>

                </div>
              </Radio.Group>

              <br />
              <hr />

              <h1>8- Como é sua visão de Perto? </h1>
              <p className="font-bold">Quais das opções abaixo sinto dificuldades ? :</p>
              <Checkbox.Group name="radiogroup" defaultValue={0} className="flex-row flex " onChange={handleFarVision3}>
                <div className="content w-70 m-2">
                  <div className="flex flex-nowrap  mb-5 pr-20">
                    <div className="flex-row mr-12">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-testevisao-livro.svg" width="50" height="30" alt="" />
                        <br />
                        <Checkbox value={'leitura'}>leitura</Checkbox>
                      </label>
                    </div>
                    <div className="flex-row mr-10">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-testevisao-celular.svg" width="50" height="30" alt="" />
                        <br />
                        <Checkbox value={'Celular ou Computador ? '}>Celular ou Computador ? </Checkbox>
                      </label>
                    </div>
                    <div className="flex-row ">
                      <label htmlFor="happy">
                        <img src="	https://adamrobo.com.br/lp/img/game/icon-testevisao-tvperto.svg" width="50" height="30" alt="" />
                        <br />
                        <Checkbox value={'TV'}>TV</Checkbox>

                      </label>

                    </div>

                  </div>

                  <div className="flex flex-nowrap pr-20">
                    <div className="flex-row mr-5">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-testevisao-esticobraco.svg" width="50" height="30" alt="" />
                        <br />
                        <Checkbox value={'Estico o braço'}>Estico o braço</Checkbox>
                      </label>
                    </div>
                    <div className="flex-row mr-5">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/icon-testevisao-pesoolhos.svg" width="50" height="30" alt="" />
                        <br />
                        <Checkbox value={'Peso ao redor dos olhos'}>Peso ao redor dos olhos</Checkbox>
                      </label>
                    </div>
                    <div className="flex-row ">
                      <label htmlFor="happy">
                        <img src="https://adamrobo.com.br/lp/img/game/green_none.png" width="50" height="30" alt="" />
                        <br />
                        <Checkbox value={'Nenhum'}>Nenhum</Checkbox>

                      </label>

                    </div>



                  </div>

                </div>
              </Checkbox.Group>

              <h1>9- Ao enxergar para perto, como é sua visão ?    </h1>
              <Radio.Group name="radiogroup" defaultValue={0} className="flex-row flex " value={nearVision} onChange={e => setnearVision(e.target.value)}>
                <div className="flex flex-wrap p-5 pr-20 ">

                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="		https://adamrobo.com.br/lp/img/game/icon-vt-jaeger-nitida.png" width="120" height="50" alt="" />
                      <br />
                      <Radio value={'Nítida'}>Nítida</Radio>

                    </label>
                  </div>

                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="	https://adamrobo.com.br/lp/img/game/icon-vt-jaeger-boa.png" width="120" height="30" alt="" />
                      <br />
                      <Radio value={'Boa'}>Boa</Radio>
                    </label>
                  </div>

                </div>

                <div className="flex flex-wrap p-5 pr-20 ">

                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="	https://adamrobo.com.br/lp/img/game/icon-vt-jaeger-ruim.png" width="120" height="30" alt="" />
                      <br />
                      <Radio value={'Ruim'}>Ruim</Radio>

                    </label>
                  </div>

                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="https://adamrobo.com.br/lp/img/game/icon-vt-jaeger-pessima.png" width="120" height="30" alt="" />
                      <br />
                      <Radio value={'Péssima'}>Péssima</Radio>
                    </label>
                  </div>

                </div>
              </Radio.Group>

              <h1>10- Ao enxergar para e perto ao mesmo tempo, como é sua visão?   </h1>
              <Radio.Group name="radiogroup" defaultValue={0} className="flex-row flex " value={nearVision2} onChange={e => setnearVision2(e.target.value)}>

                <div className="flex flex-wrap p-5 pr-20">

                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="	https://adamrobo.com.br/lp/img/game/icon-testevisao-normal.jpg" width="120" height="50" alt="" />
                      <br />
                      <Radio value={'Nítida'}>Nítida</Radio>

                    </label>
                  </div>

                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="	https://adamrobo.com.br/lp/img/game/icon-testevisao-pequena.png" width="120" height="30" alt="" />
                      <br />
                      <Radio value={'Pouco borrada'}>Pouco borrada</Radio>
                    </label>
                  </div>

                </div>

                <div className="flex flex-wrap p-5  ml-10">

                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="	https://adamrobo.com.br/lp/img/game/icon-testevisao-media.png" width="120" height="30" alt="" />
                      <br />
                      <Radio value={'Borrada'}>Borrada</Radio>

                    </label>
                  </div>

                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="	https://adamrobo.com.br/lp/img/game/icon-testevisao-media.png" width="120" height="30" alt="" />
                      <br />
                      <Radio value={'Muito borrada'}>Muito borrada</Radio>
                    </label>
                  </div>

                </div>
              </Radio.Group>

              <h1>11- Quais dos fundos coloridos é mais confortável para você ?   </h1>

              <div className=" ml-20 mx-auto p-10">
                <img src="	https://adamrobo.com.br/lp/img/game/icon-teste-visao-bicromatico.svg" width="200" height="90" alt="" />


                <div className="flex-row ">
                </div>

              </div>

              <div className="flex flex-wrap p-5 pr-20 ml-20">

                <Radio.Group name="radiogroup" defaultValue={0} className="flex-row flex" value={confort} onChange={e => setconfort(e.target.value)}>
                  <div className="content w-70  ml-0">

                    <div className="flex flex-nowrap mb-5 ">


                      <div className="flex-row mr-5">

                        <label htmlFor="happy">



                          <Radio value={'Verde'}>Verde</Radio>
                        </label>
                      </div>
                      <div className="flex-row mr-5">
                        <label htmlFor="happy">

                          <Radio value={'Vermelho'}>Vermelho</Radio>
                        </label>
                      </div>
                      <div className="flex-row  ">
                        <label htmlFor="happy">

                          <Radio value={'Os dois lados'}>Os dois lados</Radio>

                        </label>

                      </div>

                    </div>

                  </div>
                </Radio.Group>


              </div>
              <button className={`w-40 h-10 text-white rounded ${buttonDisable ? 'bg-gray-500' : 'bg-green-600'} ml-40`}
                type="button"
                onClick={handleNextStep}
                disabled={count > 11 || buttonDisable}
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
                    focus:border-slate-600 focus:outline-none"
                      value={doze}
                      onChange={e => setdoze(e.target.value)}
                    />

                  </label>
                </div>

                <div className="flex-row ml-10">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/2_placa8.png" width="120" height="30" alt="" />
                    <br />
                    <input type="text" name="daltonismo" placeholder="numero" class="p-3 mt-2 mb-4 w-20 bg-slate-200 rounded border-2 border-slate-200 
                    focus:border-slate-600 focus:outline-none"
                      value={oito}
                      onChange={e => setoito(e.target.value)}
                    />
                  </label>
                </div>

              </div>

              <div className="flex flex-wrap p-5 pr-20 ml-20">

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/3_placa15.png" width="120" height="30" alt="" />
                    <br />
                    <input type="text" name="daltonismo" placeholder="numero" class="p-3 mt-2 mb-4 w-20 bg-slate-200 rounded border-2 border-slate-200 
                    focus:border-slate-600 focus:outline-none"
                      value={quinze}
                      onChange={e => setquinze(e.target.value)}
                    />

                  </label>
                </div>

                <div className="flex-row ml-5">
                  <label htmlFor="happy">
                    <img src="https://adamrobo.com.br/lp/img/4_placa6.png" width="120" height="30" alt="" />
                    <br />
                    <input type="text" name="daltonismo" placeholder="numero" class="p-3 mt-2 mb-4 w-20 bg-slate-200 rounded border-2 border-slate-200 
                    focus:border-slate-600 focus:outline-none"
                      value={seis}
                      onChange={e => setseis(e.target.value)}
                    />
                  </label>
                </div>

              </div>

              <div className="flex flex-wrap p-5 pr-20 ml-20">

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/5_placa73.png" width="120" height="30" alt="" />
                    <br />
                    <input type="text" name="daltonismo" placeholder="numero" class="p-3 mt-2 mb-4 w-20 bg-slate-200 rounded border-2 border-slate-200 
    focus:border-slate-600 focus:outline-none"
                      value={treze}
                      onChange={e => settreze(e.target.value)}
                    />

                  </label>
                </div>

                <div className="flex-row ml-5">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/6_placa42.png" width="120" height="30" alt="" />
                    <br />
                    <input type="text" name="daltonismo" placeholder="numero" class="p-3 mt-2 mb-4 w-20 bg-slate-200 rounded border-2 border-slate-200 
    focus:border-slate-600 focus:outline-none"
                      value={quatrodois}
                      onChange={e => setquatrodois(e.target.value)}
                    />
                  </label>
                </div>

              </div>

              <br />
              <hr />

              <button className={`w-40 h-10 text-white rounded ${buttonDisable ? 'bg-gray-500' : 'bg-green-600'} ml-40`}
                type="button"
                onClick={handleNextStep}
                disabled={count > 11 || buttonDisable}
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
                    focus:border-slate-600 focus:outline-none"
                      value={doze2}
                      onChange={e => setdoze2(e.target.value)}
                    />

                  </label>
                </div>

                <div className="flex-row ml-10">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/2_placa8.png" width="120" height="30" alt="" />
                    <br />
                    <input type="text" name="daltonismo" placeholder="numero" class="p-3 mt-2 mb-4 w-20 bg-slate-200 rounded border-2 border-slate-200 
                    focus:border-slate-600 focus:outline-none"
                      value={oito2}
                      onChange={e => setoito2(e.target.value)}
                    />
                  </label>
                </div>

              </div>

              <div className="flex flex-wrap p-5 pr-20 ml-20">

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/3_placa15.png" width="120" height="30" alt="" />
                    <br />
                    <input type="text" name="daltonismo" placeholder="numero" class="p-3 mt-2 mb-4 w-20 bg-slate-200 rounded border-2 border-slate-200 
                    focus:border-slate-600 focus:outline-none"
                      value={quinze2}
                      onChange={e => setquinze2(e.target.value)}
                    />

                  </label>
                </div>

                <div className="flex-row ml-5">
                  <label htmlFor="happy">
                    <img src="https://adamrobo.com.br/lp/img/4_placa6.png" width="120" height="30" alt="" />
                    <br />
                    <input type="text" name="daltonismo" placeholder="numero" class="p-3 mt-2 mb-4 w-20 bg-slate-200 rounded border-2 border-slate-200 
                    focus:border-slate-600 focus:outline-none"
                      value={seis2}
                      onChange={e => setseis2(e.target.value)}
                    />
                  </label>
                </div>

              </div>

              <div className="flex flex-wrap p-5 pr-20 ml-20">

                <div className="flex-row ">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/5_placa73.png" width="120" height="30" alt="" />
                    <br />
                    <input type="text" name="daltonismo" placeholder="numero" class="p-3 mt-2 mb-4 w-20 bg-slate-200 rounded border-2 border-slate-200 
    focus:border-slate-600 focus:outline-none"
                      value={treze2}
                      onChange={e => settreze2(e.target.value)}
                    />

                  </label>
                </div>

                <div className="flex-row ml-5">
                  <label htmlFor="happy">
                    <img src="	https://adamrobo.com.br/lp/img/6_placa42.png" width="120" height="30" alt="" />
                    <br />
                    <input type="text" name="daltonismo" placeholder="numero" class="p-3 mt-2 mb-4 w-20 bg-slate-200 rounded border-2 border-slate-200 
    focus:border-slate-600 focus:outline-none"
                      value={quatrodois2}
                      onChange={e => setquatrodois2(e.target.value)}
                    />
                  </label>
                </div>
              </div>
              <br />
              <hr />
              <button className={`w-40 h-10 text-white rounded ${buttonDisable ? 'bg-gray-500' : 'bg-green-600'} ml-40`}
                type="button"
                onClick={handleNextStep}
                disabled={count > 11 || buttonDisable}
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
              <Radio.Group name="radiogroup" defaultValue={0} className="flex-row flex " value={alignEye} onChange={e => setalignEye(e.target.value)}>

                <div className="flex flex-wrap p-5 pr-20 ml-10">

                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="https://adamrobo.com.br/lp/img/game/icon-teste-visao-estrabismo1.svg" width="120" height="50" alt="" />
                      <br />
                      <Radio value={'Alinhado'}>Alinhado</Radio>
                    </label>
                  </div>

                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="https://adamrobo.com.br/lp/img/game/icon-teste-visao-estrabismo1.svg" width="120" height="30" alt="" />
                      <br />
                      <Radio value={'Desalinhado1'}>Desalinhado</Radio>
                    </label>
                  </div>

                </div>

                <div className="flex flex-wrap p-5 pr-20 ml-10">

                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="https://adamrobo.com.br/lp/img/game/icon-teste-visao-estrabismo3.svg" width="120" height="50" alt="" />
                      <br />
                      <Radio value={'Desalinhado2'}>Desalinhado</Radio>
                    </label>
                  </div>

                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="	https://adamrobo.com.br/lp/img/game/icon-teste-visao-estrabismo4.svg" width="120" height="30" alt="" />
                      <br />
                      <Radio value={'Desalinhado3'}>Desalinhado</Radio>
                    </label>
                  </div>

                </div>
              </Radio.Group>



              <h1>2- Sente alguns destes sintomas ?  </h1>
              <Checkbox.Group name="radiogroup" defaultValue={0} className="flex-row flex " onChange={handleSymptoms2}>

                <div className="flex flex-wrap p-5 pr-20 ">

                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="	https://adamrobo.com.br/lp/img/game/icon-patologia-nebulosa.svg" width="50" height="30" alt="" />
                      <br />
                      <Checkbox value={'Visão Nebulosa'}>Visão Nebulosa</Checkbox>
                    </label>
                  </div>

                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="https://adamrobo.com.br/lp/img/game/icon-patologia-troca-receita.svg" width="50" height="30" alt="" />
                      <br />
                      <Checkbox value={'Troca constante de receita'}>Troca constante de receita</Checkbox>
                    </label>
                  </div>

                </div>

                <div className="flex flex-wrap p-5 pr-20 ">

                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="	https://adamrobo.com.br/lp/img/game/icon-teste-visao-melhora-piora-visao.png" width="50" height="30" alt="" />
                      <br />
                      <Checkbox value={'Melhora e piora a constante de visão'}>Melhora e piora a constante de visão</Checkbox>
                    </label>
                  </div>

                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="	https://adamrobo.com.br/lp/img/game/green_none.png" width="50" height="30" alt="" />
                      <br />
                      <Checkbox value={'Nenhum'}>Nenhum</Checkbox>
                    </label>
                  </div>

                </div>
              </Checkbox.Group>

              <h1>3- Sente alguns destes sintomas?  </h1>
              <Checkbox.Group name="radiogroup" defaultValue={0} className="flex-row flex " onChange={handleSymptoms3}>

                <div className="flex flex-wrap p-5 pr-20 ">

                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="	https://adamrobo.com.br/lp/img/game/icon-patologia-noite.svg" width="50" height="30" alt="" />
                      <br />
                      <Checkbox value={'Não enxergar bem a noite'}>Não enxergar bem a noite</Checkbox>
                    </label>
                  </div>

                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="https://adamrobo.com.br/lp/img/game/icon-patologia-nausea.svg" width="50" height="30" alt="" />
                      <br />
                      <Checkbox value={'Náusea e vômito'}>Náusea e vômito</Checkbox>
                    </label>
                  </div>

                </div>

                <div className="flex flex-wrap p-5 pr-20 ">

                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="	https://adamrobo.com.br/lp/img/game/green_none.png" width="50" height="30" alt="" />
                      <br />
                      <Checkbox value={'Nenhum'}>Nenhum</Checkbox>
                    </label>
                  </div>

                </div>
              </Checkbox.Group>

              <h1>4- Sente alguns destes sintomas?  </h1>
              <Checkbox.Group name="radiogroup" defaultValue={0} className="flex-row flex " onChange={handleSymptoms4}>

                <div className="flex flex-wrap p-5 pr-20 ">

                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="	https://adamrobo.com.br/lp/img/game/icon-patologia-sensivel-sol.svg" width="50" height="30" alt="" />
                      <br />
                      <Checkbox value={'Hipersenbilidade a Luz'}>Hipersenbilidade a Luz</Checkbox>
                    </label>
                  </div>

                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="https://adamrobo.com.br/lp/img/game/icon-patologia-fantasma.svg" width="50" height="30" alt="" />
                      <br />
                      <Checkbox value={'imagens fantasma'}>imagens fantasma</Checkbox>
                    </label>
                  </div>

                </div>

                <div className="flex flex-wrap p-5 pr-20 ">

                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="	https://adamrobo.com.br/lp/img/game/green_none.png" width="50" height="30" alt="" />
                      <br />
                      <Checkbox value={'Nenhum'}>Nenhum</Checkbox>
                    </label>
                  </div>

                </div>
              </Checkbox.Group>

              <h1>5- Sente alguns destes sintomas ou caracteristicas ?  </h1>
              <Checkbox.Group name="radiogroup" defaultValue={0} className="flex-row flex " onChange={handleSymptoms5}>

                <div className="flex flex-wrap p-5 pr-2 ">

                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="https://adamrobo.com.br/lp/img/game/icon-patologia-corpo-estranho.svg" width="50" height="30" alt="" />
                      <br />
                      <Checkbox value={'Sensação de corpo ruim'}>Sensação de corpo ruim</Checkbox>
                    </label>
                  </div>

                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="	https://adamrobo.com.br/lp/img/game/icon-patologia-litoral.svg" width="50" height="30" alt="" />
                      <br />
                      <Checkbox value={'viveu Longos períodos no Litoral'}>viveu Longos períodos no Litoral</Checkbox>
                    </label>
                  </div>

                </div>

                <div className="flex flex-wrap p-5 pr-2 ">

                  <div className="flex-row ">
                    <label htmlFor="happy">
                      <img src="	https://adamrobo.com.br/lp/img/game/icon-patologia-zona-rural.svg" width="50" height="30" alt="" />
                      <br />
                      <Checkbox value={'Viveu longos períodos na Zona Rural'}>Viveu longos períodos na Zona Rural</Checkbox>
                    </label>
                  </div>

                  <div className="flex-row ml-5">
                    <label htmlFor="happy">
                      <img src="	https://adamrobo.com.br/lp/img/game/green_none.png" width="50" height="30" alt="" />
                      <br />
                      <Checkbox value={'Nenhum'}>Nenhum</Checkbox>
                    </label>
                  </div>

                </div>
              </Checkbox.Group>
              <button className={`w-40 h-10 text-white rounded ${buttonDisable ? 'bg-gray-500' : 'bg-green-600'} ml-40`}
                type="button"
                onClick={handleNextStep}
                disabled={count > 11 || buttonDisable}
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
                value={phone}
                onChange={e => setphone(e.target.value)}
                required
              />

              <input
                type="text"
                placeholder="Sua mensagem aqui"
                class="p-3 mt-2 mb-4 w-full h-10 bg-slate-200 rounded"
                value={message}
                onChange={e => setmessage(e.target.value)}
                required
              />

              <span className="ml-40">
                <Rate onChange={setValue} value={value} />
              </span>

              <div className="mb-20  ml-5">
                <button type="button" onClick={sendData} className="w-40 h-10 text-white rounded bg-green-600 ml-40 ">Resultado</button>
              </div>

            </div>



          ) : null}
        </form>
      </div>
        :
        <Result
          id={id}
        />
      }
    </>
  );
}

export default Form;
