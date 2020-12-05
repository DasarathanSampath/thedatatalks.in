export default ({ router, isServer }) => {
    if (isServer) return
    if (!window.firebase) return
    window.firebase.initializeApp({
      apiKey: "AIzaSyBYY72CVKNDVgaEAEqibxCOHP8LDTSoH1I",
      authDomain: "thedatatalks-in.firebaseapp.com",
      databaseURL: "https://thedatatalks-in.firebaseio.com",
      projectId: "thedatatalks-in",
      storageBucket: "thedatatalks-in.appspot.com",
      messagingSenderId: "92831253381",
      appId: "1:92831253381:web:735bf765b9ea3b21ecfaec",
      measurementId: "G-NH1N38E537"
    });
    // window.firebase.analytics()
    router.afterEach(() => {
      window.firebase.analytics().logEvent('page_view');
    })
  }
  