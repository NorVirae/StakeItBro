import React, { useState } from 'react';
import { StakeModalInterface } from '../../@types/interfaces';




const UnStakeModal:React.FC<StakeModalInterface> = ({setShowModal, setStaked, staked, showModal}) => {

    const [amountToUnStake, setAmountToUnStake] = useState<string>('')
    const [type, setType] = useState('flexible')
    const [duration, setDuration] = useState<number>(0)

    return <div  className='stake-modal-container'>
            
                <div onClick={e=>null} className='stake-modal'>
                    <div className='stake-inner-left'>
                        <div onClick={e=>setShowModal(false)} className='close-btn'>x</div>

                        <h1>FIS Staking</h1>

                        <h2> Mandela</h2>

                        <form>
                            <fieldset className='form-group'>
                                
                                <label className='form-label'><span>Un-Stake Amount </span> <span>Available amount: 0.00 FIS</span></label>
                                <input onChange={e=>setAmountToUnStake(e.target.value)} value={amountToUnStake} className='form-input'/>

                            </fieldset>
                        </form>

                        <div className='percentage-container'>

                            <div className='btn-percentage'>
                                25%

                            </div>

                            <div className='btn-percentage'>
                                50%
                                
                            </div>

                            <div className='btn-percentage'>
                                75%
                                
                            </div>

                            <div className='btn-percentage'>
                                100%
                                
                            </div>
                        </div>

                        <div className='stake-type'>

                        </div>

                    </div>

                    <div className='stake-inner-right'>
                        
                        

                        <button onClick={e=>setStaked(!staked)} className='stake-button'>Un-Stake</button>
                    </div>

                </div>

            </div>
                

}
export default UnStakeModal;