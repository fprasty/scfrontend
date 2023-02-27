import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontOffice from "./components/FrontOffice";
import MeetingRoom from "./components/MeetingRoom";
import Maruti from "./components/Maruti";
import RamaSinta from "./components/RamaSinta";
import Kiskenda from "./components/Kiskenda";
import Maliawan from "./components/Maliawan";
import OCafe from "./components/OCafe";
import DOffice from "./components/DropOffOffice";
import Villa from "./components/Villa";
import Karaoke from "./components/Karouke";
import TahuOmShin from "./components/TahuOShin";
import PasarBandungan from "./components/PasarBandungan";
import FrontOfficePages from "./secondpages/FrontOfficeSecondPages";
import MeetingRoomPages from "./secondpages/MeetingRoomSecondPages";
import RamaSintaPages from "./secondpages/RamaSintaSecondPages";
import MarutiPages from "./secondpages/MarutiSecondPages";
import KiskendaPages from "./secondpages/KiskendaSecondPages";
import MaliawanPages from "./secondpages/MaliawanSecondPages";
import OCafePages from "./secondpages/OCafeSecondPages";
import DOPages from "./secondpages/DropOfficeSecondPages";
import VillaPages from "./secondpages/VillaSecondPages";
import KaraokePages from "./secondpages/KaraokeSecondPages";
import PBPages from "./secondpages/PasarBandunganSecondPages";
import TahuOmShinPages from "./secondpages/TahuOmShinPages";
import AdminLogin from "./adminpages/AdminLogin";
import AdminPanel from "./adminpages/AdminPanel";
import HistoryPanel from "./adminpages/History";
import SalesPages from "./salespages/SalesPages";
import AdminSales from "./salesadmin/SalesAdminDashboard";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/panel" element={<AdminPanel />} />
        <Route path="/admin/panel/history" element={<HistoryPanel />} />
        <Route path="/frontoffice" element={<FrontOffice />} />
        <Route path="/frontoffice/page" element={<FrontOfficePages />} />
        <Route path="/meetingroom" element={<MeetingRoom />} />
        <Route path="/meetingroom/page" element={<MeetingRoomPages />} />
        <Route path="/maruti" element={<Maruti />} />
        <Route path="/maruti/page" element={<MarutiPages />} />
        <Route path="/ramasinta" element={<RamaSinta />} />
        <Route path="/ramasinta/page" element={<RamaSintaPages />} />
        <Route path="/kiskenda" element={<Kiskenda />} />
        <Route path="/kiskenda/page" element={<KiskendaPages />} />
        <Route path="/maliawan" element={<Maliawan />} />
        <Route path="/maliawan/page" element={<MaliawanPages />} />
        <Route path="/ocafe" element={<OCafe />} />
        <Route path="/ocafe/page" element={<OCafePages />} />
        <Route path="/dooffice" element={<DOffice />} />
        <Route path="/dooffice/page" element={<DOPages />} />
        <Route path="/villa" element={<Villa />} />
        <Route path="/villa/page" element={<VillaPages />} />
        <Route path="/karaoke" element={<Karaoke />} />
        <Route path="/karaoke/page" element={<KaraokePages />} />
        <Route path="/pasarbandungan" element={<PasarBandungan />} />
        <Route path="/pasarbandungan/page" element={<PBPages />} />
        <Route path="/tahuomshin" element={<TahuOmShin />} />
        <Route path="/tahuomshin/page" element={<TahuOmShinPages />} />
        <Route path="/sales/:username" element={<SalesPages />} />
        <Route path="/admin/sales/panel" element={<AdminSales />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
