import React, {Component} from 'react';
import './landing.css';
import logo from '../images/logo.svg';
import group from '../images/group.svg';
import label_work from '../images/label-work.svg';
import label_life from '../images/label-life.svg';
import label_sleep from '../images/label-sleep.svg';
import choonsik from '../images/choonsik.png';

class Landing extends Component {
    render(){
        return (
            <div className="container layer nopadding">
                <div className="col-md-12">
                    <div className="logo">
                        <img src={logo} className="img-logo" alt=""/>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="textarea">
                        <p>춘식씨가 행복하려면 하루의 시간을 어떻게 투자해야 할까요?</p>
                    </div>
                    <div className="choonsik">
                        <img src={choonsik} className="img-choonsik" alt=""/>
                    </div>
                    <div className="group">
                        <img src={group} className="img-group" alt=""/>
                        <form className="form-inline form-work-life" onSubmit={(e)=>{
                            e.preventDefault();
                            let nonSleepTime = 24 - this.refs.sleeptime.value;
                            let lifeTimeRatio = this.refs.lifetime.value / parseFloat(nonSleepTime);
                            let balanceType;
                            if (lifeTimeRatio < 0.2){
                                balanceType = 1;
                            } else if (lifeTimeRatio < 0.4){
                                balanceType = 2;
                            } else if (lifeTimeRatio < 0.6){
                                balanceType = 3;
                            } else if (lifeTimeRatio < 0.8){
                                balanceType = 4;
                            } else {
                                balanceType = 5;
                            }
                            console.log(balanceType);
                        }}>
                            <div className="form-group row">
                                <label htmlFor="input-worktime" className="col-form-label">
                                    <img src={label_work} className="label-work" alt=""/>
                                </label>
                                <input id="input-worktime" className="form-control" type="text" ref="worktime"/>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="input-lifetime" className="col-form-label">
                                    <img src={label_life} className="label-life" alt=""/>
                                </label>
                                <input id="input-lifetime" className="form-control" type="text" ref="lifetime"/>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="input-sleeptime" className="col-form-label">
                                    <img src={label_sleep} className="label-sleep" alt=""/>
                                </label>
                                <input id="input-sleeptime" className="form-control" type="text" ref="sleeptime"/>
                            </div>

                            <button id="btn-submit" type="submit" className="btn btn-primary">GO</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default Landing;