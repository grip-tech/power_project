import React, { useEffect, useState } from "react";
import "./Main.css";
import background1 from "../../assets/images/main-bg1.jpg";
import background2 from "../../assets/images/main-bg2.jpg"
import background3 from "../../assets/images/main-bg3.jpg";
import background4 from "../../assets/images/main-bg4.jpg";
import background5 from "../../assets/images/main-bg5.jpg";

export default function Main() {
  const solutionList = [
    "Voltage Stabilization",
    "Voltage Optimization",
    "Voltage Transformation",
    "Frequency Variation",
    "Power Uninterruption",
    "Harmonic Suppression",
    "Power Factor Correction",
    "Surge Protection",
  ];

  const mappedSolutions = solutionList.map((solution) => {
    return <li>{solution}</li>;
  });

  // tried to make some adjustments tothe backgroud image
  const backgroundImg = [`${background2}`,`${background3}`, `${background4}`, `${background5}`];
  const [count, setCount] = useState(0);

  const styles = {
    background: `url("${backgroundImg[count]}")`,
    backgroundPosition: "bottom",
    transition: "background 1000ms ease-in-out",
  };

  useEffect(() => {
    let bgSwitcher = setInterval(() => {
      setCount((prev) => {
        if (prev < backgroundImg.length - 1) return (prev += 1);
        else return 0;
      });
    }, 5000);

    return () => clearInterval(bgSwitcher);
  }, [count]);
  console.log(count);
  return (
    <>
      <main className="serviceMain" style={styles}>
        <h1 className="mainHeading">
          Better Power Quality, More Energy Saving
        </h1>
        <h2 className="subHeading">
          Complete OEM/ODM Power Solutions that Guarantee Safe, Reliable and
          Efficient
        </h2>

        <div className="serviceMainLower">
          <div className="solutionscontainer">
            <span className="solutionsFor">Solutions for:</span>
            <ul className="solutionsList">{mappedSolutions}</ul>
          </div>
          <button className="quoteBtn">GET A QUOTE</button>
        </div>
      </main>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
        corrupti, tenetur reiciendis dolorum dolores enim amet nam molestias
        provident odit? Doloremque tempore quidem, dolores quaerat dolorem
        adipisci nulla ab. Excepturi aliquam nesciunt, aut vitae eius soluta!
        Porro necessitatibus aut reiciendis repudiandae ratione officiis non
        ipsam commodi? Nobis nihil natus amet sunt ducimus rem nam voluptate
        debitis sit recusandae doloremque porro iusto mollitia assumenda fuga
        vel, nesciunt quidem ullam. Placeat blanditiis veniam accusamus
        exercitationem dolorum dolorem unde molestiae maxime et quod est, aut
        nobis, dolor possimus tempora porro hic reprehenderit, nam libero sunt
        fugiat quos pariatur omnis! Veritatis odit consequuntur nisi praesentium
        delectus aut eligendi pariatur! Suscipit molestiae voluptatum sequi,
        quos exercitationem id quidem quaerat. Eligendi, alias voluptates
        deleniti tenetur molestiae porro, commodi velit voluptatibus ducimus
        omnis eius obcaecati ipsa maxime facere ex quas consequatur explicabo
        aspernatur voluptate neque nam, voluptatem in doloremque? Incidunt modi
        nam quam repellendus harum, repellat, adipisci eveniet ex fugiat ullam
        ea consequatur eum inventore corporis animi culpa voluptatem quasi
        magnam earum repudiandae? Sequi architecto rerum at nostrum modi
        reiciendis minus aspernatur corporis? Assumenda voluptatibus corporis
        repellendus sapiente quas explicabo recusandae est rerum molestiae
        porro! Modi ipsam fugit, incidunt quasi suscipit facere, quia soluta
        dicta aperiam quam neque! Minima, hic dicta. Soluta, velit quasi
        expedita quis voluptates dolore aspernatur ab. Quaerat, esse illum.
        Maiores, laudantium nostrum eum porro sint quae nisi repellendus quam
        earum facere labore, quibusdam praesentium illo voluptates explicabo
        consectetur! Earum, dicta incidunt. Modi molestias, iure nihil unde
        dolores adipisci sapiente incidunt quas optio suscipit nulla, eaque,
        reprehenderit asperiores vel! Blanditiis doloribus similique magni
        aliquid suscipit optio enim quasi distinctio, dolorem quas deserunt
        doloremque harum reprehenderit quae dolore fuga eum iusto! Atque facilis
        ipsum cum veritatis tempore ad. Repellat provident, maiores quod
        adipisci sint pariatur unde porro voluptates in eveniet! Minima est quas
        libero assumenda quae hic dicta quibusdam quod itaque! Iusto laborum
        obcaecati repellat quis incidunt saepe! Repellat, obcaecati ipsum? Error
        cumque corrupti ipsam vero, eum ut vitae temporibus rem fuga unde
        officia ad! Commodi cum aspernatur ad repellendus aliquam, fugiat sequi
        quae saepe obcaecati at non nostrum facilis harum, omnis labore ipsam?
        Perferendis explicabo et illum necessitatibus, unde sequi excepturi,
        cumque voluptate repudiandae eveniet, cupiditate alias quo nesciunt.
        Obcaecati dolore doloribus, beatae harum sint in quod id labore incidunt
        adipisci, dicta ipsam pariatur reprehenderit dolorem fuga nemo quibusdam
        placeat officiis ullam laboriosam. Maxime earum suscipit dicta mollitia
        animi! Recusandae, cum molestiae similique nihil minima, expedita aut
        quia dignissimos dolore consequuntur numquam ullam minus maxime quidem
        repellendus praesentium! Debitis nemo dignissimos eaque omnis illo
        asperiores atque perferendis beatae? Non officia quasi blanditiis magni
        nostrum. Mollitia illo eius at non, veritatis deserunt explicabo
        dignissimos. Inventore ullam iste eaque, nulla iusto amet
        necessitatibus. Optio, minima aliquam aspernatur excepturi deserunt
        sequi dicta quas beatae impedit aperiam doloribus est veritatis unde
        error similique aut, eveniet fuga voluptas? Voluptatum blanditiis saepe
        eligendi optio aperiam deleniti, aspernatur neque ut eos distinctio
        consequuntur inventore tenetur natus animi rem sequi sapiente
        dignissimos ipsam odio fugiat voluptates repellendus! Magnam,
        consectetur magni accusamus consequatur omnis, nobis perspiciatis
        doloribus tempore quidem modi, ullam quam illum accusantium ad quibusdam
        dolores necessitatibus reiciendis mollitia labore voluptate? Eligendi
        officia hic, voluptatem sequi libero voluptatibus voluptate similique
        adipisci, eos dolorum accusantium dignissimos qui provident ipsum dolore
        necessitatibus officiis enim nemo aspernatur veniam cumque! Debitis
        fugit, ex, maiores iste corporis nobis nam dicta rem rerum in ab
        blanditiis fugiat dignissimos. Voluptatum cumque ratione dolorem! Culpa
        omnis perferendis id hic sit pariatur recusandae illo velit, veritatis
        neque beatae suscipit voluptate, sequi sed. Animi facere assumenda ipsum
        exercitationem aspernatur nobis eligendi rem doloremque iste dolorum ea,
        expedita nisi reiciendis molestias ducimus ullam magni unde non commodi.
        Sed, pariatur consectetur similique, officiis adipisci recusandae minus
        labore, possimus ad illo ut reprehenderit eaque. Repellendus est quae
        suscipit, reprehenderit quod deserunt aut eligendi quam expedita tenetur
        sapiente porro! Repudiandae ab adipisci eum, magni enim sapiente ut!
        Perferendis harum, quos illum cumque labore asperiores minus nesciunt
        earum pariatur, alias unde optio nulla error! Sequi cumque rerum
        corrupti ducimus reiciendis velit molestiae magni enim vel id! Aut
        commodi perferendis rem explicabo, dignissimos, velit doloribus earum
        eveniet facilis enim qui. Laboriosam, voluptate assumenda error cumque
        aspernatur eligendi provident nobis labore sapiente. Ab repellendus
        quisquam eaque? Facere, nihil quaerat! Officia, libero! Quod repudiandae
        nemo deserunt labore fugiat itaque magni neque ducimus asperiores
        eligendi sequi facilis voluptas optio, veniam atque totam, dolores
        repellendus earum consequuntur officia, voluptates sint suscipit.
        Commodi tempora officia quia provident voluptatem suscipit magni error
        quis porro illo quaerat optio eveniet minima, harum a. Quos architecto
        saepe velit iusto magnam sint aliquid? Fugit ducimus quo veniam dolorum
        illo eos, fugiat impedit nobis quam ipsum explicabo eum suscipit labore
        sint obcaecati dolorem modi eius cupiditate iure magni temporibus
        voluptatum nemo. Iste labore rem modi velit pariatur qui illum
        voluptatem assumenda eius, error, incidunt asperiores doloremque tenetur
        at? Optio neque natus, inventore sit consectetur culpa nulla incidunt
        provident ad obcaecati voluptatibus ipsa a, minima dolore. Excepturi non
        laborum, eos asperiores consequuntur doloribus illum distinctio nam
        commodi beatae velit accusantium quae obcaecati aliquam similique
        laudantium officiis rerum in sed quod id at. Praesentium omnis aliquid
        magnam quia velit, vitae fuga, alias impedit aut eum, odio quam.
        Dignissimos consequatur corrupti earum culpa sunt. Dignissimos eum
        consequuntur quod quisquam autem rem, nemo commodi reiciendis,
        necessitatibus dolore quis cupiditate ea explicabo modi, non voluptate
        ab corporis quas asperiores dicta molestias. Totam laboriosam ipsam
        nihil quae. Delectus suscipit nesciunt dolorem in dignissimos aspernatur
        at illo voluptate enim nisi nihil distinctio ab, consequatur ducimus
        explicabo modi voluptatum molestiae quos repellendus fuga, quaerat, est
        adipisci repellat? Veniam alias minima aut consectetur eaque, assumenda
        ad odio hic sit, laborum porro ab culpa? Quasi aliquam illo nulla
        provident! Ipsum, sapiente eligendi ea nemo quaerat maxime beatae
        aspernatur sint culpa asperiores est consequatur doloribus, odit
        explicabo error id qui? Tenetur nemo debitis pariatur quae ut
        exercitationem quaerat iste veniam dolore non, nostrum nulla accusamus,
        perferendis recusandae, temporibus blanditiis iusto maxime! Voluptate
        vel id quae rem, nesciunt velit exercitationem laborum maiores quos,
        nulla pariatur perspiciatis dolores voluptatum aperiam soluta ratione,
        similique harum natus dicta aspernatur corporis consequatur. Voluptatem
        facere, quaerat dolores, voluptatibus consectetur, ducimus minima
        possimus unde ullam optio nobis officiis eum labore hic quas. Quibusdam
        quas dolor commodi voluptates fuga quam atque in magni doloribus vel
        officiis, numquam, nulla adipisci error nihil non doloremque, velit
        accusamus voluptatibus id suscipit ipsam repudiandae quo facere.
        Recusandae ad sunt necessitatibus, odit facere libero ratione
        cupiditate. Illum incidunt perspiciatis hic fugiat similique amet rerum
        accusantium. Saepe, labore! Tempora quaerat at, incidunt pariatur est
        minima sunt quam asperiores error repellat quae quisquam? Tempore
        recusandae error quas reiciendis quis natus accusantium enim labore
        quasi reprehenderit quod architecto, esse sequi maxime, facere harum
        ratione rerum dolor. Accusantium consequuntur praesentium numquam
        debitis veritatis quas eos incidunt repellendus ducimus corporis illum
        natus nostrum, molestiae iste doloribus aliquam laudantium eius vero
        recusandae! Molestias illum eos totam, expedita laudantium quo voluptate
        reiciendis tempora nam odit officiis excepturi laborum quod voluptas
        aut. Unde ipsum quasi asperiores rem debitis modi velit deserunt
        consequuntur perferendis, ex ipsam qui laboriosam. Totam facilis dolore
        cupiditate ab reprehenderit voluptatibus illo quasi, mollitia ut
        distinctio qui eius, voluptatum dolor? Culpa explicabo ea eum dolorem
        exercitationem, laborum qui aspernatur cum consequatur quos mollitia
        omnis quas iste voluptate itaque, obcaecati perferendis labore maiores
        ipsa commodi! Unde, ab? Non illum fugit quas labore incidunt hic magni,
        officiis nisi delectus laborum ullam libero iste amet aspernatur
        commodi, fugiat id voluptate harum aliquam tempora laudantium cum
        deserunt! Accusantium molestias assumenda perferendis. Sint iste dolorem
        aliquam quis iusto, iure distinctio nesciunt magni unde eligendi
        deserunt voluptatibus aliquid necessitatibus facere porro recusandae
        delectus enim rerum excepturi cupiditate vero. Perferendis eum aliquid,
        architecto odit aut nulla enim, veniam temporibus unde officia amet quod
        pariatur laborum voluptatibus? Odio magni magnam veritatis in ut quae
        commodi, nemo, vitae exercitationem quod molestiae et rerum quis
        inventore adipisci accusamus aut deleniti deserunt, quisquam aperiam
        mollitia distinctio. Pariatur ullam minus minima numquam tempore?
        Molestias autem saepe reprehenderit amet aliquam nemo tempora
        consectetur itaque. Magnam suscipit aliquam dolorum consectetur
        repudiandae quo atque temporibus, doloribus, consequatur earum illum
        debitis necessitatibus blanditiis similique ratione culpa quaerat fuga
        id sint amet inventore quisquam fugiat maiores! Ab repudiandae,
        doloribus exercitationem asperiores corrupti eveniet cum obcaecati vero
        alias necessitatibus laudantium placeat ex quae natus voluptate nobis
        est, facilis reprehenderit esse facere incidunt illum magni. Explicabo
        natus itaque veritatis maxime fugit quos adipisci, suscipit, aut quam,
        qui debitis. Molestias exercitationem id dicta, ipsa porro, autem ipsam,
        fugit ut odio veritatis quas sapiente sequi consectetur accusantium
        minima? Molestias itaque laboriosam soluta reiciendis placeat suscipit
        iure animi, sint, non perferendis rem possimus neque quam eos tenetur
        eum ipsum velit. Amet quas cupiditate animi maxime. Expedita, quia
        tempore veritatis quasi obcaecati libero fugiat dolore soluta quam
        sapiente laborum delectus laboriosam at quisquam! Vero tenetur nihil
        blanditiis veniam incidunt fuga aut recusandae, rem ipsum, cupiditate
        est. Incidunt quia odit culpa, consectetur aut velit minus voluptates,
        cumque temporibus eos, vel impedit tempore quo ipsa eius officiis saepe
        commodi nisi quos tenetur! Saepe voluptate repudiandae itaque veniam
        sunt aliquam vel hic consequuntur, expedita impedit quis ducimus nulla
        recusandae quaerat quod facere assumenda! Sequi cupiditate sed culpa
        provident, optio, ad excepturi quam nesciunt quibusdam natus magnam
        doloremque dolorum modi tempora dolor fugit expedita inventore nam
        eveniet dignissimos explicabo neque. Minus iste assumenda quisquam
        provident est, et commodi error at id ab iure dolore. Non tempore
        deleniti et eos quam laboriosam nostrum vel, enim doloribus aliquid!
        Deleniti nostrum quas nisi cum corrupti quidem voluptates quaerat
        officiis sint sunt a, esse ab nemo nam sequi assumenda nesciunt
        deserunt? Voluptas, sed a? Eum rem quam minus possimus animi cumque,
        atque repellat nostrum, neque voluptatem sit dicta iure, inventore eos
        voluptatibus aperiam ullam architecto iusto eius nam suscipit nesciunt
        repellendus. Ipsam repellendus aliquid nesciunt ab minus corrupti
        similique odit? Quis praesentium reprehenderit non est officiis, vitae
        excepturi dolorem saepe et a explicabo quaerat quam velit culpa modi
        autem laudantium tempore dignissimos qui similique incidunt ut nostrum
        beatae! Velit neque enim officia ipsum praesentium sapiente hic rerum
        tempora consequuntur repellendus sed eos alias suscipit explicabo, magni
        error id inventore. Ducimus natus facilis iusto quaerat voluptatem nobis
        at dolore, id soluta dolores ratione earum itaque labore vel. Quos
        consequatur id maiores? Earum, accusantium minus consectetur laborum
        quam repellendus qui exercitationem. Placeat odit, commodi totam eius
        natus sunt iusto amet itaque obcaecati officia suscipit dolorum dolore.
        Nam unde sapiente nesciunt eveniet ipsum veniam sint quod facilis saepe,
        voluptatum commodi magnam minus officia qui neque totam rem dolorum.
        Nobis ipsam itaque illo dolores, reprehenderit totam ea sapiente, beatae
        reiciendis quo, molestias ipsum. A omnis consequatur perferendis id
        nesciunt minus dicta eum qui hic aliquam? Corrupti, harum distinctio
        pariatur corporis facilis eligendi odio eveniet quisquam? In esse
        numquam blanditiis culpa reprehenderit. Impedit quo magnam repudiandae
        consequatur, blanditiis itaque ducimus placeat ut corrupti optio
        suscipit tempore eveniet repellat necessitatibus velit nobis? Qui id
        facere excepturi praesentium. Accusantium nulla magni, iusto ea,
        repudiandae facilis doloribus sunt deserunt autem aliquid dolorum quidem
        eaque sequi nostrum enim! Pariatur dolorem obcaecati ut commodi nisi
        fugit incidunt, reiciendis accusantium id doloribus alias, vero iusto
        sequi! Fugiat, ea et tenetur, asperiores, provident quisquam dolor
        exercitationem minus temporibus doloribus possimus itaque. Cumque ut
        pariatur autem modi accusamus sed laudantium aliquid veniam quod ipsa
        incidunt, magni aspernatur sint eius ipsum maiores perferendis, placeat
        illo. Blanditiis, quibusdam ipsum. Rem atque eligendi esse veritatis
        quis quaerat eos maxime, blanditiis quas. Obcaecati inventore alias sed
        repellendus voluptatem laborum neque impedit eligendi, deserunt error
        quasi, minus sit eum. Repudiandae tempora hic a omnis veniam temporibus
        voluptatibus ex autem, eos, praesentium reprehenderit suscipit nobis
        optio sapiente sequi corrupti ducimus nemo eum harum ut! Atque modi
        obcaecati excepturi dolorem eaque blanditiis, ullam quam dolores
        sapiente vitae odit, debitis error cupiditate ad esse accusantium
        quaerat adipisci molestiae, nam non repellendus natus nostrum iste.
        Nesciunt, velit eaque? Molestias veniam maiores reiciendis, consequuntur
        ab dicta pariatur fugit non totam, minima perferendis nisi sunt omnis.
        Explicabo ea quae, possimus delectus ut dolor modi tempore adipisci,
        nostrum obcaecati vero aliquid soluta laudantium accusamus quidem unde
        reprehenderit cum eveniet architecto alias! Ducimus, veritatis illum!
      </p>
    </>
  );
}
