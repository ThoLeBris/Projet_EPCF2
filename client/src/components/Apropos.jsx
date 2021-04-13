import React from 'react'
import degustation from '../assets/images/degustation .jpg'
import map from '../assets/images/map.jpg'

const Apropos = () => {
    return (
        <div id="apropos">
            <h2 className="qui">Qui sommes nous ?</h2>
            <div className="largeur flex-row">
                <div className="intro">
                    <div>
                        <p className="premiere-ligne">Une propriété familiale,</p>
                        <p>
                            Qui bénéficie de terroirs exeptionnels, déjà remarqué lors du classement de 1855.
                        </p>
                        <p>
                            Nos vins, couleur rubis, issus des cépages Cabernet Sauvignon et Merlot sont vifs et fruités, aux arômes complexes de fruits noirs, évoquant le cassis et la mûre, nos vins s’accordent avec plaisir aux viandes, volailles et fromages.
                        </p>
                        <p>
                            Vous apprécierez la vigueur de leur jeunesse, ou, avec de la patience, leur bouquet épanoui à maturité.
                        </p>
                        <p>Vignification traditionnelle.</p>
                        <p>Vignoble en enherbement naturel.</p>
                    </div>
                </div>
                <img src={degustation} alt="degustation" className="image degustation"/>
            </div>

            <h2>Où sommes-nous ?</h2>
            <div className="largeur flex-row">
                <img src={map} alt="map" className="image map"/>
                <div className="intro">
                    <div>
                        <p className="premiere-ligne">Idéalement située,</p>
                        <p>
                            Entre l’océan Atlantique et l’estuaire de la Gironde, à proximité de Lesparre.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Apropos
