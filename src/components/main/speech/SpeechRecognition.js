import React from "react";
import TypeWriter from "react-typewriter";
import {globalStateHandler} from "../../../services/globalStateHandler";
import counterStore from "../../../stores/counterStore";
import Icon from "../../Icon";
import ReactAudioPlayer from "react-audio-player";
require('./SpeechRecognition.css')

export default class SpeechRecognition extends React.Component {
    constructor(props) {
        super(props)

        this.init_speech()
        this.coloredWords = []

        this.state = {
            welcomeMessage: <span>Hi, I'm your web-designer.<br/>Tell me about the website of your dreams.</span>,
            recognized: null,
            percent: 0.0,
            top: true,
            recognizing: false,
            soundsrc: require('../../../resources/0.ogg')
        }
    }

    componentWillMount() {
        counterStore.addChangeListener(this.handleCounterChange)
    }

    componentWillUnmount() {
        counterStore.removeChangeListener(this.handleCounterChange)
    }

    handleCounterChange = () => {
        switch (counterStore.getCounter()) {
            case 0:
                this.setState({
                    welcomeMessage: <span>Hi, I'm your web-designer.<br/>Tell me about your dream website.</span>,
                    recognized: null,
                    percent: 0.0,
                    top: true,
                    recognizing: false,
                    soundsrc: require('../../../resources/0.ogg')
                })
                break
            case 1:
                this.setState({
                    soundsrc: require('../../../resources/1.ogg')
                })
                break
            case 2:
                this.setState({
                    soundsrc: require('../../../resources/2.ogg')
                })
                break
            case 3:
                this.setState({
                    soundsrc: require('../../../resources/3.ogg')
                })
                break
            case 4:
                this.setState({
                    soundsrc: require('../../../resources/5.ogg')
                })
                break
            case 5:
                this.setState({
                    soundsrc: require('../../../resources/4.ogg')
                })
                break
        }
    }

    init_speech = () => {
        this.recognition = new webkitSpeechRecognition()

        if (!('webkitSpeechRecognition' in window)) {
            console.log('Browser not supported')
        }

        this.recognition.continuous = false
        this.recognition.interimResults = true
        this.recognition.onstart = () => this.setState({
            recognized: null,
            welcomeMessage: "",
            percent: 0.2,
            recognizing: true,
        })

        this.recognition.onend = () => {
            this.setState({
                recognizing: false
            })
            const res = this.state.recognized.map((span) => span.props.children).join(' ')
            globalStateHandler(res)
            setTimeout(() => this.setState({
                percent: 0
            }), 200)
        }


        this.recognition.onresult = (event) => {
            let interim_transcript = ''
            for (let i = 0; i < event.results.length; i++) {
                interim_transcript += cap(event.results[i][0].transcript)
            }
            this.setState({
                recognized: this._changeColor(interim_transcript),
                percent: 0.9,
            }, () => {
                setTimeout(() => this.setState({percent: 0.2}), 200)
            })
        }

        const cap = (string) => {
            const s = string.charAt(0).toUpperCase() + string.slice(1);
            const last = s.charAt(s.length - 1)
            return last === '?' || last === '.' ? s : s + '.'
        }
    }

    _changeColor = (text) => {
        let colors = ["#FFFBBD", "#5BC0EB", "#FF595E", "#94ECBE", "#F1BB87", "#87FF65"]

        let words = text.split(" ")
        words = words.map((word, index) => {
            let chance = Math.floor((Math.random() * 2) + 1);
            let color = Math.floor(Math.random() * 5);

            this.coloredWords.forEach(coloredWord => {
                if (coloredWord.word === word) {
                    return <span key={index} style={{color: coloredWord.color}}>{word + " "}</span>
                }
            })

            if (word.length >= 5) {
                this.coloredWords.push({
                    word: word,
                    color: colors[color]
                })
                return <span key={index} style={{color: colors[color]}}>{word + " "}</span>
            }

            return <span key={index}>{word + " "}</span>
        })

        return words
    }

    startButton = (event) => {
        if (this.state.recognizing) {
            this.recognition.stop();
            return;
        }
        this.recognition.lang = 'en-US';
        this.coloredWords = []
        this.recognition.start();

        this.setState({
            recognized: [],
            welcomeMessage: "",
            top: false,
        })
    }

    render() {
        return (
            <div className='h-100 w-100 fixed top-0 bottom-0' style={{pointerEvents: 'none'}}>
                <div className='dn'>
                    <ReactAudioPlayer src={this.state.soundsrc} autoPlay="true"/>
                </div>
                <div className='h-100 w-100 fixed top-0 bottom-0'
                     style={{background: this.state.recognizing ? 'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0.65) 6%,rgba(0,0,0,0) 56%,rgba(0,0,0,0) 100%)' : ''}}>
                    <div className='w-100 h-100 tc flex flex-column items-center mt4' style={{height: 100}}>
                        <div className='flex items-center justify-center h-100'>
                            {this.state.welcomeMessage &&
                            <div className='w-100 fixed top-20 tc flex flex-column justify-center mt5'>
                                <div className='f2 white pa2 br3'>
                                    <TypeWriter typing={1}>{this.state.welcomeMessage}</TypeWriter>
                                </div>
                            </div>
                            }
                            {this.state.recognized &&
                            <div
                                className='f2 light-gray pa2 br3 fadeOutUp'
                                style={{
                                    backgroundColor: !this.state.recognizing ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)',
                                    transition: 'background-color: 0.3s ease'
                                }}
                            >
                                {this.state.recognized}
                            </div>
                            }
                        </div>
                    </div>
                    <div
                        className={`fixed ${this.state.top ? 'h-100' : ''} bottom-0 left-0 right-0 flex w-100 flex-column items-center justify-center`}
                        style={{
                            transition: 'height 0.5s ease',
                            height: this.state.top ? '' : 200,
                        }}
                    >
                        <div
                            onClick={this.startButton}
                            className='br-pill flex items-center justify-center pointer shadow-1 fadeInUp'
                            style={{
                                width: this.state.top ? 150 : 100,
                                height: this.state.top ? 150 : 100,
                                background: 'linear-gradient(135deg, #e15a97 0%,#eec584 100%)',
                                boxShadow: this.state.top ? '' : '0 19px 60px rgba(0, 0, 0, 0.3), 0 15px 20px rgba(0, 0, 0, 0.22)',
                                transition: 'height 0.3s ease, width 0.3s ease, box-shadow 0.5s ease',
                                pointerEvents: 'all',
                            }}
                        >
                            <div className='br-pill'
                                 style={{
                                     width: this.state.percent * 100,
                                     height: this.state.percent * 100,
                                     backgroundColor: '#D7FFF1',
                                     transition: 'width 1s ease, height 1s ease, opacity 1s ease',
                                     opacity: this.state.percent,
                                 }}
                            >
                            </div>
                            <div className='absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center'>
                                <Icon width={100} height={100} color={'#fff'}
                                      src={require('../../../resources/img/microphone.svg')}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
