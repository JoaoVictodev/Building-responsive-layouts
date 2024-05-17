import Card from "./card/Card";
const App = () => {
  return (
    <>
      <main className="md:h-full flex font-poppins h-mobile-h-max bg-Very-Light-Gray">
        <section className="w-mobile-container md:w-full mx-auto text-center grid-cols-3">
          <p className="tracking-normal text-2xl md:text-4xl leading-7 font-p-title pt-20 mt-1 pb-5 mx-auto">
            Reliable, efficient delivery
          </p>
          <h1 className="text-Very-Dark-Blue text-2xl  md:text-4xl font-semibold tracking-normal leading-8 pb-4">
            Powered by Technology
          </h1>

          <p className="text-Grayish-Blue text-base md:text-lg md:w-2/5 tracking-normal w-full pb-0 md:pb-16 md:mx-auto span">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
          <div className="md:grid md:grid-cols-3 md:justify-center max-w-6xl md:mx-auto gap-1">
            <Card
              name={"Supervisor"}
              description={"Monitors activity to identify project roadblocks"}
              border={"blue"}
              src={"supervisor"}
              position={"l"}
            ></Card>
            <Card
              name={"Team Builder"}
              description={
                "Scans our talent network to create the optimal team for your project"
              }
              border={"red"}
              src={"teamBuilder"}
              position={"a"}
            ></Card>
            <Card
              name={"Karma"}
              description={"Regularly evaluates our talent to ensure quality"}
              border={"orange"}
              src={"karma"}
              position={"r"}
            ></Card>
            <Card
              name={"Calculator"}
              description={
                "Uses data from past projects to provide better delivery estimates"
              }
              border={"blue"}
              src={"calculator"}
              position={"rv"}
            ></Card>
            <Card
              name={"Karma"}
              description={"Regularly evaluates our talent to ensure quality"}
              border={"orange"}
              src={"karma"}
              position={"col"}
            ></Card>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
