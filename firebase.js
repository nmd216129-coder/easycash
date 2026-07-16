async function createUser(user) {

  const userRef = doc(db, "users", String(user.id));
  const snap = await getDoc(userRef);

  if (!snap.exists()) {

    const refCode = "EC" + user.id;

    // Referral parameter
    let referredBy = tg.initDataUnsafe?.start_param || "";

    console.log("Telegram Data:", tg.initDataUnsafe);
    console.log("Start Param:", referredBy);

    await setDoc(userRef, {
      id: user.id,
      name: user.first_name,
      username: user.username || "",
      balance: referredBy ? 20 : 50,
      referral: 0,
      refCode: refCode,
      referredBy: referredBy,
      joined: new Date().toISOString()
    });

    if (referredBy) {
      const refUserRef = doc(db, "users", referredBy.replace("EC", ""));

      const refSnap = await getDoc(refUserRef);
      if (refSnap.exists()) {
        await updateDoc(refUserRef, {
          balance: increment(30),
          referral: increment(1)
        });
      }
    }
  }
}
