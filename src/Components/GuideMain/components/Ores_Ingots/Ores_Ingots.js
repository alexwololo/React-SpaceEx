import React, { useEffect } from 'react';
// ores images
import Cobalt from '../../../../assets/images/ores_images/Cobalt_600x600.png';
import Gold from '../../../../assets/images/ores_images/Gold_600x600.png';
import Ice from '../../../../assets/images/ores_images/Ice_600x600.png';
import Iron from '../../../../assets/images/ores_images/Iron_600x600.png';
import Magnesium from '../../../../assets/images/ores_images/Magnesium_600x600.png';
import Nickel from '../../../../assets/images/ores_images/Nickel_600x600.png';
import Platinum from '../../../../assets/images/ores_images/Platinum_600x600.png';
import ScrapMetal from '../../../../assets/images/ores_images/ScrapMetal_600x600.png';
import Silicon from '../../../../assets/images/ores_images/Silicon_600x600.png';
import Silver from '../../../../assets/images/ores_images/Silver_600x600.png';
import Stone from '../../../../assets/images/ores_images/Stone_600x600.png';
import Thorium from '../../../../assets/images/ores_images/Thorium_600x600.png';
import Titanium from '../../../../assets/images/ores_images/Titanium_600x600.png';
import Uranium from '../../../../assets/images/ores_images/Uranium_600x600.png';

import './Ores_Ingots.css';
import VanillaTilt from 'vanilla-tilt';

function ORES_INGOTS() {
  const ores = [
    {
      src: Cobalt,
      name: 'Cobalt',
      mass: '1kg',
      volume: '0.37L',
      ingots: '1 ingot per 3,333kg ore',
      found: 'Planets & asteroids',
    },
    {
      src: Gold,
      name: 'Gold',
      mass: '1kg',
      volume: '0.37L',
      ingots: '1 ingot per 100kg ore',
      found: 'Planets & asteroids',
    },
    {
      src: Ice,
      name: 'Ice',
      mass: '1kg',
      volume: '0.37L',
      ingots: 'Ice returns Hydrogen & Oxygen only',
      found: 'Planets & asteroids',
    },
    {
      src: Iron,
      name: 'Iron',
      mass: '1kg',
      volume: '0.37L',
      ingots: '1 ingot per 1,43kg ore',
      found: 'Planets & asteroids',
    },
    {
      src: Magnesium,
      name: 'Magnesium',
      mass: '1kg',
      volume: '0.37L',
      ingots: '1 ingot per 143kg ore',
      found: 'Planets & asteroids',
    },
    {
      src: Nickel,
      name: 'Nickel',
      mass: '1kg',
      volume: '0.37L',
      ingots: '1 ingot per 2,5kg ore',
      found: 'Planets & asteroids',
    },
    {
      src: Platinum,
      name: 'Platinum',
      mass: '1kg',
      volume: '0.37L',
      ingots: '1 ingot per 200kg ore',
      found: 'Asteroids',
    },
    {
      src: ScrapMetal,
      name: 'Scrap Metal',
      mass: '1kg',
      volume: '0.25L',
      ingots: '1 ingots per 1,25kg scrap metal',
      found: 'Drilling on grids, is aka ships or stations',
    },
    {
      src: Silicon,
      name: 'Silicon',
      mass: '1kg',
      volume: '0.37L',
      ingots: '1 ingot per 1,43kg ore',
      found: 'Planets & asteroids',
    },
    {
      src: Silver,
      name: 'Silver',
      mass: '1kg',
      volume: '0.37L',
      ingots: '1 ingot per 10kg ore',
      found: 'Planets & asteroids',
    },
    {
      src: Stone,
      name: 'Stone',
      mass: '1kg',
      volume: '0.37L',
      ingots: 'Not calculated as it gives multiple ores',
      found: 'Planets & asteroids',
    },
    {
      src: Thorium,
      name: 'Thorium',
      mass: '50kg',
      volume: '250L',
      ingots: '1 ingot per 12.500kg ore',
      found: 'Planet Thora & the Thorium Asteroid',
    },
    {
      src: Titanium,
      name: 'Titanium',
      mass: '50kg',
      volume: '250L',
      ingots: '1 ingot per 12.500kg ore',
      found: 'The Core',
    },
    {
      src: Uranium,
      name: 'Uranium',
      mass: '1kg',
      volume: '0.37L',
      ingots: '1 ingot per 100kg ore',
      found: 'Asteroids',
    },
  ];

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll('.ore'), {
      max: 25,
      speed: 200,
      scale: 1.2,
    });
  }, []);

  return (
    <section className="multiSection">
      <section>
        <h2>Ores & Ingots</h2>
        <hr />
        <p>
          After flying to space u will automaticly enlist in our secret mining
          program where u will toil away as a nobody among the stars
        </p>
      </section>

      <br />
      <br />
      <br />

      <section className="ores">
        {ores.map((ele, i) => (
          <div className="ore" key={i}>
            <img src={ele.src} alt={ele.name + ' image'} className="ore_img" />
            <div className="ore_detail">
              <h3>{ele.name}</h3>
              <div className="detail">
                <p>
                  <b>Spot:</b> {ele.found}
                </p>
                <p>
                  <b>Ingots:</b> {ele.ingots}
                </p>
                <p>
                  <b>Mass:</b> {ele.mass}
                </p>
                <p>
                  <b>Volume:</b> {ele.volume}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}

export default ORES_INGOTS;
