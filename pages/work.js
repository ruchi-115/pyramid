import { Canvas, useFrame } from "@react-three/fiber"
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { extend } from '@react-three/fiber'

extend({ TextGeometry })



export default function Work() {
    return (

        <>
            <div className="absolute top-5  right-0" style={{ fontSize: '1em', letterSpacing: '0.1em', }}>
                <ul className="flex justify-end  items-center px-3">
                    <li>HOME | </li>
                    <li>PROTOTYPES | </li>
                    <li>INFO | </li>
                    <li>ARTICLES </li>
                </ul>
            </div>
            <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate3d(-50%,-50%,0)' }}>
                <h1 className="grey" style={{ margin: 0, padding: "0", fontSize: '8em', fontWeight: 100, letterSpacing: '0.1em', width: '500px' }}>WORK</h1>
            </div>
            <div style={{ position: 'absolute', top: '20%', left: '55%', transform: 'translate3d(-50%,-50%,0)' }}>
                <h5 style={{ margin: 0, padding: 0, fontSize: '1.3em', fontWeight: 100, letterSpacing: '0.08em' }}>PROJECTS | COLLABORATIONS | EXPLORATIONS</h5>
            </div>
            <div className='flex ' style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translate3d(-50%,-50%,0)' }}>
                <p className="px-5" style={{ fontSize: '1em', letterSpacing: '0.1em', }}>WORK</p>
                <p className="px-3" style={{ fontSize: '1em', letterSpacing: '0.1em', }}>INFO</p>
                <p className="px-3" style={{ fontSize: '1em', letterSpacing: '0.1em', }}>PROTOTYPES</p>
                <p className="px-3" style={{ fontSize: '1em', letterSpacing: '0.1em', }}>ARTICLES</p>
            </div>

        </>
    )
}