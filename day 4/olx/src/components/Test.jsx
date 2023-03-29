export default function Test() {
  const arr = [
    {
      Image:
        "https://apollo-singapore.akamaized.net/v1/files/j9yfnrcduluc-ID/image;s=300x600;q=60",
      price: 200000,
      tahun: 1999,
      nama: "kue",
    },
    {
      Image:
        "https://apollo-singapore.akamaized.net/v1/files/2akfq83yheel3-ID/image;s=300x600;q=60",
      price: 200000,
      tahun: 1999,
      nama: "kue",
    },
    {
      Image:
        "https://apollo-singapore.akamaized.net/v1/files/9doqowhkj3zi1-ID/image;s=300x600;q=60",
      price: 200000,
      tahun: 1999,
      nama: "kue",
    },
    {
      Image:
        "https://apollo-singapore.akamaized.net/v1/files/4et56j3yyige3-ID/image;s=300x600;q=60",
      price: 200000,
      tahun: 1999,
      nama: "kue",
    },
    {
      Image:
        "https://apollo-singapore.akamaized.net/v1/files/zugdeneqxerh1-ID/image;s=300x600;q=60",
      price: 200000,
      tahun: 1999,
      nama: "kue",
    },
    {
      Image:
        "https://apollo-singapore.akamaized.net/v1/files/zugdeneqxerh1-ID/image;s=300x600;q=60",
      price: 200000,
      tahun: 1999,
      nama: "kue",
    },
    {
      Image:
        "https://apollo-singapore.akamaized.net/v1/files/x3wu79hz2gn11-ID/image;s=300x600;q=60",
      price: 200000,
      tahun: 1999,
      nama: "kue",
    },
    {
      Image:
        "https://apollo-singapore.akamaized.net/v1/files/pllkynnpkezn1-ID/image;s=300x600;q=60",
      price: 200000,
      tahun: 1999,
      nama: "kue",
    },
    {
      Image:
        "https://apollo-singapore.akamaized.net/v1/files/zgdwjqh6m61t2-ID/image;s=300x600;q=60",
      price: 200000,
      tahun: 1999,
      nama: "kue",
    },
    {
      Image:
        "https://apollo-singapore.akamaized.net/v1/files/9jz641g9kfp22-ID/image;s=300x600;q=60",
      price: 200000,
      tahun: 1999,
      nama: "kue",
    },
  ];
  return (
    <center>
      <div className="contentparent">
        <div className="judul">
          <div>
            <p className="rekomen">Rekomendasi baru</p>
          </div>
        </div>
      </div>

      <div className="penampung">
        <div className="grid">
          {arr.map((val) => (
            <Kue {...val} />
          ))}
        </div>
      </div>
      <div className="closing">
        <div className="kotak1">
          <p> Muat lainnya</p>
        </div>
      </div>
    </center>
  );
}
function Kue(props) {
  return (
    <div className="bungkus">
      <div className="productimage">
        <img src={props.Image} alt="kuk" />
      </div>

      <div className="bungkus2">
        <div className="price">
          Rp{parseInt(props.price).toLocaleString("id-ID")}
        </div>

        <div className="tahun">{props.tahun}</div>
        <div className="nama">{props.nama}</div>
      </div>
    </div>
  );
}
