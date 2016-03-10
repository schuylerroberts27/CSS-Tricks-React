import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="data-list">

      {props.widgets.map(function(widget) {

        return (
          <div key={widget.id} className="data-list-item">
            <div className="details">
              <Link to={'/widgets/' + widget.id}>{widget.name}</Link>
            </div>
            <div className="controls">
              <button onClick={props.deleteWidget.bind(null, widget.id)} className="delete">Delete</button>
            </div>
          </div>
        );

      })}

    </div>
  );
}
