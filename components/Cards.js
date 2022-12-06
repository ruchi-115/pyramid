import { Billboard, Plane, OrbitControls, TrackballControls } from "@react-three/drei"


export const Cards = ({ follow, lockX, lockY, lockZ }) => (
    <>
        <Billboard follow={follow} lockX={lockX} lockY={lockY} lockZ={lockZ} position={[-4, -2, 0]}>
            <Plane args={[3, 2]} material-color="red" />
        </Billboard>
        <Billboard follow={follow} lockX={lockX} lockY={lockY} lockZ={lockZ} position={[-4, 2, 0]}>
            <Plane args={[3, 2]} material-color="orange" />
        </Billboard>
        <Billboard follow={follow} lockX={lockX} lockY={lockY} lockZ={lockZ} position={[0, 0, 0]}>
            <Plane args={[3, 2]} material-color="green" />
        </Billboard>
        <Billboard follow={follow} lockX={lockX} lockY={lockY} lockZ={lockZ} position={[4, -2, 0]}>
            <Plane args={[3, 2]} material-color="blue" />
        </Billboard>
        <Billboard follow={follow} lockX={lockX} lockY={lockY} lockZ={lockZ} position={[4, 2, 0]}>
            <Plane args={[3, 2]} material-color="yellow" />
        </Billboard>
        <TrackballControls />
        {/* <OrbitControls enablePan={true} zoomSpeed={0.5} /> */}
    </>
)

Cards.args = {
    follow: true,
    lockX: false,
    lockY: false,
    lockZ: false,
}