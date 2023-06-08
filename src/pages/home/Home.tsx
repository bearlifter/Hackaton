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
            review={4.5}
          />
          <CarouselCard
            img="https://m.media-amazon.com/images/I/81Y7hzLIf0L._AC_UF894,1000_QL80_.jpg"
            name="Mouse Inalambrico"
            description="Mouse inalambrico usado para videojuegos en muy buenas condiciones"
            price={800}
            review={4.5}
          />
          <CarouselCard
            img="https://m.media-amazon.com/images/I/81Y7hzLIf0L._AC_UF894,1000_QL80_.jpg"
            name="Mouse Inalambrico"
            description="Mouse inalambrico usado para videojuegos en muy buenas condiciones"
            price={800}
            review={4.5}
          />
          <CarouselCard
            img="https://m.media-amazon.com/images/I/81Y7hzLIf0L._AC_UF894,1000_QL80_.jpg"
            name="Mouse Inalambrico"
            description="Mouse inalambrico usado para videojuegos en muy buenas condiciones"
            price={800}
            review={4.5}
          />
          <CarouselCard
            img="https://m.media-amazon.com/images/I/81Y7hzLIf0L._AC_UF894,1000_QL80_.jpg"
            name="Mouse Inalambrico"
            description="Mouse inalambrico usado para videojuegos en muy buenas condiciones"
            price={800}
            review={4.5}
          />
          <CarouselCard
            img="https://m.media-amazon.com/images/I/81Y7hzLIf0L._AC_UF894,1000_QL80_.jpg"
            name="Mouse Inalambrico"
            description="Mouse inalambrico usado para videojuegos en muy buenas condiciones"
            price={800}
            review={4.5}
          />
          <CarouselCard
            img="https://m.media-amazon.com/images/I/81Y7hzLIf0L._AC_UF894,1000_QL80_.jpg"
            name="Mouse Inalambrico"
            description="Mouse inalambrico usado para videojuegos en muy buenas condiciones"
            price={800}
            review={4.5}
          />
          <CarouselCard
            img="https://m.media-amazon.com/images/I/81Y7hzLIf0L._AC_UF894,1000_QL80_.jpg"
            name="Mouse Inalambrico"
            description="Mouse inalambrico usado para videojuegos en muy buenas condiciones"
            price={800}
            review={4.5}
          />
          <CarouselCard
            img="https://m.media-amazon.com/images/I/81Y7hzLIf0L._AC_UF894,1000_QL80_.jpg"
            name="Mouse Inalambrico"
            description="Mouse inalambrico usado para videojuegos en muy buenas condiciones"
            price={800}
            review={4.5}
          />
        </Grid>
      </div>
    </>
  );
}

export { Home };
