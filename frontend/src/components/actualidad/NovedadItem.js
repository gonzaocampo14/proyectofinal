import React from 'react';

const NovedadItem = (props) => {
    const { title, equipo, imagen, body } = props;

    return (
        <div className="novedades">
            <h1>{title}</h1>
            <h3>{equipo}</h3>
            <img src={imagen} />
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
        </div>
    );
}

export default NovedadItem;