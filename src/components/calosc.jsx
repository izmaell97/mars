import React from 'react'
import ReactDOM from 'react-dom';
import {ResourceCounter} from './licznikzasobow';

export class Calyzasob extends React.Component {
        constructor(props) {
            super(props);
            this.state = {wartosc: 0};
      this.handlezasob = this.handlezasob.bind(this);
      this.handlezasobmniej = this.handlezasobmniej.bind(this);
         this.handlesuperzasobmniej = this.handlesuperzasobmniej.bind(this);
        }

        handlezasob() {
            let nowawartosc = this.state.wartosc + 1;
            this.setState({
                wartosc: nowawartosc
            });
        }

        handlezasobmniej() {
            let nowawartosc=0
           if(this.state.wartosc>0){
                nowawartosc = this.state.wartosc - 1;
                this.setState({
                wartosc: nowawartosc
            });
           }
           else {
                this.setState({
                   wartosc: 0
               });
           }
        }
   handlesuperzasobmniej() {
             let nowawartosc=this.state.wartosc - 8;
           if(nowawartosc>0){

                 this.setState({
                wartosc: nowawartosc
            });
           }
           else {
                this.setState({
                   wartosc: 0
               });
           }
        }
    render() {
            let newStyle = {...styles}
            let {background } = this.props
         let {color } = this.props
            newStyle.background = background
        newStyle.color = color

              return (

                  <div>
                      <ResourceCounter text={this.props.text2} background={background} color={color}/>
                     <p style={newStyle}>
                         <a style={styltab}>
                      <h1 style={styltab}>{this.props.text}</h1>

                          <button style={stylbutton} onClick={this.handlezasob}>+</button>
                        <a style={styltab2}>  {this.state.wartosc}</a>
                          <button style={stylbutton} onClick={this.handlezasobmniej}>-</button>
                            <button style={stylbutton} onClick={this.handlesuperzasobmniej}>-8</button>
                      </a>
                         </p>
                  </div>
              )

    }
}
const styles={
  background: 'chocolate',
  color:      'grey',
  marginTop: 20,
    marginLeft:80,
  fontSize: 20,
}
const styltab={
   marginLeft:50,
}
const styltab2={
   marginLeft:5,
    marginRight:10,
    fontSize:30,
}
const stylbutton={
    background: 'silver',
    color: 'black',
    fontSize: 30,


}



