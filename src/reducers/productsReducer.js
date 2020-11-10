const initialState = {
    "graphic-cards": {
        id: "graphic-cards",
        category: "Karty Graficzne",
        items: [
            {
                id: "gtx-1660",
                name: "GeForce GTX 1660 6GB",
                price: "1099.00",
                img: "gtx-1660.png",
                description: "Wykorzystaj rewolucyjną architekturę NVIDIA Turing, aby od tej pory napędzała Twoją rozgrywkę dzięki układowi GTX 1660, wspieranemu przez 6GB pamięci GDDR5 o przepustowości 192 GB/s.",
                specification: [
                    {name: "Układ graficzny", value: "GeForce GTX 1660"},
                    {name: "Rodzaj złącza", value: "PCI-E x16 3.0"},
                    {name: "Pamięć", value: "6 GB"},
                    {name: "Rdzenie CUDA", value: "1460"},
                    {name: "Złącze zasilania", value: "1x 8-pin"},
                    {name: "Rekomendowana moc zasilacza", value: "500W"},
                    {name: "Obsługa Ray tracingu", value: "Nie"},
                    {name: "Rodzaje wyjść", value: "HDMI - 1 szt, DisplayPort - 3 szt"},
                ]
            },
            {
                id: "rtx-2060",
                name: "GeForce RTX 2060 6GB",
                price: "1439.00",
                img: "rtx-2060.png",
                description: "Obłędna płynność i dynamika obrazu, oszałamiające efekty świetlne niczym na kinowym ekranie, najbardziej zaawansowana architektura GPU. To wszystko przynosi z sobą karta graficzna RTX 2060. Pozwól jej porwać Cię do świata gamingu, jakiego niedane Ci było doświadczyć nigdy wcześniej.",
                specification: [
                    {name: "Układ graficzny", value: "GeForce RTX 2060"},
                    {name: "Rodzaj złącza", value: "PCI-E x16 3.0"},
                    {name: "Pamięć", value: "6 GB"},
                    {name: "Rdzenie CUDA", value: "1920"},
                    {name: "Złącze zasilania", value: "1x 8-pin"},
                    {name: "Rekomendowana moc zasilacza", value: "500W"},
                    {name: "Obsługa Ray tracingu", value: "Tak"},
                    {name: "Rodzaje wyjść", value: "HDMI - 1 szt, DisplayPort - 3 szt"},
                ]
            },
            {
                id: "rtx-2070",
                name: "GeForce RTX 2070 8GB",
                price: "2379.00",
                img: "rtx-2070.png",
                description: "Naciesz swoje oczy niesamowicie płynną rozgrywką i grafiką o fotorealistycznej jakości. GeForce RTX 2070 została wykonana w architekturze NVIDIA Turing, stanowiąc nowatorskie rozwiązanie na rynku kart graficznych. Wspomagana przez 8GB pamięci GDDR6 oraz mocny system chłodzenia karta oddaje w Twoje ręce zupełnie nowe możliwości zwyciężania w grach.",
                specification: [
                    {name: "Układ graficzny", value: "GeForce RTX 2070"},
                    {name: "Rodzaj złącza", value: "PCI-E x16 3.0"},
                    {name: "Pamięć", value: "8 GB"},
                    {name: "Rdzenie CUDA", value: "2560"},
                    {name: "Złącze zasilania", value: "1x 8-pin + 1x 6-pin"},
                    {name: "Rekomendowana moc zasilacza", value: "650W"},
                    {name: "Obsługa Ray tracingu", value: "Tak"},
                    {name: "Rodzaje wyjść", value: "HDMI - 1 szt, DisplayPort - 3 szt"},
                ]
            },
            {
                id: "rtx-2080",
                name: "GeForce RTX 2080 8GB",
                price: "3799.00",
                img: "rtx-2070.png",
                description: "Doświadcz zacierania się granicy między rzeczywistością a światem wirtualnym. Z karta graficzną GeForce RTX 2080 na własne oczy zobaczysz fotorealistyczną grafikę za sprawą technologii śledzenia promieni w czasie rzeczywistym. Wszystko to dzięki nowej architekturze GPU NVIDIA Turing, wspieranej przez 8GB pamięc GDDR6.",
                specification: [
                    {name: "Układ graficzny", value: "GeForce RTX 2080"},
                    {name: "Rodzaj złącza", value: "PCI-E x16 3.0"},
                    {name: "Pamięć", value: "8 GB"},
                    {name: "Rdzenie CUDA", value: "3072"},
                    {name: "Złącze zasilania", value: "1x 8-pin + 1x 6-pin"},
                    {name: "Rekomendowana moc zasilacza", value: "650W"},
                    {name: "Obsługa Ray tracingu", value: "Tak"},
                    {name: "Rodzaje wyjść", value: "HDMI - 1 szt, DisplayPort - 3 szt, USB-C - 1 szt"},
                ]
            },
            {
                id: "rx-580",
                name: "Radeon RX 580 8GB",
                price: "999.00",
                img: "rx-580.png",
                description: "Karta graficzna Radeon RX 580 to urządzenie gwarantujące świetną wydajność w przystępnej cenie. Urządzenie to jest przeznaczone przede wszystkim dla tych użytkowników, którzy potrzebują potężnej karty graficznej, która z łatwością sprosta wymaganiom najnowszych gier.",
                specification: [
                    {name: "Układ graficzny", value: "Radeon RX 580"},
                    {name: "Rodzaj złącza", value: "PCI-E x16 3.0"},
                    {name: "Pamięć", value: "8 GB"},
                    {name: "Procesory Strumieniowe", value: "2304"},
                    {name: "Złącze zasilania", value: "1x 8-pin"},
                    {name: "Rekomendowana moc zasilacza", value: "500W"},
                    {name: "Obsługa Ray tracingu", value: "Nie"},
                    {name: "Rodzaje wyjść", value: "HDMI - 2 szt, DVI - 1 szt, DisplayPort - 2 szt"},
                ]
            },
            {
                id: "rx-5600-xt",
                name: "Radeon RX 5600 XT 6GB",
                price: "1369.00",
                img: "rx-5600-xt.png",
                description: "Karta graficzna Radeon RX 5600 XT napędzana architekturą AMD RDNA, zapewnia wyjątkową wydajność energetyczną i wysoką wydajność w grach. Została zaprojektowana od podstaw z myślą o płynnym gamingu w rozdzielczości 1440p, a wspomaga ją 6GB szybkiej pamięci GDDR6 oraz najnowszy interfejs PCI-E 4.0. Naginaj reguły, aby doświadczyć zupełnie nowej jakości w grach i wycisnąć maksimum ze swojej konfiguracji.",
                specification: [
                    {name: "Układ graficzny", value: "Radeon RX 5600 XT"},
                    {name: "Rodzaj złącza", value: "PCI-E x16 4.0"},
                    {name: "Pamięć", value: "6 GB"},
                    {name: "Procesory Strumieniowe", value: "2304"},
                    {name: "Złącze zasilania", value: "1x 8-pin + 1x 6-pin"},
                    {name: "Rekomendowana moc zasilacza", value: "450W"},
                    {name: "Obsługa Ray tracingu", value: "Nie"},
                    {name: "Rodzaje wyjść", value: "HDMI - 1 szt, DisplayPort - 3 szt"},
                ]
            },
            {
                id: "rx-5700-xt",
                name: "Radeon RX 5700 XT 8GB",
                price: "1999.00",
                img: "rx-5700-xt.png",
                description: "Zapewnij sobie maksymalne wrażenia z gier na PC ogrywanych w rozdzielczościach 4K Ultra HD. Wyposażona w najwyższej jakości komponenty karta graficzna Radeon RX 5700 XT zapewnia oszałamiającą wydajność, które zadowoli każdego fana elektronicznej rozrywki.",
                specification: [
                    {name: "Układ graficzny", value: "Radeon RX 580"},
                    {name: "Rodzaj złącza", value: "PCI-E x16 4.0"},
                    {name: "Pamięć", value: "8 GB"},
                    {name: "Procesory Strumieniowe", value: "2560"},
                    {name: "Złącze zasilania", value: "1x 8-pin + 1x 6-pin"},
                    {name: "Rekomendowana moc zasilacza", value: "600W"},
                    {name: "Obsługa Ray tracingu", value: "Nie"},
                    {name: "Rodzaje wyjść", value: "HDMI - 1 szt, DisplayPort - 3 szt"},
            ]
        },

            ]
    },
    "processors": {
        id: "processors",
        category: "Procesory",
        items: [
            {
                id: "i5-10400",
                name: "Intel Core i5-10400",
                price: "849.00",
                img: "i5-10400.png",
                description: "Poznaj moc do dziesiątej potęgi. Nowy procesor Intel Core i5-10400 z rodziny Comet Lake zapewnia wysoką wydajność, która przekłada się na wzrost produktywności i fantastyczną rozrywkę. Intel Core i5 10-generacji oferuje m.in. częstotliwość dochodzącą do 4.3 GHz w trybie turbo, 6 rdzeni, 12 wątków, a także inteligentną optymalizację systemu. Odkryj nowe ultramożliwości z procesorem Intel Core i5-10400.",
                specification: [
                    {name: "Rodzina procesorów", value: "Intel Core i5"},
                    {name: "Seria procesora", value: "i5-10400"},
                    {name: "Gniazdo procesora", value: "Socket 1200"},
                    {name: "Liczba rdzeni fizycznych", value: "6 rdzeni"},
                    {name: "Liczba wątków", value: "12 wątków"},
                    {name: "Taktowanie rdzenia", value: "2.9 GHz (4.3 GHz w trybie turbo)"},
                    {name: "Model układu graficznego", value: "Intel UHD Graphics 630"},
                    {name: "Proces litograficzny", value: "14 nm"},
                    {name: "Pobór mocy (TDP)", value: "65 W"},
                ]
            },
            {
                id: "i7-10700",
                name: "Intel Core i7-10700",
                price: "1599.00",
                img: "i7-10700.png",
                description: "Poznaj moc do dziesiątej potęgi. Nowy procesor Intel Core i7-10700 z rodziny Comet Lake zapewnia wysoką wydajność, która przekłada się na wzrost produktywności i fantastyczną rozrywkę. Intel Core i7 10-generacji oferuje m.in. częstotliwość dochodzącą do 4.8 GHz w trybie turbo, 8 rdzeni, 16 wątków, a także inteligentną optymalizację systemu. Wbudowane inteligentne funkcje wydajności uczą się i przystosowują do nawyków użytkownika oraz dynamicznie kierują moc, tam gdzie jest najbardziej potrzebna. Odkryj nowe ultramożliwości z procesorem Intel Core i7-10700.",
                specification: [
                    {name: "Rodzina procesorów", value: "Intel Core i7"},
                    {name: "Seria procesora", value: "i7-10700"},
                    {name: "Gniazdo procesora", value: "Socket 1200"},
                    {name: "Liczba rdzeni fizycznych", value: "8 rdzeni"},
                    {name: "Liczba wątków", value: "16 wątków"},
                    {name: "Taktowanie rdzenia", value: "2.9 GHz (4.8 GHz w trybie turbo)"},
                    {name: "Model układu graficznego", value: "Intel UHD Graphics 630"},
                    {name: "Proces litograficzny", value: "14 nm"},
                    {name: "Pobór mocy (TDP)", value: "65 W"},
                ]
            },
            {
                id: "ryzen-5-3600",
                name: "AMD Ryzen 5 3600",
                price: "989.00",
                img: "ryzen-5-3600.png",
                description: "Procesor AMD Ryzen 5 3600 korzysta z nowatorskiej architektury Zen 2. To dzięki niej CPU osiąga znakomite wyniki w grach i podczas obsługi profesjonalnych aplikacji, utrzymując stale wysoką wydajność. Jednostka posiada 6 rdzeni i 12 wątków, a pamięć cache liczy 35 MB. Rdzenie taktowane są zegarami bazowymi 3,60 GHz, które wzrasta w trybie Turbo do 4,20 GHz i dostarcza jeszcze więcej mocy do pracy oraz rozrywki.",
                specification: [
                    {name: "Rodzina procesorów", value: "AMD Ryzen"},
                    {name: "Seria procesora", value: "Ryzen 5 3600"},
                    {name: "Gniazdo procesora", value: "Socket AM4"},
                    {name: "Liczba rdzeni fizycznych", value: "6 rdzeni"},
                    {name: "Liczba wątków", value: "12 wątków"},
                    {name: "Taktowanie rdzenia", value: "3.6 GHz (4.2 GHz w trybie turbo)"},
                    {name: "Model układu graficznego", value: "Brak"},
                    {name: "Proces litograficzny", value: "7 nm"},
                    {name: "Pobór mocy (TDP)", value: "65 W"},
                ]
            },
            {
                id: "ryzen-7-3700-x",
                name: "AMD Ryzen 7 3700X",
                price: "1449.00",
                img: "ryzen-7-3700-x.png",
                description: "Czerpiąc z nowatorskiej architektury Zen 2, procesor AMD Ryzen 7 3700X dysponuje olbrzymią mocą obliczeniową. Pozwól działać potędze 8 rdzeni i 16 wątków wspartych przez 36 MB pamięci cache. Bazowe taktowanie rdzeni liczy 3,60 GHz, a w trybie Turbo przyspiesza do 4,40 GHz, obsługując bezbłędnie każdą grę, każdy program i każdy proces. Potęgę jednostki Ryzen 7 3700X zwiększysz jeszcze bardziej, korzystając z odblokowanego mnożnika.",
                specification: [
                    {name: "Rodzina procesorów", value: "AMD Ryzen"},
                    {name: "Seria procesora", value: "Ryzen 7 3700X"},
                    {name: "Gniazdo procesora", value: "Socket AM4"},
                    {name: "Liczba rdzeni fizycznych", value: "8 rdzeni"},
                    {name: "Liczba wątków", value: "16 wątków"},
                    {name: "Taktowanie rdzenia", value: "3.6 GHz (4.4 GHz w trybie turbo)"},
                    {name: "Model układu graficznego", value: "Brak"},
                    {name: "Proces litograficzny", value: "7 nm"},
                    {name: "Pobór mocy (TDP)", value: "65 W"},
                ]
            },
        ]
    },
    "motherboards":
        {
            id: "motherboards",
            category: "Płyty główne",
            items: [
                {
                    id: "z490-gaming-plus",
                    name: "Z490 GAMING PLUS",
                    price: "719.00",
                    img: "z490-gaming-plus.png",
                    description: "Graj ze stylem i zwyciężaj dzięki płycie głównej Z490 GAMING PLUS. To unikalna konstrukcja wyposażona w socket LGA 1200, pozwalający Ci wykorzystać moc nowych procesorów Intel Core 10. generacji. W połączeniu z pamięciami RAM DDR4 o taktowaniu nawet 4800 MHz (OC) oraz szybkimi dyskami SSD NVMe, zyskasz wydajność jakiej potrzebujesz. A stylowy design uzupełniony o podświetlenie RGB Mystic Light doskonale odnajdzie się w każdej obudowie.",
                    specification: [
                        {name: "Gniazdo procesora", value: "Socket 1200"},
                        {name: "Chipset", value: "Intel Z490"},
                        {name: "Typ obsługiwanej pamięci", value: "DDR4-2133 MHz - DDR4-4800 MHz"},
                        {name: "Liczba banków pamięci", value: "4 x DIMM"},
                        {name: "Maksymalna wielkość pamięci RAM", value: "128 GB"},
                        {name: "Format", value: "ATX"},
                    ]
                },
                {
                    id: "b460-hd3",
                    name: "B460 HD3",
                    price: "449.00",
                    img: "b460-hd3.png",
                    description: "Wykorzystaj nowe procesory Intel Core 10. generacji i pamięci RAM DDR4 2933 MHz w grach i rozmaitych zastosowaniach. Wyposażona w socket 1200 płyta główna B460 HD3 pozwala skorzystać z wbudowanych w CPU układów graficznych, dzięki złączom VGA, DVI-D oraz HDMI. A jeżeli wolisz klasyczne GPU, możesz podłączyć nawet dwie karty jednocześnie, dzięki wsparciu dla AMD CrossFire.",
                    specification: [
                        {name: "Gniazdo procesora", value: "Socket 1200"},
                        {name: "Chipset", value: "Intel B460"},
                        {name: "Typ obsługiwanej pamięci", value: "DDR4-2133 MHz - DDR4-2933 MHz"},
                        {name: "Liczba banków pamięci", value: "4 x DIMM"},
                        {name: "Maksymalna wielkość pamięci RAM", value: "128 GB"},
                        {name: "Format", value: "ATX"},
                    ]
                },
                {
                    id: "b450-tomahawk",
                    name: "B450 TOMAHAWK",
                    price: "459.00",
                    img: "b450-tomahawk.png",
                    description: "Wykorzystaj nowe procesory Intel Core 10. generacji i pamięci RAM DDR4 2933 MHz w grach i rozmaitych zastosowaniach. Wyposażona w socket 1200 płyta główna B460 HD3 pozwala skorzystać z wbudowanych w CPU układów graficznych, dzięki złączom VGA, DVI-D oraz HDMI. A jeżeli wolisz klasyczne GPU, możesz podłączyć nawet dwie karty jednocześnie, dzięki wsparciu dla AMD CrossFire.",
                    specification: [
                        {name: "Gniazdo procesora", value: "Socket AM4"},
                        {name: "Chipset", value: "AMD B450"},
                        {name: "Typ obsługiwanej pamięci", value: "DDR4-2133 MHz - DDR4-4133 MHz"},
                        {name: "Liczba banków pamięci", value: "4 x DIMM"},
                        {name: "Maksymalna wielkość pamięci RAM", value: "64 GB"},
                        {name: "Format", value: "ATX"},
                    ]
                },
                {
                    id: "b450-gaming-plus-max",
                    name: "B450 GAMING PLUS MAX",
                    price: "399.00",
                    img: "b450-gaming-plus-max.png",
                    description: "Wykorzystaj wydajność procesorów AMD Ryzen 3. lub 2. generacji oraz modułów RAM DDR4 o taktowaniu nawet 4133 MHz (w trybie OC) z płytą główną B450 GAMING PLUS MAX. Podłącz do niej najwydajniejsze komponenty, skorzystaj z wbudowanych w CPU układów graficznych lub stwórz konfigurację wielu kart graficznych AMD CrossFire. Wybór należy do Ciebie.",
                    specification: [
                        {name: "Gniazdo procesora", value: "Socket AM4"},
                        {name: "Chipset", value: "AMD B450"},
                        {name: "Typ obsługiwanej pamięci", value: "DDR4-2133 MHz - DDR4-4133 MHz"},
                        {name: "Liczba banków pamięci", value: "4 x DIMM"},
                        {name: "Maksymalna wielkość pamięci RAM", value: "64 GB"},
                        {name: "Format", value: "ATX"},
                    ]
                },
            ]
        },
    "memories":
        {
            id: "memories",
            category: "Pamięci RAM",
            items: [
                {
                    id: "8gb-2x4gb-3000mhz",
                    name: "8GB (2x4GB) 3000MHz",
                    price: "179.00",
                    img: "ram.png",
                    description: "Moduł RAM jest zbudowany z ośmiu warstw PCB i wysoko ekranowanych układów pamięci. Skuteczny rozpraszacz ciepła zapewnia skuteczne chłodzenie, aby poprawić potencjał naszego komputera. Wykonana z czystego aluminium szybciej odprowadza ciepło, zapewniając prawidłowo pracę.",
                    specification: [
                        {name: "Rodzaj pamięci", value: "DDR4"},
                        {name: "Pojemność całkowita", value: "8GB"},
                        {name: "Liczba modułów", value: "2"},
                        {name: "Taktowanie", value: "3000 MHz"},
                        {name: "Opóźnienia", value: "CL 16"},
                        {name: "Napięcie", value: "1,35V"},
                    ]
                },
                {
                    id: "16gb-2x8gb-3200mhz",
                    name: "16GB (2x8GB) 3200MHz",
                    price: "329.00",
                    img: "ram.png",
                    description: "Moduł RAM jest zbudowany z ośmiu warstw PCB i wysoko ekranowanych układów pamięci. Skuteczny rozpraszacz ciepła zapewnia skuteczne chłodzenie, aby poprawić potencjał naszego komputera. Wykonana z czystego aluminium szybciej odprowadza ciepło, zapewniając prawidłowo pracę.",
                    specification: [
                        {name: "Rodzaj pamięci", value: "DDR4"},
                        {name: "Pojemność całkowita", value: "16GB"},
                        {name: "Liczba modułów", value: "2"},
                        {name: "Taktowanie", value: "3200 MHz"},
                        {name: "Opóźnienia", value: "CL 16"},
                        {name: "Napięcie", value: "1,35V"},
                    ]
                },
                {
                    id: "32gb-2x16gb-3000mhz",
                    name: "32GB (2x16GB) 3000MHz",
                    price: "549.00",
                    img: "ram.png",
                    description: "Tam gdzie liczy się najwyższa wydajność, tam do gry wkracza pamięć RAM. Unikatowe radiatory, wykonane w całości z aluminium, znakomicie rozpraszają ciepło. To zapewnia bezkompromisową wydajność i maksymalne osiągi. Kiedy sytuacja no polu bitwy się zaognia Twoja pamięć RAM zachowuje zimną krew.",
                    specification: [
                        {name: "Rodzaj pamięci", value: "DDR4"},
                        {name: "Pojemność całkowita", value: "32GB"},
                        {name: "Liczba modułów", value: "2"},
                        {name: "Taktowanie", value: "3000 MHz"},
                        {name: "Opóźnienia", value: "CL 16"},
                        {name: "Napięcie", value: "1,35V"},
                    ]
                },
            ]
        }
    }

const productsReducer = (state = initialState) => {
    return state;
}

export default productsReducer