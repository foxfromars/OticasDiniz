import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import robot from '../../assets/robot.svg';
import { BackTop } from 'antd';
import svg_rocket from '../../assets/svg_rocket.svg';


import '../../assets/style/time.css';
import ModalForm from '../../components/modal/openmodal';

const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: 'red',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="text-gray-600 bg-[url('./assets/header.png')] bg-cover body-font">

        <div className="container mx-auto sm:mx-auto sm:flex flex px-5 py-24 items-center justify-center flex-col">
          <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={robot} />

          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-200">COMBATE MUNDIAL A CEGUEIRA</h1>
            <p className="mb-8 text-gray-200 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
            <div className="flex justify-center">
              <ModalForm />
            </div>

          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src={svg_rocket} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Sempre evoluindo seu mercado
              ao mundo online !</h1>
            <p className="mb-8 leading-relaxed">Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>

          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container bg-zinc-900 mx-auto flex px-5 py-24 items-center justify-center flex-col border-8 rounded-2xl border-red-800 shadow-2xl shadow-red-500	">

          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-mono text-gray-200">300 mil testes realizados</h1>
            <p className="mb-8 text-gray-200 leading-relaxed">Teste digital de visão, proporcionando a facilidade aos usuários</p>
            <div className="  h-90 border-8 rounded-xl border-red-900"></div>
            <br />
            <p className="mb-8 text-gray-200 leading-relaxed"> Clique no botão abaixo para fazer parte desta transformação da saúde da visão mundial.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-red-900 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 rounded font-bold text-lg shadow-xl shadow-red-500">QUERO PARTICIPAR</button>
            </div>
            <h1 className=" p-20 sm:text-4xl text-2xl mb-4 font-mono font-bold text-gray-200">Compartilhe com seus amigos e familiares!
              Vamos combater juntos a cegueira mundial!</h1>
            <span className="inline-flex m-2">
              <Link to="" className="text-gray-200 bg-red-600 p-2 rounded-full hover:bg-red-700">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </Link>
              <Link to="" className="ml-4 text-gray-200 bg-red-600 p-2 rounded-full hover:bg-red-700">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </Link>
              <Link to="" className="ml-4 text-gray-200 bg-red-600 p-2 rounded-full hover:bg-red-700">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </Link>
              <Link to="" className="ml-4 text-gray-200 bg-red-600 p-2 rounded-full hover:bg-red-700">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </Link>
            </span>
          </div>
        </div>
      </section>



      <section className="text-gray-600 bg-[url('./assets/header.png')] bg-cover mt-40 body-font relative">
        <form className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-200">NOSSO CONTATO</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-200">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-200">Nome</label>
                  <input type="text" id="name" name="name" required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-200">Email</label>
                  <input type="email" id="email" name="email" required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-200">Mensagem</label>
                  <textarea id="message" name="message" required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 shadow-xl rounded text-lg">ENVIAR</button>
              </div>

            </div>
          </div>
        </form>
      </section>

      <Footer />
      <BackTop>
        <div style={style}>↑</div>
      </BackTop>
    </>
  )
}

export default Home;
