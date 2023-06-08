import { Grid } from "@mantine/core";
import { CarouselCard } from "components/CarouselCard";
import { NavbarSearch } from "components/NavbarSearch";
import "../../App.scss";

function Home() {
  return (
    <>
      <div className="MainPage">
        <Grid columns={3} className="Grid" style={{ overflowX: "hidden" }}>
          <CarouselCard
            img="https://m.media-amazon.com/images/I/81Y7hzLIf0L._AC_UF894,1000_QL80_.jpg"
            name="Mouse Inalambrico"
            description="Mouse inalambrico usado para videojuegos en muy buenas condiciones"
            price={800}
            review={4}
          />
          <CarouselCard
            img="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSTw7mgEg-cy1J8LgYzDU8UNN9-9sXb89-K_bTVc4Oirf7pfiqwUo_dVB4jlXPj1Qf_OZTo5NvFPJQqjh5u5KLeMGMAiWtyknSAbJag92eZmwQcpwDo3nKAVg&usqp=CAE"
            name="Iphone 12"
            description="Iphone 12 practicamente nuevo, viene con cargador y funda, 12000 pesos OMO"
            price={12000}
            review={2}
          />
          <CarouselCard
            img="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSfWSB-BVK4G0JsN2oHeM3R2c7R_Mbd9i3x4lxaZB7zH_jUgBGDbr83J81EDpDeVtbKAu4kIobtLp8buILm205GM9VWwNtjwoCOozhKmCxL&usqp=CAE"
            name="Platos de cerámica"
            description="Platos de cerámica hechos a mano en muy buenas condiciones"
            price={1000}
            review={5}
          />
          <CarouselCard
            img="https://mueblesmelamine.com/wp-content/uploads/2023/02/caracteristicas-de-un-buen-carpintero.jpg"
            name="Carpintero"
            description="Ofrezco mis servicios de carpintero para realizar piezas a muebles a medida, interesados manden mensaje"
            price={0}
            review={4.2}
          />
          <CarouselCard
            img="data:image/jpeg;base64,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"
            name="Pintor"
            description="MMe dedico a pintar casa, en caso de estar interesado mandar mensaje"
            price={0}
            review={3.7}
          />
          <CarouselCard
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8UaoqUO8kQaJOZBQuJZb1QsPsd_MYvLx4Gw&usqp=CAU"
            name="Gomitas"
            description="Paquetes de gomitas hechas por mi hija para la escuela"
            price={30}
            review={4.5}
          />
          <CarouselCard
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZoMMF3gpWI60UCBkII4ULNHoz3kchgTcBrQ&usqp=CAU"
            name="Nintendo Switch"
            description="Nintendo Switch usado, los joycons tienen un detalle pero nada serio"
            price={3500}
            review={2.2}
          />
          <CarouselCard
            img="https://cdn.shopify.com/s/files/1/0061/8826/9657/products/102030.jpg?v=1659818862"
            name="Cartera"
            description="Cartera nueva en venta"
            price={350}
            review={3}
          />
          <CarouselCard
            img="https://static.retail.autofact.cl/blog/c_img_740x370.1d99yh8kyyodl81.jpg"
            name="Carro"
            description="Carro en venta, más información mandar mensaje"
            price={240000}
            review={5}
          />
        </Grid>
      </div>
    </>
  );
}

export { Home };
