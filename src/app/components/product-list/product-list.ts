import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductList {
  // Expose global function to the template
  encodeURIComponent = encodeURIComponent;

  products: Product[] = [
    {
      'id': 1,
      'name': 'Ноутбук Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб / macOS / MGN63RU/A',
      'description': 'Первый чип, разработанный специально для Mac. Поразительно, но система на чипе Apple M1 вмещает 16 миллиардов транзис­торов и объединяет центральный и графи­ческий процессоры, систему Neural Engine, контроллеры ввода-вывода и множество других компонентов. Это не просто ещё один шаг для Mac — это принципиально новый уровень возможностей.',
      'price': 590000,
      'rating': 4.9,
      'images': [
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium'
      ],
      'link': 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=CjwKCAiA2PrMBhA4EiwAwpHyC1lmEbgu6qF8BXGbsSaXCEjhUDYLNQ2OPBOM3UdEXT_HF-K1lqUEgxoCK-QQAvD_BwE'
    },
    {'id': 2,
      'name': 'Ноутбук Apple MacBook Pro 16 2021 16.2" / 32 Гб / SSD 512 Гб / macOS / Z14V0008D',
      'description': 'Представляем Apple MacBook Pro 16 2021 — мощный ноутбук, созданный для профессионалов и творческих людей. С процессором Apple M1 Pro и 32 Гб оперативной памяти он обеспечивает невероятную производительность и скорость работы.',
      'price': 887780,
      'rating': 4.9,
      'images': [
        'https://resources.cdn-kaspi.kz/img/m/p/pc1/p7c/36863341.jpg?format=gallery-medium'
      ],
      'link': 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2021-16-2-32-gb-ssd-512-gb-macos-z14v0008d-138158355/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=CjwKCAiA2PrMBhA4EiwAwpHyC1lmEbgu6qF8BXGbsSaXCEjhUDYLNQ2OPBOM3UdEXT_HF-K1lqUEgxoCK-QQAvD_BwE'
    },
    {'id': 3,
    'name':'Ноутбук Apple MacBook Air 13 2025 / 16 Гб / SSD 256 Гб / macOS / MW123',
    'description': 'Представляем Apple MacBook Air 13 2025 — ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность. Этот ноутбук станет идеальным спутником для работы и развлечений.',
    'price': 650000,
    'rating': 4.9,
    'images': [
        'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium'
      ],
      'link': 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=CjwKCAiA2PrMBhA4EiwAwpHyC1lmEbgu6qF8BXGbsSaXCEjhUDYLNQ2OPBOM3UdEXT_HF-K1lqUEgxoCK-QQAvD_BwE'
    },
    {
      'id': 4,
      'name': 'Ноутбук Apple MacBook Air 13 2022 13.6" / 16 Гб / SSD 256 Гб / macOS / MC7X4RU/A',
      'description': 'Apple MacBook Air 13 2022 — это ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность. Этот ноутбук станет идеальным спутником для работы и развлечений.',
      'price': 819585,
      'rating': 4.9,
      'images': [
        'https://resources.cdn-kaspi.kz/img/m/p/p3c/p38/16711028.jpg?format=gallery-medium'
      ],
      'link': 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-16-gb-ssd-256-gb-macos-mc7x4ru-a-132428983/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=CjwKCAiA2PrMBhA4EiwAwpHyC1lmEbgu6qF8BXGbsSaXCEjhUDYLNQ2OPBOM3UdEXT_HF-K1lqUEgxoCK-QQAvD_BwE'
    },
    {'id': 5,
      'name': 'Ноутбук Apple MacBook Air 13 2022 13.6" / 16 Гб / SSD 256 Гб / macOS / MC7X4',
      'description': 'Представляем Apple MacBook Air 13 2022 — ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность. С процессором Apple M2 и 16 Гб оперативной памяти, он идеально подходит для работы и развлечений',
      'price': 739440,
      'rating': 4.9,
      'images': [
        'https://resources.cdn-kaspi.kz/img/m/p/p37/p87/22158172.jpg?format=gallery-medium'
      ],
      'link': 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-16-gb-ssd-256-gb-macos-mc7x4-133963854/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=CjwKCAiA2PrMBhA4EiwAwpHyC1lmEbgu6qF8BXGbsSaXCEjhUDYLNQ2OPBOM3UdEXT_HF-K1lqUEgxoCK-QQAvD_BwE'
    },
    {'id': 6,
      'name': 'Ноутбук Apple MacBook Air 13 2025 13.6" / 16 Гб / SSD 256 Гб / macOS / MC6T4',
      'description': 'Apple MacBook Air 13 2025 — это ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность. С процессором Apple M3 и 16 Гб оперативной памяти, он идеально подходит для работы и развлечений',
      'price': 449750,
      'rating': 4.9,
      'images': [
        'https://resources.cdn-kaspi.kz/img/m/p/pa2/p94/37425233.png?format=gallery-medium'
      ],
      'link': 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-13-6-16-gb-ssd-256-gb-macos-mc6t4-138321653/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=CjwKCAiA2PrMBhA4EiwAwpHyC1lmEbgu6qF8BXGbsSaXCEjhUDYLNQ2OPBOM3UdEXT_HF-K1lqUEgxoCK-QQAvD_BwE'
    },
    {
      'id': 7,
      'name': 'Ноутбук Apple MacBook Air 13 2024 13" / 16 Гб / SSD 512 Гб / macOS / MXCR3RU/A',
      'description': 'Apple MacBook Air 13 2024 — это ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность. С процессором Apple M2 и 16 Гб оперативной памяти, он идеально подходит для работы и развлечений',
      'price': 315284,
      'rating': 4.9,
      'images': [
        'https://resources.cdn-kaspi.kz/img/m/p/h4d/hc4/86533406851102.jpg?format=gallery-medium'
      ],
      'link': 'https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-16-gb-ssd-512-gb-macos-mxcr3ru-a-121396984/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=CjwKCAiA2PrMBhA4EiwAwpHyC1lmEbgu6qF8BXGbsSaXCEjhUDYLNQ2OPBOM3UdEXT_HF-K1lqUEgxoCK-QQAvD_BwE'
    },
    {
      'id': 8,
      'name': 'Ноутбук Apple MacBook Air 15 2025 / 16 Гб / SSD 256 Гб / macOS / MW1J3',
      'description': 'Apple MacBook Air 15 2025 — это ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность. С процессором Apple M3 и 16 Гб оперативной памяти, он идеально подходит для работы и развлечений',
      'price': 778456,
      'rating': 5.0,
      'images': [
        'https://resources.cdn-kaspi.kz/img/m/p/p09/p24/40619516.jpeg?format=gallery-medium'
      ],
      'link': 'https://kaspi.kz/shop/p/apple-macbook-air-15-2025-16-gb-ssd-256-gb-macos-mw1j3-139195756/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=CjwKCAiA2PrMBhA4EiwAwpHyC1lmEbgu6qF8BXGbsSaXCEjhUDYLNQ2OPBOM3UdEXT_HF-K1lqUEgxoCK-QQAvD_BwE'
    },
    {
      'id': 9,
      'name': 'Ноутбук Apple MacBook Pro 16 2024 16.2" / 24 Гб / SSD 512 Гб / macOS / MX2X3й',
      'description': 'Apple MacBook Pro 16 2024 — это мощный ноутбук с 16,2-дюймовым дисплеем Liquid Retina XDR, процессором Apple M3 Pro и 24 Гб оперативной памяти. Он идеально подходит для профессиональной работы, видеомонтажа и разработки программного обеспечения',
      'price': 848835,
      'rating': 5.0,
      'images': [
        'https://resources.cdn-kaspi.kz/img/m/p/pa1/pce/15484955.jpg?format=gallery-medium'
      ],
      'link': 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2024-16-2-24-gb-ssd-512-gb-macos-mx2x3-137245155/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=CjwKCAiA2PrMBhA4EiwAwpHyC1lmEbgu6qF8BXGbsSaXCEjhUDYLNQ2OPBOM3UdEXT_HF-K1lqUEgxoCK-QQAvD_BwE'
    },
    {
      'id': 10,
      'name': 'Ноутбук Apple MacBook Air 13 2024 13.6" / 8 Гб / SSD 512 Гб / macOS / MRXR3',
      'description': 'Apple MacBook Air 13 2024 — это ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность. С процессором Apple M2 и 8 Гб оперативной памяти, он идеально подходит для работы и развлечений',
      'price': 259900,
      'rating': 4.8,
      'images': [
        'https://resources.cdn-kaspi.kz/img/m/p/he2/h2d/86252675399710.jpg?format=gallery-medium'
      ],
      'link': 'https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-6-8-gb-ssd-512-gb-macos-mrxr3-120290895/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=CjwKCAiA2PrMBhA4EiwAwpHyC1lmEbgu6qF8BXGbsSaXCEjhUDYLNQ2OPBOM3UdEXT_HF-K1lqUEgxoCK-QQAvD_BwE'
    }
  ]
}