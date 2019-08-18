import React from 'react';
import './Contato.css';

export const ContatoComponent = () => (
    <>
    <div id="espaco">
    <div id="borda-contato">
    <h1>Contato</h1>
    
    <form>
        <label>Mensagem</label><br />
        <textarea  cols="50" rows="6"></textarea><br />
        <input type="submit" value="Submit"></input>
    </form>

    </div>
    </div>
    </>
)

