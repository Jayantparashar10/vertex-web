'use server';

export async function joinWaitlist(formData: FormData) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const email = formData.get('email');
  const chip = formData.get('chip');

  console.log(`New Lead: ${email} using ${chip}`);

  // TODO: Insert into Supabase/Firebase here later
  
  // Return a mock "Ticket Number" based on time
  return {
    success: true,
    ticketNumber: Math.floor(1000 + Math.random() * 9000).toString(),
  };
}
