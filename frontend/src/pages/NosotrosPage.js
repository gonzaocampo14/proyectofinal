import React from 'react';
import '../styles/components/pages/NosotrosPage.css';

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <section className="objetivo">
                <h2>Objetivo</h2>
                <p>El objetivo del sitio es recopilar información de los equipos de la liga Argentina. Tener las
                    formaciones, fixtures, historias, etc.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis consequuntur sint veniam ipsa ullam
                    voluptatibus quidem esse, laboriosam quos et quod, ex quas, sapiente ea? Debitis recusandae beatae
                    asperiores inventore aut esse optio rem magni! Ut labore, eius rerum corrupti mollitia non repellat
                    cumque praesentium exercitationem eos? Harum, vitae? Sequi, culpa, asperiores enim ullam consequuntur
                    voluptas voluptates ab impedit itaque repudiandae, eaque ipsa dicta in atque dolorum assumenda inventore
                    consectetur incidunt maxime suscipit obcaecati reprehenderit! Dolor debitis beatae sed expedita tempore
                    ex nostrum, saepe aperiam ipsum cupiditate eum pariatur eaque minus, est commodi quaerat! Architecto
                    ipsum facere recusandae! Quo nisi quas, voluptatibus quia neque facere veniam laudantium, enim pariatur,
                    inventore cum iusto eaque eos eum blanditiis? Ut nihil corporis delectus voluptate numquam! Nemo animi
                    veniam vel, dolores provident ipsam quasi in perferendis laboriosam minima cumque, ut et dolorum
                    nesciunt cum.</p>
            </section>

            <section className="staff">
                <h2>¿Quienes somos?</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="./images/gallardo.jpg" alt="gallardo copa" />
                        <h5>Marcelo Gallardo</h5>
                        <h6>Director Técnico</h6>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est deleniti aliquam cupiditate natus officiis nulla, aperiam tempore ipsam, eius voluptate harum soluta id dignissimos obcaecati odio ab repellat et optio.</p>
                    </div>
                    <div className="persona">
                        <img src="./images/juanfer.jpg" alt="juanfer quintero" />
                        <h5>Juan Quintero</h5>
                        <h6>Gol en el 108'</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, nesciunt ex iure architecto a optio maxime ab tenetur? Quaerat ab commodi, cumque hic eos quibusdam cum reiciendis maxime totam eveniet.</p>
                    </div>
                    <div className="persona">
                        <img src="./images/armani.jpg" alt="armani pulpo" />
                        <h5>Franco Armani</h5>
                        <h6>Arquero</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis expedita natus rerum, officia vero quae sapiente quia, possimus ex voluptate eaque odit consequatur, eos cum animi omnis. Error, maiores doloremque?</p>
                    </div>
                    <div className="persona">
                        <img src="./images/enzo.jpg" alt="enzo perez copa" />
                        <h5>Enzo Pérez</h5>
                        <h6>Capitán sin cinta</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque nobis aliquam alias obcaecati quaerat, praesentium, debitis eveniet provident distinctio laboriosam incidunt soluta! Esse error repellat aliquam officia recusandae amet quos.</p>
                    </div>
                    <div className="persona">
                        <img src="./images/pity.jpg" alt="gonzalo pity martinez" />
                        <h5>Gonzalo Martínez</h5>
                        <h6>Gol en el 121'</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illo eaque error ullam est, voluptates dolore, minima veritatis ipsum, quod praesentium necessitatibus provident quas maxime doloribus voluptatum rem cumque esse?</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default NosotrosPage;