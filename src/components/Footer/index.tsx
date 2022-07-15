import { FC } from 'react';

import styles from './styles.module.scss';

type FooterContent = {
    [key: string] : Array<string>
};

const Footer: FC = () => {
    const footerContentArr: Array<FooterContent> = [
        { 'General': ['About company', 'Contacts', 'Vacancies', 'Store addresses']},
        { 'Media': ['Inst', 'Vk', 'Facebook', 'Youtube']},
        { 'For Customers': ['Shipment', 'Payment', 'Warranty', 'Privacy policy']},
        { 'Help': ['Every day', '10:00 – 20:00', '8 (486) 555 0100', 'technika@updates.ru', 'Whatsapp', 'Telegram']}
    ];

    return (
        <div className={styles.footer}>
            <div className={styles.footer__upperPart}>
                {footerContentArr.map((item, index) => (
                    <div key={index} className={styles.footer__item}>
                        <div className={styles.footer__text_title}>
                            {Object.keys(item)}
                        </div>
                        {Object.values(item)[0].map((link, index) => (
                            <div className={styles.footer__link} key={index + 100}>
                                {link}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className={styles.footer__bottomPart}>
                <span className={styles.footer__text_about}>
                    ООО «Техника Апдейт», ОГРН: 1165275017721, ИПП: 7754 33 41 Юр. адрес: 610437, Ростовская обл, г Таганрог, 1-новый 27 © 2020  –  2022 TechnikaUpdate
                </span>
            </div>
        </div>
    );
};

export default Footer;
