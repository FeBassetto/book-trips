import React from 'react';
import './Reserves.css'
import { MdDelete } from 'react-icons/md'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reserveActions } from '../../store/actions/reserveAction';

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
              <MdDelete
                size={20}
                color='#191919'
                onClick={() => props.removeReserve(reserve.id) }
              />
            </button>
          </div>

        </>
      ))}
      <footer>
        <button type='button'>Solicitar Reservas</button>
      </footer>
    </div>
  );
}

const mapDispatchToProps = dispatch => bindActionCreators(reserveActions, dispatch)

const mapStateToProps = state => ({
  reserves: state.reserve.reserves
})

export default connect(mapStateToProps, mapDispatchToProps)(Reserves)