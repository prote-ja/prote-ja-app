import { FunctionComponent, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "react-toastify";
import { updateUser } from "@/db/users";
import { Button } from "@/components/ui/button";
import NotificationPromptDialog from "@/components/NotificationPromptDialog";
import NewCarousel from "./NewCarousel";
import AdvancedFunc from "./AdvencedFun";
import Greeting from "./Greetings";
import AlertComponent from "@/components/AlertComponent";
import { AlertCircle, AlertTriangle, Footprints, Bot } from "lucide-react";
import BatteryChart from "./BatteryChart";
import LocalChart from "./LocalChart";

interface DashboardProps {}

const Dashboard: FunctionComponent<DashboardProps> = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const localData = [
    { name: "Casa", users: 5 },
    { name: "Praia", users: 2 },
    { name: "Irmã", users: 4 },
    { name: "Pilates", users: 2 },
  ];

  useEffect(() => {
    const checkFirstLogin = async () => {
      if (!user) {
        return;
      }
      if (user.first_login) {
        try {
          const response = await updateUser(user.id, { first_login: false });

          if (response.error) {
            throw new Error(response.error.message);
          }

          console.log("return from edit", response.data[0]);

          console.log("user before set", user);

          setUser(response.data[0]);

          navigate("/first-login", {
            replace: true,
          });
        } catch (error) {
          console.error(error);

          toast.error("Erro ao atualizar status de primeiro login");
        }
      }
    };

    checkFirstLogin();
  }, [user]);

  return (
    <>
      <NotificationPromptDialog />
      <div className="mb-16 md:mb-0 ">
        <div className="mb-4">
          <Greeting name={user?.name} />
        </div>
        <div className="mb-6">
          <AlertComponent
            variant="warning"
            iconTitle={AlertTriangle}
            title="Dona Maria caiu"
            iconButton={AlertCircle}
            className="h-4 md:h-4 md:p-5 p-4 cursor-pointer"
            onClick={() => {
              navigate("/wearables/view/77:8f:34:64:ec:19");
            }}
          />
        </div>
        <NewCarousel>
          <div className="text-center flex flex-col h-full justify-between">
            {" "}
            <h3 className="text-xl font-semibold">Nível da Bateria</h3>
            <div>
              <BatteryChart batteryLevel={45} />
            </div>
            <p className="text-gray-600">Pulseira mais Descarregada</p>
          </div>

          <div className="text-center flex flex-col h-full justify-between ">
            <h3 className="text-base md:text-xl font-semibold">
              Usuários por Totens
            </h3>
            <div className="w-full">
              <LocalChart data={localData} />
            </div>
          </div>

          <div className="text-center flex flex-col h-full justify-between">
            {" "}
            <h3 className="text-xl font-semibold">Dona Maria</h3>
            <div className="flex justify-center items-center space-x-2">
              <Footprints className="w-8 h-8 text-black" />
              <p className="text-gray-600">Andou 7890 passos</p>
            </div>
            <Button
              variant={"default"}
              title="Ver mais"
              className="h-10 w-full"
            >
              Ver mais
            </Button>
          </div>
          <div className="text-center flex flex-col h-full justify-between">
            <div className="flex justify-center items-baseline space-x-1">
              {/* Ajuste o ícone Bot com align-self: center para alinhá-lo verticalmente */}
              <Bot className="w-8 h-8 text-[#FF1654] self-center" />
              <h3 className="text-xl font-semibold">Jul</h3>
              <h2 className="text-2xl font-bold">IA</h2>
            </div>
            <p className="text-gray-600 ">
              "Dona Maria apresenta nível de estresse elevado, entenda como isso
              pode afetá-la"
            </p>
            <p className="text-gray-600">Recomendações por IA</p>
          </div>
        </NewCarousel>

        <div className="flex ">
          <AdvancedFunc>
            <div className="flex items-center space-x-4">
              <div
                className="w-12 h-12 rounded-full bg-cover bg-center aspect-square"
                style={{
                  backgroundImage:
                    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdT8o_-FpIfAOKtBG1XvIIM6ZYl3u9fhd6UA&s')",
                }}
              ></div>
              <div>
                <h3 className="font-semibold">Padrão de movimento</h3>
                <p className="text-gray-300">
                  Identifique problemas iminentes com o usuário
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div
                className="w-12 h-12 rounded-full bg-cover bg-center aspect-square"
                style={{
                  backgroundImage:
                    "url('data:image/jpeg;base64,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')",
                }}
              ></div>
              <div>
                <h3 className="font-semibold">Variação Cardíaca</h3>
                <p className="text-gray-300">
                  Monitore a variação cardíaca do usuário
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div
                className="w-12 h-12 rounded-full bg-cover bg-center aspect-square"
                style={{
                  backgroundImage:
                    "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAREhUSEhIVFhUXFRUWFhYXGBgXFhcVFRUYFhcYFRUYHSggGBolHRUVITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHSUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tNTctLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EAEYQAAIBAgMEBwQIAgkDBQEAAAECAAMRBCExBRJBUQYTImFxgZEyobHBBxQjQlJictHh8CQzQ2NzkrLC8WSCojR0o7PiFf/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACURAAICAgICAgMBAQEAAAAAAAABAhEDMRIhMkEEIhNRgWFCFP/aAAwDAQACEQMRAD8AFUUlylTkdFJdpJJFB1NJappOU0llEmFEiSwiRIsnRIQCRJKqRyJJlSEAxUkqrHKklVJjEYSPCSQJHhZjEYSOCSULHBZjDcMmUeqZSWikcFjAMZt7D0mxDAjt9m19NII2tiX3bBSu7xGh0hXpOj/WHte1l08JncDjqnWGmRvAnjnEb7Bx9l/ZtQVN0uByvB2MpEVN29+1lfgO6E6uJReyFsRykuMohrNbO0Fm9lbF4eqyrusEAGsZgNjDJ2O9c3J8IcwmER6dzcnlGV8I5G4LpA3+ibb0DtqYOn7dt4eycs4NwOwh1qPTcELUUlTqMwZoadOqigbt7cQPfFsfZbCq1TfvvG5jLsyk0aJkgvH2Ap3/ABiG2WCto0Awp3H3x745UyH0j/2QtqH+ImKoAhgRnNt9Ja9qj4P8VmRw9RqZ3lAJiMKXQdxOGpCkr7+fFQcr+HCUQKeIApqQpGl+PcZSTHOFdCAQ+ZvwPMcpHhDZwTfXhAbiX/8A+PiKZsVB8xa0MYdBa5uCAA+ehljG7UOG3C1nuNSMrEcpncZtJhcgg3N7jUg8PKa0Ik5ErbP36zbpJJuc9coLr0Bcb9wbXHeIWxFZd1WDEHMeF5RVTvi5uoB1mjKxl/oW2dSHVr4RS7gkBRSOUUYcmpJLlJZFRWW6SxAskppLKLGU1llFhFHIssIkbTWWUWEAkWSqs6qyVVhMcVZIqxyrHhZjDQseFjgseBCYYFjgseBOgTBJKS6xBZJTGsQEIpl9vELUbvA+ExeExHV4kkgbp4zX9JkJqtnwX4TNVsGNTIydMeNNUGkpox3lUG/GEcPsldWa1xpM9sN337Bsu/QAcZqWqA8fCKn2NHFaJaGDo0/ZYk99pI9NDkR53jKWGsBvG5PGcrADTOUroRwTYLxdBySEJUj0lCnh69Oqhv2WYX9ZoKSZEjO4lA0K++uQK7w9LxLpk6SYdZYLx9gKf+IvzhllgnaVFStPeDe2NBf15CXGMt9IWDLmlYXsH+ImOw+EYm1rET0jpWudPInJtPEQTR2KGs990kWtOfJJphukY3EbJy3iZGNlMUNQWsvfnN/T2atNBoxJsb6ecsYrDoybiqBYWYRHOSAsl+jzXam0naitIj2L58weEFYCm1t8kgDzm22zsiwsi3yztBuCwhA3Sth/OsZzHdJdHNh0xiEdjquZHPwjcBhT1jIQRkSAc7i3CFMCxodlk7BPtLky3+Ulr0wFv1oawsh+94GMru0Sk2uiXA0yKa3/AAiclnCqdxb8hFKlLHUllumshpCW6YijMlprLNNZHTWWaawij0WWEWMQSdRMYcqyVVnFElUQgEojwJ0COAmCICOAiAjgITHAI606J20xiZBrFaOTjOQgMb0oVhXJAv2VgaipfK0PdJKDvWYIbHdWRUaa0qd2zPEjMzlnL7UI32gE+OOHdR1YKuSC1yCN2x7OVuPwhR8RlcaDQ/wlbG16Fa1ytlubH2gNDdSARr/GVmxigbtNbgetordHrY4UqDlLbKEBWJBHp6y19dT8Qv4zGYwPujcZizNmqA7yqLXN+HD14SXB4ghnDNvWGROptcZ99rSsZ26OfJhpWbPZuKBcLz+OZhn6vlMf0Pfrq7NfJBf1G6vrmZsKjnS8pzUemcM19hpEg6oMoBloiRUxkIw5WxGHRrBheDcShpNkOzDoAvnKGMUMRlpOaU6k7Eeyi9MVNFAvxy1lHE7PO77QDc4b3cshKtVrXyi9aKJUZqrUq0yQCpNreMGbQ2E9S7oxW/DPWaLEFb3Ot9IzE40qtrQJKzJd9Ge+qP1fazt53tIUIFAE8bnjcG/Awo+LbdbwPCC61U9So7r6R1QwYwo7C/pHwikuGXsL+kfCKdCEFSEt0xKmGqA+PKXqQiJp6HaonpiWUEipiToIQEyCTKJGgkyCEA9RJVjFEkAhMOEeJwRwmMdEcJwTsJjs7OTomMWE4znOOSNPGEBjelm1RSrboGe6D5G8rYbFuyj7JiT3H4wf07Vhj0fLdCUyQeNiTPQtmbSL01ZaYtYSH44uTJuCbPP8XRa+66AKczcFXyyHDMa8crwfWxC07hcpvOkezsTiDemUXshSrg8L6EA8+U8721srEUWtXQi+jDNW8GHw1k5QaZ6uCa4JX2V6e16i725YX1JFyOGXD3Qx0b6OHEr1lZrUjnqbvc6tbNUJ0Op4WGcq9HtlrVJFQWpqbudLr+EfmOnnN3s4769aV3Ab9WLXPV7u6t6a620Hce826fj4r+z0c/zPkcfpHfv/AAk2Hs2lhiy0k3Q1r88shfgNchrxhPdzuATFSKjXeyJ9oW0GZvr3XOcnp4rdy5jTiPLh5mUyYuTtHnr/AEiMip6CTSKnoIhcDbfbEbyCiCdd6wJGo5CQ18TUVQXBU94mrwlVgCAB53mY6X7b3XWgygEgsDfytOP5WJ8XOL7ElH2RYXaDFTci0iOM3jZV8Z3B1VanYrrJSgW1rSOBOatjwVrsE4ug5YkAxHCdYudwbd0JHneQVibEg8J08SnXoyWNeoCVVT3m0VfB2Xdz9jIj8XIw4+YubX4yCrYI2XnNwNSLFBeyv6R8IpMgyHgPhFOkkYnC7Wq0GCYkHufmOYPGa7AY0MAb3B4j5yhiNmBlKgBl4020/wCxvun3QEMDWw7F8MWYD2qLe2vl94d4nE+UGdn1mj0Oiby0kx+wukKPkTuNxU8/OavD1w3cZaGRMjLG4ltZMsiSTLKiEiyQSNZIsJiQRwjBHiYw4TsaI6EB2KKKYxZWNPGdX9pw8YQHk30qVSMUBf8As1y82noXRIMcLS/QvPlPPPpVpk4oHlSX4tPQ+iVQjC0v0L8Insaug0N6U9sUKbUanXLvIFLMvHsi+R4HLWXBWPKUtusWw9RQty46sZX9s7tyOQBJPcDKJJugNtdoyHRqkQpFRSVRzuJkLhd0l3JysO1mc7ki2U0VHEsQCq/dBJprv2zOrPa5zyy75DRpCktyaShbjd0KlgOzcm17kk5DUTmJxFIEipXZ7DILk1zqbrkWzsBOl16OXtu2WKldswbDQEb5fPghRbAcyZxMTYkZZZkgXBOdyo5X3QPCUBiCfYXcXQEe0b/2ZPFzxPCQh87dogEDdW1gb23AeS2t5GAxoKNQaWOp4AZ6mOp6CCMJiBlci/iWN7Bj59qF6egkZqmWg7RdwQyPjPP/AKSqG9iKQXJipsfMT0DB6HxmU6ZUh9Ypuc7I1vUSM/EduirsWk1OmA9ryzWqKSJHhCzLvGOZSdJGKpaGiVKx7VjewOUZjKgK20vLVYXawPDODcTWPKGQ6VjRh7BRqOcr4wixEvUq10vbSD8XUFzllHjoX2EVGQ8B8JyPtFKEytSgDpEW+vYFQzKr9crbpt91SPfD1KBOkmWL2ef75x6hYlXspdEu2NhBu04sRpWQWI/xEHxEHrtTE4SwqL1lP7rrmCO4zd0jM5txurxWHo01TdxHWh1a+5vIFYG3C9yMpzyxe4l45fTCuwukCVhdTfmPvDxmiouGFwbzznEbCek+/h706mppMcm/Q2jCX9j9I+1uVL06gyIOV4I5mumGWJPtG9WSLB+D2gra5H3S+s6VJPRzuLWyQRwjBHCMAeJ2NnYTDpyKcmMWkPwE4eMSfITnOEUwPTzY9eviA1NLjq1GvG5ms6O0mWgiuLMFAI8oQqjjacNlBJvpew18hEUXyHdJEwYDWQ1rG98wLZcs7gjmdMu4edSvtJBqxXMKLoSCT93T2reWsq1cdRsT1xsptcZmmTw/Mx850RhWyEp3osV0p8VXL71gbX4HnUPz9aDUKC5hAgXlmaRPLmxv7/WHE4xRewOWo1sDxX8VU+74iMbtILYlgOC56q2RHe+ebenGPZNJsvYzF5kDLgQD7I/Ep/FxZuHjrFSfUkqNBe3BVY71vug5d8A3NZgg3t02UbouCrXKnsneOmhsMzkTnDmBwj2BNYbxWmSHVgbsd1smIHADITJhaoukbouxKrYgCwUmwUHdU5jTUw3gqoZAR4a307+czgwbX3ql3awJJQ5kK2rE81PrD2zD2SOR5W4RMi6Gg+wtgzkfGBekFCo1RSFuoBucoawmnnJnItINWiko8lRncLgWbRcvKRY7AOgvpNJS7spDtmnen6QcegxXHoyzUD7VoPr0wQVtkbwnVcjjIadAtnEY4Mwg3VKd3wlDdLGx5wwSAd7ytBNdhvcoUZBQxTpnZUmUaUB9KzatgD/1Sj1H8JpPq2W8puOY+czPTTI4I8sZS+DftJoc2dMzPdJhbG7Nb+9qj/Mi/tD1MwB0sNsRs8/9Vb1X+EyCa2rQSoN11BHwPMHgZk9t4ek2IGEdHqMaJqo4A6xVDFSL/ftYHzmuQzNY422xhTzwtcejXiSxqWxozcdAZKmIwmYPXUb+0NV7mHAzUbG6Qo4BVgRxHL9oTxWzlcllO4/4gLg9zrow98yO1NhBKgKMKFY3K2P2dS1r2vmuoyPMTmcZ43Z0KUcio3+HxCvofLjJwZ5vhNvVKLbmJUo3BvunvvwhjZ3SugDZsTlpu1aZBB5GqDY+kvDNeycsH6Nkusm3BygvCbSpuRZlP6WvL5xK6FhLpojKDQ59Y2c3wdDeVcXtClS9thflx9JmwJWFU+QkVeuqXLEAd8zuK6SMckAW41OZ9OEAYnbKkks1zzJ4ycsyWi0PjyezYVttoGGXYuASxt5+Eu161siSASLMNbnTdv53NuE87r4yg4u2eVszcZ8oS2Nt01UNJ7mogI3luz1KfME5Jwv3gHjKfHyJtpifKwOKUo6NHWxTAFuy65himtr6Iv4uZ/kB8VjVJyADC4BFrFeKDgX5tw9ZWZmqMGpXDaXTgbWAX8g49/gbQbVwppIA5TeIW4vkDnoLDLT3zoc/RyRgD9pbU3bLTK72YUX9jslittTfnxv5ShSpM5JLMxNwDuWvkKtPXhkw8p1Ft7N7DTdW39Wd9czlcqxHlLdGgbkWOV7bz2/qz1iDL8rW8oB9F3ZaoLFshZN1ipAAVgw3t3QWYi/5ZowjgWIJFmItUV1IWqCLb4J484NwFAEFF3N6zpbfvvCxZRmPwsfQR1nUncDlC1mpuFO7elc6WIzA0MrolsIVFIvk49rVgB7TjQH80tbIbJvG+t+cEUcTTqW7IVjundcG13O+bMDpYHW0KbJFi1ze4B03R5Sc9DQ2G8PUAGtoquJA48ZGmE3xfKVNqYMooA4nhIFi5Tq7xy5+6P2v/VnPlBmDJVTkb5S3iKhIz9IrfTNYEx4AUcycuc7hwFABOdpHjw6nfPDQ8B4SpRcubswHKR5OwchVwpNhzlXF4dfQ6yb6s+e6w85BXDoo3yDvEDLneOmwomMURilgEOCxVwCTYkDtDjl94cfHWBfpBt1WHa1iMXRzGan2swflLOy6t6dM80T/AEiDenb2wgPAV6J9G/jEQ9GvNMqcxM300NmwJ5Y2kPVW/aayhVuLaj8J1H6Tx8Jl/pCpAJhHU3Ax1C/MZPrNRjWIZmtssBtXAHnSxS/+KmaNZlekpttLZp/9yPVEmRjbK083+mV2X6oykghq1iDYg2p6GehUzPP/AKZR9nhj+eoPVV/aZGLHQrrcdg/td2qVYqVICm1yAVbgcvDwnaWyvq9S4q2o3PWo4s4FtN06kx30ON/R6v6x/um12rsqjiV3aq35MMmU9x+RykJ4FdxLwzV0zBUOklJatsHhUHewVWI42vb0uJpsJtqlWX2mVwc0bIqfCCto9EEpqT2ssxUW5t+tdR4iQ9F9g/WXNSq91pnc7GW/cH7wsLaG0SMpcuNFnKNWFsdtbqv7Zj3A/tM5iNsgknO5Opzm0Tohg/vIzHmXa/8A4kD3R69EsAM+oHmzn1u0rwbE/NBaR5nicezH2pXSnUc9kMx5AE+4T2nC7DwiW3cPSGX4F+Npcp0VX2VA8ABN+ED+T+keOYTo/i2IvTKA8ah3QPEa+6bbYXRPC0iKleu1Rh91Lonmfab3Sz0nwtVqysvs7qgjzl4iy+UEUlIn+eU01YYweHw6LakoscyTqfP5TNdMKisbIdAFbdsbEXJGfGxErbe2k1FAQSOQ5mAsDiRUotci/WNvEkg5qplozt0T4fXkREZgkHgTvMALDXT8lT3S/syiBY9m43dFLG6Mabm/6SJRQD8vfZS36s/0uf8AJDWBptax388j7KjtqVOmftoPWdECMwpSpkqM3DKAD2VF+qbdJzHIyu9Xdb7VCCpNqiqRvbgyDAHPsnlwlqgVYgmwLWvdybioliLfqWT74YDeFN1+zJBNyN77NsraSxAEYjBDdBYU9FG8LnPq39+kdgMRUoOAQSpNiLWsCcrX0y3fKW6ez0UhqThLbtxYkdhijZeBEjxBC2WqN4bwu4W2YYg3BOnZHqYstDRfZoGrBdWA85WrY+mCL1BnpxgnbppdYDUUt2PTMwcHohQ9OmbDK9syx5TilOjqSXsP1NsURqx15H9pJS2vSPEC34uMCU9mhzdjbl4xtahhyyhguSZnnnI/+hpWxZygtButjqDAgshHK8A7Up0y28rKQBpxkGIp0kcdWFHvFoW2ZQWoe0ARwtA8nPqidqTpGSrbSCuAL65jh6zRVMA9WglZdAbsBra+pHKHhs7D0/uAd5lTFbUAVlpqbWIOVhY5axuTjSKcaBBMUaTOTpAA9hNehSP92n+kSn09P9Bfuekf/kX95R2FtR1oUgAMkUceAtzlfpntAvhbEAEulrE6gkm445A6ySkros4urPQsO2QPcIE6f1L4ekx1XFYc345MdeesobD28BQpAJkEUangLH4SDpbtQVsGxC23K1A63/tBMpK6A4NKz0rstrYHgw9k/sZkultErjdnH++qj1QftNFSqEQB0scfWdmnli7W4dpCMj5RhTTJMH9Mf9Rhz/fMPVCflPQuqBzXzB1E8++mJf6NR7sR8aVT9plsw/6HD9hV/WPn+89FUzzf6HXHUVRx6z/aP3nogaZmJwZ1bDSRBo8NMYkvO3kd528xi7TOnhOnWMpnTwnSc4wpDiqyg2a2mUHV9rUqQ3m0Hx5CFsW1Bae9VYDLz8hqZ5t0o2mXexUqg9hf9zEcTykp9Mtix8gd0h2y1dyzc7KOQ/eLo3vlapsd3s6WGeeQvkcrSbo10Uq4599z1dAHNzq35aYOve3/AANtt7YlKhhvs9FZchY92YOvCCCd2VzTSXFGVooS1jvebAa3HDvd/QQpTZRc/Zi1zmS54VV/3QZhcjfdFx2vYPAX+XvhnBXBGTkAgZAKtgSo1/LUWduM8/IW1pjPNjbeOS2HYqB1tw0aTYkleDj+tW/Zvc9sX9JAiVHAAQLcC5apwakRovesmKMBf7M9pCQWO6d5Qp+MqSHNiC34yCeajJ6d/iJQrVVqA71rG195r2uq8PEtIuq3LMFUCyXUksOw5VrHwMY9AjtUwTa4IVbaBlsST3D3QNGTCT+0jMrMOrUZXtfiZfc0gpXkL2k2xGD0hplde0RvZaX77Wk9XCKc7JfxE4JY3yZ0VfZnq+MPVuyUzcZLcG5Y8svfAWy8FWxNMs6bue6O4A5++egMuWiXtlmJDgqIpru3XUnUcczJvDexlGIAp7JZKRRR2hoWzvK2Axdakdw07G9uY9eU1bEHUr6iUcTh1J3gUz1uw0j8K0h7RyjVdvaFuVwCD3SDF1aJRwPa0KH7p8JFisKGtdxlpZx75Q2iahKFerXL7UK9yx0GdsxkJL8cudiNlYtFIS8U6jGD2LWUUKfE7oy/eVuk9QtQPcymw4C9r++VdlVrUkA1t8zJdqITRck6KT6Z2905tT/p1bgT7NqN1VMfl/4l3bCW2bXP56R9Kqwfg2si+AhDaGIB2fXQ3ubEZcnU6zR8zS8D0jDVLqD3D4QD01ez4A8sdSHqGl3Z+0KZRM/urwPIQR01xCMMIQfZxtBuOnalVJEeLN0lTn5HiPOYv6Y2LYKkdbYhMx/hVdRNEu0aX4x75mfpRdXwAYG466mQfJh84VJNgaB/0OP2a47wfconpitPL/oZezV9NOOhzSeqbgbTI8j8ucLAcDRwaRMCNYg0Bifend6Qho4NCYIUjkPCdZszIqLZDw+chx72p1DyRv8ASYwFswW2OkRUtVdd677tPW+tgAPWZzae2MRUUVmUCncbyn2t3e3bqNCdcrjTWGuiey6W0y+bocO43tCGdt8XUnQZcuM0lboPTCMA5sVO9fS1jec/Z3OcV0g5snF0atGm9FgaZQbnDs2tYjgRoRzke2qi9Q+YPs9/3hwEx/0VYKrWwDdqymoyr3dlSSPMmX8X0VrU2LhyQqnK9icpTm09HI47KNFgudxrf2iCQOG6fC3nL+Fxy6KocjiLkZBbZn9Cf5oKwd3vftcMmU2IDDj3kekP0Q4FlWpbPQ0wPur4zrgc0y/hqr8VCi/Bbm32njwPukQ2i+7cLUI3EI7I13SQcx+SRrVcm+6T2lNt8DIsw/3icXGU6eVTqkIVRZqoJPVsQcu8EynRKmPxV6iko1XNamQ3R7YDj4H0lCoCGJIPtas2RH2b8O4mT9lO1T6srZBcPcEI9jlpo0r1XXRd0HSyrvaB0+SwgLmzMSA1shcZ2FluBe9+J1EItVXmPWZmuN8FTcFgRvMfxFh2VHlKeB2ZToHI1avBjcbp8ATOXM6Z04laNa1ZeY9ZE1UcxMjtHYFVan2V9xrMM8xfh/POOXAYo2XPeAOcjzLcF+zSvWXmJA9ZeYmaqbAxbcffJE6O4tFYb12awvfReM3M3BfsMvVHMSs9ZeY9YzZ+xa6gK76fzrJMXhd0XYAkMLG3wmUzcCAtOyuXilBaPPdif1a+fxlvaLDqnHNG+BlHY19yw4M3lnC7YcdW/ElG+B9JzS8joj4kWycLvIjHTdFhLu3Kf9FrfoJ9LGM6OPehTP5fmZa22f6NX/w3+ES/v/Q/8hbAj7ND+VfgIL6UNdKXdiKP+q3zkuz8RvUqfLcX4CUuktYdUndWon0cTR8wvxC+OxC01v6Dn/CRdNHJ2XnwemfV7fOCcfW3syYT6WsDsxrc6P8A9qSmGNMTK+iP6HxlXPeo9R/+Z6alTgdP50PCeWfRJW/9QvfSPuqD5T0laks9kAktW4zzHP7w/eManxGYlVaklSt32PPgfETGO3nQ0cSG1yPuPgZE6kazGL9F8h4H4zoNyQZWw7aeHzkitmYQGZ+hykoqbSsLAYqwA0ADVLADgJ6U1EHhPM/ogxaJW2kGNr4o2/z1Z6mHU8YI0xpPsF4HZVGggp0Ka06YJIRAFUEm5NhJTQB1EvXXnGvVRQSSAACSe4ZmGgWeU0dnm5BUlbmwKi4vllu58BHVMRhqIzADZdlQ4Y2PDPu4zPdIcSa1Z6hPtMW8OXylPZ67zt3kWHiM4fzUukb8N7Ybr7TqVTuooQaXy3iMtWtl7I0kB2eqm29vOxve9xnrnxN48Luj2t3xGXwMh6xt4G4YDiLjzF4rk3sZRS0WKWH3Mkdg1s7Gw8O+NrbSxKHVX42YFeN/uFePxkz1KPsg7p5HMeukp4yroDqNG7+UPJrTNxT2gx0Wf61UDFFCqCWAB1HZALXvqefCaBNhtcm9luSLeMs/R9srqKBqNk9Zt8rl2VA3VHnYt/3TU1ChGdoHctsXqOjN08BVXiLd+seuDa+uf88YaO5rvfxkY3SdcovENg58C50MrtgnHsnWHalVFIzHrGGtSa/aE3FGtmdq7Oq39n3wTtqmwpEmwswyHjNZXakeNh6QJ0upIuGJU3uy5+cFBsw5qTsqGpORzGT2E1g45VGhbrLgjmD8J2Kc8/ItDxK3RmpbDp3XHvMl2piN+lUA03G/0mKKZ+f9MvEWzcT9jT/SvwlXbpJpXJ+8h/8AMRRTRX3/AKZ+JYNE1GtwGsl6QYe2Eqchue51iimT+yC/FlL6O2O/XANril7i/wC83d3/ABn1MUU2byBi8RtSoy57zajiec0VOreKKHFoXKTLV9OUsUcRwtvDkdR4H94opciW6XV7m+t5Fv8AaPlFFCKY36LL9ftGzW/pB4X/ALSrPUFqG2cUUn7Ks41fzgXpXtA08M3NyEHgc29wPrFFNYDynGPnINm1rVbc1Pu/kzsUxQMq/G2nh84ys7MLk2A7/kIoowhXya6Hjmp+XhObK7dQUmOROvhr8IooBj1XAVfsx4fOKpW8fWKKKxEVhiTqOOn/ABHPX74ooAlWtiLanylOttO2Q/nuiiiNjJFHFbaZbkzLYvbT1XZCLD2vaJNx/wAxRQw2FopGrFFFLiH/2Q==')",
                }}
              ></div>
              <div>
                <h3 className="font-semibold">Risco de Queda</h3>
                <p className="text-gray-300">
                  Previna quedas com a análise inteligente de riscos
                </p>
              </div>
            </div>
          </AdvancedFunc>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
