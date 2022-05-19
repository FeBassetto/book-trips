import React from 'react';
import './Reserves.css'
import { MdDelete } from 'react-icons/md'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Reserves = (props) => {
  return (
    <div>
      <h1 className='title'>Voce solicitou {props.reserves.length} reservas</h1>
      {props.reserves.map(reserve => (
        <>
          <div className='reserves'>
            <img src={reserve.image}
              alt={reserve.title} />
            <strong>{reserve.title}</strong>
            <span>Quantidade: 2</span>
            <button
              type='button'
              onClick={() => { }}
            >
              <MdDelete size={20} color='#191919' />
            </button>
          </div>

          <footer>
            <button type='button'>Solicitar Reservas</button>
          </footer>
        </>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  reserves: state.reserve.reserves
})

export default connect(mapStateToProps, null)(Reserves)