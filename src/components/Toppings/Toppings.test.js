import { render,screen } from "@testing-library/react"
import Toppings from "."
import userEvent from '@testing-library/user-event'

test('Soslari ekleme çıkarma işlemin toplam fiyata olan etkisi', async() => {
    render(<Toppings/>)
    
    const user = userEvent.setup();

    // toplam başlığını çağırma
   const total = screen.getByRole('heading',{name:/Toppings Price:/i});

   // mochi checkbox'ını çağırma
 const mochiCheck = await screen.findByRole('checkbox',{name:/Mochi/i})

 // sosu sepete ekleme
await user.click(mochiCheck);

// toplamı kontrol etme
expect(total).toHaveTextContent('2')

// farklı bir sos ekleme
const cherryCheck = await screen.findByRole('checkbox',{name:/Cherries/i})

await user.click(cherryCheck)

// toplamı kontrol etme
expect(total).toHaveTextContent('4')
 
// 1 sosu sepetten çıkarma
await user.click(cherryCheck)
expect(total).toHaveTextContent('2') 

// 1 sosu sepetten çıkarma
await user.click(mochiCheck)
expect(total).toHaveTextContent('0') 


})

