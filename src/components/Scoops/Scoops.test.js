import { render, screen } from "@testing-library/react";
import Scoops from ".";
import userEvent from "@testing-library/user-event";

/*
 ! Seçiciler
 ? Komut [All] BySeçici
 * Komut > get | find | query
 * get => element'ler başlangıçta DOM'da var ise kullanılır
 * find => elementin ne zaman ekrana basılcağı belli değilse kullanılır (async)
 * query => elemetler' Dom'da yok ise ve koşula göre gelicek ise kullanılır
 
  ? Not: find methodu async bir method olduğu için
  ? kullanırken async await ile birlikte kullanılmalı.
 */

test("API'den gelen her bir çeşit için ekrana bir kart basılır", async () => {
  render(<Scoops />);

  // ekrana basılan bütün kartları(resimlerini) çağırma
  const images = await screen.findAllByRole("img", { name: "çeşit" });

  expect(images).toHaveLength(4)
});

// describe('Dondurma Çeşitlerinde ekleme ve sıfırlama işlemini kontrol etme', () => {

// });

test("Çeşit ekleme işleminin toplam fiyata yansimasi", async () => {
  render(<Scoops />);

  const user = userEvent.setup();

  // toplam fiyata erişme
  const total = screen.getByTestId("total");

  // ekle butonları çağırma
  const buttons = await screen.findAllByRole("button", {
    name: "+",
  });


  // bir tane çeşit ekle ve fiyatı kontrol et
  await user.click(buttons[0]);
  expect(total).toHaveTextContent("3");

  // vanilya ekle butonuna çift tıklama
  await user.dblClick(buttons[1])
  expect(total).toHaveTextContent('9')


});


test('Çeşit sifirlamanin toplama yansiyor mu ?', async() => {
    render(<Scoops/>)

    const user = userEvent.setup();

    // gerekli elemanlar
  const total = screen.getByRole('heading',{name:/Total Price:/i})

 const delButtons = await screen.findAllByRole('button',{name:'-'})
 const addButtons = await screen.findAllByRole('button',{name:'+'})

    // 2 farklı çeşit ekleme
    await user.click(addButtons[2])
    await user.dblClick(addButtons[3])

    expect(total).toHaveTextContent('9')

    //spette bir adet olan çeşiti sıfırla ve toplamı kontrol et 
    await user.click(delButtons[2])
    expect(total).toHaveTextContent('6')

    //spette iki adet olan çeşiti sıfırla ve toplamı kontrol et 
    await user.dblClick(delButtons[3])
    expect(total).toHaveTextContent('0')
})