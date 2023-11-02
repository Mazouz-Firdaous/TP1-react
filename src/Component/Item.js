export default function Item(props) {
    const textStyle = {
      textDecoration: props.completed ? 'line-through' : 'none',
    };
  
    return (
      <div >
        <li className="border d-flex justify-content-between align-items-center p-2 m-2" style={{ backgroundColor: '#ffffff', borderRadius:'10px'}}>
          <div className="g-flex"> {/* Utilisation de flex-grow-1 pour que le texte occupe l'espace restant */}
            <div className="p-3" style={textStyle} onClick={props.toggleTodo}>
              {props.txt}
            </div>
          </div>
          <div className="d-flex align-items-center"> {/* Utilisation de d-flex et align-items-center pour aligner les boutons à droite */}
            {props.editing ? (
              <div>
                <input
                  type="text"
                  value={props.editedText}
                  onChange={(e) => props.onTextChange(e.target.value)}
                />
                <button onClick={props.onSave}>Enregistrer</button>
              </div>
            ) : (
              <div>
                <button className="btn btn-danger p-2 h-50" onClick={props.delFunc}>
                  Supprimer
                </button>
                <button className="btn btn-success p-2 h-50" onClick={props.onEdit}>
                  Éditer
                </button>
              </div>
            )}
          </div>
        </li>
      </div>
    );
  }
  
  
  
  