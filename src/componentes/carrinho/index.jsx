import React from 'react';
import Close from '../../assets/icons/Close.svg';
import ImgMonitor from '../../assets/imagens/product-image-monitor.jpg';

export default function Carrinho() {
    return (
        <body>
            <div className="container">
                <div className="carrinho">
                    <div className="carrinho-header">
                        <p>Seu carrinho tem <strong>5 itens</strong></p>
                        <img src={Close} alt="Fechar carrinho"/>
                    </div>
                    <div className="carrinho-center">
                        <div className="carrinho-items">
                            <div className="carrinho-items-img">
                                <img src={ImgMonitor} alt="Monitor"/>
                            </div>
                            <div classNam="carrinho-items-info">
                                <p className="nome-produto">Monitor Gamer Curvo 49 DQHD, 240Hz, 1ms, HDMI e DisplayPort, HDR 1000, FreeSync Premium, Ajuste de Altura - LC49G95TSSLXZD</p>
                                <div className="carrinho-items-info-valor">
                                    <p><b>R$ 8.599,90</b></p>
                                    <div className="carrinho-items-info-quantidade">
                                        <button className="carrinho-items-info-quantidade-1">-</button>
                                        <p><b>1</b></p>
                                        <button className="carrinho-items-info-quantidade-2">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carrinho-footer">
                        <div className="carrinho-footer-total">
                            <p>Total:</p>
                            <p className="valor-total"><b>R$ 10.681,70</b></p>
                        </div>
                        <button className="carrinho-footer-finalizar">Finalizar Compra</button>
                    </div>
                </div>
            </div>
        </body>
    )
}