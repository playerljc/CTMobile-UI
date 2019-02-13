import Notification from '@ctmobile/ui-notification/notification';

const StandardNConfig = {
  headerLabel: 'Framework7',
  headerIcon: 'http://framework7.io/kitchen-sink/core/img/f7-icon.png',
  title: 'Notification with close button',
  text: 'Notification with close buttonNotification with close buttonNotification with close buttonNotification with close buttonNotification with close buttonNotification with close buttonNotification with close button',
  icon: 'http://framework7.io/kitchen-sink/core/img/f7-icon.png',
  closed: true,
  datetime: '2019-02-12',
};

const listenersConfig = {
  create() {
    console.log('create');
  },
  show() {
    console.log('show');
  },
  closeBefore() {
    console.log('closeBefore');
  },
  closeAfter() {
    console.log('closeAfter');
  },
};

class Base {
  constructor({ context, key, el }) {
    this.context = context;
    this.key = key;
    this.el = el;
  }
}

class MeTopClosedCustomClass extends Base {
  constructor(config) {
    super(config);
  }

  onInit() {
    console.log('MeTopClosedCustomClass:onInit');

    this.n = new Notification(
      document.getElementById('style-me-top-closed-custom-wrap'),
      {
        style: 'material',
        type: 'top',
        listeners: listenersConfig,
      });

    document.getElementById('style-me-top-closed-custom').addEventListener('click', () => {
      this.n.show({
        html: 'style-me-top-closed-custom',
        closed: true,
      });
    });
  }

  onShow() {
    console.log('MeTopClosedCustomClass:onShow');
  }
}

class MeTopClosedStandardClass extends Base {
  constructor(config) {
    super(config);
  }

  onInit() {
    console.log('MeTopClosedStandardClass:onInit');

    this.n = new Notification(
      document.getElementById('style-me-top-closed-standard-wrap'),
      {
        style: 'material',
        type: 'top',
        listeners: listenersConfig,
      });

    document.getElementById('style-me-top-closed-standard').addEventListener('click', () => {
      this.n.showStandard(StandardNConfig);
    });
  }

  onShow() {
    console.log('MeTopClosedStandardClass:onShow');
  }
}

class MeTopUnClosedCustomClass extends Base {
  constructor(config) {
    super(config);
  }

  onInit() {
    console.log('MeTopUnClosedCustomClass:onInit');

    this.n = new Notification(
      document.getElementById('style-me-top-unclosed-custom-wrap'),
      {
        style: 'material',
        type: 'top',
        listeners: listenersConfig,
      });

    document.getElementById('style-me-top-unclosed-custom').addEventListener('click', () => {
      const id = this.n.show({
        html: 'style-me-top-unclosed-custom',
        closed: false,
      });
      setTimeout(() => {
        this.n.close(id);
      }, 2000);
    });
  }

  onShow() {
    console.log('MeTopUnClosedCustomClass:onShow');
  }
}

class MeTopUnClosedStandardClass extends Base {
  constructor(config) {
    super(config);
  }

  onInit() {
    console.log('MeTopUnClosedStandardClass:onInit');
    this.n = new Notification(
      document.getElementById('style-me-top-unclosed-standard-wrap'),
      {
        style: 'material',
        type: 'top',
        listeners: listenersConfig,
      });

    document.getElementById('style-me-top-unclosed-standard').addEventListener('click', () => {
      const id = this.n.showStandard(Object.assign({}, StandardNConfig, { closed: false }));
      setTimeout(() => {
        this.n.close(id);
      }, 2000);
    });
  }

  onShow() {
    console.log('MeTopUnClosedStandardClass:onShow');
  }
}


class MeBottomClosedCustomClass extends Base {
  constructor(config) {
    super(config);
  }

  onInit() {
    console.log('MeBottomClosedCustomClass:onInit');
    this.n = new Notification(
      document.getElementById('style-me-bottom-closed-custom-wrap'),
      {
        style: 'material',
        type: 'bottom',
        listeners: listenersConfig,
      });

    document.getElementById('style-me-bottom-closed-custom').addEventListener('click', () => {
      this.n.show({
        html: 'style-me-bottom-closed-custom',
        closed: true,
      });
    });
  }

  onShow() {
    console.log('MeBottomClosedCustomClass:onShow');
  }
}

class MeBottomClosedStandardClass extends Base {
  constructor(config) {
    super(config);
  }

  onInit() {
    console.log('MeBottomClosedStandardClass:onInit');

    this.n = new Notification(
      document.getElementById('style-me-bottom-closed-standard-wrap'),
      {
        style: 'material',
        type: 'bottom',
        listeners: listenersConfig,
      });

    document.getElementById('style-me-bottom-closed-standard').addEventListener('click', () => {
      this.n.showStandard(StandardNConfig);
    });
  }

  onShow() {
    console.log('MeBottomClosedStandardClass:onShow');
  }
}

class MeBottomUnClosedCustomClass extends Base {
  constructor(config) {
    super(config);
  }

  onInit() {
    console.log('MeBottomUnClosedCustomClass:onInit');
    this.n = new Notification(
      document.getElementById('style-me-bottom-unclosed-custom-wrap'),
      {
        style: 'material',
        type: 'bottom',
        listeners: listenersConfig,
      });

    document.getElementById('style-me-bottom-unclosed-custom').addEventListener('click', () => {
      const id = this.n.show({
        html: 'style-me-bottom-unclosed-custom',
        closed: false,
      });
      setTimeout(() => {
        this.n.close(id);
      }, 2000);
    });
  }

  onShow() {
    console.log('MeBottomUnClosedCustomClass:onShow');
  }
}

class MeBottomUnClosedStandardClass extends Base {
  constructor(config) {
    super(config);
  }

  onInit() {
    console.log('MeBottomUnClosedStandardClass:onInit');

    this.n = new Notification(
      document.getElementById('style-me-bottom-unclosed-standard-wrap'),
      {
        style: 'material',
        type: 'bottom',
        listeners: listenersConfig,
      });

    document.getElementById('style-me-bottom-unclosed-standard').addEventListener('click', () => {
      const id = this.n.showStandard(Object.assign({}, StandardNConfig, { closed: false }));
      setTimeout(() => {
        this.n.close(id);
      }, 2000);
    });
  }

  onShow() {
    console.log('MeBottomUnClosedStandardClass:onShow');
  }
}


class iOSTopClosedCustomClass extends Base {
  constructor(config) {
    super(config);
  }

  onInit() {
    console.log('iOSTopClosedCustomClass:onInit');

    this.n = new Notification(
      document.getElementById('style-ios-top-closed-custom-wrap'),
      {
        style: 'ios',
        type: 'top',
        listeners: listenersConfig,
      });

    document.getElementById('style-ios-top-closed-custom').addEventListener('click', () => {
      this.n.show({
        html: 'style-ios-top-closed-custom',
        closed: true,
      });
    });
  }

  onShow() {
    console.log('iOSTopClosedCustomClass:onShow');
  }
}

class iOSTopClosedStandardClass extends Base {
  constructor(config) {
    super(config);
  }

  onInit() {
    console.log('iOSTopClosedStandardClass:onInit');

    this.n = new Notification(
      document.getElementById('style-ios-top-closed-standard-wrap'),
      {
        style: 'ios',
        type: 'top',
        listeners: listenersConfig,
      });

    document.getElementById('style-ios-top-closed-standard').addEventListener('click', () => {
      this.n.showStandard(StandardNConfig);
    });
  }

  onShow() {
    console.log('iOSTopClosedStandardClass:onShow');
  }
}

class iOSTopUnClosedCustomClass extends Base {
  constructor(config) {
    super(config);
  }

  onInit() {
    console.log('iOSTopUnClosedCustomClass:onInit');

    this.n = new Notification(
      document.getElementById('style-ios-top-unclosed-custom-wrap'),
      {
        style: 'ios',
        type: 'top',
        listeners: listenersConfig,
      });

    document.getElementById('style-ios-top-unclosed-custom').addEventListener('click', () => {
      const id = this.n.show({
        html: 'style-ios-top-unclosed-custom',
        closed: false,
      });
      setTimeout(() => {
        this.n.close(id);
      }, 2000);
    });
  }

  onShow() {
    console.log('iOSTopUnClosedCustomClass:onShow');
  }
}

class iOSTopUnClosedStandardClass extends Base {
  constructor(config) {
    super(config);
  }

  onInit() {
    console.log('iOSTopUnClosedStandardClass:onInit');

    this.n = new Notification(
      document.getElementById('style-ios-top-unclosed-standard-wrap'),
      {
        style: 'ios',
        type: 'top',
        listeners: listenersConfig,
      });

    document.getElementById('style-ios-top-unclosed-standard').addEventListener('click', () => {
      const id = this.n.showStandard(Object.assign({}, StandardNConfig, { closed: false }));
      setTimeout(() => {
        this.n.close(id);
      }, 2000);
    });
  }

  onShow() {
    console.log('iOSTopUnClosedStandardClass:onShow');
  }
}


class iOSBottomClosedCustomClass extends Base {
  constructor(config) {
    super(config);
  }

  onInit() {
    console.log('iOSBottomClosedCustomClass:onInit');

    this.n = new Notification(
      document.getElementById('style-ios-bottom-closed-custom-wrap'),
      {
        style: 'ios',
        type: 'bottom',
        listeners: listenersConfig,
      });

    document.getElementById('style-ios-bottom-closed-custom').addEventListener('click', () => {
      this.n.show({
        html: 'style-ios-bottom-closed-custom',
        closed: true,
      });
    });
  }

  onShow() {
    console.log('iOSBottomClosedCustomClass:onShow');
  }
}

class iOSBottomClosedStandardClass extends Base {
  constructor(config) {
    super(config);
  }

  onInit() {
    console.log('iOSBottomClosedStandardClass:onInit');

    this.n = new Notification(
      document.getElementById('style-ios-bottom-closed-standard-wrap'),
      {
        style: 'ios',
        type: 'bottom',
        listeners: listenersConfig,
      });

    document.getElementById('style-ios-bottom-closed-standard').addEventListener('click', () => {
      this.n.showStandard(StandardNConfig);
    });
  }

  onShow() {
    console.log('iOSBottomClosedStandardClass:onShow');
  }
}

class iOSBottomUnClosedCustomClass extends Base {
  constructor(config) {
    super(config);
  }

  onInit() {
    console.log('iOSBottomUnClosedCustomClass:onInit');

    this.n = new Notification(
      document.getElementById('style-ios-bottom-unclosed-custom-wrap'),
      {
        style: 'ios',
        type: 'bottom',
        listeners: listenersConfig,
      });

    document.getElementById('style-ios-bottom-unclosed-custom').addEventListener('click', () => {
      const id = this.n.show({
        html: 'style-ios-bottom-unclosed-custom',
        closed: false,
      });
      setTimeout(() => {
        this.n.close(id);
      }, 2000);
    });
  }

  onShow() {
    console.log('iOSBottomUnClosedCustomClass:onShow');
  }
}

class iOSBottomUnClosedStandardClass extends Base {
  constructor(config) {
    super(config);
  }

  onInit() {
    console.log('iOSBottomUnClosedStandardClass:onInit');

    this.n = new Notification(
      document.getElementById('style-ios-bottom-unclosed-standard-wrap'),
      {
        style: 'ios',
        type: 'bottom',
        listeners: listenersConfig,
      });

    document.getElementById('style-ios-bottom-unclosed-standard').addEventListener('click', () => {
      const id = this.n.showStandard(Object.assign({}, StandardNConfig, { closed: false }));
      setTimeout(() => {
        this.n.close(id);
      }, 2000);
    });
  }

  onShow() {
    console.log('iOSBottomUnClosedStandardClass:onShow');
  }
}


export {
  MeTopClosedCustomClass,
  MeTopClosedStandardClass,
  MeTopUnClosedCustomClass,
  MeTopUnClosedStandardClass,

  MeBottomClosedCustomClass,
  MeBottomClosedStandardClass,
  MeBottomUnClosedCustomClass,
  MeBottomUnClosedStandardClass,

  iOSTopClosedCustomClass,
  iOSTopClosedStandardClass,
  iOSTopUnClosedCustomClass,
  iOSTopUnClosedStandardClass,

  iOSBottomClosedCustomClass,
  iOSBottomClosedStandardClass,
  iOSBottomUnClosedCustomClass,
  iOSBottomUnClosedStandardClass,
};
