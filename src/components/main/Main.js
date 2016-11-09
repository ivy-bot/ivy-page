import React from "react";
import SpeechRecognition from "./speech/SpeechRecognition";
import speak from "./speech/tts";
import templateStore from "../../stores/templateStore";
import ParentBlogTemplate from "../templates/ParentBlogTemplate";
import ParentEcommerceTemplate from "../templates/ParentECommerceTemplate";
import CounterStore from "../../stores/counterStore";
import GlobalStateHandler from "../../services/globalStateHandler";
import {reset} from "../../actions/templateGenAction";

export default class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            template: <div></div>,
            audio: <div></div>,
        }
    }

    componentWillMount() {
        templateStore.addChangeListener(this.handleTemplateChange)
        speak("hello world", (audio) => this.setState({
            audio: audio
        }))
    }

    componentWillUnmount() {
        templateStore.removeChangeListener(this.handleTemplateChange)
    }

    handleTemplateChange = () => {
        const template = templateStore.getTemplateType()
        this.setState({
            template
        })
    }

    render() {

        return (
            <div className='w-100' style={{
                height: '100vh',
                backgroundImage: `url(${require('../../resources/img/back.jpg')})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                {(this.state.template === 'BlogPage' || this.state.template === 'Ecommerce') &&
                <div className='overflow-hidden' style={{height: '100vh', padding: '50px 30px 100px 30px'}}>
                    <div className='flex bg-light-gray justify-between pa2'
                         style={{
                             borderTopLeftRadius: 5,
                             borderTopRightRadius: 5,
                         }}
                    >
                        <div className='light-gray' style={{width: 80}}>
                        </div>
                        <div className='pa1 w-50'>
                            <div className='w-100 h-100 bg-white br-pill'>
                            </div>
                        </div>
                        <div className='flex pa1'>
                            <div className='br-pill pa2 mr2 o-50' style={{background: 'green'}}>
                            </div>
                            <div className='br-pill pa2 mr2 o-50' style={{background: 'orange'}}>
                            </div>
                            <div className='br-pill pa2 mr2 dim pointer' style={{background: 'rgba(255,0,0,0.5)'}}
                                 onClick={() => {
                                     CounterStore.setCounter(0)
                                     reset()
                                 }}
                            >
                            </div>
                        </div>
                    </div>
                    {this.state.template === 'BlogPage' &&
                    <ParentBlogTemplate />
                    }
                    {this.state.template === 'Ecommerce' &&
                    <ParentEcommerceTemplate />
                    }
                </div>
                }
                <SpeechRecognition/>
                <div className='dn'>
                    <GlobalStateHandler/>
                </div>
            </div>
        )
    }
}
