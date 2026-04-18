const express = require('express');
const router = express.Router();

// 首页
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Ningbo Dunfang Precision Machinery Co., Ltd. | Precision Manufacturing',
    description: 'Professional precision machinery manufacturer with advanced technology and high-quality products.',
    keywords: 'precision machinery, manufacturing, export, B2B, China'
  });
});

// 关于我们
router.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Us | Ningbo Dunfang Precision Machinery',
    description: 'Learn about our company history, culture, and manufacturing capabilities.',
    keywords: 'company profile, history, culture, manufacturing, capabilities'
  });
});

// 产品中心
router.get('/products', (req, res) => {
  res.render('products', {
    title: 'Products | Ningbo Dunfang Precision Machinery',
    description: 'Browse our precision machinery products and solutions.',
    keywords: 'products, precision machinery, solutions, catalog'
  });
});



// 金属制品详情页面
router.get('/product-metal-flashing-forming-tool', (req, res) => {
  res.render('product-detail/metalproducts/flashing-forming-tool', {
    title: 'Flashing Forming Tool | Ningbo Dunfang Precision Machinery',
    description: 'High-precision metal forming tool for creating metal flashing components',
    keywords: 'flashing forming tool, metal forming, precision tool, manufacturing'
  });
});

router.get('/product-metal-precision-forming-tool', (req, res) => {
  res.render('product-detail/metalproducts/precision-forming-tool', {
    title: 'Precision Forming Tool | Ningbo Dunfang Precision Machinery',
    description: 'Professional metal forming tool for complex geometric shapes',
    keywords: 'precision forming tool, metal forming, complex shapes, aerospace'
  });
});

router.get('/product-metal-stamping-die', (req, res) => {
  res.render('product-detail/metalproducts/stamping-die', {
    title: 'Metal Stamping Die | Ningbo Dunfang Precision Machinery',
    description: 'High-quality metal stamping die for cutting and forming metal sheets',
    keywords: 'metal stamping die, stamping tool, metal cutting, manufacturing'
  });
});



// 建筑节能详情页面
router.get('/product-building-energy-saving-window', (req, res) => {
  res.render('product-detail/buildingenergysaving/energy-saving-window', {
    title: 'Energy Saving Window System | Ningbo Dunfang Precision Machinery',
    description: 'High-performance energy-saving window system with excellent thermal insulation properties',
    keywords: 'energy saving window, thermal insulation, building energy, sustainability'
  });
});



// 机电产品详情页面
router.get('/product-mechanical-electrical-control-panel', (req, res) => {
  res.render('product-detail/mechanicalelectrical/control-panel', {
    title: 'Electrical Control Panel | Ningbo Dunfang Precision Machinery',
    description: 'Advanced industrial automation electrical control panel',
    keywords: 'electrical control panel, industrial automation, control system, PLC'
  });
});

router.get('/product-mechanical-electrical-motor', (req, res) => {
  res.render('product-detail/mechanicalelectrical/motor', {
    title: 'Industrial Motor | Ningbo Dunfang Precision Machinery',
    description: 'High-quality industrial motor for heavy-duty applications',
    keywords: 'industrial motor, electric motor, heavy-duty, manufacturing'
  });
});

router.get('/product-mechanical-electrical-hydraulic-components', (req, res) => {
  res.render('product-detail/mechanicalelectrical/hydraulic-components', {
    title: 'Hydraulic System Components | Ningbo Dunfang Precision Machinery',
    description: 'High-performance hydraulic system components for industrial machinery',
    keywords: 'hydraulic components, hydraulic pumps, hydraulic valves, hydraulic cylinders, industrial hydraulics'
  });
});

router.get('/product-mechanical-electrical-automation-control', (req, res) => {
  res.render('product-detail/mechanicalelectrical/automation-control', {
    title: 'Automation Control System | Ningbo Dunfang Precision Machinery',
    description: 'Advanced automation control system for industrial processes',
    keywords: 'automation control, industrial automation, control system, sensors, actuators, manufacturing'
  });
});





// 新增五金配件产品详情路由
router.get('/product-hardware-fasteners', (req, res) => {
  res.render('product-detail/hardwareaccessories/fasteners', {
    title: 'Fasteners | Ningbo Dunfang Precision Machinery',
    description: 'High-quality fasteners for industrial applications',
    keywords: 'fasteners, industrial fasteners, bolts, nuts, screws, manufacturing'
  });
});

router.get('/product-hardware-handles-knobs', (req, res) => {
  res.render('product-detail/hardwareaccessories/handles-knobs', {
    title: 'Handles and Knobs | Ningbo Dunfang Precision Machinery',
    description: 'Ergonomic handles and knobs for industrial equipment',
    keywords: 'handles, knobs, industrial handles, ergonomic, machinery parts, manufacturing'
  });
});

router.get('/product-hardware-hinges', (req, res) => {
  res.render('product-detail/hardwareaccessories/hinges', {
    title: 'Hinges | Ningbo Dunfang Precision Machinery',
    description: 'High-quality hinges for doors, cabinets, and machinery',
    keywords: 'hinges, door hinges, cabinet hinges, industrial hinges, manufacturing'
  });
});

router.get('/product-hardware-springs', (req, res) => {
  res.render('product-detail/hardwareaccessories/springs', {
    title: 'Springs | Ningbo Dunfang Precision Machinery',
    description: 'Precision springs for various mechanical applications',
    keywords: 'springs, compression springs, tension springs, torsion springs, precision springs, manufacturing'
  });
});



// 模具工装详情页面
router.get('/product-mold-tooling-injection-mold', (req, res) => {
  res.render('product-detail/moldtooling/injection-mold', {
    title: 'Injection Mold | Ningbo Dunfang Precision Machinery',
    description: 'High-precision mold tooling for plastic manufacturing',
    keywords: 'injection mold, plastic mold, mold tooling, manufacturing'
  });
});

// 新增模具工装产品详情路由
router.get('/product-denso-duct-grill-mold', (req, res) => {
  res.render('product-detail/moldtooling/denso-duct-grill-mold', {
    title: 'Denso Duct Grill Mold | Ningbo Dunfang Precision Machinery',
    description: 'High-precision mold for manufacturing Denso duct grill components',
    keywords: 'denso duct grill mold, automotive mold, precision mold, manufacturing'
  });
});

router.get('/product-ford-under-engine-tray-mold', (req, res) => {
  res.render('product-detail/moldtooling/ford-under-engine-tray-mold', {
    title: 'Ford Under Engine Tray Mold | Ningbo Dunfang Precision Machinery',
    description: 'Specialized mold for producing Ford under engine tray components',
    keywords: 'ford under engine tray mold, automotive mold, engine component mold, manufacturing'
  });
});

router.get('/product-hella-motor-carrier-mold', (req, res) => {
  res.render('product-detail/moldtooling/hella-motor-carrier-mold', {
    title: 'Hella Motor Carrier Mold | Ningbo Dunfang Precision Machinery',
    description: 'Precision mold for manufacturing Hella motor carrier components',
    keywords: 'hella motor carrier mold, automotive mold, motor mount mold, manufacturing'
  });
});

router.get('/product-automotive-interior-mold', (req, res) => {
  res.render('product-detail/moldtooling/automotive-interior-mold', {
    title: 'Automotive Interior Mold | Ningbo Dunfang Precision Machinery',
    description: 'Complex mold for automotive interior components',
    keywords: 'automotive interior mold, car interior mold, precision mold, manufacturing'
  });
});

router.get('/product-precision-electronic-mold', (req, res) => {
  res.render('product-detail/moldtooling/precision-electronic-mold', {
    title: 'Precision Electronic Mold | Ningbo Dunfang Precision Machinery',
    description: 'High-precision mold for electronic components',
    keywords: 'precision electronic mold, electronic component mold, high-precision mold, manufacturing'
  });
});

router.get('/product-rear-view-mirror-mold', (req, res) => {
  res.render('product-detail/moldtooling/rear-view-mirror-mold', {
    title: 'Rear View Mirror Mold | Ningbo Dunfang Precision Machinery',
    description: 'Specialized mold for manufacturing rear view mirror components',
    keywords: 'rear view mirror mold, automotive mirror mold, precision mold, manufacturing'
  });
});

// 塑料制品详情页面
router.get('/product-plastic-container', (req, res) => {
  res.render('product-detail/plastic/plastic-container', {
    title: 'Plastic Container | Ningbo Dunfang Precision Machinery',
    description: 'High-quality plastic container for storage and organization',
    keywords: 'plastic container, storage container, food container, organization'
  });
});

router.get('/product-plastic-component', (req, res) => {
  res.render('product-detail/plastic/plastic-component', {
    title: 'Plastic Component | Ningbo Dunfang Precision Machinery',
    description: 'High-quality plastic component for mechanical applications',
    keywords: 'plastic component, mechanical part, injection molding, engineering plastic'
  });
});

router.get('/product-plastic-storage-box', (req, res) => {
  res.render('product-detail/plastic/plastic-storage-box', {
    title: 'Plastic Storage Box | Ningbo Dunfang Precision Machinery',
    description: 'High-quality plastic storage box with secure lid',
    keywords: 'plastic storage box, storage container, secure lid, organization'
  });
});

router.get('/product-plastic-parts', (req, res) => {
  res.render('product-detail/plastic/plastic-parts', {
    title: 'Plastic Parts | Ningbo Dunfang Precision Machinery',
    description: 'High-quality plastic parts for electronic and mechanical devices',
    keywords: 'plastic parts, electronic components, mechanical parts, injection molding'
  });
});



// 橡胶制品详情页面
router.get('/product-rubber-seal', (req, res) => {
  res.render('product-detail/rubber/rubber-seal', {
    title: 'Rubber Seal | Ningbo Dunfang Precision Machinery',
    description: 'High-quality rubber seal for various applications',
    keywords: 'rubber seal, o-ring, rubber gasket, sealing solution'
  });
});

router.get('/product-rubber-gasket', (req, res) => {
  res.render('product-detail/rubber/rubber-gasket', {
    title: 'Rubber Gasket | Ningbo Dunfang Precision Machinery',
    description: 'High-quality rubber gaskets for various sealing applications',
    keywords: 'rubber gasket, rubber seal, industrial gaskets, sealing solutions'
  });
});

router.get('/product-rubber-o-ring', (req, res) => {
  res.render('product-detail/rubber/rubber-o-ring', {
    title: 'Rubber O-Ring | Ningbo Dunfang Precision Machinery',
    description: 'Standard and custom O-rings for sealing applications',
    keywords: 'rubber o-ring, o-ring, sealing rings, industrial seals'
  });
});



// 联系我们
router.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact Us | Ningbo Dunfang Precision Machinery',
    description: 'Get in touch with us for inquiries and business cooperation.',
    keywords: 'contact, inquiry, business, cooperation, address'
  });
});

// 处理联系表单提交
router.post('/contact', (req, res) => {
  // 这里可以添加表单处理逻辑
  console.log('Form submitted:', req.body);
  res.redirect('/contact?success=true');
});

// 优势详情页面
router.get('/advantage/precision', (req, res) => {
  res.render('advantage/precision', {
    title: 'Precision Engineering | Ningbo Dunfang Precision Machinery',
    description: 'State-of-the-art manufacturing with tight tolerances and exceptional accuracy for demanding applications.',
    keywords: 'precision engineering, manufacturing, tight tolerances, accuracy'
  });
});

router.get('/advantage/quality', (req, res) => {
  res.render('advantage/quality', {
    title: 'Quality Assurance | Ningbo Dunfang Precision Machinery',
    description: 'Rigorous quality control processes ensuring every product meets international standards.',
    keywords: 'quality assurance, quality control, international standards, testing'
  });
});

router.get('/advantage/global', (req, res) => {
  res.render('advantage/global', {
    title: 'Global Reach | Ningbo Dunfang Precision Machinery',
    description: 'Serving clients worldwide with reliable logistics and dedicated customer support.',
    keywords: 'global reach, international, logistics, customer support'
  });
});

router.get('/advantage/integration', (req, res) => {
  res.render('advantage/integration', {
    title: 'Industry & Trade Integration | Ningbo Dunfang Precision Machinery',
    description: 'Integrated R&D, production, and sales capabilities providing end-to-end solutions with rapid response to customer needs.',
    keywords: 'industry trade integration, R&D, production, sales, end-to-end solutions'
  });
});

module.exports = router;